// 먹고죽자! 대체품 결정 로직: index.html과 review.html이 같은 함수를 써요.
// 필요한 전역 데이터: substituteInfo, diseaseMapping (diet-data.js)

// 같은 재료의 표기 차이만 모아 둔 표: 왼쪽 표기를 오른쪽 대표 표기로 보고 비교해요.
// (무엇이 알레르겐인지의 판단은 diet-data.js의 avoidFoods가 하고, 여기는 표기 통일만 해요.)
const FOOD_NAME_SYNONYMS = {
    '박력분': '밀가루',
    '중력분': '밀가루',
    '강력분': '밀가루',
    '통밀가루': '밀가루'
};

// '돈가스소스'는 소스예요. 이름에 음식 이름(돈가스·돈까스)이 들어 있어도 돈가스(튀김옷·돼지고기)로 보지 않아요.
// (이런 소스는 diet-data.js의 MAYBE_CONTAIN에서 "성분표 확인"으로 따로 안내해요.)
const SAUCE_OF_DISH_WORDS = ['돈가스', '돈까스'];
function isSauceOfDish(name, word) {
    return SAUCE_OF_DISH_WORDS.includes(word) && String(name).replace(/\s/g, '').includes(word + '소스');
}

// 재료명과 알레르기 회피 식품명을 정확하게 비교 (괄호 부가정보 제거 + 표기 통일 후 단어 단위 비교)
function isIngredientMatch(ingName, avoidFood) {
    const strip = s => s.toLowerCase().replace(/\([^)]*\)/g, '').trim()
        .split(' ').map(word => FOOD_NAME_SYNONYMS[word] || word).join(' ');
    const ingLower = strip(ingName);
    const avoidLower = strip(avoidFood);
    if (!ingLower || !avoidLower) return false;
    if (isSauceOfDish(ingLower, avoidLower)) return false;
    if (ingLower === avoidLower ||
        ingLower.split(' ').some(word => word === avoidLower) ||
        avoidLower.split(' ').some(word => word === ingLower)) {
        return true;
    }
    // 2글자 이상 단어는 "생크림"처럼 붙여쓴 복합어 안에 포함된 경우도 매칭
    // (1글자 단어는 "파" vs "파마산"처럼 오탐이 잦아 제외)
    // 방향은 재료명이 회피식품명을 포함하는 경우만 허용 ("버터"가 "땅콩버터"에 포함된다고 오탐되는 것 방지)
    if (avoidLower.length >= 2 && ingLower.includes(avoidLower)) return true;
    return false;
}

// 대체 음식 이름으로 설명 찾기 (괄호 부가정보 무시하고 매칭)
function getSubstituteInfo(foodName) {
    if (substituteInfo[foodName]) return substituteInfo[foodName];
    const stripped = foodName.replace(/\([^)]*\)/g, '').trim();
    return substituteInfo[stripped] || null;
}

// '고기류(닭고기·소고기 등)'처럼 괄호 안에 재료를 나열한 대체품은, 나열된 재료도 들어 있는 것으로 봐요.
// (괄호 안은 보통 무시하지만, 이런 나열은 닭고기·소고기 알레르기와 겹치는지 따질 때 필요해요.)
function listedInParens(foodName) {
    const m = foodName.match(/\(([^)]*)\)/);
    if (!m || m[1].indexOf('·') === -1) return [];
    return m[1].replace(/\s*등$/, '').split(/[·,]/).map(s => s.trim()).filter(Boolean);
}

// 이름만 봐도 "그 성분이 없는" 대체품 표기: 예) '비건 치즈'는 '치즈'라는 글자가 있어도 유제품이 아니에요.
// resolveSubstitutes가 대체품을 걸러낼 때만 쓰는 예외표예요.
const FREE_FROM_MARKERS = [
    { marker: '비건', free: ['우유', '버터', '치즈', '크림', '요구르트', '유제품', '계란', '달걀'] },
    { marker: '식물성', free: ['우유', '버터', '치즈', '크림', '요구르트', '유제품', '계란', '달걀'] },
    { marker: '코코넛', free: ['우유', '버터', '치즈', '크림', '요구르트', '유제품'] },
    { marker: '글루텐프리', free: ['밀가루', '밀', '보리', '호밀', '일반 파스타', '일반 빵'] }
];
function isFreeFrom(foodName, avoidFood) {
    return FREE_FROM_MARKERS.some(m => foodName.includes(m.marker) && m.free.includes(avoidFood));
}

// 한 재료에 대해 화면에 보여줄 대체품/팁/불가 여부를 계산 (모달 렌더링과 검토 도구가 공용)
// avoidSources: [{ label, avoidFoods, safeFoods, tips, reason, substitutes }]
// 여러 제약을 함께 골랐을 때, 대체품이 "다른" 제약의 피해야 할 식품에 걸리면 목록에서 빼고
// excludedFoods([{ food, by, matched }])에 담아 돌려줘요. 그래서 다 빠져 빈 목록이 되면 noAlternative가 true예요.
// (대체품을 제안한 제약 자신의 피해야 할 식품은 비교하지 않아요. 예: 유당불내증의 '버터(소량)' 대체안)
function resolveSubstitutes(ing, avoidSources) {
    const hasAllergy = avoidSources.some(source =>
        source.avoidFoods.some(avoidFood => isIngredientMatch(ing.name, avoidFood))
    );

    let alternativeFoods = [];
    let allergyTip = '';
    let allergyReason = '';
    const producers = new Map(); // 대체품 -> 그 대체품을 제안한 제약들
    const propose = (foods, source) => foods.forEach(food => {
        if (!producers.has(food)) producers.set(food, new Set());
        producers.get(food).add(source);
    });
    if (hasAllergy && avoidSources.length > 0) {
        avoidSources.forEach((source) => {
            source.avoidFoods.forEach(avoidFood => {
                if (isIngredientMatch(ing.name, avoidFood)) {
                    allergyTip = source.tips;
                    allergyReason = source.reason || '';
                    if (ing.substituteOverride) {
                        // 이 재료(요리)에 맞게 특별히 지정된 대체품만 사용
                        alternativeFoods = [...new Set([...alternativeFoods, ...ing.substituteOverride])];
                        propose(ing.substituteOverride, source);
                    } else if (!ing.noSubstituteHere) {
                        // substitutes 맵이 있으면 매칭된 재료의 정확한 대체품만, 없으면 카테고리 전체 safeFoods 사용
                        const specificSubs = source.substitutes ? source.substitutes[avoidFood] : null;
                        const foodsToAdd = specificSubs || source.safeFoods;
                        alternativeFoods = [...new Set([...alternativeFoods, ...foodsToAdd])];
                        propose(foodsToAdd, source);
                    }
                }
            });
        });
    }

    // 다른 제약에 걸리는 대체품 빼기 (제약을 2개 이상 골랐을 때만 해당)
    const excludedFoods = [];
    if (avoidSources.length > 1) {
        alternativeFoods = alternativeFoods.filter(food => {
            const makers = producers.get(food) || new Set();
            for (const other of avoidSources) {
                if (makers.has(other)) continue;
                const listed = listedInParens(food);
                const matched = other.avoidFoods.find(avoidFood => (isIngredientMatch(food, avoidFood) && !isFreeFrom(food, avoidFood)) || listed.some(t => isIngredientMatch(t, avoidFood)));
                if (matched) { excludedFoods.push({ food, by: other.label || '', matched }); return false; }
            }
            return true;
        });
    }

    const noSubMessage = hasAllergy && ing.noSubstituteHere;
    const noAlternative = !!(hasAllergy && !noSubMessage && alternativeFoods.length === 0 && excludedFoods.length > 0);
    return { hasAllergy, alternativeFoods, allergyTip, allergyReason, noSubMessage, excludedFoods, noAlternative };
}

// ───── 사용자가 입력한 건강정보 한 항목 해석 (공백·'알레르기' 꼬리말·별칭 처리) ─────
function normalizeHealthText(s) { return String(s || '').toLowerCase().replace(/\s/g, ''); }
function stripAllergySuffix(s) { return s.replace(/(알레르기증|알레르기|알러지증|알러지)$/, ''); }
function findMappingKey(mapping, normalized) { return Object.keys(mapping).find(k => normalizeHealthText(k) === normalized) || null; }

// 알레르기: allergyMapping 키 또는 HEALTH_ALIASES로 찾아요. 못 찾으면 null.
function resolveAllergyKey(item) {
    const n = normalizeHealthText(item);
    if (!n) return null;
    const stripped = stripAllergySuffix(n);
    for (const c of [n, stripped, stripped + '알레르기']) {
        const k = findMappingKey(allergyMapping, c);
        if (k) return k;
    }
    const alias = HEALTH_ALIASES[stripped] || HEALTH_ALIASES[n];
    return alias ? findMappingKey(allergyMapping, normalizeHealthText(alias)) : null;
}
// 기저질환: diseaseMapping 키와 (공백 제거 후) 정확히 같을 때만
function resolveDiseaseKey(item) {
    const n = normalizeHealthText(item);
    return n ? findMappingKey(diseaseMapping, n) : null;
}
// 알레르기로도 질환으로도 해석되지 않는 입력 항목 (화면에 "지원하지 않는 항목"으로 알려줘요)
function getUnrecognizedHealthItems(text) {
    return String(text || '').split(',').map(s => s.trim()).filter(Boolean)
        .filter(item => !resolveAllergyKey(item) && !resolveDiseaseKey(item));
}

// 확실히 들어 있지는 않지만 제품에 따라 들어 있을 수 있는 알레르겐 안내 ("성분표 확인" 노랑 표시용)
// allergyObjects: getUserAllergies() 결과. 이미 avoidFoods로 확실히 걸리는 알레르기는 제외해요.
// 분량이 "약간·적당량"처럼 숫자가 없는 표기인지 ('한 꼬집'은 정해진 양이라 제외)
function isVagueAmount(amount) {
    return /약간|적당량|적당히|조금/.test(String(amount || ''));
}

// 고른 기저질환 중 이 재료의 "분량 미정" 안내가 필요한 것 (알레르기는 대상 아님)
function findVagueAmountNote(ing, avoidSources) {
    if (!isVagueAmount(ing.amount)) return [];
    const out = [];
    (avoidSources || []).forEach(s => {
        const d = diseaseMapping[s.label];
        if (!d || out.some(o => o.disease === d.name)) return;
        const rule = VAGUE_AMOUNT_RULES.find(r => r.disease === d.name && r.words.some(w => isIngredientMatch(ing.name, w)));
        if (rule) out.push({ disease: d.name, note: rule.note });
    });
    return out;
}

// 이 재료가 걸리는 기저질환 이름 목록 (질환 알약에 "고혈압"처럼 이름을 붙일 때 써요)
function diseaseNamesHit(ing, diseaseKeys) {
    const names = (diseaseKeys || [])
        .filter(d => diseaseMapping[d] && resolveSubstitutes(ing, buildAvoidSources([], [d])).hasAllergy)
        .map(d => diseaseMapping[d].name);
    return [...new Set(names)];
}

// ───── 레시피 한 개의 알레르기 기준 상태 (목록 카드 배지·정렬용) ─────
// 알레르기만 따져요. 기저질환은 배지에 넣지 않고 dis(줄이면 좋은 재료 수)로만 세어 둬요.
// tier: safe(걸리는 재료 없음) / maybe(성분표 확인) / sub(대체하면 가능) / block(필수 재료인데 대체품이 없음)
// 선택 재료는 빼면 되므로 대체품이 없어도 block이 아니라 sub로 봐요.
function recipeSafetyInfo(recipe, allergyObjects, diseaseKeys) {
    const aObjs = allergyObjects || [];
    const aSrc = buildAvoidSources(aObjs, []);
    const dSrc = buildAvoidSources([], diseaseKeys || []);
    let block = 0, sub = 0, maybe = 0, dis = 0;
    recipe.ingredients.forEach(ing => {
        const a = aSrc.length ? resolveSubstitutes(ing, aSrc) : { hasAllergy: false };
        if (a.hasAllergy) {
            const noWay = a.noAlternative || a.noSubMessage || a.alternativeFoods.length === 0;
            if (noWay && ing.required) block++; else sub++;
        } else {
            if (findMaybeContain(ing.name, aObjs).length > 0) maybe++;
            if (dSrc.length && resolveSubstitutes(ing, dSrc).hasAllergy) dis++;
        }
    });
    return { block, sub, maybe, dis, tier: block ? 'block' : sub ? 'sub' : maybe ? 'maybe' : 'safe' };
}

// 목록 카드 배지 (알레르기 기준만)
function recipeBadgeHTML(info) {
    const base = 'font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px; white-space: nowrap;';
    const m = {
        safe: ['#E8F5E9', '#2E7D32', '알레르기 안전'],
        maybe: ['#FFF4DC', '#B7791F', '🔎 성분표 확인'],
        sub: ['#FFF1DD', '#B86A00', info && info.sub ? '대체하면 가능 · ' + info.sub + '개' : '대체하면 가능'],
        block: ['#FFEBEE', '#DC3545', '대체 어려움']
    }[info && info.tier];
    return m ? '<span style="background: ' + m[0] + '; color: ' + m[1] + '; ' + base + '">' + m[2] + '</span>' : '';
}

// "1과 1/2큰술"·"3/4작은술"·"1/4컵"·"30ml" → ml (그 외 단위·약간·꼬집은 null)
function parseAmountMl(amount) {
    const m = String(amount || '').trim().match(/^(?:(\d+)[과와]\s*)?(\d+\/\d+|\d+\.\d+|\d+)\s*(큰술|작은술|컵|ml|mL)\s*$/);
    if (!m) return null;
    let v = m[1] ? parseInt(m[1], 10) : 0;
    if (m[2].includes('/')) { const [n, d] = m[2].split('/').map(Number); v += n / d; } else v += parseFloat(m[2]);
    const unit = { '큰술': 15, '작은술': 5, '컵': 200, 'ml': 1, 'mL': 1 }[m[3]];
    return v * unit;
}

// 고혈압을 고른 경우, 숫자 분량이 있는 짠 재료의 "1인분당 나트륨 추정치"
// baseServings = 레시피 데이터가 몇 인분 기준인지. 없으면 null.
function estimateSodium(ing, avoidSources, baseServings) {
    const hasHyp = (avoidSources || []).some(s => diseaseMapping[s.label] && diseaseMapping[s.label].name === '고혈압');
    if (!hasHyp) return null;
    const ml = parseAmountMl(ing.amount);
    if (ml === null) return null;
    const rule = SODIUM_ESTIMATES.find(r => r.words.some(w => isIngredientMatch(ing.name, w)));
    if (!rule) return null;
    const mg = ml * rule.mgPerMl / (baseServings || 1);
    const rounded = Math.max(10, Math.round(mg / 10) * 10);
    const subs = [];
    const alts = resolveSubstitutes(ing, avoidSources).alternativeFoods || [];
    SODIUM_SUBSTITUTE_ESTIMATES.forEach(se => {
        if (!alts.includes(se.name) || !se.forWords.some(w => isIngredientMatch(ing.name, w))) return;
        const smg = Math.max(10, Math.round(ml * se.mgPerMl / (baseServings || 1) / 10) * 10);
        subs.push({ name: se.name, mg: smg, pct: Math.round(smg / SODIUM_DAILY_REF_MG * 100) });
    });
    return { mg: rounded, pct: Math.round(rounded / SODIUM_DAILY_REF_MG * 100), subs };
}

function findMaybeContain(ingName, allergyObjects) {
    const out = [];
    const nameOnly = ingName.replace(/\([^)]*\)/g, '').trim();
    (allergyObjects || []).forEach(a => {
        if (out.some(o => o.allergen === a.name)) return;
        if ((a.avoidFoods || []).some(af => isIngredientMatch(ingName, af))) return;
        const hit = MAYBE_CONTAIN.find(rule => rule.allergen === a.name &&
            rule.words.some(w => w.charAt(0) === '=' ? nameOnly === w.slice(1) : (ingName.indexOf(w) !== -1 && !isSauceOfDish(ingName, w))));
        if (hit) out.push({ allergen: a.name, note: hit.note });
    });
    return out;
}

   // 알레르기 객체 목록 + 기저질환 이름 목록 → resolveSubstitutes()가 받는 avoidSources 모양으로 변환
   // (레시피 모달과 검토 도구가 같은 방식으로 만들도록 여기 한 곳에 둠)
   function buildAvoidSources(allergyObjects, diseaseKeys) {
       return [
           ...allergyObjects.map(a => ({ label: a.name, avoidFoods: a.avoidFoods, safeFoods: a.safeFoods, tips: a.tips, reason: a.reason, substitutes: a.substitutes || null })),
           ...diseaseKeys.map(d => {
               const dObj = diseaseMapping[d];
               return { label: d, avoidFoods: dObj.avoidIngredients || [], safeFoods: dObj.safeIngredients || [], tips: dObj.tips, reason: dObj.reason, substitutes: dObj.substitutes || null };
           })
       ];
   }
