// 먹고죽자! 레시피 데이터 (레시피 80개)
// 재료 옵션: required(필수/선택), substituteOverride(이 재료 전용 대체품), noSubstituteHere(대체 불가/빼도 됨 처리)

// 레시피 데이터
const recipes = {

    '청국장찌개': {
        category: '한식',
        keywords: ['청국장찌개', '청국장'],
        baseIngredient: '청국장',
        description: '구수하고 든든한 발효콩 찌개',
        calories: 280,
        difficulty: '쉬움',
        cookTime: '30분',
        ingredients: [
            { name: '청국장', amount: '200g', required: true, noSubstituteHere: true },
            { name: '두부', amount: '150g', required: true },
            { name: '무', amount: '1/4개', required: true },
            { name: '신김치', amount: '150g', required: true },
            { name: '대파', amount: '1/2대', required: true },
            { name: '다진마늘', amount: '1작은술', required: true },
            { name: '물', amount: '2컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '무는 나박썰기 하여 물과 함께 끓인다.' },
            { step: 2, instruction: '신김치를 넣고 한소끔 더 끓인다.' },
            { step: 3, instruction: '청국장을 풀어 넣고 잘 저어준다.' },
            { step: 4, instruction: '두부를 큼직하게 썰어 넣는다.' },
            { step: 5, instruction: '대파와 다진마늘을 넣고 짧게 더 끓여 마무리한다.' }
        ],
        source: "https://www.kurly.com/recipe/671764624701d5e8aa02ef2d"
    },
    '안동찜닭': {
        category: '한식',
        keywords: ['안동찜닭', '찜닭'],
        baseIngredient: '닭고기',
        description: '당면과 채소를 넣어 푸짐하게 조려낸 안동 향토음식',
        calories: 520,
        difficulty: '보통',
        cookTime: '40분',
        ingredients: [
            { name: '토막 닭고기', amount: '800g', required: true },
            { name: '당면', amount: '100g', required: true },
            { name: '감자', amount: '1개', required: true },
            { name: '당근', amount: '1/2개', required: true },
            { name: '대파', amount: '1대', required: true },
            { name: '간장', amount: '4큰술', required: true },
            { name: '설탕', amount: '2큰술', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '건고추', amount: '2개', required: false }
        ],
        steps: [
            { step: 1, instruction: '닭고기는 끓는 물에 데쳐 기름기를 제거한다.' },
            { step: 2, instruction: '간장, 설탕, 다진마늘을 섞어 양념장을 만든다.' },
            { step: 3, instruction: '냄비에 닭고기, 양념장, 물을 넣고 끓인다.' },
            { step: 4, instruction: '감자와 당근을 넣고 건고추를 더해 칼칼하게 조린다.' },
            { step: 5, instruction: '불린 당면과 대파를 넣고 국물이 졸아들 때까지 마저 조린다.' }
        ],
        source: "https://m.cafe.daum.net/party3434/gECq/1138"
    },
    '돼지고기 김치찜': {
        category: '한식',
        keywords: ['돼지고기김치찜', '김치찜'],
        baseIngredient: '돼지고기',
        description: '고기와 김치를 오래 조려 부드럽게 완성한 찜 요리',
        calories: 480,
        difficulty: '보통',
        cookTime: '50분',
        ingredients: [
            { name: '통돼지고기(삼겹살·목살)', amount: '600g', required: true },
            { name: '포기김치', amount: '1/2포기', required: true },
            { name: '대파', amount: '1대', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '물', amount: '2컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '냄비 바닥에 김치를 깔아준다.' },
            { step: 2, instruction: '그 위에 돼지고기를 통째로 올린다.' },
            { step: 3, instruction: '물을 붓고 약불에서 오래 조린다.' },
            { step: 4, instruction: '고기와 김치가 부드러워지면 대파와 마늘을 넣는다.' },
            { step: 5, instruction: '먹기 좋은 크기로 썰어 완성한다.' }
        ],
        source: "https://take.app/marketseoul/p/cmejkz72z0051jl04h9c24cqm"
    },
    '콩나물불고기': {
        category: '한식',
        keywords: ['콩나물불고기'],
        baseIngredient: '콩나물',
        description: '아삭한 콩나물과 매콤한 돼지고기가 어우러진 볶음',
        calories: 380,
        difficulty: '쉬움',
        cookTime: '20분',
        ingredients: [
            { name: '대패삼겹살', amount: '300g', required: true },
            { name: '콩나물', amount: '1봉', required: true },
            { name: '깻잎', amount: '5장', required: false },
            { name: '고추장', amount: '2큰술', required: true },
            { name: '고춧가루', amount: '1큰술', required: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '1큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '고추장, 고춧가루, 간장, 다진마늘을 섞어 양념장을 만든다.' },
            { step: 2, instruction: '팬에 고기를 볶다가 양념장을 넣고 버무린다.' },
            { step: 3, instruction: '콩나물을 씻어 물기가 살짝 남은 채로 넣는다.' },
            { step: 4, instruction: '물을 넣지 않고 강불에서 빠르게 볶아 아삭함을 살린다.' },
            { step: 5, instruction: '깻잎을 넣고 살짝 더 볶아 마무리한다.' }
        ],
        source: "https://m.cafe.daum.net/jinju1009/Fewl/3059"
    },
    '감자전': {
        category: '한식',
        keywords: ['감자전'],
        baseIngredient: '감자',
        description: '갈아낸 감자를 노릇하게 부쳐낸 담백한 전',
        calories: 220,
        difficulty: '쉬움',
        cookTime: '25분',
        ingredients: [
            { name: '감자', amount: '3개', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '식용유', amount: '3큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '감자는 강판에 곱게 간다.' },
            { step: 2, instruction: '체에 밭쳐 물기를 빼고, 가라앉은 전분 앙금은 따로 둔다.' },
            { step: 3, instruction: '감자와 앙금을 다시 섞고 소금으로 간한다.' },
            { step: 4, instruction: '팬에 기름을 두르고 얇게 펴서 노릇하게 굽는다.' }
        ],
        source: "https://m.cafe.daum.net/investm/V8VB/961"
    },
    '애호박전': {
        category: '한식',
        keywords: ['애호박전'],
        baseIngredient: '애호박',
        description: '부드러운 애호박에 옷을 입혀 부쳐낸 전',
        calories: 180,
        difficulty: '쉬움',
        cookTime: '20분',
        ingredients: [
            { name: '애호박', amount: '1개', required: true },
            { name: '부침가루', amount: '1/2컵', required: true },
            { name: '계란', amount: '2개', required: true, substituteOverride: ['전분물(계란물 대신)', '쌀가루물(글루텐 프리)', '아쿠아파바(무맛 결합제)'] },
            { name: '소금', amount: '약간', required: true },
            { name: '식용유', amount: '3큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '애호박은 0.5cm 두께로 둥글게 썰어 소금을 살짝 뿌린다.' },
            { step: 2, instruction: '부침가루를 앞뒤로 묻힌다.' },
            { step: 3, instruction: '풀어둔 계란물을 입힌다.' },
            { step: 4, instruction: '팬에 기름을 두르고 노릇하게 굽는다.' }
        ],
        source: "https://m.cafe.daum.net/mabok7006070/4HJL/5066"
    },
    '마라샹궈': {
        category: '중식',
        keywords: ['마라샹궈'],
        baseIngredient: '마라소스',
        description: '얼얼하고 매콤한 마라소스에 고기와 채소를 볶은 요리',
        calories: 450,
        difficulty: '보통',
        cookTime: '30분',
        ingredients: [
            { name: '소고기(또는 돼지고기)', amount: '200g', required: true },
            { name: '청경채', amount: '2포기', required: true },
            { name: '버섯(모둠)', amount: '150g', required: true },
            { name: '마라소스', amount: '4큰술', required: true },
            { name: '당면', amount: '100g', required: false },
            { name: '두부', amount: '1/2모', required: false }
        ],
        steps: [
            { step: 1, instruction: '청경채와 버섯은 끓는 물에 살짝 데쳐 물기를 뺀다.' },
            { step: 2, instruction: '팬에 마라소스를 볶아 향을 낸다.' },
            { step: 3, instruction: '고기를 넣고 익을 때까지 볶는다.' },
            { step: 4, instruction: '데친 채소와 버섯, 당면을 넣고 함께 볶는다.' },
            { step: 5, instruction: '물을 약간 넣고 한소끔 끓여 마무리한다.' }
        ],
        source: "https://m.cafe.daum.net/subdued20club/WI6v/6055"
    },
    '깐풍기': {
        category: '중식',
        keywords: ['깐풍기'],
        baseIngredient: '닭고기',
        description: '바삭하게 튀긴 닭을 매콤달콤한 소스에 버무린 요리',
        calories: 580,
        difficulty: '어려움',
        cookTime: '40분',
        ingredients: [
            { name: '닭다리살', amount: '400g', required: true },
            { name: '전분', amount: '1컵', required: true },
            { name: '간장', amount: '2큰술', required: true },
            { name: '식초', amount: '2큰술', required: true },
            { name: '설탕', amount: '2큰술', required: true },
            { name: '굴소스', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '대파', amount: '1대', required: false }
        ],
        steps: [
            { step: 1, instruction: '닭고기에 전분을 두툼하게 묻혀 두 번 튀겨 바삭하게 만든다.' },
            { step: 2, instruction: '간장, 식초, 설탕, 굴소스, 다진마늘을 섞어 소스를 끓인다.' },
            { step: 3, instruction: '튀긴 닭을 소스에 빠르게 버무린다.' },
            { step: 4, instruction: '대파를 올려 마무리한다.' }
        ],
        source: "https://sports.khan.co.kr/article/201412120002086"
    },
    '부추계란볶음': {
        category: '중식',
        keywords: ['부추계란볶음'],
        baseIngredient: '부추',
        description: '부추와 계란을 고소하게 볶아낸 간단 요리',
        calories: 220,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '부추', amount: '1줌', required: true },
            { name: '계란', amount: '3개', required: true, noSubstituteHere: true },
            { name: '굴소스', amount: '1큰술', required: true },
            { name: '참기름', amount: '약간', required: false },
            { name: '소금', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '부추는 5cm 길이로 썬다.' },
            { step: 2, instruction: '계란을 풀어 팬에 스크램블처럼 볶은 뒤 따로 덜어둔다.' },
            { step: 3, instruction: '같은 팬에 부추를 넣고 질겨지지 않게 살짝만 볶는다.' },
            { step: 4, instruction: '계란과 굴소스를 넣고 섞은 뒤 참기름을 둘러 마무리한다.' }
        ],
        source: "https://m.cafe.daum.net/cheonan-GBP/OdzR/1796"
    },
    '동파육': {
        category: '중식',
        keywords: ['동파육'],
        baseIngredient: '삼겹살',
        description: '향신료와 함께 오래 조려 부드럽게 완성한 중국식 삼겹살찜',
        calories: 620,
        difficulty: '어려움',
        cookTime: '90분',
        ingredients: [
            { name: '통삼겹살', amount: '600g', required: true },
            { name: '청경채', amount: '4포기', required: false },
            { name: '팔각', amount: '2개', required: true },
            { name: '간장', amount: '4큰술', required: true },
            { name: '굴소스', amount: '2큰술', required: true },
            { name: '설탕', amount: '2큰술', required: true },
            { name: '대파', amount: '1대', required: true }
        ],
        steps: [
            { step: 1, instruction: '삼겹살은 덩어리째 끓는 물에 데친다.' },
            { step: 2, instruction: '팬에 겉면을 노릇하게 지진다.' },
            { step: 3, instruction: '간장, 굴소스, 설탕, 팔각, 대파와 함께 냄비에 넣고 약불에서 오래 조린다.' },
            { step: 4, instruction: '고기가 부드러워지면 청경채를 데쳐 곁들인다.' }
        ],
        source: "https://m.cafe.daum.net/jinju1009/Fewl/3157"
    },
    '멘보샤': {
        category: '중식',
        keywords: ['멘보샤'],
        baseIngredient: '새우',
        description: '다진 새우를 식빵 사이에 넣고 튀겨낸 중국식 요리',
        calories: 450,
        difficulty: '어려움',
        cookTime: '40분',
        ingredients: [
            { name: '식빵', amount: '4장', required: true },
            { name: '새우', amount: '200g', required: true },
            { name: '전분', amount: '1큰술', required: true },
            { name: '계란흰자', amount: '1개', required: true, substituteOverride: ['아쿠아파바(무맛 결합제)'] },
            { name: '식용유(튀김용)', amount: '적당량', required: true }
        ],
        steps: [
            { step: 1, instruction: '새우는 곱게 다진다.' },
            { step: 2, instruction: '전분과 계란흰자를 넣어 끈기있게 반죽한다.' },
            { step: 3, instruction: '식빵 두 장 사이에 새우 반죽을 바르듯 채운다.' },
            { step: 4, instruction: '낮은 온도의 기름에서 은근하게 튀겨낸다.' }
        ],
        source: "https://m.cafe.daum.net/tourpalawan/L6v3/2967"
    },
    '중화풍 잡채': {
        category: '중식',
        keywords: ['중화풍잡채'],
        baseIngredient: '당면',
        description: '고추기름과 굴소스로 불맛을 낸 중국식 잡채',
        calories: 420,
        difficulty: '보통',
        cookTime: '30분',
        ingredients: [
            { name: '당면', amount: '150g', required: true },
            { name: '돼지고기', amount: '150g', required: true },
            { name: '피망', amount: '1개', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '고추기름', amount: '2큰술', required: true },
            { name: '굴소스', amount: '2큰술', required: true },
            { name: '간장', amount: '1큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '당면은 삶아서 건져둔다.' },
            { step: 2, instruction: '고추기름에 돼지고기를 채썰어 볶는다.' },
            { step: 3, instruction: '피망과 양파를 넣고 센 불에서 볶는다.' },
            { step: 4, instruction: '당면과 굴소스, 간장을 넣고 불맛을 내며 볶아 마무리한다.' }
        ],
        source: "https://m.cafe.daum.net/tkpolice29/EbYl/53216"
    },
    '게살볶음밥': {
        category: '중식',
        keywords: ['게살볶음밥'],
        baseIngredient: '밥',
        description: '게맛살을 찢어 넣어 고소하게 볶아낸 볶음밥',
        calories: 450,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '밥', amount: '1공기', required: true },
            { name: '크래미(게맛살)', amount: '100g', required: true },
            { name: '계란', amount: '2개', required: true, substituteOverride: ['계란 빼고 볶기'] },
            { name: '대파', amount: '1대', required: true },
            { name: '굴소스', amount: '1큰술', required: true },
            { name: '식용유', amount: '2큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '크래미는 결대로 찢는다.' },
            { step: 2, instruction: '팬에 대파를 볶아 향을 낸다.' },
            { step: 3, instruction: '계란을 풀어 넣고 스크램블처럼 볶는다.' },
            { step: 4, instruction: '밥과 크래미를 넣고 골고루 볶는다.' },
            { step: 5, instruction: '굴소스로 간을 맞춰 마무리한다.' }
        ],
        source: "https://lady.khan.co.kr/cooking/article/202312020853001"
    },
    '규동': {
        category: '일식',
        keywords: ['규동'],
        baseIngredient: '소고기',
        description: '얇게 썬 소고기를 조려 밥에 얹은 일본식 덮밥',
        calories: 520,
        difficulty: '쉬움',
        cookTime: '20분',
        ingredients: [
            { name: '소고기(얇게 썬 것)', amount: '200g', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '계란', amount: '1개', required: false, noSubstituteHere: true },
            { name: '쯔유', amount: '4큰술', required: true },
            { name: '물', amount: '1/2컵', required: true },
            { name: '밥', amount: '1공기', required: true }
        ],
        steps: [
            { step: 1, instruction: '쯔유와 물, 채 썬 양파를 넣고 끓인다.' },
            { step: 2, instruction: '소고기를 넣고 살짝 익을 때까지 조린다.' },
            { step: 3, instruction: '밥 위에 얹는다.' },
            { step: 4, instruction: '계란을 올려 마무리한다.' }
        ],
        source: "https://lady.khan.co.kr/cooking/article/202307020814001"
    },
    '부타동': {
        category: '일식',
        keywords: ['부타동'],
        baseIngredient: '돼지고기',
        description: '생강간장 소스에 구운 돼지고기 덮밥',
        calories: 560,
        difficulty: '보통',
        cookTime: '25분',
        ingredients: [
            { name: '돼지고기(삼겹살·목살)', amount: '250g', required: true },
            { name: '간장', amount: '3큰술', required: true },
            { name: '설탕', amount: '2큰술', required: true },
            { name: '생강', amount: '1쪽', required: true },
            { name: '밥', amount: '1공기', required: true }
        ],
        steps: [
            { step: 1, instruction: '생강을 다져 간장, 설탕과 섞어 양념을 만든다.' },
            { step: 2, instruction: '돼지고기에 양념을 바른다.' },
            { step: 3, instruction: '팬에 직화 느낌으로 구워낸다.' },
            { step: 4, instruction: '밥 위에 얹어 완성한다.' }
        ],
        source: "https://m.cafe.daum.net/zip10004/6g4s/639"
    },
    '사케동': {
        category: '일식',
        keywords: ['사케동'],
        baseIngredient: '연어',
        description: '신선한 연어를 올린 시원한 일본식 회덮밥',
        calories: 420,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '생연어(회감)', amount: '200g', required: true },
            { name: '밥', amount: '1공기', required: true },
            { name: '쯔유', amount: '2큰술', required: true },
            { name: '와사비', amount: '약간', required: false },
            { name: '양파', amount: '1/4개', required: false }
        ],
        steps: [
            { step: 1, instruction: '밥에 쯔유를 살짝 섞는다.' },
            { step: 2, instruction: '연어를 얇게 슬라이스한다.' },
            { step: 3, instruction: '양파는 얇게 채 썰어 찬물에 담갔다 건진다.' },
            { step: 4, instruction: '밥 위에 연어와 양파를 올리고 와사비를 곁들인다.' }
        ],
        source: null
    },
    '스키야키': {
        category: '일식',
        keywords: ['스키야키'],
        baseIngredient: '소고기',
        description: '쯔유 육수에 고기와 채소를 익혀먹는 일본식 전골',
        calories: 480,
        difficulty: '보통',
        cookTime: '30분',
        ingredients: [
            { name: '소고기(불고기용)', amount: '250g', required: true },
            { name: '배추', amount: '4장', required: true },
            { name: '버섯(모둠)', amount: '100g', required: true },
            { name: '두부', amount: '1/2모', required: true },
            { name: '쯔유', amount: '5큰술', required: true },
            { name: '물', amount: '1컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '전골냄비에 쯔유와 물을 붓고 끓인다.' },
            { step: 2, instruction: '소고기를 넣고 살짝 익힌다.' },
            { step: 3, instruction: '배추, 버섯, 두부를 넣고 끓인다.' },
            { step: 4, instruction: '국물과 함께 건져 먹는다.' }
        ],
        source: "https://m.cafe.daum.net/jinju1009/Fewl/2998"
    },
    '오코노미야끼': {
        category: '일식',
        keywords: ['오코노미야끼', '오꼬노미야끼'],
        baseIngredient: '양배추',
        description: '채 썬 양배추 반죽을 두툼하게 구운 일본식 부침개',
        calories: 450,
        difficulty: '보통',
        cookTime: '25분',
        ingredients: [
            { name: '양배추', amount: '1/4통', required: true },
            { name: '부침가루', amount: '1컵', required: true },
            { name: '오징어(또는 베이컨)', amount: '100g', required: true },
            { name: '계란', amount: '2개', required: true, substituteOverride: ['계란 빼고 부치기'] },
            { name: '데리야끼소스', amount: '3큰술', required: true },
            { name: '가쓰오부시', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '양배추는 가늘게 채 썬다.' },
            { step: 2, instruction: '부침가루, 계란, 물을 섞어 반죽을 만든다.' },
            { step: 3, instruction: '양배추와 오징어를 반죽에 섞는다.' },
            { step: 4, instruction: '팬에 두툼하게 부어 앞뒤로 노릇하게 굽는다.' },
            { step: 5, instruction: '데리야끼소스를 바르고 가쓰오부시를 올려 마무리한다.' }
        ],
        source: "https://newsroom.posco.com/kr/?p=20020"
    },
    '돈카츠나베': {
        category: '일식',
        keywords: ['돈카츠나베', '돈가스나베'],
        baseIngredient: '돈가스',
        description: '자작한 국물에 돈가스와 계란을 끓여낸 일본식 나베',
        calories: 620,
        difficulty: '보통',
        cookTime: '25분',
        ingredients: [
            { name: '돈가스', amount: '1장', required: true, noSubstituteHere: '돈가스는 돼지고기가 주재료이고 튀김옷에 밀가루·계란이 쓰여서 대체하기 어려워요. 다른 메뉴를 골라보시는 걸 추천해요.' },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: '계란이 이 요리의 정체성이라 마땅한 대체품이 없어요. 돈가스 튀김옷에도 계란이 쓰이는 경우가 많아서, 다른 메뉴를 골라보시는 걸 추천해요.' },
            { name: '양파', amount: '1/2개', required: true },
            { name: '팽이버섯', amount: '1/2봉', required: false },
            { name: '쯔유', amount: '4큰술', required: true },
            { name: '물', amount: '1/2컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '쯔유와 물, 양파를 냄비에 넣고 끓인다.' },
            { step: 2, instruction: '썬 돈가스와 팽이버섯을 넣는다.' },
            { step: 3, instruction: '계란물을 풀어 자작하게 끓인다.' },
            { step: 4, instruction: '계란이 반숙이 되면 그대로 상에 낸다.' }
        ],
        source: null
    },
    '명란크림우동': {
        category: '일식',
        keywords: ['명란크림우동'],
        baseIngredient: '우동면',
        description: '고소한 크림소스에 명란젓을 더한 우동',
        calories: 580,
        difficulty: '보통',
        cookTime: '20분',
        ingredients: [
            { name: '우동면', amount: '2인분', required: true },
            { name: '명란젓', amount: '1개', required: true },
            { name: '생크림', amount: '150ml', required: true },
            { name: '우유', amount: '100ml', required: true },
            { name: '마늘', amount: '2쪽', required: true },
            { name: '버터', amount: '10g', required: true }
        ],
        steps: [
            { step: 1, instruction: '마늘을 다져 버터에 볶아 향을 낸다.' },
            { step: 2, instruction: '생크림과 우유를 넣고 끓인다.' },
            { step: 3, instruction: '삶은 우동면을 넣고 볶듯이 섞는다.' },
            { step: 4, instruction: '명란젓을 반으로 갈라 풀어 넣고 고소하게 섞어 마무리한다.' }
        ],
        source: "https://m.cafe.daum.net/tourpalawan/L6v3/2806"
    },
    '라자냐': {
        category: '양식',
        keywords: ['라자냐'],
        baseIngredient: '라자냐면',
        description: '면과 소스, 치즈를 층층이 쌓아 구운 이탈리아식 오븐요리',
        calories: 620,
        difficulty: '어려움',
        cookTime: '70분',
        ingredients: [
            { name: '라자냐면', amount: '200g', required: true },
            { name: '다진소고기', amount: '250g', required: true },
            { name: '토마토소스', amount: '2컵', required: true },
            { name: '우유', amount: '2컵', required: true },
            { name: '버터', amount: '30g', required: true },
            { name: '밀가루', amount: '30g', required: true },
            { name: '모짜렐라 치즈', amount: '150g', required: true }
        ],
        steps: [
            { step: 1, instruction: '다진소고기를 볶다가 토마토소스를 넣어 라구소스를 만든다.' },
            { step: 2, instruction: '버터에 밀가루를 볶다가 우유를 부어 베샤멜소스를 만든다.' },
            { step: 3, instruction: '라자냐면을 삶는다.' },
            { step: 4, instruction: '면-라구소스-베샤멜소스-치즈 순으로 층층이 쌓기를 반복한다.' },
            { step: 5, instruction: '오븐에서 180도로 노릇하게 굽는다.' }
        ],
        source: "https://www.10000recipe.com/recipe/7008837"
    },
    '에그인헬': {
        category: '양식',
        keywords: ['에그인헬', '샤크슈카'],
        baseIngredient: '계란',
        description: '토마토소스에 계란을 익혀낸 지중해식 요리',
        calories: 380,
        difficulty: '쉬움',
        cookTime: '20분',
        ingredients: [
            { name: '토마토소스', amount: '2컵', required: true },
            { name: '계란', amount: '3개', required: true, noSubstituteHere: true },
            { name: '소세지', amount: '2개', required: false },
            { name: '피망', amount: '1개', required: true },
            { name: '치즈', amount: '50g', required: false },
            { name: '양파', amount: '1/2개', required: true }
        ],
        steps: [
            { step: 1, instruction: '팬에 양파와 피망을 볶는다.' },
            { step: 2, instruction: '토마토소스를 넣고 끓인다.' },
            { step: 3, instruction: '소세지를 넣고 함께 끓인다.' },
            { step: 4, instruction: '계란을 깨뜨려 소스 위에 올린다.' },
            { step: 5, instruction: '뚜껑을 덮고 계란이 반숙이 될 때까지 익힌다.' }
        ],
        source: "https://www.10000recipe.com/recipe/6998392"
    },
    '굴라쉬': {
        category: '양식',
        keywords: ['굴라쉬'],
        baseIngredient: '소고기',
        description: '파프리카가루로 맛을 낸 헝가리식 소고기 스튜',
        calories: 450,
        difficulty: '보통',
        cookTime: '60분',
        ingredients: [
            { name: '소고기', amount: '400g', required: true },
            { name: '토마토페이스트', amount: '3큰술', required: true },
            { name: '파프리카가루', amount: '2큰술', required: true },
            { name: '감자', amount: '2개', required: true },
            { name: '양파', amount: '1개', required: true },
            { name: '물', amount: '3컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '양파를 볶다가 소고기를 넣어 겉면을 익힌다.' },
            { step: 2, instruction: '파프리카가루와 토마토페이스트를 넣고 볶는다.' },
            { step: 3, instruction: '물을 붓고 약불에서 오래 끓인다.' },
            { step: 4, instruction: '감자를 넣고 다 익을 때까지 끓여 마무리한다.' }
        ],
        source: "https://www.bettycrocker.com/recipes/hungarian-goulash/fd276f03-8611-4386-8513-035298ab5379"
    },
    '치킨파니니': {
        category: '양식',
        keywords: ['치킨파니니'],
        baseIngredient: '닭가슴살',
        description: '그릴에 눌러 구운 담백한 치킨 샌드위치',
        calories: 480,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '치아바타빵', amount: '2개', required: true },
            { name: '닭가슴살', amount: '150g', required: true },
            { name: '바질페스토', amount: '2큰술', required: true },
            { name: '치즈', amount: '2장', required: true }
        ],
        steps: [
            { step: 1, instruction: '닭가슴살을 구워 얇게 슬라이스한다.' },
            { step: 2, instruction: '빵 안쪽에 바질페스토를 바른다.' },
            { step: 3, instruction: '닭고기와 치즈를 넣고 빵을 덮는다.' },
            { step: 4, instruction: '팬이나 파니니 그릴로 눌러가며 굽는다.' }
        ],
        source: "https://www.tastingtable.com/1553083/chicken-pesto-panini-recipe/?mode=print"
    },
    '스테이크 솥밥': {
        category: '양식',
        keywords: ['스테이크솥밥'],
        baseIngredient: '소고기',
        description: '갓 지은 솥밥에 구운 스테이크를 올린 든든한 한 그릇',
        calories: 650,
        difficulty: '보통',
        cookTime: '40분',
        ingredients: [
            { name: '쌀', amount: '2컵', required: true },
            { name: '소고기(스테이크용)', amount: '200g', required: true },
            { name: '버터', amount: '20g', required: true },
            { name: '쪽파', amount: '2대', required: false },
            { name: '간장소스', amount: '2큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '솥에 쌀과 물을 안쳐 밥을 짓는다.' },
            { step: 2, instruction: '스테이크는 소금후추로 밑간해 미디엄으로 굽는다.' },
            { step: 3, instruction: '구운 스테이크를 먹기 좋게 슬라이스한다.' },
            { step: 4, instruction: '갓 지은 밥 위에 스테이크를 얹는다.' },
            { step: 5, instruction: '버터와 간장소스를 올리고 쪽파를 뿌려 비벼 먹는다.' }
        ],
        source: null
    },
    '맥앤치즈': {
        category: '양식',
        keywords: ['맥앤치즈'],
        baseIngredient: '마카로니',
        description: '꾸덕한 치즈소스에 버무린 마카로니 요리',
        calories: 580,
        difficulty: '쉬움',
        cookTime: '20분',
        ingredients: [
            { name: '마카로니', amount: '200g', required: true },
            { name: '체다치즈', amount: '150g', required: true },
            { name: '우유', amount: '1컵', required: true },
            { name: '버터', amount: '20g', required: true },
            { name: '베이컨', amount: '50g', required: false }
        ],
        steps: [
            { step: 1, instruction: '마카로니를 삶는다.' },
            { step: 2, instruction: '팬에 버터를 녹이고 우유를 부어 데운다.' },
            { step: 3, instruction: '체다치즈를 넣어 녹인다.' },
            { step: 4, instruction: '삶은 마카로니를 넣고 골고루 섞는다.' },
            { step: 5, instruction: '구운 베이컨을 올려 마무리한다.' }
        ],
        source: "https://www.10000recipe.com/bbs/view.html?seq=970"
    },
    '티라미수': {
        category: '디저트',
        keywords: ['티라미수'],
        baseIngredient: '마스카포네 치즈',
        description: '커피에 적신 빵과 치즈크림을 층층이 쌓은 이탈리아 디저트',
        calories: 420,
        difficulty: '보통',
        cookTime: '30분',
        ingredients: [
            { name: '마스카포네 치즈', amount: '250g', required: true },
            { name: '레이디핑거', amount: '200g', required: true },
            { name: '커피', amount: '1컵', required: true },
            { name: '계란노른자', amount: '2개', required: true, substituteOverride: ['노른자 없는 크림(생크림+마스카포네)'] },
            { name: '설탕', amount: '50g', required: true },
            { name: '코코아가루', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '계란노른자와 설탕을 휘핑해 크림을 만든다.' },
            { step: 2, instruction: '마스카포네 치즈를 넣고 부드럽게 섞는다.' },
            { step: 3, instruction: '레이디핑거를 커피에 살짝 적신다.' },
            { step: 4, instruction: '그릇에 빵과 크림을 번갈아 층층이 쌓는다.' },
            { step: 5, instruction: '냉장고에서 굳힌 뒤 코코아가루를 뿌려 마무리한다.' }
        ],
        source: "https://www.10000recipe.com/recipe/4197992"
    },
    '에그타르트': {
        category: '디저트',
        keywords: ['에그타르트'],
        baseIngredient: '커스터드',
        description: '바삭한 타르트지에 부드러운 커스터드를 채워 구운 디저트',
        calories: 320,
        difficulty: '어려움',
        cookTime: '40분',
        ingredients: [
            { name: '타르트지', amount: '6개', required: true, noSubstituteHere: '타르트지에 밀가루가 들어 있어 글루텐 대체가 어려워요. 다른 디저트를 골라보시는 걸 추천해요.' },
            { name: '계란노른자', amount: '4개', required: true, noSubstituteHere: '계란 커스터드가 이 요리 그 자체라, 대체하면 다른 디저트가 돼요. 타르트지에도 계란이 들어갈 수 있으니 다른 디저트를 골라보시는 걸 추천해요.' },
            { name: '생크림', amount: '200ml', required: true },
            { name: '우유', amount: '100ml', required: true },
            { name: '설탕', amount: '60g', required: true }
        ],
        steps: [
            { step: 1, instruction: '계란노른자와 설탕을 잘 섞는다.' },
            { step: 2, instruction: '생크림과 우유를 넣고 섞는다.' },
            { step: 3, instruction: '체에 한 번 걸러 타르트지에 붓는다.' },
            { step: 4, instruction: '오븐에서 220도로 노릇하게 굽는다.' }
        ],
        source: "https://www.10000recipe.com/recipe/4309977"
    },
    '브라우니': {
        category: '디저트',
        keywords: ['브라우니'],
        baseIngredient: '초콜릿',
        description: '진한 초콜릿 반죽을 구워낸 꾸덕한 디저트',
        calories: 450,
        difficulty: '보통',
        cookTime: '35분',
        ingredients: [
            { name: '다크초콜릿', amount: '150g', required: true },
            { name: '버터', amount: '100g', required: true },
            { name: '계란', amount: '2개', required: true, substituteOverride: ['사과소스(계란 대신)', '바나나(베이킹용)', '아쿠아파바(베이킹용)'] },
            { name: '설탕', amount: '100g', required: true },
            { name: '밀가루', amount: '80g', required: true }
        ],
        steps: [
            { step: 1, instruction: '초콜릿과 버터를 중탕으로 녹인다.' },
            { step: 2, instruction: '계란과 설탕을 섞는다.' },
            { step: 3, instruction: '녹인 초콜릿을 넣고 섞는다.' },
            { step: 4, instruction: '밀가루를 체 쳐 넣고 가볍게 섞는다.' },
            { step: 5, instruction: '틀에 부어 오븐에서 25~30분 굽는다.' }
        ],
        source: null
    },
    '마들렌': {
        category: '디저트',
        keywords: ['마들렌'],
        baseIngredient: '밀가루',
        description: '조개 모양 틀에 구워낸 폭신한 프랑스 과자',
        calories: 180,
        difficulty: '보통',
        cookTime: '30분',
        ingredients: [
            { name: '밀가루', amount: '100g', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: '계란이 반죽의 구조와 부풀림을 맡고 있어서, 빼면 마들렌이 아닌 다른 과자가 돼요. 대체는 권장하지 않아요.' },
            { name: '버터', amount: '100g', required: true },
            { name: '설탕', amount: '80g', required: true },
            { name: '레몬즙', amount: '1작은술', required: false }
        ],
        steps: [
            { step: 1, instruction: '버터를 녹인다.' },
            { step: 2, instruction: '계란과 설탕을 섞는다.' },
            { step: 3, instruction: '밀가루를 체 쳐 넣고 섞는다.' },
            { step: 4, instruction: '녹인 버터와 레몬즙을 넣고 섞은 뒤 냉장고에서 반죽을 휴지시킨다.' },
            { step: 5, instruction: '조개모양 틀에 부어 오븐에서 굽는다.' }
        ],
        source: null
    },
    '바스크 치즈케이크': {
        category: '디저트',
        keywords: ['바스크치즈케이크'],
        baseIngredient: '크림치즈',
        description: '윗면을 그을리듯 구워낸 진한 스페인식 치즈케이크',
        calories: 380,
        difficulty: '보통',
        cookTime: '50분',
        ingredients: [
            { name: '크림치즈', amount: '400g', required: true },
            { name: '생크림', amount: '200ml', required: true },
            { name: '설탕', amount: '120g', required: true },
            { name: '계란', amount: '3개', required: true, noSubstituteHere: '계란 3개가 굳는 구조를 만들어 줘서, 대체품으로는 같은 식감을 내기 어려워요. 대체는 권장하지 않아요.' }
        ],
        steps: [
            { step: 1, instruction: '크림치즈를 부드럽게 풀어준다.' },
            { step: 2, instruction: '설탕을 넣고 섞는다.' },
            { step: 3, instruction: '계란을 하나씩 넣으며 섞는다.' },
            { step: 4, instruction: '생크림을 넣고 매끄럽게 섞는다.' },
            { step: 5, instruction: '고온의 오븐에서 윗면이 타듯 노릇해질 때까지 굽는다.' }
        ],
        source: null
    },
    '망고 사고': {
        category: '디저트',
        keywords: ['망고사고'],
        baseIngredient: '망고',
        description: '코코넛밀크와 망고로 만드는 시원한 동남아식 디저트',
        calories: 220,
        difficulty: '쉬움',
        cookTime: '20분',
        ingredients: [
            { name: '사고펄', amount: '1/2컵', required: true },
            { name: '망고', amount: '1개', required: true },
            { name: '연유', amount: '3큰술', required: true },
            { name: '코코넛밀크', amount: '1컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '사고펄을 투명해질 때까지 삶는다.' },
            { step: 2, instruction: '찬물에 헹궈 전분기를 빼고 물기를 뺀다.' },
            { step: 3, instruction: '망고는 잘게 썬다.' },
            { step: 4, instruction: '코코넛밀크와 연유를 섞는다.' },
            { step: 5, instruction: '모든 재료를 섞어 차갑게 보관 후 먹는다.' }
        ],
        source: null
    },
    '파나코타': {
        category: '디저트',
        keywords: ['파나코타'],
        baseIngredient: '생크림',
        description: '생크림을 부드럽게 굳혀낸 이탈리아식 푸딩',
        calories: 280,
        difficulty: '쉬움',
        cookTime: '20분',
        ingredients: [
            { name: '생크림', amount: '300ml', required: true },
            { name: '우유', amount: '200ml', required: true },
            { name: '설탕', amount: '60g', required: true },
            { name: '판젤라틴', amount: '3장', required: true },
            { name: '과일잼', amount: '2큰술', required: false }
        ],
        steps: [
            { step: 1, instruction: '판젤라틴은 찬물에 불린다.' },
            { step: 2, instruction: '생크림, 우유, 설탕을 약불에서 데운다.' },
            { step: 3, instruction: '불린 젤라틴을 넣어 녹인다.' },
            { step: 4, instruction: '용기에 부어 냉장고에서 2시간 이상 굳힌다.' },
            { step: 5, instruction: '과일잼을 얹어 완성한다.' }
        ],
        source: null
    },

    '순두부찌개': {
        category: '한식',
        keywords: ['순두부찌개'],
        baseIngredient: '순두부',
        description: '얼큰하고 부드러운 국물이 일품인 찌개',
        calories: 320,
        difficulty: '보통',
        cookTime: '30분',
        ingredients: [
            { name: '순두부', amount: '1봉', required: true, noSubstituteHere: true },
            { name: '다진 돼지고기', amount: '80g', required: true },
            { name: '바지락', amount: '12개', required: false },
            { name: '양파', amount: '1/4개', required: true },
            { name: '대파', amount: '1/2대', required: true },
            { name: '청양고추', amount: '1개', required: false },
            { name: '고춧가루', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '계란', amount: '1개', required: false, noSubstituteHere: true },
            { name: '물', amount: '2컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '팬에 식용유를 두르고 다진 돼지고기를 볶는다.' },
            { step: 2, instruction: '고기가 익으면 고춧가루와 다진마늘을 넣고 함께 볶아 고추기름을 낸다.' },
            { step: 3, instruction: '양파와 바지락을 넣고 물을 부어 끓인다.' },
            { step: 4, instruction: '끓어오르면 순두부를 큼직하게 떠 넣는다.' },
            { step: 5, instruction: '대파와 청양고추를 넣고 한소끔 더 끓인다.' },
            { step: 6, instruction: '계란을 톡 깨 넣고 살짝 더 익혀 마무리한다.' }
        ],
        source: "https://www.kurly.com/recipe/671764624701d5e8aa02eee7"
    },
    '닭볶음탕': {
        category: '한식',
        keywords: ['닭볶음탕', '닭도리탕'],
        baseIngredient: '닭고기',
        description: '매콤달콤한 양념에 조려낸 얼큰한 닭요리',
        calories: 480,
        difficulty: '보통',
        cookTime: '40분',
        ingredients: [
            { name: '토막 닭고기', amount: '800g', required: true },
            { name: '감자', amount: '2개', required: true },
            { name: '당근', amount: '1/2개', required: true },
            { name: '양파', amount: '1개', required: true },
            { name: '대파', amount: '1대', required: false },
            { name: '고추장', amount: '2큰술', required: true },
            { name: '고춧가루', amount: '2큰술', required: true },
            { name: '간장', amount: '2큰술', required: true },
            { name: '설탕', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '물', amount: '2컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '닭고기는 끓는 물에 한 번 데쳐 잡내를 제거한다.' },
            { step: 2, instruction: '고추장, 고춧가루, 간장, 설탕, 다진마늘을 섞어 양념장을 만든다.' },
            { step: 3, instruction: '냄비에 닭고기와 양념장, 물을 넣고 센 불에서 끓인다.' },
            { step: 4, instruction: '끓어오르면 감자와 당근을 넣고 중불로 줄여 조린다.' },
            { step: 5, instruction: '감자가 익고 국물이 걸쭉해지면 양파와 대파를 넣고 마무리한다.' }
        ],
        source: "https://www.kurly.com/recipe/671764624701d5e8aa02eee5"
    },
    '오징어볶음': {
        category: '한식',
        keywords: ['오징어볶음'],
        baseIngredient: '오징어',
        description: '쫄깃한 오징어를 매콤하게 볶아낸 밥도둑 반찬',
        calories: 310,
        difficulty: '보통',
        cookTime: '20분',
        ingredients: [
            { name: '오징어', amount: '1마리', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '양배추', amount: '2장', required: false },
            { name: '당근', amount: '1/4개', required: false },
            { name: '청양고추', amount: '1개', required: false },
            { name: '고추장', amount: '1.5큰술', required: true },
            { name: '고춧가루', amount: '1큰술', required: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '설탕', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '참기름', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '오징어는 손질하여 먹기 좋은 크기로 썬다.' },
            { step: 2, instruction: '고추장, 고춧가루, 간장, 설탕, 다진마늘을 섞어 양념장을 만든다.' },
            { step: 3, instruction: '팬에 기름을 두르고 양파, 당근을 먼저 볶는다.' },
            { step: 4, instruction: '채소가 살짝 익으면 오징어와 양념장을 넣고 센 불에서 빠르게 볶는다.' },
            { step: 5, instruction: '양배추와 청양고추를 넣고 짧게 더 볶은 뒤 참기름을 둘러 마무리한다.' }
        ],
        source: "https://www.kurly.com/recipe/6720460d512b7f58a373ea96"
    },
    '떡갈비': {
        category: '한식',
        keywords: ['떡갈비'],
        baseIngredient: '다진고기',
        description: '고기를 다져 치대어 구운 담양 향토 음식',
        calories: 420,
        difficulty: '보통',
        cookTime: '40분',
        ingredients: [
            { name: '다진 소고기', amount: '200g', required: true },
            { name: '다진 돼지고기', amount: '200g', required: true },
            { name: '간장', amount: '2큰술', required: true },
            { name: '설탕', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '다진파', amount: '2큰술', required: true },
            { name: '참기름', amount: '1큰술', required: true },
            { name: '후추', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '다진 소고기와 돼지고기를 볼에 담는다.' },
            { step: 2, instruction: '간장, 설탕, 다진마늘, 다진파, 참기름, 후추를 넣는다.' },
            { step: 3, instruction: '끈기가 생길 때까지 충분히 치댄다.' },
            { step: 4, instruction: '반죽을 동글납작하게 빚는다.' },
            { step: 5, instruction: '팬에 앞뒤로 노릇하게 구워낸다.' }
        ],
        source: "https://www.wegive.co.kr/wezine/detail/1317"
    },
    '소고기뭇국': {
        category: '한식',
        keywords: ['소고기뭇국', '뭇국'],
        baseIngredient: '소고기',
        description: '깔끔하고 시원한 국물의 기본 국 요리',
        calories: 180,
        difficulty: '쉬움',
        cookTime: '30분',
        ingredients: [
            { name: '소고기(국거리)', amount: '150g', required: true },
            { name: '무', amount: '1/4개', required: true },
            { name: '국간장', amount: '2큰술', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '참기름', amount: '1큰술', required: true },
            { name: '대파', amount: '1/2대', required: false },
            { name: '물', amount: '4컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '무는 나박썰기 한다.' },
            { step: 2, instruction: '냄비에 참기름을 두르고 소고기를 볶는다.' },
            { step: 3, instruction: '고기 겉면이 익으면 무를 넣고 함께 볶는다.' },
            { step: 4, instruction: '물을 붓고 끓어오르면 다진마늘, 국간장을 넣는다.' },
            { step: 5, instruction: '무가 투명하게 익을 때까지 끓인 뒤 대파를 올려 마무리한다.' }
        ],
        source: null
    },
    '계란볶음밥': {
        category: '중식',
        keywords: ['계란볶음밥'],
        baseIngredient: '밥',
        description: '고슬고슬하게 볶아낸 기본 계란볶음밥',
        calories: 480,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '밥', amount: '1공기', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '대파', amount: '1대', required: true },
            { name: '굴소스', amount: '1큰술', required: true },
            { name: '식용유', amount: '2큰술', required: true },
            { name: '소금', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '팬에 식용유를 두르고 대파를 볶아 파기름을 낸다.' },
            { step: 2, instruction: '계란을 풀어 넣고 스크램블처럼 볶는다.' },
            { step: 3, instruction: '밥을 넣고 날알이 흩어지도록 강불에서 볶는다.' },
            { step: 4, instruction: '굴소스와 소금으로 간을 맞춰 마무리한다.' }
        ],
        source: null
    },
    '마파두부': {
        category: '중식',
        keywords: ['마파두부'],
        baseIngredient: '두부',
        description: '두반장으로 얼큰하게 볶아낸 중국식 두부요리',
        calories: 350,
        difficulty: '보통',
        cookTime: '25분',
        ingredients: [
            { name: '두부', amount: '1모', required: true, noSubstituteHere: true },
            { name: '다진 돼지고기', amount: '100g', required: true },
            { name: '대파', amount: '1대', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '두반장', amount: '1큰술', required: true },
            { name: '굴소스', amount: '1큰술', required: false },
            { name: '간장', amount: '1큰술', required: true },
            { name: '전분물', amount: '2큰술', required: true },
            { name: '참기름', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '두부는 깍둑썰기 하여 끓는 물에 살짝 데쳐 물기를 뺀다.' },
            { step: 2, instruction: '팬에 식용유를 두르고 다진마늘, 대파를 볶아 향을 낸다.' },
            { step: 3, instruction: '다진 돼지고기를 넣고 볶다가 두반장, 간장을 넣는다.' },
            { step: 4, instruction: '물을 조금 넣고 끓으면 두부를 넣어 살살 섞는다.' },
            { step: 5, instruction: '전분물을 둘러 걸쭉하게 만들고 참기름을 둘러 마무리한다.' }
        ],
        source: "https://www.kurly.com/recipe/671764624701d5e8aa02ef19"
    },
    '토마토계란볶음': {
        category: '중식',
        keywords: ['토마토계란볶음', '토달볶'],
        baseIngredient: '토마토',
        description: '새콤달콤한 토마토와 부드러운 계란의 조합',
        calories: 220,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '토마토', amount: '2개', required: true },
            { name: '계란', amount: '3개', required: true, noSubstituteHere: true },
            { name: '대파', amount: '1/2대', required: false },
            { name: '굴소스', amount: '1작은술', required: false },
            { name: '설탕', amount: '1작은술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '식용유', amount: '2큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '계란은 소금 한 꼬집을 넣고 풀어둔다.' },
            { step: 2, instruction: '토마토는 먹기 좋은 크기로 썬다.' },
            { step: 3, instruction: '팬에 기름을 두르고 계란물을 부어 스크램블을 만든 뒤 따로 덜어둔다.' },
            { step: 4, instruction: '같은 팬에 토마토를 볶다가 굴소스, 설탕을 넣는다.' },
            { step: 5, instruction: '토마토가 물러지면 계란과 대파를 넣고 함께 볶아 마무리한다.' }
        ],
        source: "https://www.10000recipe.com/recipe/6905626"
    },
    '고추잡채': {
        category: '중식',
        keywords: ['고추잡채'],
        baseIngredient: '돼지고기',
        description: '고기와 채소를 가늘게 썰어 볶은 중국식 요리',
        calories: 340,
        difficulty: '보통',
        cookTime: '25분',
        ingredients: [
            { name: '돼지고기', amount: '200g', required: true },
            { name: '피망', amount: '2개', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '당근', amount: '1/3개', required: false },
            { name: '다진마늘', amount: '1작은술', required: true },
            { name: '간장', amount: '2큰술', required: true },
            { name: '굴소스', amount: '1큰술', required: true },
            { name: '설탕', amount: '1작은술', required: true },
            { name: '전분', amount: '1작은술', required: false }
        ],
        steps: [
            { step: 1, instruction: '돼지고기와 채소는 모두 얇게 채 썬다.' },
            { step: 2, instruction: '고기에 간장 약간, 전분을 넣어 밑간한다.' },
            { step: 3, instruction: '팬에 기름을 두르고 고기를 먼저 볶아 따로 덜어둔다.' },
            { step: 4, instruction: '같은 팬에 마늘, 당근, 양파를 볶다가 피망을 넣는다.' },
            { step: 5, instruction: '고기를 다시 넣고 간장, 굴소스, 설탕을 넣어 센 불에서 빠르게 볶는다.' }
        ],
        source: "https://m.cafe.daum.net/jinju1009/Fewl/3178"
    },
    '꿔바로우': {
        category: '중식',
        keywords: ['꿔바로우', '탕수육'],
        baseIngredient: '돼지고기',
        description: '바삭한 튀김에 새콤달콤한 소스를 곁들인 중국식 튀김요리',
        calories: 590,
        difficulty: '어려움',
        cookTime: '50분',
        ingredients: [
            { name: '돼지고기(등심)', amount: '300g', required: true },
            { name: '감자전분', amount: '1컵', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['전분 반죽물(계란 대신)', '아쿠아파바(무맛 결합제)'] },
            { name: '당근', amount: '1/4개', required: false },
            { name: '오이', amount: '1/4개', required: false },
            { name: '식초', amount: '3큰술', required: true },
            { name: '설탕', amount: '3큰술', required: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '식용유(튀김용)', amount: '적당량', required: true }
        ],
        steps: [
            { step: 1, instruction: '돼지고기는 먹기 좋은 크기로 썰어 간장, 후추로 밑간한다.' },
            { step: 2, instruction: '고기에 계란과 불린 감자전분을 묻힌다.' },
            { step: 3, instruction: '170도 기름에 한 번 튀기고, 다시 한 번 더 바삭하게 튀긴다.' },
            { step: 4, instruction: '식초, 설탕, 간장, 물을 섞어 소스를 만들어 끓인다.' },
            { step: 5, instruction: '당근, 오이를 채 썰어 소스에 곁들이고 튀긴 고기 위에 소스를 끼얹어 완성한다.' }
        ],
        source: "https://m.cafe.daum.net/031-212-1253/DELk/737"
    },
    '가츠동': {
        category: '일식',
        keywords: ['가츠동'],
        baseIngredient: '돈가스',
        description: '돈가스를 계란과 함께 조려 얹은 일본식 덮밥',
        calories: 650,
        difficulty: '보통',
        cookTime: '25분',
        ingredients: [
            { name: '돈가스', amount: '1장', required: true, noSubstituteHere: '돈가스는 돼지고기가 주재료이고 튀김옷에 밀가루·계란이 쓰여서 대체하기 어려워요. 다른 메뉴를 골라보시는 걸 추천해요.' },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '쯔유', amount: '4큰술', required: true },
            { name: '물', amount: '1/2컵', required: true },
            { name: '밥', amount: '1공기', required: true },
            { name: '대파', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '팬에 쯔유와 물을 넣고 양파를 채 썰어 넣어 조린다.' },
            { step: 2, instruction: '양파가 익으면 튀긴 돈가스를 썰어 올린다.' },
            { step: 3, instruction: '계란물을 풀어 반쯤 익도록 둘러 붓는다.' },
            { step: 4, instruction: '뚜껑을 덮고 계란이 반숙이 될 때까지 익힌다.' },
            { step: 5, instruction: '밥 위에 통째로 얹고 대파를 올려 마무리한다.' }
        ],
        source: "https://www.10000recipe.com/recipe/4391549"
    },
    '오야코동': {
        category: '일식',
        keywords: ['오야코동'],
        baseIngredient: '닭고기',
        description: '닭고기와 계란을 조려 얹은 부모자식 덮밥',
        calories: 550,
        difficulty: '보통',
        cookTime: '20분',
        ingredients: [
            { name: '닭다리살', amount: '200g', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '쯔유', amount: '4큰술', required: true },
            { name: '물', amount: '1/2컵', required: true },
            { name: '밥', amount: '1공기', required: true },
            { name: '대파', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '닭고기는 한입 크기로 썬다.' },
            { step: 2, instruction: '팬에 쯔유와 물, 채 썬 양파를 넣고 끓인다.' },
            { step: 3, instruction: '닭고기를 넣고 속까지 익도록 조린다.' },
            { step: 4, instruction: '계란물을 풀어 둘러 붓고 살짝만 익힌다.' },
            { step: 5, instruction: '밥 위에 얹고 대파를 올려 완성한다.' }
        ],
        source: null
    },
    '야키소바': {
        category: '일식',
        keywords: ['야키소바'],
        baseIngredient: '면',
        description: '채소와 고기를 볶아 소스에 버무린 일본식 볶음면',
        calories: 520,
        difficulty: '보통',
        cookTime: '20분',
        ingredients: [
            { name: '야키소바면(또는 중화면)', amount: '2인분', required: true },
            { name: '양배추', amount: '2장', required: true },
            { name: '돼지고기', amount: '100g', required: true },
            { name: '당근', amount: '약간', required: false },
            { name: '야키소바소스', amount: '4큰술', required: true },
            { name: '식용유', amount: '2큰술', required: true },
            { name: '가쓰오부시', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '양배추와 당근은 채 썰고 돼지고기는 한입 크기로 썬다.' },
            { step: 2, instruction: '팬에 기름을 두르고 돼지고기를 먼저 볶는다.' },
            { step: 3, instruction: '고기가 익으면 채소를 넣고 함께 볶는다.' },
            { step: 4, instruction: '면을 넣고 야키소바소스를 둘러 골고루 섞어 볶는다.' },
            { step: 5, instruction: '그릇에 담고 가쓰오부시를 뿌려 마무리한다.' }
        ],
        source: "https://m.cafe.daum.net/gil6548/MOwf/7581"
    },
    '카레라이스': {
        category: '일식',
        keywords: ['카레라이스', '카레'],
        baseIngredient: '카레',
        description: '고체카레로 만드는 부드럽고 든든한 한 그릇 요리',
        calories: 580,
        difficulty: '쉬움',
        cookTime: '40분',
        ingredients: [
            { name: '고체카레', amount: '4조각', required: true },
            { name: '감자', amount: '1개', required: true },
            { name: '당근', amount: '1/2개', required: true },
            { name: '양파', amount: '1개', required: true },
            { name: '돼지고기(또는 소고기)', amount: '150g', required: false },
            { name: '물', amount: '2컵', required: true },
            { name: '밥', amount: '1공기', required: true }
        ],
        steps: [
            { step: 1, instruction: '감자, 당근, 양파는 한입 크기로 썬다.' },
            { step: 2, instruction: '팬에 기름을 두르고 양파를 갈색이 나도록 볶는다.' },
            { step: 3, instruction: '고기를 넣고 겉면이 익을 때까지 볶는다.' },
            { step: 4, instruction: '감자, 당근과 물을 넣고 재료가 무를 때까지 끓인다.' },
            { step: 5, instruction: '불을 끄고 고체카레를 넣어 녹인 뒤 약불에서 걸쭉해질 때까지 저어가며 끓인다.' },
            { step: 6, instruction: '밥과 함께 그릇에 담아 완성한다.' }
        ],
        source: null
    },
    '메밀소바': {
        category: '일식',
        keywords: ['메밀소바', '자루소바'],
        baseIngredient: '메밀면',
        description: '차갑게 즐기는 담백한 일본식 메밀국수',
        calories: 380,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '메밀면', amount: '200g', required: true },
            { name: '쯔유', amount: '4큰술', required: true },
            { name: '물', amount: '1컵', required: true },
            { name: '간 무', amount: '약간', required: false },
            { name: '와사비', amount: '약간', required: false },
            { name: '김가루', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '쯔유와 물을 섞어 차갑게 육수를 준비한다.' },
            { step: 2, instruction: '메밀면은 끓는 물에 삶은 뒤 찬물에 헹궈 물기를 뺀다.' },
            { step: 3, instruction: '그릇에 면을 담고 육수를 곁들인다.' },
            { step: 4, instruction: '간 무, 와사비, 김가루를 올려 완성한다.' }
        ],
        source: "https://m.cafe.daum.net/jinju1009/Fewl/3087"
    },
    '까르보나라': {
        category: '양식',
        keywords: ['까르보나라', '카르보나라'],
        baseIngredient: '파스타',
        description: '계란과 치즈로 만드는 부드럽고 고소한 크림 없는 파스타',
        calories: 680,
        difficulty: '보통',
        cookTime: '25분',
        ingredients: [
            { name: '파스타면', amount: '200g', required: true },
            { name: '베이컨', amount: '80g', required: true },
            { name: '계란노른자', amount: '2개', required: true, noSubstituteHere: '노른자가 소스의 고소함과 크리미함을 모두 맡는 요리라, 계란 없이는 같은 맛이 나지 않아요. 계란 없이 만든 크림 파스타는 생크림·치즈가 필요해서 우유 제약과 겹칠 수 있어요. 다른 메뉴를 골라보시는 걸 추천해요.' },
            { name: '파마산 치즈', amount: '40g', required: true },
            { name: '마늘', amount: '1쪽', required: false },
            { name: '후추', amount: '약간', required: true },
            { name: '소금', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '끓는 소금물에 파스타면을 삶는다.' },
            { step: 2, instruction: '계란노른자와 파마산 치즈, 후추를 섞어 소스를 만든다.' },
            { step: 3, instruction: '팬에 베이컨과 마늘을 볶아 기름을 낸다.' },
            { step: 4, instruction: '불을 끄고 삶은 면과 면수를 조금 넣어 섞는다.' },
            { step: 5, instruction: '준비한 계란 소스를 넣고 잔열로 재빨리 버무려 완성한다.' }
        ],
        source: "https://glukhov.org/ko/post/2023/pasta-carbonara/"
    },
    '감바스알아히요': {
        category: '양식',
        keywords: ['감바스', '감바스알아히요'],
        baseIngredient: '새우',
        description: '마늘과 올리브유 향이 가득한 스페인식 새우 요리',
        calories: 380,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '새우', amount: '200g', required: true },
            { name: '마늘', amount: '6쪽', required: true },
            { name: '페페론치노', amount: '5개', required: false },
            { name: '올리브유', amount: '1컵', required: true },
            { name: '바게트', amount: '적당량', required: false },
            { name: '소금', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '새우는 손질하여 소금으로 밑간한다.' },
            { step: 2, instruction: '팬에 올리브유를 넉넉히 붓고 마늘, 페페론치노를 넣어 약불로 향을 낸다.' },
            { step: 3, instruction: '마늘이 노릇해지면 새우를 넣고 중불에서 익힌다.' },
            { step: 4, instruction: '새우가 다 익으면 소금으로 간을 맞춘다.' },
            { step: 5, instruction: '구운 바게트를 곁들여 완성한다.' }
        ],
        source: "https://www.kurly.com/recipe/671764624701d5e8aa02eefb"
    },
    '바질페스토파스타': {
        category: '양식',
        keywords: ['바질페스토파스타', '바질파스타'],
        baseIngredient: '파스타',
        description: '바질 페스토를 비벼 간단하게 완성하는 파스타',
        calories: 550,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '파스타면', amount: '200g', required: true },
            { name: '바질페스토', amount: '3큰술', required: true },
            { name: '올리브유', amount: '1큰술', required: true },
            { name: '방울토마토', amount: '8개', required: false },
            { name: '파마산 치즈', amount: '적당량', required: false },
            { name: '소금', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '끓는 소금물에 파스타면을 삶는다.' },
            { step: 2, instruction: '방울토마토는 반으로 썬다.' },
            { step: 3, instruction: '삶은 면에 바질페스토와 올리브유를 넣고 비빈다.' },
            { step: 4, instruction: '방울토마토를 넣고 살짝 더 섞는다.' },
            { step: 5, instruction: '그릇에 담고 파마산 치즈를 뿌려 완성한다.' }
        ],
        source: "https://m.cafe.daum.net/party3434/gECq/1337"
    },
    '함박스테이크': {
        category: '양식',
        keywords: ['함박스테이크'],
        baseIngredient: '다진고기',
        description: '육즙 가득한 일본식 다진 고기 스테이크',
        calories: 520,
        difficulty: '어려움',
        cookTime: '40분',
        ingredients: [
            { name: '다진 소고기', amount: '200g', required: true },
            { name: '다진 돼지고기', amount: '100g', required: true },
            { name: '빵가루', amount: '1/2컵', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['전분 반죽물(계란 대신)', '불린 빵가루 추가(계란 대신)'] },
            { name: '우유', amount: '2큰술', required: false },
            { name: '우스터소스', amount: '2큰술', required: true },
            { name: '케첩', amount: '2큰술', required: false }
        ],
        steps: [
            { step: 1, instruction: '양파는 잘게 다져 볶아 식힌다.' },
            { step: 2, instruction: '빵가루는 우유에 불려둔다.' },
            { step: 3, instruction: '다진 고기에 볶은 양파, 빵가루, 계란을 넣고 끈기가 생길 때까지 치댄다.' },
            { step: 4, instruction: '타원형으로 빚어 가운데를 살짝 눌러준다.' },
            { step: 5, instruction: '팬에 앞뒤로 구운 뒤 뚜껑을 덮어 속까지 익힌다.' },
            { step: 6, instruction: '우스터소스와 케첩을 섞어 소스를 만들어 곁들인다.' }
        ],
        source: null
    },
    '크림리조또': {
        category: '양식',
        keywords: ['크림리조또'],
        baseIngredient: '쌀',
        description: '베이컨과 생크림으로 더 진하고 부드럽게 만든 리조또',
        calories: 620,
        difficulty: '보통',
        cookTime: '30분',
        ingredients: [
            { name: '밥(또는 쌀)', amount: '1공기', required: true },
            { name: '생크림', amount: '100ml', required: true },
            { name: '우유', amount: '100ml', required: true },
            { name: '베이컨', amount: '60g', required: false },
            { name: '버터', amount: '20g', required: true },
            { name: '파마산 치즈', amount: '30g', required: false },
            { name: '양파', amount: '1/4개', required: false }
        ],
        steps: [
            { step: 1, instruction: '팬에 버터를 녹이고 양파, 베이컨을 볶는다.' },
            { step: 2, instruction: '밥을 넣고 골고루 볶는다.' },
            { step: 3, instruction: '우유와 생크림을 부어 약불에서 저어가며 끓인다.' },
            { step: 4, instruction: '국물이 걸쭉해지면 파마산 치즈를 넣어 섞는다.' },
            { step: 5, instruction: '농도가 적당해지면 불을 끄고 완성한다.' }
        ],
        source: "https://www.10000recipe.com/recipe/6938475"
    },
    '프렌치토스트': {
        category: '디저트',
        keywords: ['프렌치토스트'],
        baseIngredient: '식빵',
        description: '계란물에 적셔 구운 폭신한 아침 메뉴',
        calories: 350,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '식빵', amount: '2장', required: true },
            { name: '계란', amount: '1개', required: true, noSubstituteHere: true },
            { name: '우유', amount: '1/2컵', required: true },
            { name: '설탕', amount: '1큰술', required: false },
            { name: '버터', amount: '10g', required: true },
            { name: '메이플시럽', amount: '적당량', required: false }
        ],
        steps: [
            { step: 1, instruction: '계란, 우유, 설탕을 잘 섞어 계란물을 만든다.' },
            { step: 2, instruction: '식빵을 계란물에 충분히 적신다.' },
            { step: 3, instruction: '팬에 버터를 녹이고 약불에서 앞뒤로 노릇하게 굽는다.' },
            { step: 4, instruction: '메이플시럽을 뿌려 완성한다.' }
        ],
        source: "https://www.10000recipe.com/recipe/7046329"
    },
    '바나나팬케이크': {
        category: '디저트',
        keywords: ['바나나팬케이크'],
        baseIngredient: '바나나',
        description: '으깬 바나나를 넣어 달콤하게 구운 팬케이크',
        calories: 380,
        difficulty: '쉬움',
        cookTime: '15분',
        ingredients: [
            { name: '바나나', amount: '1개', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['아쿠아파바(베이킹용)', '요구르트(베이킹용)'] },
            { name: '팬케이크 가루', amount: '1컵', required: true },
            { name: '우유', amount: '1/2컵', required: false },
            { name: '버터', amount: '10g', required: true }
        ],
        steps: [
            { step: 1, instruction: '바나나는 포크로 곱게 으깬다.' },
            { step: 2, instruction: '계란, 우유, 팬케이크 가루를 넣고 반죽을 만든다.' },
            { step: 3, instruction: '으깬 바나나를 반죽에 섞는다.' },
            { step: 4, instruction: '팬에 버터를 녹이고 반죽을 한 국자씩 부어 약불로 굽는다.' },
            { step: 5, instruction: '기포가 올라오면 뒤집어 반대쪽도 노릇하게 굽는다.' }
        ],
        source: null
    },
    '플레인스콘': {
        category: '디저트',
        keywords: ['스콘', '플레인스콘'],
        baseIngredient: '밀가루',
        description: '버터 향 가득한 폭신하고 담백한 기본 스콘',
        calories: 320,
        difficulty: '보통',
        cookTime: '35분',
        ingredients: [
            { name: '박력분', amount: '200g', required: true },
            { name: '차가운 버터', amount: '60g', required: true },
            { name: '우유', amount: '80ml', required: true },
            { name: '베이킹파우더', amount: '1작은술', required: true },
            { name: '설탕', amount: '30g', required: false },
            { name: '소금', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '오븐을 190도로 예열한다.' },
            { step: 2, instruction: '밀가루, 베이킹파우더, 설탕, 소금을 체에 친다.' },
            { step: 3, instruction: '차가운 버터를 넣고 소보로 상태가 되도록 손으로 비빈다.' },
            { step: 4, instruction: '우유를 넣고 반죽이 뭉칠 정도로만 가볍게 섞는다.' },
            { step: 5, instruction: '두툼하게 밀어 모양대로 잘라 오븐에서 15~18분 굽는다.' }
        ],
        source: null
    },
    '퐁당오쇼콜라': {
        category: '디저트',
        keywords: ['퐁당오쇼콜라', '퐁당쇼콜라'],
        baseIngredient: '초콜릿',
        description: '겉은 익고 속은 촉촉한 초콜릿 디저트',
        calories: 420,
        difficulty: '어려움',
        cookTime: '30분',
        ingredients: [
            { name: '다크초콜릿', amount: '100g', required: true },
            { name: '버터', amount: '80g', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: '덜 익은 계란 반죽이 흐르는 속을 만드는 디저트라, 대체하면 그 식감이 사라져요. 대체는 권장하지 않아요.' },
            { name: '설탕', amount: '60g', required: true },
            { name: '밀가루', amount: '40g', required: true }
        ],
        steps: [
            { step: 1, instruction: '오븐을 200도로 예열한다.' },
            { step: 2, instruction: '다크초콜릿과 버터를 함께 중탕으로 녹인다.' },
            { step: 3, instruction: '계란과 설탕을 섞어 거품을 낸 뒤 녹인 초콜릿과 합친다.' },
            { step: 4, instruction: '밀가루를 체 쳐서 넣고 가볍게 섞는다.' },
            { step: 5, instruction: '틀에 부어 오븐에서 10~12분만 구워 속을 촉촉하게 남긴다.' }
        ],
        source: null
    },
    '우유푸딩': {
        category: '디저트',
        keywords: ['우유푸딩'],
        baseIngredient: '우유',
        description: '부드럽고 시원하게 즐기는 우유 디저트',
        calories: 180,
        difficulty: '보통',
        cookTime: '20분',
        ingredients: [
            { name: '우유', amount: '500ml', required: true },
            { name: '설탕', amount: '50g', required: true },
            { name: '젤라틴', amount: '10g', required: true },
            { name: '바닐라 에센스', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '젤라틴은 찬물에 불려둔다.' },
            { step: 2, instruction: '냄비에 우유와 설탕을 넣고 약불에서 데운다.' },
            { step: 3, instruction: '불린 젤라틴을 넣어 완전히 녹인다.' },
            { step: 4, instruction: '바닐라 에센스를 넣고 향을 더한다.' },
            { step: 5, instruction: '용기에 부어 냉장고에서 2시간 이상 굳혀 완성한다.' }
        ],
        source: null
    },

    '뇨끼': {
        category: '양식',
        keywords: ['뇨끼', 'gnocchi'],
        baseIngredient: '감자',
        description: '포슬포슬한 감자로 만든 이탈리아식 수제비',
        calories: 550,
        difficulty: '보통',
        cookTime: '35분',
        source: "https://www.kurly.com/recipe/676d1b278d7c834ea3acf1c0",
        ingredients: [
            { name: '감자', amount: '400g', required: true },
            { name: '계란노른자', amount: '1개', required: true, substituteOverride: ['계란 없이 빚기'] },
            { name: '밀가루', amount: '100g', required: true },
            { name: '파마산 치즈', amount: '30g', required: false },
            { name: '소금', amount: '약간', required: true },
            { name: '버터', amount: '20g', required: false },
            { name: '생크림', amount: '100ml', required: false }
        ],
        steps: [
            { step: 1, instruction: '감자는 껍질째 삶거나 쪄서 뜨거울 때 곱게 으깬다.' },
            { step: 2, instruction: '으깬 감자에 계란노른자, 밀가루, 파마산 치즈, 소금을 넣고 가볍게 반죽한다.' },
            { step: 3, instruction: '반죽을 길게 밀어 2cm 크기로 잘라 포크로 눌러 모양을 낸다.' },
            { step: 4, instruction: '끓는 소금물에 넣고 반죽이 떠오르면 건진다 (약 2-3분).' },
            { step: 5, instruction: '팬에 버터를 녹이고 뇨끼를 넣어 겉을 노릇하게 굽는다.' },
            { step: 6, instruction: '생크림을 넣고 살짝 졸여 소스와 함께 버무린다.' }
        ]
    },
    '모츠나베': {
        category: '일식',
        keywords: ['모츠나베', '곱창전골'],
        baseIngredient: '소곱창',
        description: '곱창과 채소를 넣고 끓인 일본식 전골',
        calories: 480,
        difficulty: '어려움',
        cookTime: '50분',
        source: "https://int.japanesetaste.com/blogs/japanese-taste-blog/how-to-make-motsunabe-japanese-offal-hotpot-recipe",
        ingredients: [
            { name: '소곱창', amount: '300g', required: true },
            { name: '배추', amount: '1/4포기', required: true },
            { name: '부추', amount: '한 줌', required: true },
            { name: '두부', amount: '1/2모', required: false },
            { name: '다시마육수', amount: '1L', required: true },
            { name: '간장', amount: '3큰술', required: true },
            { name: '다진마늘', amount: '2쪽', required: true },
            { name: '고춧가루', amount: '1큰술', required: false }
        ],
        steps: [
            { step: 1, instruction: '곱창은 밀가루로 여러 번 주물러 씻고 끓는 물에 한 번 데친다.' },
            { step: 2, instruction: '냄비에 다시마육수를 붓고 간장, 다진마늘로 간을 맞춘다.' },
            { step: 3, instruction: '배추와 두부를 큼직하게 썰어 냄비에 넣는다.' },
            { step: 4, instruction: '데친 곱창을 넣고 중불에서 15분 정도 끓인다.' },
            { step: 5, instruction: '부추를 마지막에 올리고 살짝만 더 끓여 마무리한다.' }
        ]
    },
    '어묵탕': {
        category: '일식',
        keywords: ['어묵탕', '오뎅탕'],
        baseIngredient: '어묵',
        description: '시원한 국물의 어묵 꼬치탕',
        calories: 250,
        difficulty: '쉬움',
        cookTime: '20분',
        source: "https://m.cafe.daum.net/kangneungedu/IQ2n/1579",
        ingredients: [
            { name: '사각어묵', amount: '300g', required: true },
            { name: '무', amount: '1/4개', required: true },
            { name: '대파', amount: '1대', required: true },
            { name: '다시마', amount: '2장', required: true },
            { name: '국간장', amount: '2큰술', required: true },
            { name: '청양고추', amount: '1개', required: false }
        ],
        steps: [
            { step: 1, instruction: '냄비에 물과 다시마, 무를 넣고 15분간 끓여 육수를 낸다.' },
            { step: 2, instruction: '다시마를 건져내고 국간장으로 간을 맞춘다.' },
            { step: 3, instruction: '어묵을 꼬치에 꽂거나 먹기 좋게 썰어 넣는다.' },
            { step: 4, instruction: '중불에서 10분 정도 더 끓인다.' },
            { step: 5, instruction: '대파와 청양고추를 넣고 한소끔 더 끓여 마무리한다.' }
        ]
    },
    '알리올리오 파스타': {
        category: '양식',
        keywords: ['알리올리오', '알리오올리오'],
        baseIngredient: '파스타',
        description: '마늘과 올리브유로 만드는 담백한 오일 파스타',
        calories: 600,
        difficulty: '쉬움',
        cookTime: '20분',
        source: null,
        teamSubmitted: true,
        ingredients: [
            { name: '파스타', amount: '100g', required: true },
            { name: '올리브유', amount: '4큰술', required: true },
            { name: '다진마늘', amount: '2큰술', required: true },
            { name: '페페론치노', amount: '5개', required: false },
            { name: '해산물', amount: '적당량', required: false },
            { name: '버섯', amount: '적당량', required: false },
            { name: '맛소금', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '냄비에 올리브유를 두르고 약불로 살짝 데운다.' },
            { step: 2, instruction: '다진마늘을 넣고 지글지글 끓어오르면 약불로 페페론치노를 넣어 볶는다.' },
            { step: 3, instruction: '마늘이 갈색으로 변하면 물을 부어준다.' },
            { step: 4, instruction: '파스타면을 반으로 부숴 넣고 해산물, 버섯도 함께 넣어 강불로 끓인다.' },
            { step: 5, instruction: '물이 절반 정도 줄면 맛소금으로 간을 맞춘다.' },
            { step: 6, instruction: '물이 자작하게 남을 때까지 졸여 완성한다.' }
        ]
    },
    '우삼겹숙주볶음': {
        category: '한식',
        keywords: ['우삼겹숙주볶음', '숙주볶음'],
        baseIngredient: '우삼겹',
        description: '고소한 우삼겹과 아삭한 숙주의 조합',
        calories: 520,
        difficulty: '쉬움',
        cookTime: '15분',
        source: "https://m.10000recipe.com/recipe/6905743",
        ingredients: [
            { name: '우삼겹', amount: '200g', required: true },
            { name: '숙주나물', amount: '200g', required: true },
            { name: '대파', amount: '1대', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '간장', amount: '2큰술', required: true },
            { name: '굴소스', amount: '1큰술', required: false },
            { name: '후추', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '달군 팬에 우삼겹을 넣고 기름을 빼가며 굽는다.' },
            { step: 2, instruction: '고기가 익으면 다진마늘과 대파를 넣고 향을 낸다.' },
            { step: 3, instruction: '숙주나물을 넣고 센 불에서 빠르게 볶는다.' },
            { step: 4, instruction: '간장과 굴소스를 넣고 골고루 섞는다.' },
            { step: 5, instruction: '후추를 뿌려 마무리한다.' }
        ]
    },
    '제육볶음': {
        category: '한식',
        keywords: ['제육볶음'],
        baseIngredient: '돼지고기',
        description: '매콤달콤한 양념의 대표 한식 볶음 요리',
        calories: 480,
        difficulty: '보통',
        cookTime: '25분',
        source: "https://m.blog.naver.com/jsoof/223181427619",
        ingredients: [
            { name: '돼지고기(목살)', amount: '400g', required: true },
            { name: '고추장', amount: '2큰술', required: true },
            { name: '고춧가루', amount: '1큰술', required: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '설탕', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '대파', amount: '1대', required: false },
            { name: '참기름', amount: '1큰술', required: false }
        ],
        steps: [
            { step: 1, instruction: '고추장, 고춧가루, 간장, 설탕, 다진마늘을 섞어 양념장을 만든다.' },
            { step: 2, instruction: '돼지고기에 양념장을 넣고 15분 이상 재운다.' },
            { step: 3, instruction: '양파와 대파를 먹기 좋은 크기로 썬다.' },
            { step: 4, instruction: '달군 팬에 재운 고기를 넣고 센 불에서 볶는다.' },
            { step: 5, instruction: '고기가 거의 익으면 양파를 넣고 함께 볶는다.' },
            { step: 6, instruction: '참기름을 두르고 대파를 올려 마무리한다.' }
        ]
    },
    '리조또': {
        category: '양식',
        keywords: ['리조또', 'risotto'],
        baseIngredient: '쌀',
        description: '크리미하고 고소한 이탈리아식 쌀 요리',
        calories: 520,
        difficulty: '보통',
        cookTime: '30분',
        source: "https://brunch.co.kr/@sdw4789/153",
        ingredients: [
            { name: '리조또용 쌀', amount: '200g', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '다진마늘', amount: '1쪽', required: true },
            { name: '닭육수', amount: '700ml', required: true },
            { name: '버터', amount: '20g', required: true },
            { name: '파마산 치즈', amount: '50g', required: false },
            { name: '화이트와인', amount: '50ml', required: false },
            { name: '올리브유', amount: '1큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '팬에 올리브유를 두르고 다진 양파와 마늘을 볶는다.' },
            { step: 2, instruction: '쌀을 씻지 않고 넣어 기름과 어우러지도록 볶는다.' },
            { step: 3, instruction: '화이트와인을 넣고 알코올을 날린다.' },
            { step: 4, instruction: '닭육수를 한 국자씩 넣으며 계속 저어가며 끓인다 (약 15-18분).' },
            { step: 5, instruction: '쌀이 알덴테로 익으면 불을 끄고 버터와 파마산 치즈를 넣어 섞는다.' }
        ]
    },
    '아란치니': {
        category: '양식',
        keywords: ['아란치니', 'arancini'],
        baseIngredient: '쌀',
        description: '치즈가 들어간 바삭한 이탈리아식 쌀 튀김',
        calories: 350,
        difficulty: '어려움',
        cookTime: '40분',
        source: "https://realfood.tesco.com/step-by-step/how-to-make-arancini.html",
        ingredients: [
            { name: '리조또(또는 찬밥)', amount: '300g', required: true },
            { name: '모짜렐라 치즈', amount: '100g', required: true },
            { name: '밀가루', amount: '50g', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['전분물(계란물 대신)', '쌀가루물(글루텐 프리)', '아쿠아파바(무맛 결합제)'] },
            { name: '빵가루', amount: '100g', required: true },
            { name: '식용유(튀김용)', amount: '적당량', required: true }
        ],
        steps: [
            { step: 1, instruction: '식은 리조또를 한 움큼씩 손에 쥐고 가운데를 오목하게 만든다.' },
            { step: 2, instruction: '가운데에 모짜렐라 치즈를 넣고 동그랗게 감싸 공 모양으로 빚는다.' },
            { step: 3, instruction: '밀가루, 풀어놓은 계란, 빵가루 순서로 튀김옷을 입힌다.' },
            { step: 4, instruction: '170도로 예열한 기름에 노릇하게 튀긴다.' },
            { step: 5, instruction: '키친타올에 올려 기름을 빼고 뜨거울 때 먹는다.' }
        ]
    },
    '순두부 계란찜': {
        category: '한식',
        keywords: ['순두부계란찜', '순두부 계란찜'],
        baseIngredient: '순두부',
        description: '부드러운 순두부와 계란으로 만든 담백한 찜 요리',
        calories: 200,
        difficulty: '쉬움',
        cookTime: '15분',
        source: "https://m.cafe.daum.net/cheonan-GBP/OdzR/1889",
        ingredients: [
            { name: '순두부', amount: '1팩', required: true, noSubstituteHere: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '물(또는 육수)', amount: '100ml', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '대파', amount: '약간', required: false },
            { name: '참기름', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '계란을 잘 풀고 물, 소금을 넣어 섞는다.' },
            { step: 2, instruction: '순두부를 큼직하게 으깨어 계란물에 섞는다.' },
            { step: 3, instruction: '내열 용기에 담아 찜기 또는 전자레인지에 5-7분간 익힌다.' },
            { step: 4, instruction: '다 익으면 대파와 참기름을 올려 마무리한다.' }
        ]
    },
    '팬케이크': {
        category: '한식',
        keywords: ['팬케이크', '핫케이크'],
        baseIngredient: '밀가루',
        description: '폭신하고 든든한 기본 팬케이크',
        calories: 300,
        difficulty: '쉬움',
        cookTime: '15분',
        source: "https://www.10000recipe.com/recipe/1834871",
        ingredients: [
            { name: '밀가루', amount: '150g', required: true },
            { name: '베이킹파우더', amount: '1작은술', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['사과소스(계란 대신)', '바나나(베이킹용)', '아쿠아파바(베이킹용)'] },
            { name: '우유', amount: '150ml', required: true },
            { name: '설탕', amount: '1큰술', required: false },
            { name: '소금', amount: '약간', required: true },
            { name: '버터', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '밀가루, 베이킹파우더, 설탕, 소금을 체에 쳐서 섞는다.' },
            { step: 2, instruction: '계란과 우유를 다른 볼에 풀어 섞는다.' },
            { step: 3, instruction: '가루 재료에 액체 재료를 부어가며 덩어리 없이 섞는다.' },
            { step: 4, instruction: '달군 팬에 버터를 살짝 두르고 반죽을 한 국자씩 부어 약불로 굽는다.' },
            { step: 5, instruction: '기포가 올라오면 뒤집어 반대쪽도 노릇하게 굽는다.' }
        ]
    },
    '꽁치 김치찌개': {
        category: '한식',
        keywords: ['꽁치김치찌개', '꽁치 김치찌개'],
        baseIngredient: '꽁치',
        description: '꽁치 통조림으로 구수하게 끓인 김치찌개',
        calories: 350,
        difficulty: '쉬움',
        cookTime: '20분',
        source: "https://m.cafe.daum.net/subdued20club/WI6v/5219",
        ingredients: [
            { name: '꽁치통조림', amount: '1캔', required: true },
            { name: '신김치', amount: '300g', required: true },
            { name: '두부', amount: '1/2모', required: false },
            { name: '대파', amount: '1대', required: false },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '고춧가루', amount: '1큰술', required: false },
            { name: '물', amount: '500ml', required: true }
        ],
        steps: [
            { step: 1, instruction: '냄비에 신김치와 다진마늘을 넣고 살짝 볶는다.' },
            { step: 2, instruction: '물을 붓고 꽁치통조림을 국물째 넣는다.' },
            { step: 3, instruction: '고춧가루를 넣고 중불에서 15분 정도 끓인다.' },
            { step: 4, instruction: '두부를 큼직하게 썰어 넣고 5분 더 끓인다.' },
            { step: 5, instruction: '대파를 올려 마무리한다.' }
        ]
    },
    '잡채': {
        category: '한식',
        keywords: ['잡채'],
        baseIngredient: '당면',
        description: '쫄깃한 당면과 채소, 고기를 볶아 무친 명절 대표 요리',
        calories: 400,
        difficulty: '보통',
        cookTime: '40분',
        source: "https://m.10000recipe.com/recipe/6953648",
        ingredients: [
            { name: '당면', amount: '200g', required: true },
            { name: '소고기', amount: '100g', required: false },
            { name: '시금치', amount: '한 줌', required: true },
            { name: '당근', amount: '1/2개', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '표고버섯', amount: '3개', required: false },
            { name: '간장', amount: '4큰술', required: true },
            { name: '설탕', amount: '2큰술', required: true },
            { name: '참기름', amount: '2큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '당면은 끓는 물에 삶아 찬물에 헹궈 물기를 뺀다.' },
            { step: 2, instruction: '당근, 양파, 표고버섯, 시금치는 각각 채 썰거나 데쳐서 따로 볶는다.' },
            { step: 3, instruction: '소고기는 간장 양념에 재워 볶는다.' },
            { step: 4, instruction: '삶은 당면에 간장, 설탕, 참기름을 넣고 볶듯이 무친다.' },
            { step: 5, instruction: '볶아둔 채소와 고기를 모두 넣고 골고루 섞는다.' }
        ]
    },
    '김치볶음밥': {
        category: '한식',
        keywords: ['김치볶음밥'],
        baseIngredient: '밥',
        description: '새콤한 김치와 밥을 볶아 만드는 간단 한 끼',
        calories: 550,
        difficulty: '쉬움',
        cookTime: '15분',
        source: null,
        teamSubmitted: true,
        ingredients: [
            { name: '밥', amount: '1공기', required: true },
            { name: '신김치', amount: '1컵', required: true },
            { name: '대파', amount: '1대', required: true },
            { name: '설탕', amount: '1/2작은술', required: false },
            { name: '간장', amount: '1/2큰술', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '계란', amount: '1개', required: false, noSubstituteHere: true },
            { name: '식용유', amount: '적당량', required: true }
        ],
        steps: [
            { step: 1, instruction: '김치는 먹기 좋은 크기로 잘게 썬다.' },
            { step: 2, instruction: '팬에 식용유를 두르고 대파를 먼저 볶는다.' },
            { step: 3, instruction: '김치를 넣고 2-3분 정도 볶다가 설탕을 넣는다.' },
            { step: 4, instruction: '팬 한쪽에 공간을 만들어 간장을 넣고 살짝 끓인다.' },
            { step: 5, instruction: '밥을 넣고 김치와 골고루 볶은 뒤 참기름을 두른다.' },
            { step: 6, instruction: '계란후라이를 올려 마무리한다.' }
        ]
    },
    '간장계란밥': {
        category: '한식',
        keywords: ['간장계란밥'],
        baseIngredient: '밥',
        description: '간단하지만 든든한 간장과 계란의 조합',
        calories: 450,
        difficulty: '쉬움',
        cookTime: '10분',
        source: null,
        teamSubmitted: true,
        ingredients: [
            { name: '밥', amount: '1공기', required: true },
            { name: '계란', amount: '1개', required: true, noSubstituteHere: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '참기름', amount: '1큰술', required: true },
            { name: '김가루', amount: '약간', required: false },
            { name: '식용유', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '팬에 식용유를 살짝 두르고 계란을 굽는다.' },
            { step: 2, instruction: '밥 1공기를 그릇에 담는다.' },
            { step: 3, instruction: '밥 위에 구운 계란을 올린다.' },
            { step: 4, instruction: '간장과 참기름을 뿌린다.' },
            { step: 5, instruction: '김가루를 넣고 골고루 비벼 먹는다.' }
        ]
    },
    '올리브 파스타': {
        category: '양식',
        keywords: ['올리브파스타', '올리브 파스타'],
        baseIngredient: '파스타',
        description: '블랙올리브와 마늘로 짭짤하게 즐기는 오일 파스타',
        calories: 550,
        difficulty: '쉬움',
        cookTime: '20분',
        source: "https://noseychef.com/?p=9871",
        ingredients: [
            { name: '파스타', amount: '200g', required: true },
            { name: '블랙올리브', amount: '10개', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '올리브유', amount: '4큰술', required: true },
            { name: '페페론치노', amount: '3개', required: false },
            { name: '파마산 치즈', amount: '적당량', required: false },
            { name: '소금', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '끓는 소금물에 파스타를 삶는다.' },
            { step: 2, instruction: '팬에 올리브유를 두르고 다진마늘과 페페론치노를 약불에 볶는다.' },
            { step: 3, instruction: '슬라이스한 블랙올리브를 넣고 함께 볶는다.' },
            { step: 4, instruction: '삶은 면을 면수와 함께 넣고 잘 버무린다.' },
            { step: 5, instruction: '파마산 치즈를 뿌려 마무리한다.' }
        ]
    },
    '로제 파스타': {
        category: '양식',
        keywords: ['로제파스타', '로제 파스타'],
        baseIngredient: '파스타',
        description: '토마토와 크림이 어우러진 부드러운 로제 소스 파스타',
        calories: 650,
        difficulty: '보통',
        cookTime: '25분',
        source: "https://www.10000recipe.com/recipe/6884145",
        ingredients: [
            { name: '파스타', amount: '200g', required: true },
            { name: '토마토소스', amount: '150g', required: true },
            { name: '생크림', amount: '100ml', required: true },
            { name: '다진마늘', amount: '1큰술', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '베이컨', amount: '50g', required: false },
            { name: '파마산 치즈', amount: '적당량', required: false },
            { name: '소금', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '끓는 소금물에 파스타를 삶는다.' },
            { step: 2, instruction: '팬에 베이컨과 다진마늘, 다진양파를 볶는다.' },
            { step: 3, instruction: '토마토소스를 넣고 약불에서 2-3분 끓인다.' },
            { step: 4, instruction: '생크림을 넣고 부드럽게 섞어 소스를 완성한다.' },
            { step: 5, instruction: '삶은 면을 넣고 소스와 잘 버무린 뒤 파마산 치즈를 뿌린다.' }
        ]
    },
    '우동': {
        category: '일식',
        keywords: ['우동'],
        baseIngredient: '국수',
        description: '따뜻하고 쫄깃한 기본 우동',
        calories: 400,
        difficulty: '쉬움',
        cookTime: '15분',
        source: "https://m.cafe.daum.net/cheonan-GBP/OdzR/1638",
        ingredients: [
            { name: '우동면', amount: '200g', required: true },
            { name: '국물(국간장)', amount: '500ml', required: true },
            { name: '파', amount: '1줄기', required: true },
            { name: '계란', amount: '1개', required: false, noSubstituteHere: true },
            { name: '미나리', amount: '한 줌', required: false },
            { name: '튀김(천우라)', amount: '2개', required: false }
        ],
        steps: [
            { step: 1, instruction: '냄비에 물을 끓이고 우동면을 넣는다. 3-4분 정도 끓인다.' },
            { step: 2, instruction: '우동면이 하얀색에서 투명해질 때까지 끓인 후 찬물에 헹궈 물기를 뺀다.' },
            { step: 3, instruction: '다른 냄비에 국물을 끓이고 국간장 1큰술로 간을 맞춘다.' },
            { step: 4, instruction: '국물이 끓어오르면 준비한 우동면을 담는다.' },
            { step: 5, instruction: '위에 계란, 파, 미나리를 얹고 튀김을 올린다.' },
            { step: 6, instruction: '뜨거울 때 바로 먹는다.' }
        ]
    },
    '크림 파스타': {
        category: '양식',
        keywords: ['크림파스타', '크림 파스타'],
        baseIngredient: '파스타',
        description: '부드럽고 풍미 있는 크림 파스타',
        calories: 650,
        difficulty: '쉬움',
        cookTime: '20분',
        source: "https://www.10000recipe.com/recipe/7018890",
        ingredients: [
            { name: '파스타', amount: '200g', required: true },
            { name: '우유', amount: '300ml', required: true },
            { name: '버터', amount: '30g', required: true },
            { name: '마늘', amount: '2쪽', required: true },
            { name: '올리브유', amount: '2큰술', required: true },
            { name: '소금', amount: '한 꼬집', required: true },
            { name: '파마산 치즈', amount: '50g', required: false },
            { name: '검은 후추', amount: '약간', required: false },
            { name: '파슬리', amount: '한 줌', required: false }
        ],
        steps: [
            { step: 1, instruction: '큰 냄비에 물을 끓이고 소금 한 스푼을 넣는다.' },
            { step: 2, instruction: '파스타를 넣고 패키지 표시보다 1분 덜 삶는다. 그 후 체에 건진다.' },
            { step: 3, instruction: '팬에 올리브유를 두르고 다진 마늘을 넣어 중약불에서 향을 낸다.' },
            { step: 4, instruction: '버터를 넣고 녹인 후 우유를 천천히 부으며 섞는다. 약 3-4분 데운다.' },
            { step: 5, instruction: '삶은 파스타를 팬에 넣고 소스와 잘 섞는다.' },
            { step: 6, instruction: '파마산 치즈를 뿌리고 검은 후추로 마무리한 후 접시에 담는다.' },
            { step: 7, instruction: '파슬리로 장식해 서빙한다.' }
        ]
    },
    '김치찌개': {
        category: '한식',
        keywords: ['김치찌개', '김치 찌개'],
        baseIngredient: '찌개',
        description: '밥도둑 국민 찌개',
        calories: 300,
        difficulty: '쉬움',
        cookTime: '25분',
        source: "https://m.cafe.daum.net/cheonan-GBP/OdzR/1737",
        ingredients: [
            { name: '신김치', amount: '2컵 (300g)', required: true },
            { name: '돼지고기', amount: '150g', required: true },
            { name: '두부', amount: '200g', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '고추', amount: '1개', required: false },
            { name: '대파', amount: '1줄기', required: false }
        ],
        steps: [
            { step: 1, instruction: '돼지고기를 먹기 좋은 크기로 자른다.' },
            { step: 2, instruction: '팬에 기름을 두르고 돼지고기를 먼저 볶다가 신김치를 넣어 함께 볶는다.' },
            { step: 3, instruction: '물을 부어 끓이고 두부와 양파를 넣는다.' },
            { step: 4, instruction: '약 10분간 끓인 후 고추와 대파를 올린다.' },
            { step: 5, instruction: '한 1-2분 더 끓여 완성한다.' }
        ]
    },
    '된장찌개': {
        category: '한식',
        keywords: ['된장찌개', '된장 찌개'],
        baseIngredient: '찌개',
        description: '깊고 구수한 전통 찌개',
        calories: 250,
        difficulty: '쉬움',
        cookTime: '20분',
        source: "https://m.cafe.daum.net/party3434/gECq/1075",
        ingredients: [
            { name: '된장', amount: '2큰술', required: true, noSubstituteHere: true },
            { name: '물', amount: '4컵', required: true },
            { name: '두부', amount: '200g', required: true },
            { name: '야채', amount: '적당량', required: true },
            { name: '고기 또는 생선', amount: '100g', required: false },
            { name: '대파', amount: '1줄기', required: false }
        ],
        steps: [
            { step: 1, instruction: '물을 끓인다.' },
            { step: 2, instruction: '끓는 물에 된장을 풀어 간을 맞춘다.' },
            { step: 3, instruction: '두부와 야채를 넣고 약 5분간 끓인다.' },
            { step: 4, instruction: '고기나 생선을 추가하고 더 끓인다.' },
            { step: 5, instruction: '대파를 올려 완성한다.' }
        ]
    },
    '계란국': {
        category: '한식',
        keywords: ['계란국', '계란 국'],
        baseIngredient: '국',
        description: '담백하고 부드러운 아침 국',
        calories: 120,
        difficulty: '쉬움',
        cookTime: '10분',
        source: "https://m.cafe.daum.net/investm/V8VB/662",
        ingredients: [
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '육수', amount: '4컵', required: true },
            { name: '소금', amount: '한 꼬집', required: true },
            { name: '대파', amount: '1줄기', required: false },
            { name: '참기름', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '육수를 끓인다.' },
            { step: 2, instruction: '계란을 풀어서 육수에 천천히 부으며 저어준다.' },
            { step: 3, instruction: '소금으로 간을 맞춘다.' },
            { step: 4, instruction: '대파를 올리고 참기름을 뿌려 완성한다.' }
        ]
    },
    '미역국': {
        category: '한식',
        keywords: ['미역국', '미역 국'],
        baseIngredient: '국',
        description: '풍미 깊은 소고기 미역국',
        calories: 150,
        difficulty: '쉬움',
        cookTime: '20분',
        source: "https://www.kurly.com/recipe/671764624701d5e8aa02eeea",
        ingredients: [
            { name: '소고기', amount: '100g', required: true },
            { name: '미역', amount: '한 줌', required: true },
            { name: '육수', amount: '4컵', required: true },
            { name: '소금', amount: '한 꼬집', required: true },
            { name: '참기름', amount: '1큰술', required: false },
            { name: '마늘', amount: '1쪽', required: false }
        ],
        steps: [
            { step: 1, instruction: '미역을 물에 불린 후 찬물에 헹군다.' },
            { step: 2, instruction: '소고기를 먹기 좋은 크기로 자른다.' },
            { step: 3, instruction: '참기름에 소고기를 살짝 볶다가 마늘을 넣는다.' },
            { step: 4, instruction: '미역을 넣고 좀 더 볶은 후 육수를 부어 끓인다.' },
            { step: 5, instruction: '소금으로 간을 맞춰 완성한다.' }
        ]
    }
};
