// 먹고죽자! 검토 도구 점검 규칙 (review.html 전용 — index.html은 이 파일을 읽지 않아요)
// 필요한 전역: recipes, allergyMapping, diseaseMapping, substituteInfo (데이터 파일들)
//              isIngredientMatch, resolveSubstitutes, getSubstituteInfo, buildAvoidSources (substitute-logic.js)
// 이 파일은 화면 코드가 없어서 Node에서도 그대로 돌려 볼 수 있어요.

const REVIEW_HIDDEN_RULES = [
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

const REVIEW_PREFERRED_KEYS = ['계란', '우유', '밀가루', '대두', '갑각류', '당뇨병'];

function reviewProfiles() {
    const list = [];
    const groups = new Map();
    for (const [key, obj] of Object.entries(allergyMapping)) {
        if (!groups.has(obj.name)) groups.set(obj.name, []);
        groups.get(obj.name).push(key);
    }
    for (const [name, keys] of groups) {
        const key = keys.find(k => REVIEW_PREFERRED_KEYS.includes(k)) || keys.find(k => k === name) || keys[0];
        list.push({ id: 'a:' + key, kind: 'allergy', key, label: name, aliases: keys });
    }
    const dGroups = new Map();
    for (const [key, obj] of Object.entries(diseaseMapping)) {
        const sig = JSON.stringify(obj);
        if (!dGroups.has(sig)) dGroups.set(sig, []);
        dGroups.get(sig).push(key);
    }
    for (const keys of dGroups.values()) {
        const key = keys.find(k => REVIEW_PREFERRED_KEYS.includes(k)) || keys[keys.length - 1];
        list.push({ id: 'd:' + key, kind: 'disease', key, label: key, aliases: keys });
    }
    return list;
}

function reviewSourcesFor(profiles) {
    const allergyObjs = profiles.filter(p => p.kind === 'allergy').map(p => allergyMapping[p.key]);
    const diseaseKeys = profiles.filter(p => p.kind === 'disease').map(p => p.key);
    return buildAvoidSources(allergyObjs, diseaseKeys);
}

function reviewMakeContext() {
    const profiles = reviewProfiles();
    const sourceById = {};
    profiles.forEach(p => { sourceById[p.id] = reviewSourcesFor([p])[0]; });
    return { profiles, sourceById };
}

function reviewHash(recipe) {
    const s = JSON.stringify(recipe);
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
}

function reviewLooseSame(a, b) {
    const norm = s => s.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\s/g, '');
    const x = norm(a), y = norm(b);
    if (!x || !y) return false;
    if (x === y) return true;
    return Math.min(x.length, y.length) >= 2 && (x.includes(y) || y.includes(x));
}

function reviewCheckRecipe(name, recipe, ctx) {
    const issues = [];
    const add = (rule, severity, ingredient, text, groupKey, owner, profiles) =>
        issues.push({ rule, severity, ingredient: ingredient || null, text, groupKey, owner: owner || 'recipe-chat', profiles: profiles || [] });
    const ings = recipe.ingredients || [];

    if (!recipe.steps || recipe.steps.length === 0) add('steps-empty', 'error', null, '조리 단계가 비어 있어요', 'steps-empty');
    const seenNames = new Set();
    ings.forEach(ing => {
        if (typeof ing.required !== 'boolean') add('required-missing', 'error', ing.name, `'${ing.name}'에 필수/선택(required) 값이 없어요`, 'required-missing:' + ing.name);
        if (seenNames.has(ing.name)) add('dup-ingredient', 'warn', ing.name, `'${ing.name}'이(가) 두 번 들어 있어요 (장바구니에서 합쳐질 수 있어요)`, 'dup:' + ing.name);
        seenNames.add(ing.name);
    });

    if (!recipe.source) {
        if (recipe.teamSubmitted) add('no-source', 'info', null, '팀원 제출 레시피라 출처 URL이 없어요', 'no-source-team');
        else add('no-source', 'warn', null, '출처를 아직 확인하지 못했어요 (source 없음)', 'no-source');
    } else if (!/^https?:\/\//.test(recipe.source)) {
        add('bad-source', 'warn', null, `출처가 URL 형식이 아니에요: ${recipe.source}`, 'bad-source');
    }

    const per = {};
    ctx.profiles.forEach(p => {
        per[p.id] = ings.map(ing => resolveSubstitutes(ing, [ctx.sourceById[p.id]]));
    });

    ings.forEach((ing, idx) => {
        if (ing.required !== false || ing.noSubstituteHere || ing.substituteOverride) return;
        const hit = ctx.profiles.filter(p => per[p.id][idx].hasAllergy && per[p.id][idx].alternativeFoods.length > 0).map(p => p.label);
        if (hit.length) add('optional-no-omit', 'warn', ing.name, `선택 재료 '${ing.name}'인데 "빼도 됨" 표시가 없어 대체품이 안내돼요`, 'optional:' + ing.name, 'recipe-chat', hit);
    });

    ings.forEach((ing, idx) => {
        const merged = new Map();
        ctx.profiles.forEach(p => {
            per[p.id][idx].alternativeFoods.forEach(alt => {
                if (!merged.has(alt)) merged.set(alt, []);
                merged.get(alt).push(p.label);
            });
        });
        merged.forEach((labels, alt) => {
            const dup = ings.find((other, j) => j !== idx && reviewLooseSame(other.name, alt));
            if (dup) add('sub-in-recipe', 'warn', ing.name, `'${ing.name}'의 대체품 '${alt}'이(가) 이미 레시피에 '${dup.name}'로 들어 있어요`, `subdup:${ing.name}:${alt}`, 'recipe-chat', labels);
            if (!getSubstituteInfo(alt)) add('no-tip', 'info', ing.name, `대체품 '${alt}'의 설명(substituteInfo)이 없어 일반 문구가 나와요`, 'notip:' + alt, 'recipe-chat', labels);
        });
    });

    ings.forEach(ing => {
        ctx.profiles.forEach((p1, i) => {
            ctx.profiles.forEach((p2, j) => {
                if (j <= i) return;
                const res = resolveSubstitutes(ing, [ctx.sourceById[p1.id], ctx.sourceById[p2.id]]);
                const pair = `${p1.label}+${p2.label}`;
                if (res.noAlternative) {
                    add('no-alt-combo', 'warn', ing.name, `${pair} 조합: '${ing.name}'의 대체품이 하나도 안 남아요 (제외: ${res.excludedFoods.map(e => `${e.food}←${e.by}`).join(', ')}). 사용자에게는 "대체품 없음" 안내가 나가요`, `noalt:${ing.name}:${pair}`, 'recipe-chat', [p1.label, p2.label]);
                } else {
                    res.excludedFoods.forEach(e => add('sub-conflict', 'info', ing.name, `'${ing.name}' 대체품 '${e.food}'은(는) ${e.by}와 함께 가진 사용자에게 자동 제외돼요`, `conflict:${ing.name}:${e.food}->${e.by}`, 'recipe-chat', [p1.label, p2.label]));
                }
            });
        });
    });

    const seenHidden = new Set();
    ings.forEach(ing => {
        REVIEW_HIDDEN_RULES.forEach(rule => {
            if (!rule.words.some(w => ing.name.includes(w))) return;
            rule.allergens.forEach(allergenName => {
                const prof = ctx.profiles.find(p => p.kind === 'allergy' && p.label === allergenName);
                if (!prof) return;
                if (resolveSubstitutes({ name: ing.name }, [ctx.sourceById[prof.id]]).hasAllergy) return;
                const key = ing.name + '|' + allergenName;
                if (seenHidden.has(key)) return;
                seenHidden.add(key);
                add('hidden-allergen', rule.level === 'high' ? 'error' : 'warn', ing.name,
                    `'${ing.name}'에 ${allergenName} 성분이 들어 있을 수 있는데(${rule.note}) 사이트에서는 경고가 안 떠요${rule.level === 'maybe' ? ' [제품에 따라 다름]' : ''}`,
                    `hidden:${ing.name}:${allergenName}`, 'recipe-chat', [allergenName]);
            });
        });
    });

    const text = (recipe.steps || []).map(s => s.instruction).join(' ') + ' ' + (recipe.description || '');
    const mentioned = new Map();
    ctx.profiles.filter(p => p.kind === 'allergy').forEach(p => {
        ctx.sourceById[p.id].avoidFoods.forEach(af => {
            const word = af.replace(/\([^)]*\)/g, '').trim();
            if (word.length < 2 || /류$|함유/.test(word) || !text.includes(word)) return;
            if (ings.some(ing => ing.name.includes(word) || isIngredientMatch(ing.name, af))) return;
            if (!mentioned.has(word)) mentioned.set(word, new Set());
            mentioned.get(word).add(p.label);
        });
    });
    mentioned.forEach((labels, word) => {
        add('step-mention', 'warn', null, `조리 단계/설명에 '${word}'이(가) 나오는데 재료 목록에는 없어요`, 'stepmention:' + word, 'recipe-chat', [...labels]);
    });

    ings.forEach((ing, idx) => {
        if (!ing.noSubstituteHere && !ing.substituteOverride) return;
        if (!ctx.profiles.some(p => per[p.id][idx].hasAllergy)) {
            add('dead-flag', 'info', ing.name, `'${ing.name}'에 대체/불가 옵션이 있는데 어떤 알레르기·질환에도 걸리지 않아 화면에 안 나와요`, 'dead:' + ing.name);
        }
    });

    return issues;
}

function reviewProfileMatrix(recipe, ctx) {
    return ctx.profiles.map(p => {
        const results = recipe.ingredients.map(ing => resolveSubstitutes(ing, [ctx.sourceById[p.id]]));
        const hits = results.filter(r => r.hasAllergy);
        let state = 'none';
        if (hits.length) {
            const blocked = recipe.ingredients.some((ing, i) => results[i].noSubMessage && ing.required);
            const subs = hits.some(r => r.alternativeFoods.length > 0);
            state = blocked ? 'block' : subs ? 'sub' : 'omit';
        }
        return { profile: p, state, hitCount: hits.length };
    });
}

function reviewRunAll(ctx) {
    ctx = ctx || reviewMakeContext();
    const byRecipe = {};
    const groups = new Map();
    Object.entries(recipes).forEach(([name, recipe]) => {
        const issues = reviewCheckRecipe(name, recipe, ctx);
        byRecipe[name] = issues;
        issues.forEach(is => {
            const gk = is.rule + '|' + is.groupKey;
            if (!groups.has(gk)) groups.set(gk, { rule: is.rule, severity: is.severity, owner: is.owner, groupKey: is.groupKey, text: is.text, recipes: [], profiles: new Set() });
            const g = groups.get(gk);
            if (!g.recipes.includes(name)) g.recipes.push(name);
            is.profiles.forEach(l => g.profiles.add(l));
        });
    });
    return { ctx, byRecipe, groups: [...groups.values()].map(g => ({ ...g, profiles: [...g.profiles] })), dataIssues: reviewDataChecks() };
}

function reviewDataChecks() {
    const out = [];
    const groups = new Map();
    for (const [key, obj] of Object.entries(allergyMapping)) {
        if (!groups.has(obj.name)) groups.set(obj.name, []);
        groups.get(obj.name).push(key);
    }
    const sortedJson = v => JSON.stringify(Array.isArray(v) ? [...v].sort() : v || null);
    for (const [name, keys] of groups) {
        if (keys.length < 2) continue;
        const base = allergyMapping[keys[0]];
        keys.slice(1).forEach(k => {
            const o = allergyMapping[k];
            const diffs = [];
            if (sortedJson(base.avoidFoods) !== sortedJson(o.avoidFoods)) diffs.push('피해야 할 식품');
            if (sortedJson(base.safeFoods) !== sortedJson(o.safeFoods)) diffs.push('안전 식품');
            if (JSON.stringify(base.substitutes || null) !== JSON.stringify(o.substitutes || null)) diffs.push('재료별 대체품');
            if (base.tips !== o.tips) diffs.push('팁 문구');
            if (diffs.length) out.push({ rule: 'alias-mismatch', severity: 'error', text: `'${keys[0]}'와 '${k}'는 같은 "${name}"인데 내용이 달라요 (${diffs.join(', ')}). 입력한 표기에 따라 결과가 달라져요` });
        });
    }
    const noInfo = new Set();
    const collect = arr => (arr || []).forEach(n => { if (!getSubstituteInfo(n)) noInfo.add(n); });
    Object.values(allergyMapping).forEach(o => { collect(o.safeFoods); Object.values(o.substitutes || {}).forEach(collect); });
    Object.values(diseaseMapping).forEach(o => { collect(o.safeIngredients); Object.values(o.substitutes || {}).forEach(collect); });
    Object.values(recipes).forEach(r => r.ingredients.forEach(i => collect(i.substituteOverride)));
    if (noInfo.size) out.push({ rule: 'no-tip-data', severity: 'info', text: `substituteInfo에 설명이 없는 대체품 ${noInfo.size}개: ${[...noInfo].join(', ')}` });
    return out;
}

if (typeof module !== 'undefined') module.exports = { reviewProfiles, reviewMakeContext, reviewCheckRecipe, reviewProfileMatrix, reviewRunAll, reviewDataChecks, reviewHash, REVIEW_HIDDEN_RULES };
