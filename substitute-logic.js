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

// 재료명과 알레르기 회피 식품명을 정확하게 비교 (괄호 부가정보 제거 + 표기 통일 후 단어 단위 비교)
function isIngredientMatch(ingName, avoidFood) {
    const strip = s => s.toLowerCase().replace(/\([^)]*\)/g, '').trim()
        .split(' ').map(word => FOOD_NAME_SYNONYMS[word] || word).join(' ');
    const ingLower = strip(ingName);
    const avoidLower = strip(avoidFood);
    if (!ingLower || !avoidLower) return false;
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
                const matched = other.avoidFoods.find(avoidFood => isIngredientMatch(food, avoidFood) && !isFreeFrom(food, avoidFood));
                if (matched) { excludedFoods.push({ food, by: other.label || '', matched }); return false; }
            }
            return true;
        });
    }

    const noSubMessage = hasAllergy && ing.noSubstituteHere;
    const noAlternative = !!(hasAllergy && !noSubMessage && alternativeFoods.length === 0 && excludedFoods.length > 0);
    return { hasAllergy, alternativeFoods, allergyTip, allergyReason, noSubMessage, excludedFoods, noAlternative };
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

// "확실하진 않지만 제품에 따라 들어있을 수 있는" 재료 힌트예요. index.html(레시피 모달)과
// review-checks.js가 같이 써요. level 'high'는 review-checks.js가 "숨은 알레르겐"으로 잡을 때만 쓰고
// (이미 avoidFoods로 확실히 걸리니 index.html에는 필요 없음), level 'maybe'만 index.html에서
// 재료 옆에 조용히 "성분표 확인" 문구를 보여줄 때 써요.
const MAYBE_ALLERGEN_HINTS = [
    { words: ['청국장', '고추장', '쌈장', '춘장', '두반장', '쯔유', '데리야끼'], allergens: ['대두 알레르기'], level: 'high', note: '콩(메주·간장 등)이 주원료예요' },
    { words: ['마라소스', '우스터', '야키소바소스', '굴소스', '콩나물'], allergens: ['대두 알레르기'], level: 'maybe', note: '대두(간장·콩)가 들어가는 제품이 많아요' },
    { words: ['우동면', '파스타면', '라자냐면', '소면', '중화면', '칼국수', '수제비', '마카로니', '식빵', '바게트', '치아바타', '빵가루', '부침가루', '튀김가루', '팬케이크 가루', '팬케이크가루', '튀김(천우라)', '타르트지', '돈가스', '레이디핑거', '고체카레', '박력분', '중력분', '강력분'], allergens: ['글루텐 불내증'], level: 'high', note: '밀가루가 주원료예요' },
    { words: ['간장', '고추장', '쌈장', '춘장', '두반장', '쯔유', '데리야끼', '우스터', '야키소바소스', '굴소스', '마라소스', '메밀면', '어묵'], allergens: ['글루텐 불내증'], level: 'maybe', note: '밀이 섞이는 제품이 많아요(무밀 제품은 예외)' },
    { words: ['연유', '분유', '휘핑'], allergens: ['우유 알레르기', '유당불내증'], level: 'high', note: '우유 성분 그 자체예요' },
    { words: ['고체카레', '다크초콜릿', '초콜릿'], allergens: ['우유 알레르기'], level: 'maybe', note: '우유가 들어가는 제품이 많아요' },
    { words: ['마요네즈', '머랭'], allergens: ['계란 알레르기'], level: 'high', note: '계란이 주원료예요' },
    { words: ['돈가스', '튀김(천우라)', '팬케이크 가루', '팬케이크가루', '타르트지', '라자냐면', '식빵'], allergens: ['계란 알레르기'], level: 'maybe', note: '튀김옷·반죽·믹스에 계란이 들어가는 제품이 있어요' },
    { words: ['어묵', '꽁치', '가쓰오부시', '명란', '멸치', '액젓', '북어', '황태', '고기 또는 생선'], allergens: ['생선 알레르기'], level: 'high', note: '생선이 원료예요' },
    { words: ['쯔유', '우스터', '해산물'], allergens: ['생선 알레르기'], level: 'maybe', note: '생선 육수·앤초비·해산물 혼합일 수 있어요' },
    { words: ['크래미', '게맛살', '해산물'], allergens: ['갑각류 알레르기'], level: 'maybe', note: '게살·새우가 섞일 수 있어요' },
    { words: ['굴소스'], allergens: ['조개류 알레르기'], level: 'high', note: '굴 추출물이 원료예요' },
    { words: ['해산물'], allergens: ['조개류 알레르기'], level: 'maybe', note: '조개류가 섞일 수 있어요' },
    { words: ['돈가스', '소세지', '소시지', '스팸', '라드'], allergens: ['돼지고기 알레르기'], level: 'high', note: '돼지고기가 원료예요' },
    { words: ['젤라틴', '판젤라틴'], allergens: ['돼지고기 알레르기'], level: 'maybe', note: '돼지 유래 젤라틴이 흔해요' }
];

// 이미 hasAllergy가 true인 재료에는 부르지 마세요(이미 확실한 경고가 뜨니까). 없으면 null.
function getMaybeHint(ingName, avoidSources) {
    const labels = new Set(avoidSources.map(s => s.label));
    for (const rule of MAYBE_ALLERGEN_HINTS) {
        if (rule.level !== 'maybe') continue;
        if (!rule.words.some(w => ingName.includes(w))) continue;
        const hit = rule.allergens.find(a => labels.has(a));
        if (hit) return `성분표에 ${hit} 관련 성분이 없는지 확인해 보세요 (${rule.note}).`;
    }
    return null;
}
