// 먹고죽자! 대체품 결정 로직: index.html과 review.html이 같은 함수를 써요.
// 필요한 전역 데이터: substituteInfo (diet-data.js)

// 재료명과 알레르기 회피 식품명을 정확하게 비교 (괄호 부가정보 제거 후 단어 단위 비교)
function isIngredientMatch(ingName, avoidFood) {
    const strip = s => s.toLowerCase().replace(/\([^)]*\)/g, '').trim();
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

// 한 재료에 대해 화면에 보여줄 대체품/팁/불가 여부를 계산 (모달 렌더링과 검토 도구가 공용)
// avoidSources: [{ avoidFoods, safeFoods, tips, reason, substitutes }]
function resolveSubstitutes(ing, avoidSources) {
    const hasAllergy = avoidSources.some(source =>
        source.avoidFoods.some(avoidFood => isIngredientMatch(ing.name, avoidFood))
    );

    let alternativeFoods = [];
    let allergyTip = '';
    let allergyReason = '';
    if (hasAllergy && avoidSources.length > 0) {
        avoidSources.forEach((source) => {
            source.avoidFoods.forEach(avoidFood => {
                if (isIngredientMatch(ing.name, avoidFood)) {
                    allergyTip = source.tips;
                    allergyReason = source.reason || '';
                    if (ing.substituteOverride) {
                        // 이 재료(요리)에 맞게 특별히 지정된 대체품만 사용
                        alternativeFoods = [...new Set([...alternativeFoods, ...ing.substituteOverride])];
                    } else if (!ing.noSubstituteHere) {
                        // substitutes 맵이 있으면 매칭된 재료의 정확한 대체품만, 없으면 카테고리 전체 safeFoods 사용
                        const specificSubs = source.substitutes ? source.substitutes[avoidFood] : null;
                        const foodsToAdd = specificSubs || source.safeFoods;
                        alternativeFoods = [...new Set([...alternativeFoods, ...foodsToAdd])];
                    }
                }
            });
        });
    }
    const noSubMessage = hasAllergy && ing.noSubstituteHere;
    return { hasAllergy, alternativeFoods, allergyTip, allergyReason, noSubMessage };
}
