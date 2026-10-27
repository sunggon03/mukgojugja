// 먹고죽자! 식이제약 데이터: 알레르기/기저질환 매핑과 대체품 설명
// index.html과 review.html이 함께 읽는 파일이에요. 수정 후에는 index.html의 ?v= 값을 올려 주세요.

// ── 글루텐(밀) 관련 공용 목록: 밀가루/글루텐/글루텐 불내증/글루텐 알레르기/기저질환 글루텐불내증이 함께 씀 ──
// 회피 목록에 없으면 "안전한 레시피"로 잘못 표시되므로, 밀이 확실히 들어가는 재료명을 여기에 모아요.
// 참고: 재료명이 목록의 단어를 포함하면 걸려요. 단, '돈가스소스'는 소스라서 '돈가스'로 보지 않아요(substitute-logic.js의 isSauceOfDish).
// 간장·굴소스·쯔유·고추장 등 소스류는 제품마다 밀 함유가 달라 아직 넣지 않았어요(팀 결정 필요).
const GLUTEN_AVOID = [
    '밀가루', '밀', '보리', '호밀', '일반 파스타', '일반 빵',
    '중력분', '강력분', '박력분', '부침가루', '튀김가루', '팬케이크 가루', '핫케이크가루',
    '우동면', '소면', '라면', '파스타면', '스파게티면', '라자냐면', '야키소바면',
    '빵가루', '식빵', '치아바타빵', '타르트지', '고체카레', '돈가스', '돈까스', '레이디핑거',
    '마카로니', '바게트', '튀김', '꽃빵',
    '통밀', '통밀빵', '통곡물', '귀리', '오트밀'
];
const GLUTEN_SUBSTITUTES = {
    '밀가루': ['글루텐프리 밀가루', '쌀가루'],
    '밀': ['쌀', '옥수수'],
    '보리': ['쌀'],
    '호밀': ['쌀'],
    '일반 파스타': ['글루텐프리 파스타(쌀·옥수수)'],
    '일반 빵': ['글루텐프리 빵'],
    '중력분': ['글루텐프리 밀가루', '쌀가루'],
    '강력분': ['글루텐프리 밀가루', '쌀가루'],
    '박력분': ['글루텐프리 밀가루', '쌀가루'],
    '부침가루': ['쌀 부침가루', '감자전분'],
    '튀김가루': ['쌀 튀김가루', '옥수수전분'],
    '팬케이크 가루': ['글루텐프리 팬케이크 믹스'],
    '핫케이크가루': ['글루텐프리 팬케이크 믹스'],
    '우동면': ['쌀국수(쌀면)'],
    '소면': ['쌀국수(쌀면)'],
    '라면': ['쌀국수(쌀면)'],
    '야키소바면': ['쌀국수(쌀면)'],
    '파스타면': ['글루텐프리 파스타(쌀·옥수수)'],
    '스파게티면': ['글루텐프리 파스타(쌀·옥수수)'],
    '라자냐면': ['글루텐프리 라자냐면(성분표 확인)'],
    '빵가루': ['글루텐프리 빵가루'],
    '식빵': ['글루텐프리 빵'],
    '치아바타빵': ['글루텐프리 빵'],
    '타르트지': ['글루텐프리 타르트지(성분표 확인)'],
    '고체카레': ['글루텐프리 카레루(성분표 확인)'],
    '돈가스': ['글루텐프리 돈가스(성분표 확인)'],
    '돈까스': ['글루텐프리 돈가스(성분표 확인)'],
    '레이디핑거': ['글루텐프리 비스킷·스펀지(성분표 확인)'],
    '마카로니': ['글루텐프리 파스타(쌀·옥수수)'],
    '바게트': ['글루텐프리 빵'],
    '꽃빵': ['글루텐프리 빵'],
    '튀김': ['쌀 튀김가루로 만든 튀김'],
    '통밀': ['쌀', '옥수수'],
    '통밀빵': ['글루텐프리 빵'],
    '통곡물': ['쌀', '옥수수'],
    '귀리': ['글루텐프리 귀리(인증 제품)'],
    '오트밀': ['글루텐프리 오트밀(인증 제품)']
};

// 알레르기 매핑 (상세 객체 구조)
const allergyMapping = {
    '유당불내증': {
        name: '유당불내증',
        type: 'intolerance',
        reason: '유당을 분해하는 소화효소(락타아제)가 부족해 복통·가스·설사를 유발함',
        avoidFoods: ['우유', '버터', '치즈', '크림', '우유초콜릿', '연유', '고체카레'],
        safeFoods: ['락토스프리 우유', '저유당 우유', '두유', '귀리 밀크', '코코넛 밀크', '요구르트(소량)'],
        substitutes: {
            '우유': ['락토스프리 우유', '저유당 우유', '두유'],
            '버터': ['버터(소량은 대부분 괜찮음)', '식물성 마가린'],
            '치즈': ['저유당 치즈(체다·파마산 등 숙성치즈)', '영양 효모(대체 치즈 맛)'],
            '크림': ['코코넛 크림', '식물성 휘핑크림'],
            '우유초콜릿': ['다크초콜릿(유당 적음)', '두유초콜릿'],
            '연유': ['비건 연유(코코넛 연유)'],
            '고체카레': ['유제품 무첨가 카레루(성분표 확인)']
        },
        tips: '버터·숙성치즈는 유당 함량이 매우 낮아 소량은 대부분 문제없이 섭취 가능. 우유·크림처럼 유당이 많은 것 위주로 주의하세요.',
        source: "https://doctornow.co.kr/content/magazine/b48b909b5091430182dfd4cd0bd3837f"
    },
    '유제품': {
        name: '유제품 불내증',
        type: 'intolerance',
        reason: '유제품 속 성분을 소화하기 어려워 소화기 불편감을 유발함',
        avoidFoods: ['우유', '버터', '치즈', '크림', '요구르트', '연유', '고체카레'],
        safeFoods: ['두유', '귀리 밀크', '아몬드 밀크'],
        substitutes: {
            '우유': ['두유', '귀리 밀크', '아몬드 밀크'],
            '버터': ['버터(소량은 대부분 괜찮음)', '식물성 마가린'],
            '치즈': ['저유당 치즈(숙성치즈)', '영양 효모(대체 치즈 맛)'],
            '크림': ['코코넛 크림', '식물성 휘핑크림'],
            '요구르트': ['두유 요구르트', '코코넛 요구르트'],
            '연유': ['비건 연유(코코넛 연유)'],
            '고체카레': ['유제품 무첨가 카레루(성분표 확인)']
        },
        tips: '버터는 유당 함량이 매우 낮아 대부분 문제없이 섭취 가능한 경우가 많음',
        source: "https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/eating-diet-nutrition"
    },
    '우유 알레르기': {
        name: '우유 알레르기',
        type: 'allergy',
        reason: '우유 단백질에 면역계가 과민 반응해 두드러기·구토·호흡곤란 등을 일으킬 수 있음',
        avoidFoods: ['우유', '버터', '치즈', '크림', '요구르트', '밀크파우더', '유제품', '연유', '고체카레'],
        safeFoods: ['두유', '귀리 밀크', '아몬드 밀크', '코코넛 밀크', '쌀 음료'],
        substitutes: {
            '우유': ['두유', '귀리 밀크', '아몬드 밀크', '코코넛 밀크', '쌀 음료'],
            '버터': ['우유 없는 마가린(성분표 확인)', '코코넛 오일'],
            '치즈': ['비건 치즈(식물성 치즈)', '영양 효모(대체 치즈 맛)'],
            '크림': ['코코넛 크림', '식물성 휘핑크림'],
            '요구르트': ['두유 요구르트', '코코넛 요구르트'],
            '밀크파우더': ['두유가루', '코코넛밀크가루'],
            '유제품': ['식물성 대체식품 전반(두유·코코넛 제품 등)'],
            '연유': ['비건 연유(코코넛 연유)'],
            '고체카레': ['유제품 무첨가 카레루(성분표 확인)']
        },
        tips: '단순 불내증과 달리 우유 알레르기는 소량의 유단백도 위험할 수 있어 완전히 피해야 함. 버터·치즈도 예외 없이 모두 식물성으로 대체 필요',
        source: "https://www.amc.seoul.kr/asan/mobile/healthinfo/mealtherapy/mealTherapyDetail.do?mtId=73"
    },
    '계란': {
        name: '계란 알레르기',
        type: 'allergy',
        reason: '계란 단백질에 대한 면역 과민반응으로 피부·소화기·호흡기 증상을 유발할 수 있음',
        avoidFoods: ['계란', '계란 함유 음식', '달걀', '메추리알', '오리알', '거위알', '마요네즈', '크래미', '게맛살', '맛살', '레이디핑거'],
        safeFoods: ['아쿠아파바(베이킹용)', '바나나(베이킹용)', '요구르트(베이킹용)'],
        substitutes: {
            '계란': ['아쿠아파바(베이킹용)', '바나나(베이킹용)', '요구르트(베이킹용)'],
            '계란 함유 음식': ['아쿠아파바(베이킹용)', '바나나(베이킹용)'],
            '달걀': ['아쿠아파바(베이킹용)', '바나나(베이킹용)', '요구르트(베이킹용)'],
            '마요네즈': ['계란 없는 마요네즈(성분표 확인)'],
            '크래미': ['닭가슴살(삶아 찢은 것)'],
            '게맛살': ['닭가슴살(삶아 찢은 것)'],
            '맛살': ['닭가슴살(삶아 찢은 것)'],
            '레이디핑거': ['계란 없는 비스킷·스펀지(성분표 확인)'],
            '메추리알': ['메추리알 없이 조리(대체 어려움)'],
            '오리알': ['오리알 없이 조리(대체 어려움)'],
            '거위알': ['거위알 없이 조리(대체 어려움)']
        },
        tips: '계란이 들어간 모든 음식 피하기, 성분표 확인 필수. ⚠️ 아쿠아파바·바나나·요구르트는 "베이킹에서 반죽을 뭉치는 역할"만 대체 가능 - 계란국·계란찜처럼 계란 자체가 주재료인 요리는 마땅한 대체품이 없어 다른 메뉴를 고르는 게 나을 수 있음. 게맛살(크래미)·레이디핑거처럼 이름에 계란이 없어도 계란이 들어 있는 재료가 있으니 성분표를 꼭 확인',
        source: "https://www.amc.seoul.kr/asan/mobile/healthinfo/mealtherapy/mealTherapyDetail.do?mtId=73"
    },
    '밀가루': {
        name: '글루텐 불내증',
        type: 'intolerance',
        reason: '셀리악병은 밀·보리·호밀의 글루텐이 소장 점막을 손상시키는 자가면역 질환이에요(복통·설사·영양흡수 장애). 비셀리악 글루텐 민감증도 이 기준(더 엄격한 쪽)으로 확인해요',
        avoidFoods: [...GLUTEN_AVOID],
        safeFoods: ['글루텐프리 밀가루', '글루텐프리 파스타', '쌀가루', '옥수수가루'],
        substitutes: { ...GLUTEN_SUBSTITUTES },
        tips: '교차오염을 주의하세요. 특히 글루텐프리 면은 일반 면을 삶은 물에 삶지 마세요(같은 물을 쓰면 글루텐이 많이 옮아요). 집게·체·도마는 씻어서 쓰거나 따로 두세요.',
        source: "https://www.guidelinecentral.com/summaries/acg-clinical-guidelines-diagnosis-and-management-of-celiac-disease"
    },
    '땅콩': {
        name: '땅콩 알레르기',
        type: 'allergy',
        reason: '땅콩 단백질에 대한 면역 과민반응으로 심하면 아나필락시스(전신 쇼크)까지 유발할 수 있음',
        avoidFoods: ['땅콩', '땅콩버터', '땅콩기름', '땅콩과자'],
        safeFoods: ['해바라기씨버터', '두유', '씨앗류'],
        tips: '아나필락시스(전신 알레르기 쇼크) 위험이 높은 대표 알레르겐. 가공식품 성분표의 땅콩 함유 여부 반드시 확인',
        source: "https://www.sidae.com/article/2017053009448023036"
    },
    '견과류': {
        name: '견과류 알레르기',
        type: 'allergy',
        reason: '견과류 단백질에 대한 면역 과민반응, 땅콩 알레르기와 별개로 발생할 수 있음',
        avoidFoods: ['호두', '아몬드', '캐슈넛', '피스타치오', '헤이즐넛', '잣'],
        safeFoods: ['해바라기씨', '호박씨'],
        tips: '한 가지 견과류에 알레르기가 있으면 다른 견과류도 함께 피하는 것이 안전 (견과류 간 교차반응 가능)',
        source: "https://www.sidae.com/article/2017053009448023036"
    },
    '갑각류': {
        name: '갑각류 알레르기',
        type: 'allergy',
        reason: '새우·게 등 갑각류 단백질에 대한 면역 과민반응, 성인 발병이 흔하고 증상이 심할 수 있음',
        avoidFoods: ['새우', '게', '랍스터', '가재'],
        safeFoods: ['흰살생선(알레르기 없는 경우)', '닭고기', '두부'],
        tips: '성인이 된 후 발생하면 잘 없어지지 않는 대표적 알레르겐. 같은 팬·기름을 사용한 조리도 교차오염 주의',
        source: "https://www.sidae.com/article/2017053009448023036"
    },
    '조개류': {
        name: '조개류 알레르기',
        type: 'allergy',
        reason: '조개·홍합 등 연체동물 단백질에 대한 면역 과민반응',
        avoidFoods: ['굴', '전복', '홍합', '조개', '바지락', '굴소스'],
        safeFoods: ['흰살생선(알레르기 없는 경우)', '닭고기', '두부'],
        substitutes: {
            '굴소스': ['간장 + 설탕 소량(굴소스 대용)', '비건 굴소스(버섯 베이스, 성분표 확인)']
        },
        tips: '식약처 알레르기 표시 의무 대상 원재료(굴·전복·홍합 포함). 가공식품의 조개류 함유 여부 확인 필수',
        source: "https://www.sidae.com/article/2017053009448023036"
    },
    '대두': {
        name: '대두 알레르기',
        type: 'allergy',
        reason: '대두 단백질에 대한 면역 과민반응',
        avoidFoods: ['두부', '콩', '두유', '된장', '간장(대두 함유)', '청국장', '낫토', '고추장', '쌈장', '쯔유', '데리야끼소스', '두반장'],
        safeFoods: ['쌀', '고기류', '달걀(알레르기 없는 경우)'],
        substitutes: {
            '두부': ['두부 없이 조리(대체 어려움)'],
            '콩': ['콩 없이 조리(대체 어려움)'],
            '두유': ['아몬드 밀크', '귀리 밀크', '쌀 음료'],
            '간장(대두 함유)': ['코코넛 아미노스'],
            '청국장': ['청국장 없이 조리(대체 어려움)'],
            '낫토': ['낫토 없이 조리(대체 어려움)'],
            '고추장': ['고춧가루 + 쌀조청(고추장 대용, 맛 차이 있음)'],
            '쯔유': ['코코넛 아미노스 + 미림 + 다시마 육수(쯔유 대용)'],
            '데리야끼소스': ['코코넛 아미노스 + 꿀(데리야끼 대용)'],
            '두반장': ['고춧가루 + 고추기름(두반장 대용)'],
            '쌈장': ['쌈장 없이 조리(대체 어려움)']
        },
        tips: '된장·간장·고추장·두부처럼 한식에 대두가 많이 쓰여요. 특히 어린 아이에게 흔한 알레르기 원인 식품이라 성분표 확인이 중요해요.',
        source: "https://koreascience.or.kr/article/JAKO200203042151312.page?&lang=en"
    },
    '메밀': {
        name: '메밀 알레르기',
        type: 'allergy',
        reason: '메밀 단백질에 대한 면역 과민반응, 국내에서 비교적 흔하고 중증 반응 가능성이 있음',
        avoidFoods: ['메밀', '메밀면', '냉면(메밀 함유)', '막국수'],
        safeFoods: ['쌀국수', '밀면(밀 알레르기 없는 경우)'],
        tips: '소량 노출로도 심한 반응을 일으킬 수 있는 알레르기 원인 식품이에요. 냉면·막국수 등에 흔히 쓰이므로 주의',
        source: "https://koreascience.or.kr/article/JAKO200203042151312.page?&lang=en"
    },
    '고등어': {
        name: '생선 알레르기',
        type: 'allergy',
        reason: '생선 단백질에 대한 면역 과민반응',
        avoidFoods: ['고등어', '참치', '연어', '생선류', '가쓰오부시', '명란젓', '사각어묵', '꽁치통조림', '고기 또는 생선', '멸치', '앤초비', '액젓', '어묵', '맛살', '크래미', '게맛살'],
        safeFoods: ['닭고기', '두부', '달걀(알레르기 없는 경우)'],
        substitutes: {
            '가쓰오부시': ['김가루', '다시마 가루'],
            '명란젓': ['명란 없이 조리(대체 어려움)'],
            '사각어묵': ['두부(대두 알레르기 없는 경우)'],
            '꽁치통조림': ['닭고기', '두부(대두 알레르기 없는 경우)'],
            '고기 또는 생선': ['고기(소고기·닭고기 등)만 사용'],
            '멸치': ['다시마 육수'],
            '앤초비': ['앤초비 없이 조리(대체 어려움)'],
            '액젓': ['액젓 없이 조리(대체 어려움)'],
            '어묵': ['두부(대두 알레르기 없는 경우)'],
            '맛살': ['닭가슴살(삶아 찢은 것)'],
            '크래미': ['닭가슴살(삶아 찢은 것)'],
            '게맛살': ['닭가슴살(삶아 찢은 것)']
        },
        tips: '고등어는 국내 알레르기 원인 조사에서 가장 많이 보고된 식품. 신선도가 떨어지면 히스타민 중독(알레르기와 유사한 증상)도 유발 가능',
        source: "https://www.koreascience.or.kr/article/JAKO199711921349210.page"
    },
    '돼지고기': {
        name: '돼지고기 알레르기',
        type: 'allergy',
        reason: '돼지고기 단백질에 대한 면역 과민반응(비교적 드물지만 발생 가능)',
        avoidFoods: ['돼지고기', '삼겹살', '베이컨', '햄', '돈가스', '돈까스', '소세지', '소시지'],
        safeFoods: ['닭고기', '소고기(알레르기 없는 경우)', '두부'],
        substitutes: {
            '소세지': ['닭 소시지(돼지고기 미포함, 성분표 확인)'],
            '소시지': ['닭 소시지(돼지고기 미포함, 성분표 확인)']
        },
        tips: '국내 병력 조사에서 원인 식품 상위권으로 보고된 알레르겐. 가공육(햄·베이컨)에도 돼지고기가 포함되니 확인 필요',
        source: "https://www.koreascience.or.kr/article/JAKO199711921349210.page"
    },
    '복숭아': {
        name: '복숭아 알레르기',
        type: 'allergy',
        reason: '복숭아 등 장미과 과일 단백질에 대한 면역 과민반응, 입 주위 가려움 등으로 나타나기도 함',
        avoidFoods: ['복숭아', '천도복숭아', '복숭아 통조림'],
        safeFoods: ['사과', '배', '포도'],
        tips: '국내 병력 조사에서 가장 흔한 과일 알레르겐. 자작나무 꽃가루 알레르기가 있으면 복숭아 등과 교차반응(구강알레르기증후군)이 나타날 수 있음',
        source: "https://www.koreascience.or.kr/article/JAKO199711921349210.page"
    },

    '토마토': {
        name: '토마토 알레르기',
        type: 'allergy',
        reason: '토마토 단백질에 대한 면역 과민반응으로 두드러기·입안 가려움 등을 일으킬 수 있음',
        avoidFoods: ['토마토', '방울토마토', '토마토소스', '토마토페이스트', '토마토주스', '케첩'],
        safeFoods: ['비트', '당근', '단호박'],
        substitutes: {
            '토마토소스': ['비트·당근 소스(토마토 없는 소스, 맛 차이 있음)'],
            '토마토페이스트': ['비트·당근 소스(토마토 없는 소스, 맛 차이 있음)'],
            '케첩': ['비트·당근 소스(토마토 없는 소스, 맛 차이 있음)']
        },
        tips: '토마토소스·페이스트·케첩 같은 가공식품에도 들어가요. 토마토가 주재료인 요리는 대체가 어려워 다른 메뉴를 고르는 게 나을 수 있어요. 식약처 알레르기 표시 의무 대상이니 성분표 확인',
        source: "https://110.go.kr/data/counselView.do?curPage=23&num=B03_668837&scCate1=&scCate2=&scIntt=&scText=&scType="
    },
    '닭고기': {
        name: '닭고기 알레르기',
        type: 'allergy',
        reason: '닭고기 단백질에 대한 면역 과민반응',
        avoidFoods: ['닭고기', '닭가슴살', '닭다리살', '토막 닭고기', '닭육수', '닭 소시지'],
        safeFoods: ['두부', '소고기(알레르기 없는 경우)', '돼지고기(알레르기 없는 경우)'],
        substitutes: {
            '닭육수': ['다시마 육수', '채소 육수']
        },
        tips: '닭육수·닭 소시지·치킨스톡 같은 가공식품에도 들어가요. 식약처 알레르기 표시 의무 대상이니 성분표 확인',
        source: "https://110.go.kr/data/counselView.do?curPage=23&num=B03_668837&scCate1=&scCate2=&scIntt=&scText=&scType="
    },
    '쇠고기': {
        name: '쇠고기 알레르기',
        type: 'allergy',
        reason: '쇠고기 단백질에 대한 면역 과민반응',
        avoidFoods: ['소고기', '쇠고기', '우삼겹', '소곱창', '소대창'],
        safeFoods: ['닭고기(알레르기 없는 경우)', '돼지고기(알레르기 없는 경우)', '두부'],
        tips: '사골·곰탕·소고기 육수 같은 가공식품에도 들어가요. 식약처 알레르기 표시 의무 대상이니 성분표 확인',
        source: "https://110.go.kr/data/counselView.do?curPage=23&num=B03_668837&scCate1=&scCate2=&scIntt=&scText=&scType="
    },
    '오징어': {
        name: '오징어 알레르기',
        type: 'allergy',
        reason: '오징어 단백질에 대한 면역 과민반응',
        avoidFoods: ['오징어', '오징어채', '오징어젓', '오징어먹물'],
        safeFoods: ['새송이버섯(식감 대체)', '두부', '닭고기'],
        tips: '오징어먹물·오징어젓·오징어채 같은 가공식품에도 들어가요. 식약처 알레르기 표시 의무 대상이니 성분표 확인',
        source: "https://110.go.kr/data/counselView.do?curPage=23&num=B03_668837&scCate1=&scCate2=&scIntt=&scText=&scType="
    },
    '아황산류': {
        name: '아황산류 과민',
        type: 'intolerance',
        reason: '보존·표백 목적으로 쓰이는 아황산류에 과민하게 반응해 두드러기·복통·호흡기 증상 등을 보일 수 있음',
        avoidFoods: ['와인', '화이트와인', '레드와인'],
        safeFoods: ['물 + 레몬즙 소량(와인 대용)'],
        substitutes: {
            '와인': ['물 + 레몬즙 소량(와인 대용)'],
            '화이트와인': ['물 + 레몬즙 소량(와인 대용)'],
            '레드와인': ['무가당 포도즙(레드와인 대용, 단맛이 있어요)']
        },
        tips: '이산화황이 최종 제품 1kg당 10mg 이상 남은 경우에만 표시 대상이에요. 성분표의 "이산화황 함유" 표시를 확인하세요',
        source: "https://110.go.kr/data/counselView.do?curPage=23&num=B03_668837&scCate1=&scCate2=&scIntt=&scText=&scType="
    },
};

// 같은 알레르기의 별칭 키는 정본 객체를 그대로 가리켜요(내용이 갈라지지 않게). 고칠 때는 정본만 고치면 돼요.
allergyMapping['유당'] = allergyMapping['유당불내증'];
allergyMapping['버터'] = allergyMapping['유제품'];
allergyMapping['치즈'] = allergyMapping['유제품'];
allergyMapping['우유'] = allergyMapping['우유 알레르기'];
allergyMapping['계란 알레르기'] = allergyMapping['계란'];
allergyMapping['글루텐'] = allergyMapping['밀가루'];
allergyMapping['글루텐 불내증'] = allergyMapping['밀가루'];
allergyMapping['글루텐 알레르기'] = allergyMapping['밀가루'];
allergyMapping['땅콩 알레르기'] = allergyMapping['땅콩'];
allergyMapping['견과류 알레르기'] = allergyMapping['견과류'];
allergyMapping['갑각류 알레르기'] = allergyMapping['갑각류'];
allergyMapping['새우'] = allergyMapping['갑각류'];
allergyMapping['게'] = allergyMapping['갑각류'];
allergyMapping['조개류 알레르기'] = allergyMapping['조개류'];
allergyMapping['대두 알레르기'] = allergyMapping['대두'];
allergyMapping['콩'] = allergyMapping['대두'];
allergyMapping['메밀 알레르기'] = allergyMapping['메밀'];
allergyMapping['생선 알레르기'] = allergyMapping['고등어'];
allergyMapping['돼지고기 알레르기'] = allergyMapping['돼지고기'];
allergyMapping['복숭아 알레르기'] = allergyMapping['복숭아'];

// 2026-10-19 추가: 식약처 알레르기 표시 대상 19종 중 빠져 있던 항목
allergyMapping['토마토 알레르기'] = allergyMapping['토마토'];
allergyMapping['닭고기 알레르기'] = allergyMapping['닭고기'];
allergyMapping['쇠고기 알레르기'] = allergyMapping['쇠고기'];
allergyMapping['소고기'] = allergyMapping['쇠고기'];
allergyMapping['소고기 알레르기'] = allergyMapping['쇠고기'];
allergyMapping['오징어 알레르기'] = allergyMapping['오징어'];
allergyMapping['아황산류 과민'] = allergyMapping['아황산류'];
allergyMapping['아황산'] = allergyMapping['아황산류'];

// 식품 알레르기 "표시 대상" 근거 (식품 등의 표시·광고에 관한 법령의 [별표 2] 소비자 안전을 위한 표시사항(제5조제1항 관련) Ⅰ.1 알레르기유발물질표시)
// 원문 목록: 알류(가금류만), 우유, 메밀, 땅콩, 대두, 밀, 고등어, 게, 새우, 돼지고기, 복숭아, 토마토, 아황산류(첨가해 최종 제품에 이산화황 10mg/kg 이상),
//           호두, 닭고기, 쇠고기, 오징어, 조개류(굴·전복·홍합 포함), 잣  (2026-10-26 원문 확인; 문서에는 법령명·시행일이 안 나와 있어요)
// 주의: 이것은 "라벨에 표시해야 하는 대상"의 근거예요. 알레르기가 실제로 문제가 된다는 임상 근거는 아니에요.
//       목록에 없는 성분(아몬드·캐슈, 고등어 외 생선, 게·새우 외 갑각류 등)은 라벨에 안 적혀 있을 수 있어요.
const LABEL_SOURCE_URL = 'https://www.law.go.kr/LSW/flDownload.do?gubun=&flSeq=42533884&bylClsCd=110201';
const LABEL_SOURCE_NOTES = {
    '우유 알레르기': '표시 대상: 우유',
    '계란': '표시 대상: 알류(가금류의 알만 해당)',
    '밀가루': '표시 대상: 밀 (글루텐 불내증 자체의 근거는 아님)',
    '땅콩': '표시 대상: 땅콩',
    '견과류': '표시 대상은 호두·잣뿐이에요. 아몬드·캐슈 등은 목록에 없어 라벨에 안 적힐 수 있어요',
    '갑각류': '표시 대상은 게·새우뿐이에요. 그 밖의 갑각류는 목록에 없어 라벨에 안 적힐 수 있어요',
    '조개류': '표시 대상: 조개류(굴·전복·홍합 포함)',
    '대두': '표시 대상: 대두',
    '메밀': '표시 대상: 메밀',
    '고등어': '표시 대상은 고등어뿐이에요. 그 밖의 생선은 목록에 없어 라벨에 안 적힐 수 있어요',
    '돼지고기': '표시 대상: 돼지고기',
    '복숭아': '표시 대상: 복숭아',
    '토마토': '표시 대상: 토마토',
    '닭고기': '표시 대상: 닭고기',
    '쇠고기': '표시 대상: 쇠고기',
    '오징어': '표시 대상: 오징어',
    '아황산류': '표시 대상: 첨가해 최종 제품에 이산화황이 1kg당 10mg 이상일 때만'
};
Object.entries(LABEL_SOURCE_NOTES).forEach(([k, note]) => {
    allergyMapping[k].labelSource = LABEL_SOURCE_URL;
    allergyMapping[k].labelNote = note;
});

// 사용자가 쓴 표기 → allergyMapping 키. 입력은 공백을 없애고 끝의 '알레르기/알러지'를 뗀 뒤 비교해요.
// (지원하는 알레르기만 넣어요. 여기에도 없고 매핑 키에도 없으면 화면에 "지원하지 않는 항목"으로 알려요.)
const HEALTH_ALIASES = {
    '밀': '밀가루', '셀리악': '밀가루', '셀리악병': '밀가루',
    '달걀': '계란', '난류': '계란', '알류': '계란',
    '락토스': '유당불내증', '락토오스': '유당불내증', '유당불내': '유당불내증',
    '호두': '견과류', '잣': '견과류', '아몬드': '견과류', '캐슈넛': '견과류', '피스타치오': '견과류', '헤이즐넛': '견과류',
    '조개': '조개류', '굴': '조개류', '전복': '조개류', '홍합': '조개류', '바지락': '조개류',
    '랍스터': '갑각류', '가재': '갑각류', '크랩': '갑각류',
    '생선': '고등어', '참치': '고등어', '연어': '고등어',
    '두부': '대두', '두유': '대두',
    '돼지': '돼지고기',
    '닭': '닭고기', '치킨': '닭고기',
    '아황산염': '아황산류', '이산화황': '아황산류'
};

// "제품에 따라" 알레르겐이 들어 있을 수 있는 재료 (확실히 들어 있는 건 위 avoidFoods가 잡아요)
// words: 재료명에 이 글자가 들어 있으면 해당. '=육수'처럼 '='로 시작하면 이름이 정확히 같을 때만.
// 화면에서는 경고(빨강)가 아니라 "성분표 확인"(노랑)으로 보여줘요. allergen은 allergyMapping의 name과 같아야 해요.
const MAYBE_CONTAIN = [
    { allergen: '대두 알레르기', words: ['마라소스', '우스터', '야키소바소스', '굴소스', '콩나물', '돈가스소스', '돈까스소스'], note: '대두(간장·콩)가 들어가는 제품이 많아요' },
    { allergen: '글루텐 불내증', words: ['간장', '고추장', '쌈장', '춘장', '두반장', '쯔유', '데리야끼', '우스터', '야키소바소스', '굴소스', '마라소스', '메밀면', '어묵', '돈가스소스', '돈까스소스', '참치액', '소세지', '소시지'], note: '밀이 섞이는 제품이 많아요(무밀 제품은 예외)' },
    { allergen: '밀 알레르기', words: ['간장', '고추장', '쌈장', '춘장', '두반장', '쯔유', '데리야끼', '우스터', '야키소바소스', '굴소스', '마라소스', '메밀면', '어묵', '돈가스소스', '돈까스소스', '참치액', '소세지', '소시지'], note: '밀이 섞이는 제품이 많아요(무밀 제품은 예외)' },
    { allergen: '우유 알레르기', words: ['다크초콜릿', '초콜릿'], note: '우유가 들어가는 제품이 많아요' },
    // 2026-10-21 추가. 근거: 시판 돈가스소스 2종의 알레르기 표시(컬리 5052290·5131404: 대두·토마토·밀·우유·쇠고기 함유 표기가 제품마다 다름),
    //   페스토는 잣·호두 등 견과류와 파마산 같은 치즈가 흔히 들어감(wyndly.com 페스토 알레르기 설명; 캐나다 식품검사청 2025 리콜: 페스토에 브라질너트·잣·우유 미표시)
    { allergen: '우유 알레르기', words: ['페스토'], note: '파마산 같은 치즈가 들어가는 제품이 많아요' },
    { allergen: '우유 알레르기', words: ['돈가스소스', '돈까스소스'], note: '우유가 들어가는 제품이 있어요' },
    { allergen: '견과류 알레르기', words: ['페스토'], note: '전통 페스토는 잣(제품에 따라 호두·캐슈·브라질너트)이 들어가요' },
    { allergen: '토마토 알레르기', words: ['돈가스소스', '돈까스소스'], note: '토마토가 들어가는 제품이 많아요' },
    { allergen: '쇠고기 알레르기', words: ['돈가스소스', '돈까스소스'], note: '쇠고기가 들어가는 제품이 있어요' },
    // 2026-10-22 추가(재료 전수 점검). 근거: 시판 제품 알레르기 표시(컬리 상품 페이지에서 직접 확인, 함유 기준)
    //   고체카레=오뚜기 백세카레 3종·매콤닭가슴살카레(쇠고기·닭고기·밀·토마토·우유·대두·굴 중 일부) / 소세지·햄=오뗄 비엔나(돼지·우유·대두·밀·굴), 상하농원 소시지&햄(치즈 제품은 우유·대두)
    //   참치액=한라(대두·밀·굴) / 크래미=한성(계란·대두·게·토마토) / 식빵=밀도 우유쌀식빵(밀·우유·대두), 야미요밀(밀·대두)
    //   김치=오아시스 프리미엄 포기김치(새우 함유), 아워홈 포기김치(원재료에 멸치액젓·새우액젓, 표시 일부만 확인됨) / 쌈장=풀무원 고소견과쌈장(땅콩·대두·밀)
    //   다크초콜릿=FDA: 다크초콜릿은 같은 설비 때문에 우유가 미표시로 들어갈 수 있음
    { allergen: '우유 알레르기', words: ['소세지', '소시지', '햄'], note: '치즈·우유가 들어가는 제품이 있어요' },
    { allergen: '우유 알레르기', words: ['식빵'], note: '우유가 들어가는 제품이 있어요' },
    { allergen: '대두 알레르기', words: ['참치액', '고체카레', '소세지', '소시지', '햄', '크래미', '게맛살', '식빵'], note: '대두가 들어가는 제품이 많아요' },
    { allergen: '조개류 알레르기', words: ['참치액', '고체카레', '소세지', '소시지'], note: '굴 추출물이 들어가는 제품이 있어요' },
    { allergen: '토마토 알레르기', words: ['고체카레', '크래미', '게맛살'], note: '토마토가 들어가는 제품이 있어요' },
    { allergen: '쇠고기 알레르기', words: ['고체카레'], note: '쇠고기가 들어가는 제품이 많아요' },
    { allergen: '닭고기 알레르기', words: ['고체카레'], note: '닭고기가 들어가는 제품이 많아요' },
    { allergen: '생선 알레르기', words: ['김치'], note: '멸치액젓 같은 생선 젓갈이 들어가는 김치가 많아요' },
    { allergen: '갑각류 알레르기', words: ['김치'], note: '새우젓·새우액젓이 들어가는 김치가 많아요' },
    { allergen: '땅콩 알레르기', words: ['쌈장'], note: '땅콩이 들어간 제품이 있어요(고소견과쌈장 등)' },
    { allergen: '계란 알레르기', words: ['돈가스', '튀김(천우라)', '팬케이크 가루', '팬케이크가루', '타르트지', '라자냐면', '식빵'], note: '튀김옷·반죽·믹스에 계란이 들어가는 제품이 있어요' },
    { allergen: '생선 알레르기', words: ['쯔유', '우스터', '해산물'], note: '생선 육수·앤초비·해산물 혼합일 수 있어요' },
    { allergen: '갑각류 알레르기', words: ['크래미', '게맛살', '해산물'], note: '게살·새우가 섞일 수 있어요' },
    { allergen: '조개류 알레르기', words: ['해산물'], note: '조개류가 섞일 수 있어요' },
    { allergen: '돼지고기 알레르기', words: ['젤라틴', '판젤라틴', '=육수', '고기 또는 생선'], note: '돼지 유래 젤라틴이 흔하고, 육수·혼합 재료는 어떤 고기인지에 따라 달라요' },
    { allergen: '닭고기 알레르기', words: ['=육수', '고기 또는 생선'], note: '어떤 고기로 낸 육수인지, 어떤 고기를 쓰는지에 따라 달라요' },
    { allergen: '쇠고기 알레르기', words: ['=육수', '고기 또는 생선'], note: '어떤 고기로 낸 육수인지, 어떤 고기를 쓰는지에 따라 달라요' },
    { allergen: '오징어 알레르기', words: ['해산물'], note: '오징어가 섞일 수 있어요' },
    { allergen: '아황산류 과민', words: ['건포도', '건살구', '건조과일', '건과일'], note: '색을 유지하려고 아황산류를 쓰는 제품이 있어요' }
];

// 분량이 "약간·적당량"으로만 적힌 재료에 붙이는 안내 (계산이 안 되는 분량이라 숫자 대신 기준만 알려줘요)
// disease: diseaseMapping의 name과 같아야 해요. words: 재료명에 이 글자가 들어 있으면 해당.
// 출처: 나트륨 2,300mg/일 = 2020 한국인 영양소 섭취기준(만성질환위험감소섭취량)
//        https://www.foodtoday.or.kr/news/article.html?no=173687
//       첨가당(유리당) 총 에너지의 10% 미만 = WHO 2015 https://tdr.who.int/publications/i/item/WHO-NMH-NHD-15.3
// 고혈압: 분량이 숫자로 적힌 짠 재료의 나트륨 추정 (mg/ml). 먼저 맞는 항목을 써요(긴 이름이 앞).
// 근거 (모두 "추정"으로 표시해요):
//  - 간장·국간장·된장·고추장·굴소스·쯔유·참치액: 식약처 식품영양성분DB(가공식품, 2026-10-23 내려받음, 5만 행까지 받아진 파일) 제품들의 100g/100ml당 나트륨 "중앙값"
//    간장 6,454mg(126건) · 굴소스 4,580(28) · 된장 3,614(42) · 고추장 2,360(77) · 쯔유 6,040/100ml(3건) · 참치액 6,066(7건)
//  - 100g → 1ml 환산은 비중 1.2로 가정한 값이에요 (확인된 출처 없음). 1큰술=15ml, 1작은술=5ml, 1컵=200ml로 계산해요.
//  - 소금: 1작은술(5ml)=2,370mg → 캐나다 보건부 자료(소금 5mL 2,373mg)와 같고, NaCl 중 나트륨 39.3%·소금 비중 1.2로 계산해도 같아요.
//    https://kb-hlbc.canadacentral.cloudapp.azure.com/sites/default/files/healthyeating/pdf/food-sources-of-sodium-korean.pdf
//  - 하루 기준 2,300mg: 2020 한국인 영양소 섭취기준 만성질환위험감소섭취량 https://www.foodtoday.or.kr/news/article.html?no=173687
const SODIUM_DAILY_REF_MG = 2300;
const SODIUM_ESTIMATES = [
    { words: ['국간장', '조선간장'], mgPerMl: 80 },
    { words: ['진간장', '양조간장', '간장'], mgPerMl: 80 },
    { words: ['굴소스'], mgPerMl: 55 },
    { words: ['쯔유'], mgPerMl: 60 },
    { words: ['참치액'], mgPerMl: 60 },
    { words: ['된장'], mgPerMl: 43 },
    { words: ['고추장'], mgPerMl: 27 },
    { words: ['소금'], mgPerMl: 474 }
];

// 대체 재료로 바꿨을 때의 나트륨 추정 (같은 양으로 바꿨다고 가정). 숫자 근거를 확인한 것만 넣어요.
//  - 코코넛 아미노스: 1작은술 약 90mg ≈ 1큰술 270mg → 18mg/ml
//    https://www.healthline.com/nutrition/coconut-aminos · https://davita.com/diet-nutrition/kidney-diet-tips/coconut-aminos/
//    (미국 제품 기준, 브랜드마다 달라요)
//  - 저염 간장·고춧가루+쌀조청·굴소스 대용 등은 한국 제품 숫자를 확인하지 못해서 넣지 않았어요.
const SODIUM_SUBSTITUTE_ESTIMATES = [
    { name: '코코넛 아미노스', forWords: ['국간장', '조선간장', '진간장', '양조간장', '간장'], mgPerMl: 18 }
];

const VAGUE_AMOUNT_RULES = [
    { disease: '고혈압', words: ['소금', '간장', '국간장', '된장', '고추장', '쌈장', '굴소스', '액젓'],
      note: '분량이 정해져 있지 않아요. 조금씩 넣어 가며 간을 보세요. 하루 나트륨 일반 기준은 2,300mg이에요.' },
    { disease: '당뇨병', words: ['설탕', '물엿', '올리고당', '꿀', '시럽', '조청'],
      note: '분량이 정해져 있지 않아요. 조금씩 넣어 가며 단맛을 보세요. WHO는 첨가당을 하루 총 에너지의 10% 미만으로 권고해요.' }
];

// 기저질환 매핑
const diseaseMapping = {
    '당뇨': {
        name: '당뇨병',
        reason: '정제 탄수화물(흰쌀·흰빵), 첨가당(설탕·물엿 등), 단 음료는 혈당을 빠르게 올려 혈당 조절을 어렵게 함',
        avoidIngredients: ['설탕', '물엿', '올리고당', '꿀', '시럽', '조청', '흰쌀', '흰빵', '과일주스', '단음료'],
        safeIngredients: ['현미', '귀리', '통곡물', '채소', '콩류', '견과류'],
        substitutes: {
            '설탕': ['스테비아', '알룰로스'],
            '물엿': ['알룰로스'],
            '올리고당': ['알룰로스'],
            '꿀': ['알룰로스'],
            '시럽': ['알룰로스'],
            '조청': ['알룰로스'],
            '흰쌀': ['현미', '귀리', '통곡물'],
            '흰빵': ['통밀빵', '호밀빵'],
            '과일주스': ['생과일(통째로)', '무가당 차'],
            '단음료': ['물', '무가당 탄산수', '무가당 차']
        },
        tips: '탄수화물의 양과 비율은 사람마다 달라서 정해진 하나의 정답은 없어요(개인별 식사 계획 필요). 가공이 적고 식이섬유가 많은 곡물·채소·콩류를 고르고, 설탕 음료와 정제 곡물·첨가당은 줄이세요. 단맛 대체품도 장기 안전성 연구가 진행 중이라 꾸준히 많이 쓰기보다 가끔만 쓰는 편이 좋아요. 과일주스는 설탕이 더해진 제품을 특히 피하세요(100% 주스는 당뇨 발생 위험과의 연관이 뚜렷하지 않았어요).',
        source: "https://glycemicindex.com/2024/09/the-latest-nutrition-recommendations-for-people-with-diabetes",
        evidence: [
            {"level":"지침","claim":"탄수화물 공급원은 식이섬유가 많고 가공이 적은 것을 고르고, 설탕 음료와 가공식품·정제 곡물·첨가당은 줄이기","foods":["설탕","단음료","흰빵","흰쌀"],"cite":"ADA Professional Practice Committee. 5. Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes—2024. Diabetes Care 2024 (요약 페이지를 통해 확인)","url":"https://glycemicindex.com/2024/09/the-latest-nutrition-recommendations-for-people-with-diabetes"},
            {"level":"지침","claim":"식사 패턴 하나가 정답은 아님(지중해·DASH·저탄수화물 등 모두 이점 보고). 탄수화물 비율은 개인별로 정함","foods":[],"cite":"Lim JH. Guidelines for the Use of 2023 Food Exchange Lists for Diabetes Meal Planning. J Korean Diabetes 2024;25(1):42-51","url":"https://synapse.koreamed.org/articles/1516086657"},
            {"level":"논문","claim":"에리스리톨은 혈중 농도와 심혈관 사건 위험의 연관(검증 코호트 HR 1.80·2.21)과 혈소판 반응 증가가 보고됨. 관찰연구라 인과는 확정 아니지만 장기 안전성 연구가 필요하다고 저자가 밝혀, 대체품 목록에서 뺌","foods":["설탕"],"cite":"Witkowski M, et al. The artificial sweetener erythritol and cardiovascular event risk. Nat Med 2023;29:710-718","url":"https://www.nature.com/articles/s41591-023-02223-9"},
            {"level":"논문","claim":"가당 과일주스는 제2형 당뇨 발생 위험 증가와 연관(최고 vs 최저 섭취 RR 1.28, 95% CI 1.04–1.59). 100% 과일주스는 유의한 연관이 없었음(RR 1.03, 95% CI 0.91–1.18). 일반인 대상 관찰연구 메타분석이라, 당뇨 환자의 혈당 반응을 직접 다룬 근거는 아님","foods":["과일주스"],"cite":"Xi B, et al. Intake of Fruit Juice and Incidence of Type 2 Diabetes: A Systematic Review and Meta-Analysis. PLoS ONE 2014;9(3):e93471 (초록을 통해 확인)","url":"https://ideas.repec.org/a/plo/pone00/0093471.html"},
            {"level":"지침","claim":"대한당뇨병학회는 설탕·시럽·물엿 등 첨가당 섭취를 최소화하고 식이섬유가 풍부한 식품으로 바꾸라고 권고(여러 나라 진료지침을 인용)","foods":["물엿","설탕"],"cite":"대한당뇨병학회 의견서(2023-07-12). 메디게이트뉴스 보도를 통해 확인","url":"https://medigatenews.com/news/2929592561"},
            {"level":"참고","claim":"혈당지수(GI)는 물엿 100, 설탕 68, 프락토·이소말토올리고당 25~40으로 보고됨. 올리고당은 설탕보다 GI와 칼로리가 낮지만 단맛을 내려고 넣는 첨가당이라 '줄이기' 원칙에 따라 같은 목록에 둠(물엿보다 근거가 약함). 알룰로스는 혈당 반응을 줄인다고 보고됨","foods":["물엿","올리고당"],"cite":"Kim YH, Kim SB, Kim SJ, Park SW. Market and trend of alternative sweeteners (저칼로리 저감미도 대체감미료 시장 및 동향). Food Sci Ind 2016;49(3)","url":"https://koreascience.or.kr/article/JAKO201629561844413.pdf"},
            {"level":"참고","claim":"WHO는 줄여야 할 '유리당'에 꿀·시럽·과일주스·농축과즙 속 당을 포함시킴(일반인 대상 권고이며 당뇨 환자 전용 지침은 아님). 조청은 곡물 시럽이라 시럽으로 분류해 목록에 둠","foods":["꿀","시럽","조청"],"cite":"WHO. WHO calls on countries to reduce sugars intake among adults and children (2015-03-04)","url":"https://www.who.int/news/item/04-03-2015-who-calls-on-countries-to-reduce-sugars-intake-among-adults-and-children"}
        ]
    },
    '당뇨병': {
        name: '당뇨병',
        reason: '정제 탄수화물(흰쌀·흰빵), 첨가당(설탕·물엿 등), 단 음료는 혈당을 빠르게 올려 혈당 조절을 어렵게 함',
        avoidIngredients: ['설탕', '물엿', '올리고당', '꿀', '시럽', '조청', '흰쌀', '흰빵', '과일주스', '단음료'],
        safeIngredients: ['현미', '귀리', '통곡물', '채소', '콩류', '견과류'],
        substitutes: {
            '설탕': ['스테비아', '알룰로스'],
            '물엿': ['알룰로스'],
            '올리고당': ['알룰로스'],
            '꿀': ['알룰로스'],
            '시럽': ['알룰로스'],
            '조청': ['알룰로스'],
            '흰쌀': ['현미', '귀리', '통곡물'],
            '흰빵': ['통밀빵', '호밀빵'],
            '과일주스': ['생과일(통째로)', '무가당 차'],
            '단음료': ['물', '무가당 탄산수', '무가당 차']
        },
        tips: '탄수화물의 양과 비율은 사람마다 달라서 정해진 하나의 정답은 없어요(개인별 식사 계획 필요). 가공이 적고 식이섬유가 많은 곡물·채소·콩류를 고르고, 설탕 음료와 정제 곡물·첨가당은 줄이세요. 단맛 대체품도 장기 안전성 연구가 진행 중이라 꾸준히 많이 쓰기보다 가끔만 쓰는 편이 좋아요. 과일주스는 설탕이 더해진 제품을 특히 피하세요(100% 주스는 당뇨 발생 위험과의 연관이 뚜렷하지 않았어요).',
        source: "https://glycemicindex.com/2024/09/the-latest-nutrition-recommendations-for-people-with-diabetes",
        evidence: [
            {"level":"지침","claim":"탄수화물 공급원은 식이섬유가 많고 가공이 적은 것을 고르고, 설탕 음료와 가공식품·정제 곡물·첨가당은 줄이기","foods":["설탕","단음료","흰빵","흰쌀"],"cite":"ADA Professional Practice Committee. 5. Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes—2024. Diabetes Care 2024 (요약 페이지를 통해 확인)","url":"https://glycemicindex.com/2024/09/the-latest-nutrition-recommendations-for-people-with-diabetes"},
            {"level":"지침","claim":"식사 패턴 하나가 정답은 아님(지중해·DASH·저탄수화물 등 모두 이점 보고). 탄수화물 비율은 개인별로 정함","foods":[],"cite":"Lim JH. Guidelines for the Use of 2023 Food Exchange Lists for Diabetes Meal Planning. J Korean Diabetes 2024;25(1):42-51","url":"https://synapse.koreamed.org/articles/1516086657"},
            {"level":"논문","claim":"에리스리톨은 혈중 농도와 심혈관 사건 위험의 연관(검증 코호트 HR 1.80·2.21)과 혈소판 반응 증가가 보고됨. 관찰연구라 인과는 확정 아니지만 장기 안전성 연구가 필요하다고 저자가 밝혀, 대체품 목록에서 뺌","foods":["설탕"],"cite":"Witkowski M, et al. The artificial sweetener erythritol and cardiovascular event risk. Nat Med 2023;29:710-718","url":"https://www.nature.com/articles/s41591-023-02223-9"},
            {"level":"논문","claim":"가당 과일주스는 제2형 당뇨 발생 위험 증가와 연관(최고 vs 최저 섭취 RR 1.28, 95% CI 1.04–1.59). 100% 과일주스는 유의한 연관이 없었음(RR 1.03, 95% CI 0.91–1.18). 일반인 대상 관찰연구 메타분석이라, 당뇨 환자의 혈당 반응을 직접 다룬 근거는 아님","foods":["과일주스"],"cite":"Xi B, et al. Intake of Fruit Juice and Incidence of Type 2 Diabetes: A Systematic Review and Meta-Analysis. PLoS ONE 2014;9(3):e93471 (초록을 통해 확인)","url":"https://ideas.repec.org/a/plo/pone00/0093471.html"},
            {"level":"지침","claim":"대한당뇨병학회는 설탕·시럽·물엿 등 첨가당 섭취를 최소화하고 식이섬유가 풍부한 식품으로 바꾸라고 권고(여러 나라 진료지침을 인용)","foods":["물엿","설탕"],"cite":"대한당뇨병학회 의견서(2023-07-12). 메디게이트뉴스 보도를 통해 확인","url":"https://medigatenews.com/news/2929592561"},
            {"level":"참고","claim":"혈당지수(GI)는 물엿 100, 설탕 68, 프락토·이소말토올리고당 25~40으로 보고됨. 올리고당은 설탕보다 GI와 칼로리가 낮지만 단맛을 내려고 넣는 첨가당이라 '줄이기' 원칙에 따라 같은 목록에 둠(물엿보다 근거가 약함). 알룰로스는 혈당 반응을 줄인다고 보고됨","foods":["물엿","올리고당"],"cite":"Kim YH, Kim SB, Kim SJ, Park SW. Market and trend of alternative sweeteners (저칼로리 저감미도 대체감미료 시장 및 동향). Food Sci Ind 2016;49(3)","url":"https://koreascience.or.kr/article/JAKO201629561844413.pdf"},
            {"level":"참고","claim":"WHO는 줄여야 할 '유리당'에 꿀·시럽·과일주스·농축과즙 속 당을 포함시킴(일반인 대상 권고이며 당뇨 환자 전용 지침은 아님). 조청은 곡물 시럽이라 시럽으로 분류해 목록에 둠","foods":["꿀","시럽","조청"],"cite":"WHO. WHO calls on countries to reduce sugars intake among adults and children (2015-03-04)","url":"https://www.who.int/news/item/04-03-2015-who-calls-on-countries-to-reduce-sugars-intake-among-adults-and-children"}
        ]
    },
    '고혈압': {
        name: '고혈압',
        reason: '나트륨이 많은 음식은 체내 수분을 저류시켜 혈압을 높임',
        avoidIngredients: ['소금', '간장', '나트륨', '가공식품', '젓갈', '라면'],
        safeIngredients: ['채소', '과일', '저지방 유제품', '통곡물', '견과류'],
        substitutes: {
            '소금': ['허브', '레몬즙', '식초'],
            '간장': ['저염 간장'],
            '나트륨': ['저염 조미료', '허브'],
            '가공식품': ['신선식품'],
            '젓갈': ['저염 젓갈', '허브양념'],
            '라면': ['저염 국수(직접 육수)']
        },
        tips: '나트륨은 줄이고 칼륨이 많은 채소·과일을 늘리세요. 2025년 미국 지침은 나트륨을 하루 2,300mg 이하, 대부분 성인은 이상적으로 1,500mg 이하로 권하고 DASH 식단(채소·과일·통곡물·살코기·생선)을 권해요. 술은 끊는 것이 가장 좋고, 마신다면 줄이세요.',
        source: "https://www.uspharmacist.com/article/acc-aha-hypertension-guideline-update",
        evidence: [
            {"level":"지침","claim":"나트륨은 하루 2,300mg 이하, 대부분 성인은 이상적으로 1,500mg 이하. 칼륨은 하루 3,500~5,000mg","foods":["소금","나트륨"],"cite":"Jones DW, et al. 2025 AHA/ACC/AANP/AAPA/ABC/ACCP/ACPM/AGS/AMA/ASPC/NMA/PCNA/SGIM Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. J Am Coll Cardiol 2025;86(18):1567-1678 (원문 확인, 2026-10-27)","url":"https://iro.uiowa.edu/esploro/outputs/journalArticle/2025-AHAACCAANPAAPAABCACCPACPMAGSAMAASPCNMAPCNASGIM-Guideline-for-the-Prevention/9984948112702771"},
            {"level":"지침","claim":"DASH 식단 권고(채소·과일·통곡물·살코기와 생선·건강한 지방)","foods":[],"cite":"Jones DW, et al. 2025 AHA/ACC/AANP/AAPA/ABC/ACCP/ACPM/AGS/AMA/ASPC/NMA/PCNA/SGIM Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. J Am Coll Cardiol 2025;86(18):1567-1678 (요약 기사를 통해 확인)","url":"https://www.uspharmacist.com/article/acc-aha-hypertension-guideline-update"},
            {"level":"지침","claim":"어떤 양의 알코올도 혈압을 올리고 금주자의 고혈압 위험이 가장 낮아, 금주를 목표로 하는 것이 최적. (과체중이면 최소 5% 체중 감량은 요약 기사로만 확인)","foods":[],"cite":"Jones DW, et al. 2025 AHA/ACC/AANP/AAPA/ABC/ACCP/ACPM/AGS/AMA/ASPC/NMA/PCNA/SGIM Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. J Am Coll Cardiol 2025;86(18):1567-1678 (알코올 부분은 원문 확인, 2026-10-27)","url":"https://www.uspharmacist.com/article/acc-aha-hypertension-guideline-update"},
            {"level":"지침","claim":"칼륨 대체소금은 식탁 소금으로 나트륨을 주로 섭취하는 사람에게 권하되, 신장질환 등 칼륨 관리가 필요한 경우는 제외","foods":[],"cite":"Jones DW, et al. 2025 AHA/ACC/AANP/AAPA/ABC/ACCP/ACPM/AGS/AMA/ASPC/NMA/PCNA/SGIM Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. J Am Coll Cardiol 2025;86(18):1567-1678 (요약 기사를 통해 확인)","url":"https://www.uspharmacist.com/article/acc-aha-hypertension-guideline-update"},
            {"level":"지침","claim":"국내 고혈압 지침(2018)도 나트륨 제한·절주·채소와 과일 충분 섭취를 생활요법으로 권고","foods":["소금","나트륨"],"cite":"대한고혈압학회 2018 진료지침(Clin Hypertens 2019;25:20). 내용은 Clin Hypertens 2020;26:5 논문의 인용으로 확인","url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC7073010"},
            {"level":"논문","claim":"한국인의 나트륨 급원: 소금 약 21%, 김치 약 14%, 간장 약 11~12%, 된장 약 6%, 라면 약 4~5%, 고추장 약 4~5%. 장류(간장·된장·고추장 등)를 합치면 약 20% 이상(합산은 우리가 계산한 값). 상위 10개 급원이 섭취량의 약 70%(두 가지 추정 방법 모두)","foods":["소금","간장","라면"],"cite":"Lee JY, et al. Dietary sodium and potassium intake of Koreans estimated using 2 different sources of their contents in foods, Food & Nutrient Database and the Korean Total Diet Study: a comparative study. Korean J Community Nutr 2023;28(3):235-244","url":"https://www.koreascience.or.kr/article/JAKO202322136704392.pdf"},
            {"level":"참고","claim":"가공식품(빵·제과류 등)은 상위 급원이지만 비중이 작음(약 2.3%). 젓갈은 상위 10개 급원에 별도 항목으로 나오지 않음. 나트륨 제한 원칙을 적용한 예시로 목록에 둠","foods":["가공식품","젓갈"],"cite":"Lee JY, et al. Dietary sodium and potassium intake of Koreans estimated using 2 different sources of their contents in foods, Food & Nutrient Database and the Korean Total Diet Study: a comparative study. Korean J Community Nutr 2023;28(3):235-244","url":"https://www.koreascience.or.kr/article/JAKO202322136704392.pdf"},
            {"level":"참고","claim":"조리할 때 소금·간장·된장·고추장·쌈장 등 양념류와 화학조미료 사용을 줄이라고 안내. 장류를 합치면 한국인 나트륨 급원 중 약 20% 이상(위 논문의 항목을 더한 값)","foods":["간장"],"cite":"국민건강보험공단(nhis.or.kr) 건강보험 매거진 138호 기사(c02)","url":"https://www.nhis.or.kr/magazin/138/html/c02.html"}
        ]
    },
    '고콜레스테롤': {
        name: '고콜레스테롤',
        reason: '포화지방·콜레스테롤이 많은 음식은 혈중 콜레스테롤을 높여 심혈관 질환 위험을 높임',
        avoidIngredients: ['삼겹살', '가공육', '베이컨', '소세지', '소시지', '햄', '스팸', '튀긴음식', '전지우유', '버터'],
        safeIngredients: ['올리브유', '생선', '귀리', '저지방 유제품', '견과류'],
        substitutes: {
            '삼겹살': ['닭가슴살', '흰살생선'],
            '가공육': ['신선육(닭가슴살 등)'],
            '베이컨': ['신선육(닭가슴살 등)'],
            '소세지': ['신선육(닭가슴살 등)'],
            '소시지': ['신선육(닭가슴살 등)'],
            '햄': ['신선육(닭가슴살 등)'],
            '스팸': ['신선육(닭가슴살 등)'],
            '튀긴음식': ['구운 음식', '찐 음식'],
            '전지우유': ['저지방 우유', '무지방 우유'],
            '버터': ['올리브유']
        },
        tips: '포화지방은 하루 에너지의 7% 이내, 트랜스지방은 최대한 적게, 식이섬유는 하루 25g 이상, 당류는 에너지의 10~20% 이내, 술은 하루 1~2잔 이내(가급적 금주)로 권고돼요. 콜레스테롤 섭취는 "적게"로만 제시되고 숫자 기준은 없어요. 아래 식품 목록은 이 원칙을 적용한 예시예요.',
        source: "https://www.lipid.or.kr/uploaded/board/guideline/_50e8f3527d0798a82a29b8ef6c363cce2.pdf",
        evidence: [
            {"level":"지침","claim":"포화지방산은 하루 섭취 에너지의 7% 이내, 트랜스지방은 최대한 적게. 콜레스테롤 섭취는 적게(수치 기준 없음)","foods":[],"cite":"한국지질·동맥경화학회 진료지침위원회. 이상지질혈증 진료지침 제5판","url":"https://www.lipid.or.kr/uploaded/board/guideline/_50e8f3527d0798a82a29b8ef6c363cce2.pdf"},
            {"level":"지침","claim":"버터·라드 같은 동물성 지방은 액체 식물성 기름으로, 전지 유제품은 저지방·무지방으로 바꾸기. 붉은 고기는 심혈관 질환 위험과 연관되고 가공육은 연관이 더 강해서 살코기를 고르고 가공육은 피하기","foods":["버터","전지우유","가공육","삼겹살"],"cite":"Lichtenstein AH, et al. 2021 Dietary Guidance to Improve Cardiovascular Health: A Scientific Statement From the American Heart Association. Circulation 2021 (ACC 요약을 통해 확인)","url":"https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2021/11/23/19/45/2021-Dietary-Guidance-to-Improve"},
            {"level":"참고","claim":"튀긴음식: AHA 2021은 튀김 일반을 직접 다루지 않고 생선 튀김은 이득이 없다고만 언급함. 트랜스·포화지방 제한 원칙을 적용한 예시","foods":["튀긴음식"],"cite":"지침의 \"포화·트랜스지방 제한\" 원칙을 적용한 예시","url":""},
            {"level":"지침","claim":"식이섬유 하루 25g 이상, 총 당류 에너지의 10~20% 이내, 알코올 하루 1~2잔 이내(가급적 금주)","foods":[],"cite":"한국지질·동맥경화학회 진료지침위원회. 이상지질혈증 진료지침 제5판","url":"https://www.lipid.or.kr/uploaded/board/guideline/_50e8f3527d0798a82a29b8ef6c363cce2.pdf"}
        ]
    },
    '신장질환': {
        name: '신장질환',
        reason: '나트륨·칼륨·인·단백질 조절이 필요한 질환이에요. 특히 혈중 칼륨이 높을 때는 칼륨이 많은 식품을 제한해요',
        avoidIngredients: ['바나나', '토마토', '케첩', '감자', '시금치', '가공식품', '짠음식'],
        safeIngredients: ['사과', '포도', '양배추', '흰쌀'],
        substitutes: {
            '바나나': ['사과', '블루베리'],
            '토마토': ['오이', '양배추'],
            '케첩': ['오이', '양배추'],
            '감자': ['흰쌀밥(소량)'],
            '시금치': ['양배추', '콜리플라워'],
            '가공식품': ['신선식품'],
            '짠음식': ['저염식']
        },
        tips: '아래 목록은 혈중 칼륨이 높을 때를 기준으로 한 보수적인 예시예요. 칼륨·인 제한은 혈액검사 수치와 신장 기능 단계에 따라 사람마다 달라서(KDIGO 2024·KDOQI) 수치가 정상이면 채소·과일을 일률적으로 끊을 필요는 없어요. 공통으로는 나트륨 하루 2g(소금 약 5g) 미만, 가공식품 줄이기예요. 반드시 신장 전문 의료진·영양사와 상담하세요.',
        source: "https://www.nephjc.com/news/kdigo-ckd-part2",
        evidence: [
            {"level":"지침","claim":"CKD 성인은 나트륨을 하루 2g(소금 5g) 미만으로 제한(권고 3.3.2.1, 2C·약한 권고). G3~G5 성인의 단백질은 하루 0.8g/kg 유지를 제안(권고 3.3.1.1, 2C), 진행 위험이 있으면 1.3g/kg 초과 피하기. 매우 낮은 단백 식사는 의료진의 밀착 감독 아래에서만","foods":["짠음식"],"cite":"KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD. Kidney Int 2024;105(4S):S117-S314 (원문 확인, 2026-10-27)","url":"https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf"},
            {"level":"지침","claim":"초가공식품을 피하고 식물성 단백질을 우선하는 건강하고 다양한 식사(실무 권고, 근거는 제한적)","foods":["가공식품"],"cite":"KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD. Kidney Int 2024;105(4S):S117-S314 (NephJC 요약을 통해 확인)","url":"https://www.nephjc.com/news/kdigo-ckd-part2"},
            {"level":"지침","claim":"칼륨 제한은 고칼륨혈증 관리 선택지 중 하나이며 숫자 목표는 없음. 칼륨·인·나트륨은 신장 영양사가 개인별로 조절. KDOQI도 혈중 칼륨 수치에 맞춰 조절하는 방향","foods":[],"cite":"KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD. Kidney Int 2024;105(4S):S117-S314 (NephJC 요약을 통해 확인) / KDOQI Clinical Practice Guideline for Nutrition in CKD: 2020 Update (공개 초안을 다룬 Healio 기사를 통해 확인, 최종본 문구는 미확인)","url":"https://www.nephjc.com/news/kdigo-ckd-part2"},
            {"level":"참고","claim":"혈중 칼륨이 높을 때 제한하는 식품 예: 바나나(반 개), 토마토·토마토 제품, 감자(흰·고구마), 익힌 시금치. 칼륨이 적은 식품 예: 사과, 양배추. 1회 200mg 이상이면 고칼륨 식품으로 보고, 양이 많으면 저칼륨 식품도 고칼륨이 될 수 있음","foods":["바나나","토마토","감자","시금치"],"cite":"National Kidney Foundation. Potassium in Your CKD Diet (환자 교육 자료, 지침 아님)","url":"https://www.kidney.org/atoz/content/potassium"}
        ]
    },
    '위산역류': {
        name: '위산역류',
        reason: '일부 음식은 사람에 따라 위산 역류 증상을 유발할 수 있어요',
        avoidIngredients: ['커피', '에스프레소', '탄산음료', '기름진 음식', '매운 음식', '초콜릿', '술', '와인', '럼', '청주', '소주', '위스키', '막걸리'],
        safeIngredients: ['오트밀', '바나나', '채소', '현미'],
        substitutes: {
            '커피': ['무카페인 차', '보리차'],
            '에스프레소': ['무카페인 차', '보리차'],
            '탄산음료': ['물', '무가당 차'],
            '기름진 음식': ['찜 요리', '구이 요리'],
            '매운 음식': ['순한 양념(저자극)'],
            '초콜릿': ['바나나'],
            '술': ['물', '무가당 음료'],
            '와인': ['물', '무가당 음료'],
            '럼': ['물', '무가당 음료'],
            '청주': ['물', '무가당 음료'],
            '소주': ['물', '무가당 음료'],
            '위스키': ['물', '무가당 음료'],
            '막걸리': ['물', '무가당 음료']
        },
        tips: '2022년 ACG 지침은 과체중이면 체중 감량, 취침 전 2~3시간은 식사 피하기, 밤에 증상이 있으면 침대 머리 쪽 높이기, 증상을 일으키는 음식은 피하기를 권해요. 아래 목록(커피·초콜릿 등)은 흔히 거론되는 유발 음식 예시라서, 본인에게 증상을 일으키는 것만 줄여도 돼요. 커피·초콜릿·술은 연구마다 연관이 뚜렷하지 않았어요.',
        source: "https://blogs.the-hospitalist.org/content/updated-acg-gerd-guideline-addresses-increased-scrutiny-ppi-therapy",
        evidence: [
            {"level":"지침","claim":"과체중이면 체중 감량, 취침 전 2~3시간 식사 피하기, 야간 증상이 있으면 침대 머리 쪽 높이기","foods":[],"cite":"Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol 2022 (The Hospitalist 요약 기사를 통해 확인)","url":"https://blogs.the-hospitalist.org/content/updated-acg-gerd-guideline-addresses-increased-scrutiny-ppi-therapy"},
            {"level":"지침","claim":"증상을 유발하는 음식(trigger foods)은 피하기(요약 기사에는 개별 식품명이 없음)","foods":[],"cite":"Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol 2022 (The Hospitalist 요약 기사를 통해 확인)","url":"https://blogs.the-hospitalist.org/content/updated-acg-gerd-guideline-addresses-increased-scrutiny-ppi-therapy"},
            {"level":"논문","claim":"체계적 문헌고찰: 고지방 식사·탄산음료·감귤류·맵고 짠 음식·튀긴 음식이 역류 위험과 연관된다고 정리했지만 연구마다 결과가 엇갈림(탄산음료 OR 1.86, 95% CI 1.16–2.97처럼 연관이 보인 연구도, 튀긴 음식 OR 1.52 [0.95–2.45]나 매운 음식 OR 0.97 [0.66–1.45]처럼 뚜렷하지 않은 연구도 있음). 관찰연구만 포함","foods":["탄산음료","기름진 음식","매운 음식"],"cite":"Heidarzadeh-Esfahani N, et al. Dietary Intake in Relation to the Risk of Reflux Disease: A Systematic Review. Prev Nutr Food Sci 2021;26(4):367-379","url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC8747955/"},
            {"level":"참고","claim":"커피·초콜릿·술은 같은 고찰에서 대체로 유의한 연관이 없었음(예: 커피 OR 0.89, 술 OR 0.83). 흔히 거론되는 유발 음식이라 본인에게 증상이 있는지 확인하는 용도로만 목록에 둠","foods":["커피","초콜릿","술"],"cite":"Heidarzadeh-Esfahani N, et al. Dietary Intake in Relation to the Risk of Reflux Disease: A Systematic Review. Prev Nutr Food Sci 2021;26(4):367-379","url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC8747955/"}
        ]
    },
    '글루텐불내증': {
        name: '글루텐 불내증(셀리악병)',
        reason: '글루텐이 소장 점막을 손상시켜 영양흡수 장애를 유발함',
        avoidIngredients: [...GLUTEN_AVOID],
        safeIngredients: ['쌀', '옥수수', '감자', '글루텐프리 제품'],
        substitutes: { ...GLUTEN_SUBSTITUTES },
        tips: '평생 글루텐(밀·보리·호밀)을 완전히 제거하는 식이가 핵심이에요. 가공식품 속 숨은 글루텐은 성분표로 확인하세요. 귀리는 "글루텐프리" 표시 제품만 드세요(일반 귀리는 밀 등과 섞일 수 있어요). 글루텐프리 식이에 경험 있는 영양사와 식단을 점검받는 것이 표준 진료예요.',
        source: "https://www.guidelinecentral.com/summaries/acg-clinical-guidelines-diagnosis-and-management-of-celiac-disease",
        evidence: [
            {"level":"지침","claim":"글루텐프리 귀리는 식단에 포함 가능. 단 교차오염·귀리 품종 차이·드문 반응 가능성이 있어 내성을 확인","foods":["귀리","오트밀"],"cite":"Rubio-Tapia A, Hill ID, Semrad C, Kelly CP, Lebwohl B. ACG Guidelines Update: Diagnosis and Management of Celiac Disease. Am J Gastroenterol 2023;118(1):59-76 (Guideline Central 요약을 통해 확인)","url":"https://www.guidelinecentral.com/summaries/acg-clinical-guidelines-diagnosis-and-management-of-celiac-disease"},
            {"level":"지침","claim":"식이 준수 평가의 표준은 글루텐프리 식이 경험이 있는 영양사 면담. 장 점막 회복을 치료 목표로 제안","foods":[],"cite":"Rubio-Tapia A, Hill ID, Semrad C, Kelly CP, Lebwohl B. ACG Guidelines Update: Diagnosis and Management of Celiac Disease. Am J Gastroenterol 2023;118(1):59-76 (Guideline Central 요약을 통해 확인)","url":"https://www.guidelinecentral.com/summaries/acg-clinical-guidelines-diagnosis-and-management-of-celiac-disease"},
            {"level":"참고","claim":"밀·보리·호밀과 이를 쓰는 가공품 제거(기존 출처 유지)","foods":["밀가루","밀","보리","호밀"],"cite":"현명한 병원 건강정보(기존 출처 유지, 이번 작업에서 원문은 다시 확인하지 못함)","url":"https://www.hyunmyoung.co.kr/general-medicine/celiac-disease-recurrence-prevention"}
        ]
    },
    '통풍': {
        name: '통풍',
        reason: '퓨린 함량이 높은 음식은 요산 수치를 높여 통풍 발작을 유발할 수 있음',
        avoidIngredients: ['맥주', '술', '와인', '럼', '청주', '소주', '위스키', '막걸리', '내장류', '곱창', '대창', '소대창', '막창', '멸치', '고등어', '정어리', '참치', '가리비', '조개류', '단음료'],
        safeIngredients: ['저지방 유제품', '채소', '두부', '달걀'],
        substitutes: {
            '맥주': ['물', '무알코올 음료'],
            '내장류': ['두부', '달걀'],
            '곱창': ['두부', '달걀'],
            '대창': ['두부', '달걀'],
            '소대창': ['두부', '달걀'],
            '막창': ['두부', '달걀'],
            '와인': ['물', '무알코올 음료'],
            '럼': ['물', '무알코올 음료'],
            '청주': ['물', '무알코올 음료'],
            '소주': ['물', '무알코올 음료'],
            '위스키': ['물', '무알코올 음료'],
            '막걸리': ['물', '무알코올 음료'],
            '멸치': ['다시마 육수'],
            '고등어': ['흰살생선(저퓨린)'],
            '정어리': ['흰살생선(저퓨린)'],
            '조개류': ['두부'],
            '술': ['물', '무알코올 음료'],
            '참치': ['흰살생선(저퓨린)'],
            '가리비': ['두부'],
            '단음료': ['물', '무가당 탄산수', '무가당 차']
        },
        tips: '술(특히 맥주)을 줄이고, 내장류·정어리·참치·가리비처럼 퓨린이 많은 식품은 제한하세요. 설탕·과당이 든 음료도 줄이고, 저지방 유제품은 도움이 될 수 있어요. 미국류마티스학회(2020)는 퓨린 제한을 "조건부 권고(근거 수준 낮음)"로, 알코올 제한을 권고해요. 물을 충분히 마시는 것도 도움이 돼요.',
        source: "https://www.eatrightpro.org/news-center/practice-trends/gout-is-a-purine-restricted-diet-still-recommended",
        evidence: [
            {"level":"지침","claim":"알코올 섭취 제한 권고(질병 활동도와 관계없이, 조건부)","foods":["맥주","술"],"cite":"FitzGerald JD, et al. 2020 ACR Guideline for the Management of Gout. Arthritis Care Res 2020;72(6):744-760 (Eat Right Pro 기사를 통해 확인)","url":"https://www.eatrightpro.org/news-center/practice-trends/gout-is-a-purine-restricted-diet-still-recommended"},
            {"level":"지침","claim":"퓨린 섭취 제한은 조건부 권고(근거 확실성 낮음). 내장류는 퓨린이 특히 많고 정어리·참치·가리비 등도 제한되는 편","foods":["내장류","정어리","참치","가리비"],"cite":"FitzGerald JD, et al. 2020 ACR Guideline for the Management of Gout. Arthritis Care Res 2020;72(6):744-760 (Eat Right Pro 기사를 통해 확인)","url":"https://www.eatrightpro.org/news-center/practice-trends/gout-is-a-purine-restricted-diet-still-recommended"},
            {"level":"논문","claim":"과당·설탕 음료의 높은 섭취는 통풍·고요산혈증 위험 증가와 연관(2018 메타분석)","foods":["단음료"],"cite":"Rongrong L, Kang Y, Chunwei L. Asia Pac J Clin Nutr 2018;27(6):1344-1356 (Eat Right Pro 기사를 통해 확인)","url":"https://www.eatrightpro.org/news-center/practice-trends/gout-is-a-purine-restricted-diet-still-recommended"},
            {"level":"논문","claim":"저지방 유제품은 혈청 요산 감소와 연관(유제품 섭취와 통풍 위험은 무관하다는 결과도 있음)","foods":[],"cite":"FitzGerald JD, et al. 2020 ACR Guideline for the Management of Gout. Arthritis Care Res 2020;72(6):744-760 (Eat Right Pro 기사를 통해 확인)","url":"https://www.eatrightpro.org/news-center/practice-trends/gout-is-a-purine-restricted-diet-still-recommended"},
            {"level":"논문","claim":"해산물 섭취가 많을수록 남성의 통풍 위험이 높았음(최고 vs 최저 섭취군 RR 1.51, 95% CI 1.17–1.95; 육류 RR 1.41, 유제품 RR 0.56). 남성 47,150명을 12년 추적한 코호트이며 해산물 전체 기준이라 멸치·고등어·조개류 개별 식품의 근거는 아님","foods":["멸치","고등어","조개류"],"cite":"Choi HK, Atkinson K, Karlson EW, et al. Purine-rich foods, dairy and protein intake, and the risk of gout in men. N Engl J Med 2004 (PMID 15014182, 요약 페이지를 통해 확인)","url":"https://www.metabolicum.com/learn/research/choi-2004-purine-foods-gout"}
        ]
    }
};

// 대체 음식별 짧은 설명/특징 (괄호 부가정보 제거 후 이름으로 매칭)
const substituteInfo = {
    '코코넛 아미노스': '코코넛 수액을 발효시킨 소스로, 간장과 비슷한 감칠맛을 내요. 간장보다 짠맛이 덜해요. 대두가 들어가지 않는 제품이 많지만, 라벨에서 대두 여부를 꼭 확인하세요.',
    '고기류(닭고기·소고기 등)': '두부의 단백질 역할을 대신할 수 있는 동물성 단백질',
    '버터': '유당 함량이 매우 낮아 유당불내증이면 소량은 대부분 괜찮은 경우가 많음 (우유 알레르기는 예외)',
    '식물성 마가린': '식물성 기름으로 만든 스프레드로 버터 대신 써요. 우유 성분(유청·카제인)이 든 제품도 있어 성분표를 확인하세요.',
    '우유 없는 마가린(성분표 확인)': '식물성 기름으로 만든 스프레드예요. 마가린에도 우유 성분(유청·카제인)이 든 제품이 많아요. "우유 무첨가" 표시와 성분표를 확인하세요.',
    '코코넛 크림': '코코넛 과육에서 추출한 고형질 크림, 휘핑도 가능한 유제품 대체품',
    '식물성 휘핑크림': '두유 등 식물성 원료로 만든 유제품 없는 휘핑크림',
    '저유당 치즈': '오래 숙성되며 유당이 많이 분해된 치즈, 유당불내증이면 소량 섭취 가능한 경우가 많음',
    '다크초콜릿': '카카오 함량이 높아 유제품이 적게 들어간 초콜릿',
    '두유초콜릿': '두유로 만들어 유당이 없는 초콜릿 대체품',
    '비건 치즈': '유제품 없이 식물성 원료로 만든 치즈 대체품',
    '두유 요구르트': '두유를 발효시켜 만든 유당 없는 요구르트 대체품',
    '코코넛 요구르트': '코코넛 밀크를 발효시켜 만든 유당 없는 요구르트 대체품',
    '두유가루': '두유를 분말화한 우유가루 대체품',
    '코코넛밀크가루': '코코넛밀크를 분말화한 우유가루 대체품',
    '식물성 대체식품 전반': '두유·코코넛 등 식물성 원료 기반 유제품 대체식품 전반',
    '코코넛 오일': '코코넛 과육에서 추출한 식물성 기름, 버터 대신 굽거나 볶는 요리에 활용 가능',
    '감자': '탄수화물 공급원, 삶거나 쪄서 조리하면 좋음',
    '고기류': '동물성 단백질 공급원',
    '구운 음식': '기름을 적게 써서 지방 섭취를 줄일 수 있음',
    '구이 요리': '기름을 적게 써서 지방 섭취를 줄일 수 있음',
    '귀리': '식이섬유가 풍부해 혈당을 천천히 올림',
    '귀리 밀크': '유당이 없고 식이섬유가 있는 식물성 음료',
    '글루텐프리 밀가루': '쌀가루·옥수수가루 등으로 만든 밀가루 대체품',
    '글루텐프리 빵': '밀 대신 쌀 등으로 만들어 글루텐이 없는 빵',
    '글루텐프리 귀리': '글루텐프리 인증을 받은 귀리. 일반 귀리는 밀 등과 섞일 수 있어 인증 제품만 드세요 (처음엔 소량으로 몸 반응 확인)',
    '글루텐프리 오트밀': '글루텐프리 인증을 받은 오트밀. 일반 오트밀은 교차오염 가능성이 있어요',
    '글루텐프리 파스타': '쌀이나 옥수수 등으로 만든 글루텐 없는 면',
    '다시마 육수': '멸치 대신 감칠맛을 내는 저퓨린 육수',
    '달걀': '단백질이 풍부한 대체 단백질원',
    '닭가슴살': '지방이 적은 고단백 부위',
    '닭고기': '돼지고기보다 지방 함량이 낮은 육류',
    '두부': '식물성 단백질원, 지방과 퓨린 함량이 낮음',
    '두유': '콩으로 만든 유당 없는 대체 음료',
    '락토스프리 우유': '유당을 제거해 소화가 편한 우유',
    '레몬즙': '소금 대신 신맛으로 감칠맛을 더함',
    '무가당 음료': '당 첨가 없이 갈증을 해소하는 음료',
    '무가당 차': '당 첨가 없이 갈증을 해소하는 음료',
    '무가당 탄산수': '당 첨가 없이 갈증을 해소하는 음료',
    '무알코올 음료': '알코올 없이 술 대신 마실 수 있는 음료',
    '무지방 우유': '지방을 제거해 포화지방 섭취를 줄인 우유',
    '무카페인 차': '카페인이 없어 위 자극이 적은 차',
    '물': '가장 기본적인 무가당·무카페인 수분 공급원',
    '밀면': '밀로 만든 일반 면 (밀 알레르기가 없는 경우만 대체 가능)',
    '바나나': '칼륨이 풍부하고 위벽을 보호하는 알칼리성 과일',
    '배': '칼륨 함량이 비교적 낮은 과일',
    '보리차': '카페인 없이 구수하게 즐기는 대체 차',
    '블루베리': '항산화 성분이 풍부한 저칼륨 과일',
    '사과': '칼륨 함량이 낮은 편이라 신장질환에 비교적 안전',
    '생과일(통째로)': '가공 없이 통째로 먹어 당 흡수 속도를 늦춤',
    '소고기(알레르기 없는 경우)': '돼지고기 대신 선택 가능한 육류 (개인차 확인 필요)',
    '순한 양념(저자극)': '자극이 적어 위벽에 부담을 덜 주는 조리법',
    '스테비아': '설탕 대신 쓰는 천연 감미료, 혈당에 영향이 적음',
    '식초': '소금 대신 산미로 풍미를 더하는 조미료',
    '신선식품': '가공을 거치지 않아 나트륨 함량이 낮은 식품',
    '신선육(닭가슴살 등)': '가공육보다 나트륨·첨가물이 적은 육류',
    '쌀': '밀 대신 사용하는 글루텐 없는 곡물',
    '쌀 음료': '쌀로 만든 유당 없는 대체 음료',
    '쌀가루': '밀가루 대신 쓰는 글루텐 없는 가루',
    '쌀가루물': '쌀가루에 물을 섞은 글루텐 없는 옷. 계란 1개당 쌀가루 1큰술 + 물 2큰술 기준으로 걸쭉하게 풀어 계란물 대신 입혀요. 전분물과 같은 방식으로 쓰고, 밀가루 알레르기가 있어도 안전해요.',
    '쌀국수': '밀 대신 쌀로 만들어 글루텐이 없는 면',
    '씨앗류': '견과류 대신 즐길 수 있는 고소한 간식',
    '아몬드 밀크': '아몬드로 만든 유당 없는 식물성 음료',
    '아쿠아파바': '병아리콩 삶은 물로, 계란 흰자 대신 거품을 낼 수 있음',
    '아쿠아파바(무맛 결합제)': '병아리콩 삶은 물, 맛이 거의 없어 짠 음식의 반죽 결합·튀김옷·소스 유화에 계란 대신 활용 가능',
    '아쿠아파바(계란 대체)': '병아리콩 삶은 물로, 계란 흰자 대신 거품을 낼 수 있음',
    '알룰로스': '설탕과 단맛이 비슷하지만 혈당에 거의 영향이 없는 감미료',
    '양배추': '칼륨이 낮은 편이라 신장식이에 활용하기 좋은 채소',
    '에리스리톨': '당알코올의 일종으로 혈당을 거의 올리지 않는 감미료',
    '영양 효모(대체 치즈 맛)': '치즈와 비슷한 고소한 풍미를 내는 비유제품 재료',
    '오이': '수분이 많고 칼륨이 비교적 낮은 채소',
    '옥수수': '밀 대신 사용 가능한 글루텐 없는 곡물',
    '옥수수가루': '밀가루 대신 쓰는 글루텐 없는 가루',
    '올리브유': '불포화지방이 풍부해 포화지방인 버터를 대체',
    '요구르트': '발효 유제품으로 유당이 일부 분해되어 있음',
    '요구르트(베이킹)': '발효 유제품으로 유당이 일부 분해되어 있음',
    '요구르트(소량)': '발효 유제품으로 유당이 일부 분해되어 있음',
    '전분물': '전분(감자·옥수수 전분 등)에 물을 섞은 것. 계란 1개당 전분 1큰술 + 물 2큰술 기준으로 걸쭉하게 풀어 계란물 대신 입혀요. 바삭한 옷이 입혀지고 노란빛은 나지 않아요. 너무 되직하면 물을 조금 더 넣어요.',
    '저염 국수(직접 육수)': '직접 육수를 내어 나트륨을 줄인 면 요리',
    '저염 젓갈': '나트륨 함량을 낮춘 젓갈 제품',
    '저염 조미료': '나트륨 함량을 낮춘 대체 조미료',
    '저염식': '나트륨 섭취를 줄인 조리법 전반',
    '저유당 우유': '유당 함량을 낮춰 소화 부담을 줄인 우유',
    '저지방 우유': '지방을 줄여 포화지방 섭취를 낮춘 우유',
    '찐 음식': '기름을 쓰지 않아 지방 섭취를 줄이는 조리법',
    '찜 요리': '기름 없이 쪄서 지방 섭취를 줄이는 조리법',
    '참기름': '버터 대신 쓸 수 있는 식물성 기름',
    '코코넛 밀크': '코코넛으로 만든 유당 없는 식물성 음료',
    '콜리플라워': '칼륨이 낮은 편인 십자화과 채소',
    '통곡물': '식이섬유가 풍부해 혈당을 천천히 올리는 곡물',
    '통밀빵': '흰빵보다 식이섬유가 많아 혈당 상승이 완만함',
    '포도': '간편하게 먹을 수 있는 저칼륨 과일 대안',
    '포도씨유': '버터 대신 쓸 수 있는 식물성 기름',
    '해바라기씨': '견과류 대신 즐길 수 있는 씨앗류 간식',
    '해바라기씨버터': '땅콩버터 대신 쓸 수 있는 씨앗 기반 스프레드',
    '허브': '소금 대신 향으로 맛을 내는 향신재료',
    '허브양념': '소금 대신 향신료로 맛을 낸 양념',
    '현미': '흰쌀보다 식이섬유가 많아 혈당을 천천히 올림',
    '호밀빵': '흰빵보다 식이섬유가 많은 대체 빵',
    '호박씨': '견과류 대신 즐길 수 있는 씨앗류 간식',
    '흰살생선': '붉은 육류보다 지방이 적은 단백질원',
    '흰살생선(알레르기 없는 경우)': '붉은 육류보다 지방이 적은 단백질원',
    '흰살생선(저퓨린)': '붉은 육류보다 지방이 적은 단백질원',
    '흰쌀밥(소량)': '감자보다 칼륨 함량이 낮은 편인 주식',

    // 계란 대체 (2026-09-20 검토 반영)
    '바나나(베이킹용)': '잘 익은 바나나를 으깨 계란 1개당 1/2개를 넣어요. 반죽을 붙이고 촉촉하게 해 주지만 바나나 맛이 남아요.',
    '요구르트(베이킹용)': '플레인 요구르트가 반죽을 촉촉하게 하고 결합을 도와요. 유제품이라 우유 알레르기나 유당불내증과는 맞지 않아요.',
    '사과소스(계란 대신)': '무가당 사과소스(사과 퓨레)를 계란 1개당 1/4컵 넣어요. 맛이 거의 없고 반죽을 촉촉하게 붙여 줘요. 계란 반죽보다 묵직해질 수 있어요.',
    '전분 반죽물(계란 대신)': '전분 1큰술 + 물 2큰술(계란 1개 기준)을 섞어 계란 자리에 넣어요. 재료를 붙여 주는 역할을 해요. 반죽이 묽으면 전분을 조금 더 넣어요.',
    '불린 빵가루 추가(계란 대신)': '우유(또는 두유)에 불린 빵가루를 조금 더 넣어 고기 반죽을 붙여요. 반죽이 조금 부드러워지니 모양을 잡을 때 살살 다뤄요.',
    '전분 우유물(계란물 대신)': '계란 1개당 전분 1큰술을 우유(식빵 2장에 약 1/2컵)에 풀어 계란물 대신 써요. 우유가 안 맞으면 두유 같은 대체 우유를 써도 돼요. 겉이 바삭해지고 계란 특유의 맛은 없어요. 오래 담그면 빵이 부서져요.',
    '계란 빼고 부치기': '계란은 주로 반죽을 붙여 주는 역할이라 없어도 부칠 수 있어요. 양배추가 많고 반죽이 적어서 결합 부담이 작아요. 반죽이 부서지면 전분물(전분 1큰술 + 물 2큰술)을 조금 넣고, 식감은 조금 가벼워질 수 있어요.',
    '계란 없이 빚기': '뇨끼는 계란 없이도 만들 수 있어요. 전분이 많은 감자(분질 감자)를 쓰면 반죽이 스스로 뭉쳐요. 반죽이 더 부드러워서 밀가루를 조금씩 넣어 가며 되기를 맞추고, 처음이라면 살살 다뤄요.',
    '계란 빼고 볶기': '계란은 밥에 고소함을 더하는 재료라 빼도 볶음밥이 돼요. 대신 고소함이 조금 줄어요.',
    '노른자 없는 크림(생크림+마스카포네)': '이 크림은 노른자 없이 마스카포네와 휘핑한 생크림만으로도 만들 수 있어요. 색이 조금 연해져요. 유제품이라 우유 알레르기나 유당불내증이 있다면 맞지 않아요.',
    '닭가슴살(삶아 찢은 것)': '게맛살(크래미)은 계란이 들어 있는 제품이 있어서 계란 알레르기가 있으면 피하는 게 안전해요. 삶아서 결대로 찢은 닭가슴살로 바꾸면 비슷하게 찢어 넣을 수 있어요.',
    '계란 없는 비스킷·스펀지(성분표 확인)': '레이디핑거에는 계란이 들어 있어요. 계란이 없는 비스킷이나 스펀지로 바꾸고, 시판 제품은 성분표를 꼭 확인해요.',

    // 2026-10-19 추가: 알레르기 대체품 설명
    '쌀 부침가루': '쌀가루로 만든 부침가루예요. 밀 없이 부칠 수 있어요. 제품에 따라 밀가루가 섞이기도 하니 성분표에서 확인해요.',
    '감자전분': '감자에서 얻은 전분으로 글루텐이 없어요. 밀가루 대신 튀김옷·부침옷에 쓰거나 걸쭉함을 낼 때 써요. 반죽이 너무 되면 물을 조금 더 넣어요.',
    '쌀 튀김가루': '쌀가루로 만든 튀김가루예요. 밀 없이 가볍게 바삭해져요. 제품에 따라 밀이 섞일 수 있어 성분표를 확인해요.',
    '옥수수전분': '옥수수에서 얻은 전분으로 글루텐이 없어요. 튀김옷을 바삭하게 하고 소스를 걸쭉하게 할 때 써요.',
    '쌀 튀김가루로 만든 튀김': '밀가루 대신 쌀 튀김가루로 튀김옷을 입혀요. 밀 없이 가볍고 바삭하게 튀겨져요.',
    '글루텐프리 팬케이크 믹스': '쌀가루 등으로 만든 팬케이크 믹스예요. 제품에 따라 우유·계란 분말이 들어갈 수 있어 성분표를 확인해요.',
    '글루텐프리 라자냐면(성분표 확인)': '쌀·옥수수 등으로 만든 라자냐면이에요. 제품이 많지 않을 수 있고, 쉽게 부서질 수 있으니 포장의 조리법을 따라요.',
    '글루텐프리 빵가루': '쌀·옥수수 등으로 만든 빵가루예요. 밀빵가루처럼 튀김옷으로 쓰고, 계란이나 우유가 들어간 제품도 있어 성분표를 확인해요.',
    '글루텐프리 타르트지(성분표 확인)': '밀 대신 쌀가루·아몬드가루 등으로 만든 타르트지예요. 제품에 따라 계란·버터·견과류가 들어갈 수 있어 성분표를 꼭 확인해요.',
    '글루텐프리 카레루(성분표 확인)': '밀가루 대신 쌀가루 등으로 농도를 낸 카레루예요. 우유·대두 등 다른 성분이 들어갈 수 있어 성분표를 확인해요.',
    '글루텐프리 돈가스(성분표 확인)': '밀 없이 만든 시판 돈가스예요. 직접 만든다면 쌀 빵가루를 써요. 계란이 들어갈 수 있어 성분표를 확인해요.',
    '글루텐프리 비스킷·스펀지(성분표 확인)': '밀이 들어가지 않은 비스킷이나 스펀지예요. 제품마다 계란이 들어갈 수 있어, 계란 알레르기도 있다면 성분표를 꼭 확인해요.',
    '유제품 무첨가 카레루(성분표 확인)': '우유 성분이 없는 카레루예요. 시판 카레루는 우유·밀이 들어가는 제품이 많아서 "유제품 무첨가" 표시와 성분표를 꼭 확인해요.',
    '비건 연유(코코넛 연유)': '코코넛 밀크를 설탕과 졸여 만든 우유 없는 연유예요. 코코넛 향이 나요. 코코넛이 맞지 않으면 쓰지 마세요.',
    '간장 + 설탕 소량(굴소스 대용)': '조개류 알레르기용 굴소스 대용이에요. 간장에 설탕을 조금 섞어 단짠한 감칠맛을 내요. 굴소스보다 깊은 맛은 덜해요. 간장에는 대두·밀이 들어 있어 해당 알레르기가 있으면 맞지 않아요.',
    '비건 굴소스(버섯 베이스, 성분표 확인)': '굴 대신 버섯으로 감칠맛을 낸 굴소스예요. 조개류는 없지만 간장이 들어가 대두·밀이 있을 수 있어요. 성분표를 확인해요.',
    '고춧가루 + 쌀조청(고추장 대용, 맛 차이 있음)': '고추장의 매콤달콤한 맛을 고춧가루와 쌀조청으로 비슷하게 내요. 대두가 들어가지 않지만 발효된 깊은 맛은 없어 맛이 조금 가벼워요. 쌀조청은 보리 엿기름으로 만드는 제품이 많아, 글루텐이 걱정되면 성분표를 확인해요. 고춧가루도 다른 양념이 섞인 제품은 성분표를 확인해요.',
    '코코넛 아미노스 + 미림 + 다시마 육수(쯔유 대용)': '대두 알레르기용 쯔유 대용이에요. 코코넛 아미노스에 미림(단맛)과 다시마 육수(감칠맛)를 섞어요. 가쓰오부시가 없어 향이 가벼워요. 미림은 제품에 따라 밀·대두가 들어갈 수 있어 성분표를 확인해요.',
    '코코넛 아미노스 + 꿀(데리야끼 대용)': '코코넛 아미노스에 꿀로 단맛을 더해 데리야끼 느낌을 내요. 간장보다 덜 짜니 졸이면서 맛을 보며 맞춰요. 꿀은 만 1세 미만 아기에게 주면 안 돼요.',
    '고춧가루 + 고추기름(두반장 대용)': '발효 콩장인 두반장 대신 고춧가루와 고추기름으로 매운맛과 색을 내요. 발효된 깊은 감칠맛은 약해요. 고추기름은 대두유로 만든 제품도 있어 성분표를 확인해요.',
    '메추리알 없이 조리(대체 어려움)': '메추리알도 계란처럼 반응할 수 있어 피해야 해요. 알 자체가 주재료라 대신할 재료가 없어요. 빼고 조리하거나 다른 메뉴를 골라요.',
    '오리알 없이 조리(대체 어려움)': '오리알도 계란처럼 반응할 수 있어 피해야 해요. 대신할 재료가 없어 빼고 조리해요.',
    '거위알 없이 조리(대체 어려움)': '거위알도 계란처럼 반응할 수 있어 피해야 해요. 대신할 재료가 없어 빼고 조리해요.',
    '두부 없이 조리(대체 어려움)': '두부는 대두로 만들고, 맛과 식감을 대신할 재료가 마땅치 않아요. 두부가 주재료인 요리는 다른 메뉴를 고르는 게 좋아요. 곁들임이라면 빼고 조리해요.',
    '콩 없이 조리(대체 어려움)': '콩(대두)의 맛과 식감을 대신할 재료가 마땅치 않아요. 콩이 주재료인 요리는 다른 메뉴를 고르는 게 좋아요.',
    '청국장 없이 조리(대체 어려움)': '청국장은 대두를 발효해 만들어, 발효 풍미를 대신할 안전한 재료가 없어요. 다른 메뉴를 고르는 게 좋아요.',
    '낫토 없이 조리(대체 어려움)': '낫토는 대두를 발효해 만들어, 맛과 식감을 대신할 재료가 없어요. 빼고 먹거나 다른 메뉴를 골라요.',
    '김가루': '가쓰오부시 대신 바다 향과 감칠맛을 더해요. 조미김은 생선 성분이 들어간 제품이 있어 성분표를 확인해요.',
    '다시마 가루': '다시마를 곱게 간 가루로 감칠맛을 내요. 생선 없이 국물 맛을 낼 때 가쓰오부시 대신 써요.',
    '저염 간장': '일반 간장보다 나트륨을 줄인 제품이에요. 그래도 짠 편이라 양을 줄여 써요. 대두·밀 알레르기가 있으면 맞지 않아요.',
    '앤초비 없이 조리(대체 어려움)': '앤초비는 생선이라 대신할 안전한 재료가 마땅치 않아요. 빼고 조리하면 감칠맛이 줄어요.',
    '액젓 없이 조리(대체 어려움)': '액젓은 생선으로 만들어 대신할 안전한 재료가 마땅치 않아요. 빼고 조리하면 감칠맛이 줄어요.',
    '쌈장 없이 조리(대체 어려움)': '쌈장은 된장·고추장(대두)이 바탕이라 대신할 안전한 장이 마땅치 않아요. 쌈장 없이 먹고 마늘·고춧가루로 매콤한 맛만 더해요.',
    '계란 없는 마요네즈(성분표 확인)': '계란 없이 식물성 재료로 만든 마요네즈예요. 대두나 겨자가 들어갈 수 있어 다른 알레르기가 있으면 성분표를 확인해요.',
    '명란 없이 조리(대체 어려움)': '명란 특유의 짭짤한 알 식감은 대신하기 어려워요. 명란을 빼고 소금으로 간만 맞춰 조리하면 맛이 단순해질 수 있어요.',
    '고기(소고기·닭고기 등)만 사용': '"고기 또는 생선" 재료에서 생선을 빼고 고기만 쓰는 방법이에요. 알레르기가 없는 고기를 골라요.',
    '닭 소시지(돼지고기 미포함, 성분표 확인)': '닭고기로 만든 소시지예요. 돼지고기가 섞인 제품도 있어 성분표를 확인해요. 닭고기 알레르기가 있으면 맞지 않아요.',
    '돼지고기(알레르기 없는 경우)': '닭고기·소고기 대신 고를 수 있는 육류예요. 돼지고기 알레르기가 없을 때만 선택해요.',
    '새송이버섯(식감 대체)': '새송이버섯을 칼집 내어 쓰면 쫄깃한 식감이 오징어와 비슷해요. 바다 맛은 나지 않아요.',
    '채소 육수': '양파·무·대파 등 채소로 우린 육수예요. 고기 육수보다 맛이 가벼워요.',
    '비트': '붉은 색과 은은한 단맛을 내는 뿌리채소예요. 토마토의 새콤한 맛은 없어요.',
    '당근': '단맛과 주황빛을 내는 뿌리채소예요. 갈아서 소스에 넣으면 토마토소스처럼 색과 단맛을 낼 수 있어요.',
    '단호박': '익히면 부드럽고 단맛이 나는 채소예요. 갈아서 소스의 농도와 색을 낼 수 있어요.',
    '비트·당근 소스(토마토 없는 소스, 맛 차이 있음)': '비트와 당근을 익혀 갈아 만든 토마토 없는 소스예요. 색과 단맛은 비슷하지만 토마토의 새콤한 맛은 없어서 식초나 레몬즙을 조금 더해요.',
    '물 + 레몬즙 소량(와인 대용)': '와인 대신 물에 레몬즙을 조금 섞어 신맛을 보충해요. 와인 특유의 향은 없어요.',
    '무가당 포도즙(레드와인 대용, 단맛이 있어요)': '레드와인 대신 쓰는 무가당 포도즙이에요. 단맛이 있어 양을 줄이거나 식초를 조금 더해요. 당뇨가 있다면 맞지 않아요.',
};


// ───── 2026-10-27 원문 확인 반영: 카드에 따로 보여줄 경고 ─────
// type: 'stop'(빨강, 하지 말 것) / 'label'(노랑, 성분표에서 볼 이름) / 'info'(파랑)
// 근거: ASCIA 우유·계란 식이 가이드 2023, NHS UHCW 계란 제외식(2025), AHA/ACC 2025, KDIGO 2024 (Projects 근거 문서 참고)
const HEALTH_WARNINGS = {
    allergy: {
        '우유 알레르기': [
            { type: 'stop', text: '염소젖·양젖도 대부분 같이 반응해요. 우유 대신 쓰지 마세요.' },
            { type: 'label', text: '성분표에서 이 이름도 우유예요: 카제인, 카제인나트륨, 유청(훼이), 유청단백, 버터오일, 기(ghee)' }
        ],
        '밀 알레르기': [
            { type: 'stop', text: '셀리악병(글루텐 불내증)이라면 이 항목이 아니라 "글루텐(셀리악병)"을 고르세요. 셀리악병은 보리·호밀도 피해야 해요.' }
        ],
        '계란 알레르기': [
            { type: 'stop', text: '메추리알·오리알·거위알도 피하세요. 닭이 아닌 새의 알도 같이 반응할 수 있어요.' },
            { type: 'label', text: '성분표에서 이 이름도 계란이에요: 난백, 난황, 알부민, 라이소자임, 난황레시틴' }
        ]
    },
    disease: {
        '고혈압': [
            { type: 'stop', text: '칼륨 대체소금(저나트륨 소금)은 신장질환이 있거나 칼륨 수치를 관리 중이면 쓰지 마세요. 먼저 의료진과 상의하세요.' }
        ],
        '신장질환': [
            { type: 'stop', text: '단백질은 스스로 줄이지 마세요. 너무 줄이면 영양실조가 올 수 있어요. 국제 지침은 신장 기능 3~5단계 성인에게 하루 체중 1kg당 0.8g 정도를 권하지만(약한 권고), 내 양은 신장 전문 의료진·영양사와 정하세요.' }
        ],
        '글루텐불내증': [
            { type: 'info', text: '글루텐프리 면은 일반 면을 삶은 물에 삶지 마세요. 같은 물을 쓰면 글루텐이 많이 옮아요.' }
        ]
    }
};
Object.values(allergyMapping).forEach(o => { if (HEALTH_WARNINGS.allergy[o.name]) o.warnings = HEALTH_WARNINGS.allergy[o.name]; });
Object.entries(diseaseMapping).forEach(([k, o]) => { if (HEALTH_WARNINGS.disease[k]) o.warnings = HEALTH_WARNINGS.disease[k]; });


// ───── 2026-10-27 밀 알레르기 분리 ─────
// 밀 알레르기(IgE)는 밀만 피하면 되고, 셀리악병은 밀·보리·호밀의 글루텐을 모두 피해야 해요 (Gluten Intolerance Group 안내).
// 기존 '밀가루'·'밀'·'글루텐'·'셀리악' 입력은 예전처럼 엄격한 글루텐 기준(셀리악)으로 둬요. 사용자가 고르기 전까지 안전한 쪽.
// '밀 알레르기'·'밀가루 알레르기'로 입력(또는 체크박스 선택)하면 밀 알레르기 기준이에요.
const WHEAT_ONLY_EXCLUDE = ['보리', '호밀', '귀리', '오트밀'];
const WHEAT_AVOID = GLUTEN_AVOID.filter(f => !WHEAT_ONLY_EXCLUDE.includes(f));
const WHEAT_SUBSTITUTES = Object.fromEntries(Object.entries(GLUTEN_SUBSTITUTES).filter(([k]) => !WHEAT_ONLY_EXCLUDE.includes(k)));
allergyMapping['밀 알레르기'] = {
    name: '밀 알레르기',
    type: 'allergy',
    reason: '밀 단백질에 면역계가 과민 반응해 두드러기·구토·호흡곤란, 심하면 아나필락시스를 일으킬 수 있어요',
    avoidFoods: [...WHEAT_AVOID],
    safeFoods: ['쌀가루', '옥수수가루', '감자전분', '글루텐프리 밀가루(성분표 확인)'],
    substitutes: { ...WHEAT_SUBSTITUTES },
    tips: '밀이 든 음식은 소량도 피하세요. 셀리악병과 달리 보리·호밀은 대부분 먹을 수 있지만, 처음엔 의사와 확인하세요. 간장·고추장·카레·튀김가루·어묵처럼 밀이 숨어 있는 재료가 많아 성분표를 꼭 확인하세요. "글루텐프리" 제품도 밀에서 글루텐만 뺀 원료(밀전분 등)를 쓸 수 있으니, 알레르기 표시에 "밀"이 없는지 확인하세요.',
    source: 'https://gluten.org/2019/10/15/celiac-disease-non-celiac-gluten-sensitivity-or-wheat-allergy-what-is-the-difference/',
    labelSource: LABEL_SOURCE_URL,
    labelNote: '표시 대상: 밀'
};
allergyMapping['밀가루 알레르기'] = allergyMapping['밀 알레르기'];
// '밀'만 쓴 기존 입력은 사용자가 고르기 전까지 엄격한 기준(셀리악)으로 둬요
allergyMapping['밀'] = allergyMapping['밀가루'];

if (HEALTH_WARNINGS.allergy['밀 알레르기']) allergyMapping['밀 알레르기'].warnings = HEALTH_WARNINGS.allergy['밀 알레르기'];


// ───── 2026-10-27 조원 검토표 반영 (대체-검토표-v2, 156줄) ─────
// "안됨" = 맛·식감·요리 역할이 이어지지 않아 대체 불가. 알레르기는 '○○ 없이 조리(대체 어려움)', 질환은 '○○ 줄이기(대체 어려움)'로 보여줘요.
// "됨" + 수정 대체안 3건(가쓰오부시·굴소스·마요네즈)은 대체안을 바꿨어요. "보류"였던 어묵→두부도 2026-10-27 "안됨"으로 확정.
// 2026-10-27 사용자 재확인: 시럽→알룰로스·전지우유→저지방 우유는 "됨"(규칙 제외), 쯔유 대용(대두)은 "안됨"으로 변경.
// 원래 대체안은 위쪽 정의에 남아 있고, 여기서 덮어써요 (검토표 번호 = no).
const REVIEW_2026_10_27 = [{"no": 1, "owner": "통풍", "food": "가리비", "subs": ["가리비 줄이기(대체 어려움)"]}, {"no": 2, "owner": "신장질환", "food": "감자", "subs": ["감자 줄이기(대체 어려움)"]}, {"no": 3, "owner": "계란 알레르기", "food": "게맛살", "subs": ["게맛살 없이 조리(대체 어려움)"]}, {"no": 3, "owner": "생선 알레르기", "food": "게맛살", "subs": ["게맛살 없이 조리(대체 어려움)"]}, {"no": 4, "owner": "통풍", "food": "곱창", "subs": ["곱창 줄이기(대체 어려움)"]}, {"no": 5, "owner": "생선 알레르기", "food": "꽁치통조림", "subs": ["꽁치통조림 없이 조리(대체 어려움)"]}, {"no": 6, "owner": "통풍", "food": "내장류", "subs": ["내장류 줄이기(대체 어려움)"]}, {"no": 7, "owner": "통풍", "food": "대창", "subs": ["대창 줄이기(대체 어려움)"]}, {"no": 8, "owner": "통풍", "food": "막창", "subs": ["막창 줄이기(대체 어려움)"]}, {"no": 9, "owner": "계란 알레르기", "food": "맛살", "subs": ["맛살 없이 조리(대체 어려움)"]}, {"no": 9, "owner": "생선 알레르기", "food": "맛살", "subs": ["맛살 없이 조리(대체 어려움)"]}, {"no": 10, "owner": "생선 알레르기", "food": "사각어묵", "subs": ["사각어묵 없이 조리(대체 어려움)"]}, {"no": 11, "owner": "통풍", "food": "소대창", "subs": ["소대창 줄이기(대체 어려움)"]}, {"no": 13, "owner": "통풍", "food": "조개류", "subs": ["조개류 줄이기(대체 어려움)"]}, {"no": 14, "owner": "위산역류", "food": "초콜릿", "subs": ["초콜릿 줄이기(대체 어려움)"]}, {"no": 15, "owner": "토마토 알레르기", "food": "케첩", "subs": ["케첩 없이 조리(대체 어려움)"]}, {"no": 16, "owner": "신장질환", "food": "케첩", "subs": ["케첩 줄이기(대체 어려움)"]}, {"no": 17, "owner": "계란 알레르기", "food": "크래미", "subs": ["크래미 없이 조리(대체 어려움)"]}, {"no": 17, "owner": "생선 알레르기", "food": "크래미", "subs": ["크래미 없이 조리(대체 어려움)"]}, {"no": 18, "owner": "신장질환", "food": "토마토", "subs": ["토마토 줄이기(대체 어려움)"]}, {"no": 22, "owner": "고혈압", "food": "라면", "subs": ["라면 줄이기(대체 어려움)"]}, {"no": 23, "owner": "위산역류", "food": "럼", "subs": ["럼 줄이기(대체 어려움)"]}, {"no": 24, "owner": "통풍", "food": "럼", "subs": ["럼 줄이기(대체 어려움)"]}, {"no": 25, "owner": "위산역류", "food": "막걸리", "subs": ["막걸리 줄이기(대체 어려움)"]}, {"no": 26, "owner": "통풍", "food": "막걸리", "subs": ["막걸리 줄이기(대체 어려움)"]}, {"no": 27, "owner": "통풍", "food": "맥주", "subs": ["맥주 줄이기(대체 어려움)"]}, {"no": 28, "owner": "위산역류", "food": "소주", "subs": ["소주 줄이기(대체 어려움)"]}, {"no": 29, "owner": "통풍", "food": "소주", "subs": ["소주 줄이기(대체 어려움)"]}, {"no": 30, "owner": "위산역류", "food": "술", "subs": ["술 줄이기(대체 어려움)"]}, {"no": 31, "owner": "통풍", "food": "술", "subs": ["술 줄이기(대체 어려움)"]}, {"no": 32, "owner": "아황산류 과민", "food": "와인", "subs": ["와인 없이 조리(대체 어려움)"]}, {"no": 33, "owner": "위산역류", "food": "와인", "subs": ["와인 줄이기(대체 어려움)"]}, {"no": 34, "owner": "통풍", "food": "와인", "subs": ["와인 줄이기(대체 어려움)"]}, {"no": 35, "owner": "위산역류", "food": "위스키", "subs": ["위스키 줄이기(대체 어려움)"]}, {"no": 36, "owner": "통풍", "food": "위스키", "subs": ["위스키 줄이기(대체 어려움)"]}, {"no": 39, "owner": "위산역류", "food": "청주", "subs": ["청주 줄이기(대체 어려움)"]}, {"no": 40, "owner": "통풍", "food": "청주", "subs": ["청주 줄이기(대체 어려움)"]}, {"no": 47, "owner": "대두 알레르기", "food": "고추장", "subs": ["고추장 없이 조리(대체 어려움)"]}, {"no": 48, "owner": "당뇨병", "food": "과일주스", "subs": ["과일주스 줄이기(대체 어려움)"]}, {"no": 50, "owner": "위산역류", "food": "기름진 음식", "subs": ["기름진 음식 줄이기(대체 어려움)"]}, {"no": 52, "owner": "당뇨병", "food": "단음료", "subs": ["단음료 줄이기(대체 어려움)"]}, {"no": 52, "owner": "통풍", "food": "단음료", "subs": ["단음료 줄이기(대체 어려움)"]}, {"no": 55, "owner": "대두 알레르기", "food": "데리야끼소스", "subs": ["데리야끼소스 없이 조리(대체 어려움)"]}, {"no": 56, "owner": "대두 알레르기", "food": "두반장", "subs": ["두반장 없이 조리(대체 어려움)"]}, {"no": 57, "owner": "대두 알레르기", "food": "두유", "subs": ["두유 없이 조리(대체 어려움)"]}, {"no": 58, "owner": "아황산류 과민", "food": "레드와인", "subs": ["레드와인 없이 조리(대체 어려움)"]}, {"no": 65, "owner": "신장질환", "food": "바나나", "subs": ["바나나 줄이기(대체 어려움)"]}, {"no": 69, "owner": "고콜레스테롤", "food": "베이컨", "subs": ["베이컨 줄이기(대체 어려움)"]}, {"no": 70, "owner": "고콜레스테롤", "food": "삼겹살", "subs": ["삼겹살 줄이기(대체 어려움)"]}, {"no": 72, "owner": "고혈압", "food": "소금", "subs": ["소금 줄이기(대체 어려움)"]}, {"no": 78, "owner": "신장질환", "food": "시금치", "subs": ["시금치 줄이기(대체 어려움)"]}, {"no": 80, "owner": "위산역류", "food": "에스프레소", "subs": ["에스프레소 줄이기(대체 어려움)"]}, {"no": 86, "owner": "고혈압", "food": "젓갈", "subs": ["젓갈 줄이기(대체 어려움)"]}, {"no": 94, "owner": "위산역류", "food": "커피", "subs": ["커피 줄이기(대체 어려움)"]}, {"no": 95, "owner": "위산역류", "food": "탄산음료", "subs": ["탄산음료 줄이기(대체 어려움)"]}, {"no": 96, "owner": "토마토 알레르기", "food": "토마토소스", "subs": ["토마토소스 없이 조리(대체 어려움)"]}, {"no": 97, "owner": "토마토 알레르기", "food": "토마토페이스트", "subs": ["토마토페이스트 없이 조리(대체 어려움)"]}, {"no": 100, "owner": "고콜레스테롤", "food": "튀긴음식", "subs": ["튀긴음식 줄이기(대체 어려움)"]}, {"no": 102, "owner": "아황산류 과민", "food": "화이트와인", "subs": ["화이트와인 없이 조리(대체 어려움)"]}, {"no": 42, "owner": "생선 알레르기", "food": "가쓰오부시", "subs": ["다시마 가루(맛 차이 있음)"]}, {"no": 49, "owner": "조개류 알레르기", "food": "굴소스", "subs": ["비건 굴소스(버섯 베이스, 성분표 확인)"]}, {"no": 59, "owner": "계란 알레르기", "food": "마요네즈", "subs": ["비건 마요네즈(성분표 확인)"]}, {"no": 12, "owner": "생선 알레르기", "food": "어묵", "subs": ["어묵 없이 조리(대체 어려움)"]}, {"no": 89, "owner": "대두 알레르기", "food": "쯔유", "subs": ["쯔유 없이 조리(대체 어려움)"]}];
const REVIEW_2026_10_27_INFO = {
 "쯔유 없이 조리(대체 어려움)": "쯔유는 간장(대두)이 바탕이라, 맛을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "어묵 없이 조리(대체 어려움)": "어묵은 생선살로 만들어 식감과 감칠맛을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "가리비 줄이기(대체 어려움)": "가리비를 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "감자 줄이기(대체 어려움)": "감자를 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "게맛살 없이 조리(대체 어려움)": "게맛살의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "곱창 줄이기(대체 어려움)": "곱창을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "꽁치통조림 없이 조리(대체 어려움)": "꽁치통조림의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "내장류 줄이기(대체 어려움)": "내장류를 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "대창 줄이기(대체 어려움)": "대창을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "막창 줄이기(대체 어려움)": "막창을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "맛살 없이 조리(대체 어려움)": "맛살의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "사각어묵 없이 조리(대체 어려움)": "사각어묵의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "소대창 줄이기(대체 어려움)": "소대창을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "조개류 줄이기(대체 어려움)": "조개류를 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "초콜릿 줄이기(대체 어려움)": "초콜릿을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "케첩 없이 조리(대체 어려움)": "케첩의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "케첩 줄이기(대체 어려움)": "케첩을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "크래미 없이 조리(대체 어려움)": "크래미의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "토마토 줄이기(대체 어려움)": "토마토를 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "라면 줄이기(대체 어려움)": "라면을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "럼 줄이기(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "막걸리 줄이기(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "맥주 줄이기(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "소주 줄이기(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "술 줄이기(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "와인 없이 조리(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "와인 줄이기(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "위스키 줄이기(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "청주 줄이기(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "고추장 없이 조리(대체 어려움)": "고추장의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "과일주스 줄이기(대체 어려움)": "과일주스를 대신할 음료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "기름진 음식 줄이기(대체 어려움)": "기름진 음식을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "단음료 줄이기(대체 어려움)": "단음료를 대신할 음료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "데리야끼소스 없이 조리(대체 어려움)": "데리야끼소스의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "두반장 없이 조리(대체 어려움)": "두반장의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "두유 없이 조리(대체 어려움)": "두유의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "레드와인 없이 조리(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "바나나 줄이기(대체 어려움)": "바나나를 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "베이컨 줄이기(대체 어려움)": "베이컨을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "삼겹살 줄이기(대체 어려움)": "삼겹살을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "소금 줄이기(대체 어려움)": "소금을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "시금치 줄이기(대체 어려움)": "시금치를 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "에스프레소 줄이기(대체 어려움)": "에스프레소를 대신할 음료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "젓갈 줄이기(대체 어려움)": "젓갈을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "커피 줄이기(대체 어려움)": "커피를 대신할 음료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "탄산음료 줄이기(대체 어려움)": "탄산음료를 대신할 음료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "토마토소스 없이 조리(대체 어려움)": "토마토소스의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "토마토페이스트 없이 조리(대체 어려움)": "토마토페이스트의 맛과 역할을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "튀긴음식 줄이기(대체 어려움)": "튀긴음식을 대신할 재료가 마땅치 않아요. 양을 줄이거나 빼고 조리하세요.",
 "화이트와인 없이 조리(대체 어려움)": "술은 대신할 재료가 없어요. 요리에 넣는 술은 빼고 조리하세요. 잡내 제거·풍미는 조금 약해져요.",
 "다시마 가루(맛 차이 있음)": "다시마를 갈아 만든 가루로 감칠맛을 더해요. 가쓰오부시의 훈제 생선 향은 나지 않아 맛이 확실히 달라요. 국물·소스의 감칠맛만 보충하는 용도예요.",
 "비건 마요네즈(성분표 확인)": "계란 없이 식물성 재료로 만든 마요네즈예요. 대두·겨자가 들어가는 제품이 많아 다른 알레르기가 있으면 성분표를 확인하세요."
};
Object.assign(substituteInfo, REVIEW_2026_10_27_INFO);
(function applyReview() {
    const objs = [...new Set([...Object.values(allergyMapping), ...Object.values(diseaseMapping)])];
    REVIEW_2026_10_27.forEach(r => {
        objs.filter(o => o.name === r.owner && o.substitutes && o.substitutes[r.food]).forEach(o => {
            o.substitutes = Object.assign({}, o.substitutes, { [r.food]: r.subs });
        });
    });
})();


// ───── 2026-10-27 검토표 v3 반영 (사용자 결정) ─────
// ① 재료별 대체가 없어서 알레르기 공통 기본 대체(safeFoods, 영양 기준)가 보이던 54줄 → 모두 "대체 어려움"
// ② 된장(대두) → 대체 어려움
// ③ 쯔유(대두) → 완두간장/코코넛 아미노스 + 미림 + 가쓰오부시 육수 (생선 알레르기면 다른 제약 충돌로 자동 제외)
// ④ 간장(대두) → 완두간장 추가 (사용자가 쿠팡 판매 확인, 2026-10-27). 근거: 샘표 완두간장 기사·상품 정보, ASCIA·Allergy UK 콩과 교차 안내
const REVIEW_V3_2026_10_27 = [{"owner": "땅콩 알레르기", "food": "땅콩", "subs": ["땅콩 없이 조리(대체 어려움)"]}, {"owner": "땅콩 알레르기", "food": "땅콩버터", "subs": ["땅콩버터 없이 조리(대체 어려움)"]}, {"owner": "땅콩 알레르기", "food": "땅콩기름", "subs": ["땅콩기름 없이 조리(대체 어려움)"]}, {"owner": "땅콩 알레르기", "food": "땅콩과자", "subs": ["땅콩과자 없이 조리(대체 어려움)"]}, {"owner": "견과류 알레르기", "food": "호두", "subs": ["호두 없이 조리(대체 어려움)"]}, {"owner": "견과류 알레르기", "food": "아몬드", "subs": ["아몬드 없이 조리(대체 어려움)"]}, {"owner": "견과류 알레르기", "food": "캐슈넛", "subs": ["캐슈넛 없이 조리(대체 어려움)"]}, {"owner": "견과류 알레르기", "food": "피스타치오", "subs": ["피스타치오 없이 조리(대체 어려움)"]}, {"owner": "견과류 알레르기", "food": "헤이즐넛", "subs": ["헤이즐넛 없이 조리(대체 어려움)"]}, {"owner": "견과류 알레르기", "food": "잣", "subs": ["잣 없이 조리(대체 어려움)"]}, {"owner": "갑각류 알레르기", "food": "새우", "subs": ["새우 없이 조리(대체 어려움)"]}, {"owner": "갑각류 알레르기", "food": "게", "subs": ["게 없이 조리(대체 어려움)"]}, {"owner": "갑각류 알레르기", "food": "랍스터", "subs": ["랍스터 없이 조리(대체 어려움)"]}, {"owner": "갑각류 알레르기", "food": "가재", "subs": ["가재 없이 조리(대체 어려움)"]}, {"owner": "조개류 알레르기", "food": "굴", "subs": ["굴 없이 조리(대체 어려움)"]}, {"owner": "조개류 알레르기", "food": "전복", "subs": ["전복 없이 조리(대체 어려움)"]}, {"owner": "조개류 알레르기", "food": "홍합", "subs": ["홍합 없이 조리(대체 어려움)"]}, {"owner": "조개류 알레르기", "food": "조개", "subs": ["조개 없이 조리(대체 어려움)"]}, {"owner": "조개류 알레르기", "food": "바지락", "subs": ["바지락 없이 조리(대체 어려움)"]}, {"owner": "대두 알레르기", "food": "된장", "subs": ["된장 없이 조리(대체 어려움)"]}, {"owner": "메밀 알레르기", "food": "메밀", "subs": ["메밀 없이 조리(대체 어려움)"]}, {"owner": "메밀 알레르기", "food": "메밀면", "subs": ["메밀면 없이 조리(대체 어려움)"]}, {"owner": "메밀 알레르기", "food": "냉면(메밀 함유)", "subs": ["냉면 없이 조리(대체 어려움)"]}, {"owner": "메밀 알레르기", "food": "막국수", "subs": ["막국수 없이 조리(대체 어려움)"]}, {"owner": "생선 알레르기", "food": "고등어", "subs": ["고등어 없이 조리(대체 어려움)"]}, {"owner": "생선 알레르기", "food": "참치", "subs": ["참치 없이 조리(대체 어려움)"]}, {"owner": "생선 알레르기", "food": "연어", "subs": ["연어 없이 조리(대체 어려움)"]}, {"owner": "생선 알레르기", "food": "생선류", "subs": ["생선류 없이 조리(대체 어려움)"]}, {"owner": "돼지고기 알레르기", "food": "돼지고기", "subs": ["돼지고기 없이 조리(대체 어려움)"]}, {"owner": "돼지고기 알레르기", "food": "삼겹살", "subs": ["삼겹살 없이 조리(대체 어려움)"]}, {"owner": "돼지고기 알레르기", "food": "베이컨", "subs": ["베이컨 없이 조리(대체 어려움)"]}, {"owner": "돼지고기 알레르기", "food": "햄", "subs": ["햄 없이 조리(대체 어려움)"]}, {"owner": "돼지고기 알레르기", "food": "돈가스", "subs": ["돈가스 없이 조리(대체 어려움)"]}, {"owner": "돼지고기 알레르기", "food": "돈까스", "subs": ["돈까스 없이 조리(대체 어려움)"]}, {"owner": "복숭아 알레르기", "food": "복숭아", "subs": ["복숭아 없이 조리(대체 어려움)"]}, {"owner": "복숭아 알레르기", "food": "천도복숭아", "subs": ["천도복숭아 없이 조리(대체 어려움)"]}, {"owner": "복숭아 알레르기", "food": "복숭아 통조림", "subs": ["복숭아 통조림 없이 조리(대체 어려움)"]}, {"owner": "토마토 알레르기", "food": "토마토", "subs": ["토마토 없이 조리(대체 어려움)"]}, {"owner": "토마토 알레르기", "food": "방울토마토", "subs": ["방울토마토 없이 조리(대체 어려움)"]}, {"owner": "토마토 알레르기", "food": "토마토주스", "subs": ["토마토주스 없이 조리(대체 어려움)"]}, {"owner": "닭고기 알레르기", "food": "닭고기", "subs": ["닭고기 없이 조리(대체 어려움)"]}, {"owner": "닭고기 알레르기", "food": "닭가슴살", "subs": ["닭가슴살 없이 조리(대체 어려움)"]}, {"owner": "닭고기 알레르기", "food": "닭다리살", "subs": ["닭다리살 없이 조리(대체 어려움)"]}, {"owner": "닭고기 알레르기", "food": "토막 닭고기", "subs": ["토막 닭고기 없이 조리(대체 어려움)"]}, {"owner": "닭고기 알레르기", "food": "닭 소시지", "subs": ["닭 소시지 없이 조리(대체 어려움)"]}, {"owner": "쇠고기 알레르기", "food": "소고기", "subs": ["소고기 없이 조리(대체 어려움)"]}, {"owner": "쇠고기 알레르기", "food": "쇠고기", "subs": ["쇠고기 없이 조리(대체 어려움)"]}, {"owner": "쇠고기 알레르기", "food": "우삼겹", "subs": ["우삼겹 없이 조리(대체 어려움)"]}, {"owner": "쇠고기 알레르기", "food": "소곱창", "subs": ["소곱창 없이 조리(대체 어려움)"]}, {"owner": "쇠고기 알레르기", "food": "소대창", "subs": ["소대창 없이 조리(대체 어려움)"]}, {"owner": "오징어 알레르기", "food": "오징어", "subs": ["오징어 없이 조리(대체 어려움)"]}, {"owner": "오징어 알레르기", "food": "오징어채", "subs": ["오징어채 없이 조리(대체 어려움)"]}, {"owner": "오징어 알레르기", "food": "오징어젓", "subs": ["오징어젓 없이 조리(대체 어려움)"]}, {"owner": "오징어 알레르기", "food": "오징어먹물", "subs": ["오징어먹물 없이 조리(대체 어려움)"]}, {"owner": "대두 알레르기", "food": "쯔유", "subs": ["완두간장 + 미림 + 가쓰오부시 육수(쯔유 대용)", "코코넛 아미노스 + 미림 + 가쓰오부시 육수(쯔유 대용)"]}, {"owner": "대두 알레르기", "food": "간장(대두 함유)", "subs": ["완두간장(성분표 확인)", "코코넛 아미노스"]}];
Object.assign(substituteInfo, {
 "땅콩 없이 조리(대체 어려움)": "땅콩의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "땅콩버터 없이 조리(대체 어려움)": "땅콩버터의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "땅콩기름 없이 조리(대체 어려움)": "땅콩기름의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "땅콩과자 없이 조리(대체 어려움)": "땅콩과자의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "호두 없이 조리(대체 어려움)": "호두의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "아몬드 없이 조리(대체 어려움)": "아몬드의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "캐슈넛 없이 조리(대체 어려움)": "캐슈넛의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "피스타치오 없이 조리(대체 어려움)": "피스타치오의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "헤이즐넛 없이 조리(대체 어려움)": "헤이즐넛의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "잣 없이 조리(대체 어려움)": "잣의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "새우 없이 조리(대체 어려움)": "새우의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "게 없이 조리(대체 어려움)": "게의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "랍스터 없이 조리(대체 어려움)": "랍스터의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "가재 없이 조리(대체 어려움)": "가재의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "굴 없이 조리(대체 어려움)": "굴의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "전복 없이 조리(대체 어려움)": "전복의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "홍합 없이 조리(대체 어려움)": "홍합의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "조개 없이 조리(대체 어려움)": "조개의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "바지락 없이 조리(대체 어려움)": "바지락의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "된장 없이 조리(대체 어려움)": "된장은 대두를 발효해 만들어, 구수한 발효 맛을 대신할 안전한 재료가 없어요. 된장이 주재료라면 다른 메뉴를 고르고, 양념에 조금 들어가는 정도라면 빼고 조리해요.",
 "메밀 없이 조리(대체 어려움)": "메밀의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "메밀면 없이 조리(대체 어려움)": "메밀면의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "냉면 없이 조리(대체 어려움)": "냉면의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "막국수 없이 조리(대체 어려움)": "막국수의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "고등어 없이 조리(대체 어려움)": "고등어의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "참치 없이 조리(대체 어려움)": "참치의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "연어 없이 조리(대체 어려움)": "연어의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "생선류 없이 조리(대체 어려움)": "생선류의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "돼지고기 없이 조리(대체 어려움)": "돼지고기의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "삼겹살 없이 조리(대체 어려움)": "삼겹살의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "베이컨 없이 조리(대체 어려움)": "베이컨의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "햄 없이 조리(대체 어려움)": "햄의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "돈가스 없이 조리(대체 어려움)": "돈가스의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "돈까스 없이 조리(대체 어려움)": "돈까스의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "복숭아 없이 조리(대체 어려움)": "복숭아의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "천도복숭아 없이 조리(대체 어려움)": "천도복숭아의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "복숭아 통조림 없이 조리(대체 어려움)": "복숭아 통조림의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "토마토 없이 조리(대체 어려움)": "토마토의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "방울토마토 없이 조리(대체 어려움)": "방울토마토의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "토마토주스 없이 조리(대체 어려움)": "토마토주스의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "닭고기 없이 조리(대체 어려움)": "닭고기의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "닭가슴살 없이 조리(대체 어려움)": "닭가슴살의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "닭다리살 없이 조리(대체 어려움)": "닭다리살의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "토막 닭고기 없이 조리(대체 어려움)": "토막 닭고기의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "닭 소시지 없이 조리(대체 어려움)": "닭 소시지의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "소고기 없이 조리(대체 어려움)": "소고기의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "쇠고기 없이 조리(대체 어려움)": "쇠고기의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "우삼겹 없이 조리(대체 어려움)": "우삼겹의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "소곱창 없이 조리(대체 어려움)": "소곱창의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "소대창 없이 조리(대체 어려움)": "소대창의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "오징어 없이 조리(대체 어려움)": "오징어의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "오징어채 없이 조리(대체 어려움)": "오징어채의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "오징어젓 없이 조리(대체 어려움)": "오징어젓의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "오징어먹물 없이 조리(대체 어려움)": "오징어먹물의 맛과 식감을 대신할 안전한 재료가 마땅치 않아요. 주재료라면 다른 메뉴를 고르고, 곁들임이라면 빼고 조리해요.",
 "완두간장 + 미림 + 가쓰오부시 육수(쯔유 대용)": "쯔유의 바탕인 간장만 완두간장으로 바꾸고, 미림과 가쓰오부시 육수로 단맛·감칠맛을 내요. 맛이 원래 쯔유와 가장 가까워요. 가쓰오부시는 생선이라 생선 알레르기가 있으면 쓰지 마세요. 미림은 제품에 따라 밀·대두가 들어갈 수 있어 성분표를 확인해요.",
 "코코넛 아미노스 + 미림 + 가쓰오부시 육수(쯔유 대용)": "간장 대신 코코넛 아미노스에 미림과 가쓰오부시 육수를 섞어요. 코코넛 아미노스가 덜 짜고 달아서 맛을 보며 맞춰요. 가쓰오부시는 생선이라 생선 알레르기가 있으면 쓰지 마세요. 미림은 성분표를 확인해요.",
 "완두간장(성분표 확인)": "대두 대신 완두를 발효해 만든 간장이에요. 일반 간장과 맛이 가장 가까워요. 완두도 콩과 식물이라 콩류 알레르기가 여러 개 있으면 처음 먹기 전에 의사와 상의하세요. 제품에 따라 원재료가 다를 수 있어 알레르기 표시를 확인해요."
});
(function applyReviewV3() {
    const objs = [...new Set(Object.values(allergyMapping))];
    REVIEW_V3_2026_10_27.forEach(r => {
        objs.filter(o => o.name === r.owner).forEach(o => { o.substitutes = Object.assign({}, o.substitutes || {}, { [r.food]: r.subs }); });
    });
})();
