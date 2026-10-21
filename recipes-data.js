// 먹고죽자! 레시피 데이터 (레시피 79개)
// 재료 옵션: required(필수/선택), substituteOverride(이 재료 전용 대체품), noSubstituteHere(대체 불가/빼도 됨 처리)
// 표준화(2026-10-21): 72개는 만개의레시피 추천순 상위 3개(같은 메뉴)의 공통점으로, 7개(티라미수·파나코타·망고 사고·치킨파니니·뇨끼·리조또·올리브 파스타)는 해외 공신력 출처 1곳을 한국식 계량·재료로 바꿔 다시 씀.
// 기본 1인분(servings). 틀에 굽는 디저트(에그타르트·브라우니·마들렌·바스크 치즈케이크·플레인스콘)와 티라미수는 실제 만드는 양을 그대로 두고 인분만 표기.
// 기준: 참고 3개 중 2개 이상이 쓴 재료만 넣고, 2개 이상이 필수로 쓰면 필수. 술(럼·화이트와인)은 선택 재료로 두고 대체품은 적지 않음. calories는 아직 다시 계산하지 않은 기존 값. 중화풍 잡채는 삭제함.

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
        servings: 1,
        ingredients: [
            { name: '청국장', amount: '60g', required: true, noSubstituteHere: true },
            { name: '신김치', amount: '50g', required: true },
            { name: '두부', amount: '1/4모', required: true },
            { name: '무', amount: '50g', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '청양고추', amount: '1/2개', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '고춧가루', amount: '3/4작은술', required: true },
            { name: '물', amount: '1컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '무는 나박 썰고, 김치는 먹기 좋게 썰고, 두부는 깍둑 썰고, 대파와 청양고추는 송송 썬다.' },
            { step: 2, instruction: '냄비에 물과 무를 넣고 센불에서 끓이다가, 끓으면 중불로 줄여 무가 투명해질 때까지 익힌다.' },
            { step: 3, instruction: '김치를 넣고 김치가 부드러워질 때까지 5분 정도 끓인다.' },
            { step: 4, instruction: '청국장을 풀어 넣고 두부, 다진마늘, 고춧가루를 넣어 3분 정도 끓인다.' },
            { step: 5, instruction: '대파와 청양고추를 넣고 한소끔 끓여 마무리한다. 바닥이 눋지 않게 가끔 저어 준다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6843282',
        references: ['https://www.10000recipe.com/recipe/6843282', 'https://www.10000recipe.com/recipe/6499643', 'https://www.10000recipe.com/recipe/6923053']
    },

    '안동찜닭': {
        category: '한식',
        keywords: ['안동찜닭', '찜닭'],
        baseIngredient: '닭고기',
        description: '당면과 채소를 넣어 푸짐하게 조려낸 안동 향토음식',
        calories: 520,
        difficulty: '보통',
        cookTime: '50분',
        servings: 1,
        ingredients: [
            { name: '닭고기(볶음탕용)', amount: '300g', required: true },
            { name: '당면', amount: '25g', required: true },
            { name: '감자', amount: '1/2개', required: true },
            { name: '당근', amount: '30g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '간장', amount: '3큰술', required: true },
            { name: '설탕', amount: '1큰술', required: true },
            { name: '물엿', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true },
            { name: '맛술', amount: '1큰술', required: true },
            { name: '다진생강', amount: '1/4작은술', required: true },
            { name: '물', amount: '1컵', required: true },
            { name: '표고버섯', amount: '1개', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '건고추', amount: '1개', required: false },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '당면은 찬물에 1시간 이상 불리고, 감자·당근·양파는 큼직하게 썬다.' },
            { step: 2, instruction: '닭은 끓는 물에 3~5분 데친 뒤 찬물에 헹궈 물기를 뺀다.' },
            { step: 3, instruction: '냄비에 닭, 물, 간장, 설탕, 맛술, 다진마늘, 다진생강을 넣고 센불에서 10분 끓인다.' },
            { step: 4, instruction: '감자, 당근, 양파, 건고추를 넣고 중약불로 줄여 감자가 익을 때까지 15분 정도 조린다.' },
            { step: 5, instruction: '물엿, 썬 표고버섯, 불린 당면, 대파를 넣고 2분 정도만 더 끓인 뒤 참기름과 후추로 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6880798',
        references: ['https://www.10000recipe.com/recipe/6880798', 'https://www.10000recipe.com/recipe/6280148', 'https://www.10000recipe.com/recipe/6912699']
    },

    '돼지고기 김치찜': {
        category: '한식',
        keywords: ['돼지고기김치찜', '김치찜'],
        baseIngredient: '돼지고기',
        description: '고기와 김치를 오래 조려 부드럽게 완성한 찜 요리',
        calories: 480,
        difficulty: '보통',
        cookTime: '60분',
        servings: 1,
        ingredients: [
            { name: '돼지고기 목살(통)', amount: '200g', required: true },
            { name: '신김치', amount: '200g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '물', amount: '1컵', required: true },
            { name: '설탕', amount: '1/2큰술', required: true },
            { name: '맛술', amount: '1/2큰술', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '김치국물', amount: '25ml', required: false },
            { name: '고춧가루', amount: '1/2큰술', required: true },
            { name: '청양고추', amount: '1/2개', required: true }
        ],
        steps: [
            { step: 1, instruction: '김치는 신맛이 강하면 속을 털어내고 설탕을 넣어 가볍게 버무린다.' },
            { step: 2, instruction: '돼지고기에 맛술을 고루 발라 잡내를 줄이고, 냄비 바닥에 김치를 깐 뒤 고기를 통째로 올리고 양파를 얹는다.' },
            { step: 3, instruction: '물과 김치국물, 고춧가루를 붓고 뚜껑을 연 채 센불에서 10분 끓인다.' },
            { step: 4, instruction: '뚜껑을 덮고 약불로 줄여 40분 이상 뭉근하게 익히고, 중간에 물이 졸면 보충한다.' },
            { step: 5, instruction: '다진마늘, 대파, 청양고추를 넣고 5분 더 끓인 뒤 고기를 먹기 좋게 썬다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6889570',
        references: ['https://www.10000recipe.com/recipe/6889570', 'https://www.10000recipe.com/recipe/6884026', 'https://www.10000recipe.com/recipe/6843071']
    },

    '콩나물불고기': {
        category: '한식',
        keywords: ['콩나물불고기'],
        baseIngredient: '콩나물',
        description: '아삭한 콩나물과 매콤한 돼지고기가 어우러진 볶음',
        calories: 380,
        difficulty: '쉬움',
        cookTime: '25분',
        servings: 1,
        ingredients: [
            { name: '대패삼겹살', amount: '150g', required: true },
            { name: '콩나물', amount: '100g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '새송이버섯', amount: '1/2개', required: true },
            { name: '깻잎', amount: '2와 1/2장', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '고추장', amount: '1큰술', required: true },
            { name: '고춧가루', amount: '1큰술', required: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '설탕', amount: '1큰술', required: true },
            { name: '맛술', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '콩나물은 씻어 물기를 빼고, 양파·버섯·대파·깻잎은 먹기 좋게 썬다.' },
            { step: 2, instruction: '고추장, 고춧가루, 간장, 설탕, 맛술, 다진마늘을 섞어 양념장을 만든다.' },
            { step: 3, instruction: '넓은 팬에 콩나물을 깔고 양파와 버섯을 올린 뒤 고기와 양념장을 얹는다. 물은 넣지 않는다.' },
            { step: 4, instruction: '뚜껑을 덮고 중불에서 5분 정도 익혀 콩나물에서 물이 나오게 한다.' },
            { step: 5, instruction: '뚜껑을 열고 센불에서 고루 볶다가 고기가 익으면 대파와 깻잎을 넣고 한 번 더 볶는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6883016',
        references: ['https://www.10000recipe.com/recipe/6883016', 'https://www.10000recipe.com/recipe/6852450', 'https://www.10000recipe.com/recipe/6831806']
    },

    '감자전': {
        category: '한식',
        keywords: ['감자전'],
        baseIngredient: '감자',
        description: '갈아낸 감자를 노릇하게 부쳐낸 담백한 전',
        calories: 220,
        difficulty: '쉬움',
        cookTime: '30분',
        servings: 1,
        ingredients: [
            { name: '감자', amount: '1과 1/2개', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '식용유', amount: '1과 1/2큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '감자는 껍질을 벗겨 강판에 갈거나, 물을 조금 넣어 믹서에 곱게 간다.' },
            { step: 2, instruction: '간 감자를 체에 밭쳐 10분 두고 건더기와 물을 나눈다.' },
            { step: 3, instruction: '받아 둔 물은 윗물만 따라 버리고 바닥에 가라앉은 전분을 남긴다.' },
            { step: 4, instruction: '전분에 감자 건더기와 소금을 넣고 고루 섞어 반죽한다.' },
            { step: 5, instruction: '팬에 식용유를 넉넉히 두르고 중불에서 반죽을 얇게 펴, 앞뒤로 노릇하게 부친다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6850115',
        references: ['https://www.10000recipe.com/recipe/6850115', 'https://www.10000recipe.com/recipe/6915156', 'https://www.10000recipe.com/recipe/6871578']
    },

    '애호박전': {
        category: '한식',
        keywords: ['애호박전'],
        baseIngredient: '애호박',
        description: '부드러운 애호박에 옷을 입혀 부쳐낸 전',
        calories: 180,
        difficulty: '쉬움',
        cookTime: '25분',
        servings: 1,
        ingredients: [
            { name: '애호박', amount: '1/2개', required: true },
            { name: '밀가루', amount: '1과 1/2큰술', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['전분물(계란물 대신)', '쌀가루물(글루텐 프리)', '아쿠아파바(무맛 결합제)'] },
            { name: '소금', amount: '1/4작은술', required: true },
            { name: '식용유', amount: '1과 1/2큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '애호박은 0.5cm 두께로 동그랗게 썰고 소금을 뿌려 10분 둔다.' },
            { step: 2, instruction: '나온 물기를 키친타월로 닦는다.' },
            { step: 3, instruction: '계란에 소금 한 꼬집을 넣고 풀어 계란물을 만든다.' },
            { step: 4, instruction: '애호박에 밀가루를 얇게 묻혀 털어낸 뒤 계란물을 입힌다.' },
            { step: 5, instruction: '팬에 식용유를 두르고 중약불에서 앞뒤로 노릇하게 부친 뒤 키친타월에 올려 기름을 뺀다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6903842',
        references: ['https://www.10000recipe.com/recipe/6903842', 'https://www.10000recipe.com/recipe/5266547', 'https://www.10000recipe.com/recipe/6775347']
    },

    '마라샹궈': {
        category: '중식',
        keywords: ['마라샹궈'],
        baseIngredient: '마라소스',
        description: '얼얼하고 매콤한 마라소스에 고기와 채소를 볶은 요리',
        calories: 450,
        difficulty: '보통',
        cookTime: '30분',
        servings: 1,
        ingredients: [
            { name: '삼겹살(대패)', amount: '100g', required: true },
            { name: '마라소스', amount: '1과 1/2큰술', required: true },
            { name: '고추기름', amount: '1큰술', required: true },
            { name: '마늘', amount: '2쪽', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '청경채', amount: '1포기', required: true },
            { name: '알배추', amount: '1과 1/2장', required: true },
            { name: '느타리버섯', amount: '25g', required: true },
            { name: '새우', amount: '3마리', required: false, noSubstituteHere: true },
            { name: '오징어', amount: '1/4마리', required: false, noSubstituteHere: true },
            { name: '넓적당면', amount: '25g', required: false }
        ],
        steps: [
            { step: 1, instruction: '넓적당면은 미지근한 물에 2시간 불린다. 마늘은 편으로, 대파는 송송 썰고 채소는 한입 크기로 썬다.' },
            { step: 2, instruction: '팬에 고추기름을 두르고 중불에서 마늘과 대파를 볶아 향을 낸다.' },
            { step: 3, instruction: '고기를 넣고 기름이 나올 때까지 볶은 뒤 새우와 오징어를 넣어 익힌다.' },
            { step: 4, instruction: '센불로 올려 버섯, 알배추, 불린 당면을 넣고 마라소스를 조금씩 넣으며 간을 맞춘다.' },
            { step: 5, instruction: '마지막에 청경채를 넣고 숨이 살짝 죽을 만큼만 볶아 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6915975',
        references: ['https://www.10000recipe.com/recipe/6915975', 'https://www.10000recipe.com/recipe/6902362', 'https://www.10000recipe.com/recipe/6986683']
    },

    '깐풍기': {
        category: '중식',
        keywords: ['깐풍기'],
        baseIngredient: '닭고기',
        description: '바삭하게 튀긴 닭을 매콤달콤한 소스에 버무린 요리',
        calories: 580,
        difficulty: '보통',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '닭다리살', amount: '200g', required: true },
            { name: '감자전분', amount: '2큰술', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['전분 반죽물(계란 대신)', '아쿠아파바(무맛 결합제)'] },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '맛술', amount: '1/2큰술', required: true },
            { name: '마늘', amount: '2쪽', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '청양고추', amount: '1개', required: true },
            { name: '피망', amount: '1/4개', required: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '설탕', amount: '1큰술', required: true },
            { name: '식초', amount: '1큰술', required: true },
            { name: '물', amount: '1큰술', required: true },
            { name: '식용유(튀김용)', amount: '적당량', required: true }
        ],
        steps: [
            { step: 1, instruction: '닭다리살은 한입 크기로 썰어 소금, 후추, 맛술로 10분 밑간한다.' },
            { step: 2, instruction: '계란과 전분을 섞어 닭에 고루 입힌다.' },
            { step: 3, instruction: '170도 기름에 닭을 한 번 튀겨 건지고, 노릇해질 때까지 한 번 더 튀긴다.' },
            { step: 4, instruction: '간장, 설탕, 식초, 물을 섞어 소스를 만든다. 팬에 기름을 조금 두르고 중불에서 마늘, 대파, 고추, 피망을 볶는다.' },
            { step: 5, instruction: '소스를 붓고 끓으면 튀긴 닭을 넣어 센불에서 국물이 거의 없어질 때까지 빠르게 버무린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6842005',
        references: ['https://www.10000recipe.com/recipe/6842005', 'https://www.10000recipe.com/recipe/6857286', 'https://www.10000recipe.com/recipe/6899084']
    },

    '부추계란볶음': {
        category: '중식',
        keywords: ['부추계란볶음'],
        baseIngredient: '부추',
        description: '부추와 계란을 고소하게 볶아낸 간단 요리',
        calories: 220,
        difficulty: '쉬움',
        cookTime: '10분',
        servings: 1,
        ingredients: [
            { name: '부추', amount: '50g', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '굴소스', amount: '1/2큰술', required: true },
            { name: '참기름', amount: '3/4작은술', required: true },
            { name: '식용유', amount: '1큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '부추는 4cm 길이로 썰고 계란은 곱게 풀어 둔다.' },
            { step: 2, instruction: '팬에 식용유를 두르고 센불에서 충분히 달군다.' },
            { step: 3, instruction: '계란물을 붓고 가장자리가 익으면 젓가락으로 크게 저어 반쯤 익힌다.' },
            { step: 4, instruction: '부추와 굴소스를 넣고 부추 숨이 살짝 죽을 때까지 30초 정도 볶는다.' },
            { step: 5, instruction: '불을 끄고 참기름을 넣어 섞는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6891606',
        references: ['https://www.10000recipe.com/recipe/6891606', 'https://www.10000recipe.com/recipe/6873054', 'https://www.10000recipe.com/recipe/6878477']
    },

    '동파육': {
        category: '중식',
        keywords: ['동파육'],
        baseIngredient: '삼겹살',
        description: '향신료와 함께 오래 조려 부드럽게 완성한 중국식 삼겹살찜',
        calories: 620,
        difficulty: '보통',
        cookTime: '70분',
        servings: 1,
        ingredients: [
            { name: '통삼겹살', amount: '250g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '청주', amount: '1큰술', required: true },
            { name: '간장', amount: '1과 1/2큰술', required: true },
            { name: '굴소스', amount: '1/2큰술', required: true },
            { name: '설탕', amount: '3/4큰술', required: true },
            { name: '통마늘', amount: '3쪽', required: true },
            { name: '물', amount: '1/2컵', required: true },
            { name: '참기름', amount: '1/2작은술', required: true }
        ],
        steps: [
            { step: 1, instruction: '냄비에 물을 넉넉히 붓고 통삼겹살, 양파, 청주를 넣어 중불에서 30분 삶는다.' },
            { step: 2, instruction: '젓가락이 쑥 들어가면 건져 찬물에 헹구고 1.5cm 두께로 썬다.' },
            { step: 3, instruction: '팬에 고기를 올려 중불에서 앞뒤로 노릇하게 굽는다.' },
            { step: 4, instruction: '간장, 굴소스, 설탕, 물 1/2컵을 섞어 붓고 통마늘을 넣어, 센불에서 끓으면 약불로 줄여 가끔 뒤집으며 졸인다.' },
            { step: 5, instruction: '국물이 거의 졸아 윤기가 나면 참기름을 두르고 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6867023',
        references: ['https://www.10000recipe.com/recipe/6867023', 'https://www.10000recipe.com/recipe/6892759', 'https://www.10000recipe.com/recipe/6830393']
    },

    '멘보샤': {
        category: '중식',
        keywords: ['멘보샤'],
        baseIngredient: '새우',
        description: '다진 새우를 식빵 사이에 넣고 튀겨낸 중국식 요리',
        calories: 450,
        difficulty: '쉬움',
        cookTime: '30분',
        servings: 1,
        ingredients: [
            { name: '식빵', amount: '2장', required: true },
            { name: '새우', amount: '100g', required: true },
            { name: '감자전분', amount: '1/2큰술', required: true },
            { name: '계란흰자', amount: '1개', required: true, substituteOverride: ['아쿠아파바(무맛 결합제)'] },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '올리브유', amount: '1큰술', required: true },
            { name: '칠리소스', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '식빵은 테두리를 잘라내고 4등분한다.' },
            { step: 2, instruction: '새우는 손질해 칼로 곱게 다지고 계란흰자, 전분, 소금, 후추를 넣어 끈기 있게 섞는다.' },
            { step: 3, instruction: '식빵 한 조각에 새우 반죽을 올리고 다른 식빵으로 덮는다.' },
            { step: 4, instruction: '식빵 겉면에 올리브유를 고루 바르고 에어프라이어에 넣는다.' },
            { step: 5, instruction: '170도에서 8분 구운 뒤 뒤집어 4분 더 굽고, 노릇해지면 칠리소스를 곁들인다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6866983',
        references: ['https://www.10000recipe.com/recipe/6866983', 'https://www.10000recipe.com/recipe/6911304', 'https://www.10000recipe.com/recipe/6918461']
    },

    '게살볶음밥': {
        category: '중식',
        keywords: ['게살볶음밥'],
        baseIngredient: '밥',
        description: '게맛살을 찢어 넣어 고소하게 볶아낸 볶음밥',
        calories: 450,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '밥', amount: '1공기', required: true },
            { name: '크래미(게맛살)', amount: '50g', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['계란 빼고 볶기'] },
            { name: '대파', amount: '1/4대', required: true },
            { name: '양파', amount: '25g', required: true },
            { name: '당근', amount: '10g', required: true },
            { name: '파프리카', amount: '20g', required: true },
            { name: '굴소스', amount: '3/4큰술', required: true },
            { name: '식용유', amount: '1큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '크래미는 결대로 찢고 대파, 양파, 당근, 파프리카는 잘게 다진다.' },
            { step: 2, instruction: '팬에 식용유를 두르고 센불에서 대파를 2분 볶아 파기름을 낸다.' },
            { step: 3, instruction: '양파, 당근, 파프리카를 넣고 2분 볶은 뒤 한쪽으로 밀고 계란을 스크램블한다.' },
            { step: 4, instruction: '밥을 넣고 중불에서 고루 볶다가 굴소스, 소금, 후추로 간한다.' },
            { step: 5, instruction: '크래미를 넣고 센불에서 1분 더 볶아 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6866601',
        references: ['https://www.10000recipe.com/recipe/6866601', 'https://www.10000recipe.com/recipe/6895458', 'https://www.10000recipe.com/recipe/6912275']
    },

    '규동': {
        category: '일식',
        keywords: ['규동'],
        baseIngredient: '소고기',
        description: '얇게 썬 소고기를 조려 밥에 얹은 일본식 덮밥',
        calories: 520,
        difficulty: '쉬움',
        cookTime: '15분',
        servings: 1,
        ingredients: [
            { name: '소고기(얇게 썬 것)', amount: '125g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '간장', amount: '1과 1/2큰술', required: true },
            { name: '맛술', amount: '1큰술', required: true },
            { name: '설탕', amount: '1/2큰술', required: true },
            { name: '올리고당', amount: '1/2큰술', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '밥', amount: '1공기', required: true },
            { name: '계란', amount: '1개', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '양파는 얇게 채 썰고, 간장, 맛술, 설탕, 올리고당, 다진마늘을 섞어 양념장을 만든다.' },
            { step: 2, instruction: '팬을 중불로 달궈 소고기를 볶아 충분히 익히고, 기름이 많으면 키친타월로 닦는다.' },
            { step: 3, instruction: '양파와 후추를 넣고 양파가 반투명해질 때까지 1분 정도 볶는다.' },
            { step: 4, instruction: '양념장을 넣고 2분 정도 자작하게 졸인다.' },
            { step: 5, instruction: '밥 위에 고기를 국물과 함께 올리고 계란노른자나 반숙 계란을 얹는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6966065',
        references: ['https://www.10000recipe.com/recipe/6966065', 'https://www.10000recipe.com/recipe/6901125', 'https://www.10000recipe.com/recipe/6872290']
    },

    '부타동': {
        category: '일식',
        keywords: ['부타동'],
        baseIngredient: '돼지고기',
        description: '달콤짭짤한 간장 소스에 조린 돼지고기 덮밥',
        calories: 560,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '돼지고기(삼겹살, 얇게 썬 것)', amount: '150g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '간장', amount: '1과 1/2큰술', required: true },
            { name: '맛술', amount: '1큰술', required: true },
            { name: '설탕', amount: '3/4큰술', required: true },
            { name: '물', amount: '1과 1/2큰술', required: true },
            { name: '식용유', amount: '1/2작은술', required: true },
            { name: '밥', amount: '1공기', required: true },
            { name: '후추', amount: '약간', required: false },
            { name: '계란노른자', amount: '1개', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '양파는 채 썰고 대파는 송송 썬다. 간장, 맛술, 설탕, 물을 섞어 양념장을 만든다.' },
            { step: 2, instruction: '팬에 식용유를 조금 두르고 약불에서 대파를 볶아 파기름을 낸다.' },
            { step: 3, instruction: '돼지고기를 넣고 중불에서 완전히 익히고, 기름이 많이 나오면 키친타월로 닦는다.' },
            { step: 4, instruction: '양파와 양념장을 넣고 국물이 자작해질 때까지 3분 정도 졸이며 후추를 뿌린다.' },
            { step: 5, instruction: '밥 위에 고기를 올리고 가운데에 계란노른자를 얹는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6902207',
        references: ['https://www.10000recipe.com/recipe/6902207', 'https://www.10000recipe.com/recipe/6857141', 'https://www.10000recipe.com/recipe/6834589']
    },

    '사케동': {
        category: '일식',
        keywords: ['사케동'],
        baseIngredient: '연어',
        description: '신선한 연어를 올린 시원한 일본식 회덮밥',
        calories: 420,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '생연어(회감)', amount: '125g', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '간장', amount: '1과 1/2큰술', required: true },
            { name: '설탕', amount: '3/4큰술', required: true },
            { name: '물', amount: '2큰술', required: true },
            { name: '밥', amount: '1공기', required: true },
            { name: '와사비', amount: '약간', required: false },
            { name: '무순', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '양파는 3/4을 채 썰고, 남은 1/4은 얇게 썰어 찬물에 담가 매운맛을 뺀다.' },
            { step: 2, instruction: '냄비에 간장, 설탕, 물을 넣고 끓으면 채 썬 양파를 넣어 중불에서 부드러워질 때까지 졸인다.' },
            { step: 3, instruction: '연어는 0.5cm 두께로 썬다.' },
            { step: 4, instruction: '그릇에 밥을 담고 졸인 양파를 올린 뒤 연어를 겹치지 않게 돌려 담는다.' },
            { step: 5, instruction: '생양파와 무순, 와사비를 올리고, 남은 양파 소스를 조금씩 뿌려 간을 맞춘다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6841877',
        references: ['https://www.10000recipe.com/recipe/6841877', 'https://www.10000recipe.com/recipe/6936827', 'https://www.10000recipe.com/recipe/6959525']
    },

    '스키야키': {
        category: '일식',
        keywords: ['스키야키'],
        baseIngredient: '소고기',
        description: '쯔유 육수에 고기와 채소를 익혀먹는 일본식 전골',
        calories: 480,
        difficulty: '보통',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '소고기(샤브샤브용)', amount: '125g', required: true },
            { name: '두부', amount: '1/4모', required: true },
            { name: '배추', amount: '1과 1/2장', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '표고버섯', amount: '1개', required: true },
            { name: '새송이버섯', amount: '1/2개', required: true },
            { name: '실곤약', amount: '50g', required: false },
            { name: '다시마', amount: '1/2장', required: true },
            { name: '물', amount: '1컵', required: true },
            { name: '쯔유', amount: '2큰술', required: true },
            { name: '맛술', amount: '1큰술', required: true },
            { name: '설탕', amount: '1/2큰술', required: true },
            { name: '쑥갓', amount: '약간', required: false },
            { name: '계란', amount: '1개', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '물에 다시마를 넣고 끓으면 다시마를 건져 다시마 육수를 만든다.' },
            { step: 2, instruction: '두부는 도톰하게 썰어 팬에 노릇하게 굽고, 대파도 어슷 썰어 함께 굽는다.' },
            { step: 3, instruction: '배추, 양파, 버섯은 먹기 좋게 썰고 표고는 윗면에 칼집을 낸다. 실곤약은 끓는 물에 살짝 데친다.' },
            { step: 4, instruction: '전골 냄비에 채소, 두부, 곤약, 소고기를 둘러 담고 다시마 육수, 쯔유, 맛술, 설탕을 섞어 붓는다.' },
            { step: 5, instruction: '중불에서 자작하게 끓여 재료가 익으면 쑥갓을 올리고, 풀어 둔 계란에 찍어 먹는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6870940',
        references: ['https://www.10000recipe.com/recipe/6870940', 'https://www.10000recipe.com/recipe/6841644', 'https://www.10000recipe.com/recipe/6899455']
    },

    '오코노미야끼': {
        category: '일식',
        keywords: ['오코노미야끼', '오꼬노미야끼'],
        baseIngredient: '양배추',
        description: '채 썬 양배추 반죽을 두툼하게 구운 일본식 부침개',
        calories: 450,
        difficulty: '보통',
        cookTime: '30분',
        servings: 1,
        ingredients: [
            { name: '양배추', amount: '150g', required: true },
            { name: '부침가루', amount: '1/2컵', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['계란 빼고 부치기'] },
            { name: '물', amount: '1/3컵', required: true },
            { name: '양파', amount: '25g', required: false },
            { name: '오징어', amount: '1/4마리', required: false, noSubstituteHere: true },
            { name: '후추', amount: '약간', required: true },
            { name: '식용유', amount: '1큰술', required: true },
            { name: '돈가스소스', amount: '1큰술', required: true },
            { name: '가쓰오부시', amount: '약간', required: false, noSubstituteHere: true },
            { name: '베이컨', amount: '1과 1/2장', required: false, noSubstituteHere: true },
            { name: '쪽파', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '양배추와 양파는 가늘게 채 썰고 오징어는 잘게 썬다.' },
            { step: 2, instruction: '볼에 계란, 물, 후추를 섞고 부침가루를 넣어 가루가 보이지 않게 푼다.' },
            { step: 3, instruction: '반죽에 양배추, 양파, 오징어를 넣어 걸쭉하게 섞는다.' },
            { step: 4, instruction: '팬에 식용유를 넉넉히 두르고 반죽을 2cm 두께로 펴 올린 뒤, 베이컨을 얹고 중불에서 앞뒤로 노릇하게 굽는다.' },
            { step: 5, instruction: '접시에 담아 돈가스소스를 바르고 가쓰오부시와 쪽파를 올린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6865655',
        references: ['https://www.10000recipe.com/recipe/6865655', 'https://www.10000recipe.com/recipe/6846428', 'https://www.10000recipe.com/recipe/6861606']
    },

    '돈카츠나베': {
        category: '일식',
        keywords: ['돈카츠나베', '돈가스나베'],
        baseIngredient: '돈가스',
        description: '자작한 국물에 돈가스와 계란을 끓여낸 일본식 나베',
        calories: 620,
        difficulty: '쉬움',
        cookTime: '25분',
        servings: 1,
        ingredients: [
            { name: '돈가스', amount: '1장', required: true, noSubstituteHere: true },
            { name: '계란', amount: '1개', required: true, noSubstituteHere: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '간장', amount: '1과 1/2큰술', required: true },
            { name: '물', amount: '3/4컵', required: true },
            { name: '식용유', amount: '적당량', required: true }
        ],
        steps: [
            { step: 1, instruction: '양파는 얇게 썰고 대파는 송송 썬다. 계란은 대충 풀어 둔다.' },
            { step: 2, instruction: '돈가스는 기름에 노릇하게 튀기거나 구워 한 김 식힌 뒤 먹기 좋게 썬다.' },
            { step: 3, instruction: '냄비에 물, 간장, 양파를 넣고 중불에서 양파가 투명해질 때까지 끓인다.' },
            { step: 4, instruction: '국물이 끓으면 돈가스를 올리고 대파를 뿌린다.' },
            { step: 5, instruction: '계란물을 둘러 붓고 뚜껑을 덮어 30초 정도만 익힌 뒤 바로 불을 끈다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6860728',
        references: ['https://www.10000recipe.com/recipe/6860728', 'https://www.10000recipe.com/recipe/6887817', 'https://www.10000recipe.com/recipe/6840066']
    },

    '명란크림우동': {
        category: '일식',
        keywords: ['명란크림우동'],
        baseIngredient: '우동면',
        description: '고소한 크림소스에 명란젓을 더한 우동',
        calories: 580,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '우동면', amount: '1개', required: true },
            { name: '명란젓', amount: '1개', required: true, noSubstituteHere: true },
            { name: '생크림', amount: '150ml', required: true },
            { name: '마늘', amount: '1과 1/2쪽', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '식용유', amount: '1/2큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '명란젓은 껍질을 벗겨 알만 긁어내고, 마늘은 얇게 썰고 대파는 송송 썬다.' },
            { step: 2, instruction: '끓는 물에 우동면을 2분 삶아 건진다.' },
            { step: 3, instruction: '팬에 식용유를 두르고 중불에서 마늘과 대파를 볶아 향을 낸다.' },
            { step: 4, instruction: '생크림을 붓고 약불에서 끓이다가 명란 절반과 우동면을 넣어 섞는다.' },
            { step: 5, instruction: '농도가 맞으면 소금, 후추로 간하고, 불을 끈 뒤 남은 명란을 올린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6828946',
        references: ['https://www.10000recipe.com/recipe/6828946', 'https://www.10000recipe.com/recipe/6911545', 'https://www.10000recipe.com/recipe/7047472']
    },

    '라자냐': {
        category: '양식',
        keywords: ['라자냐'],
        baseIngredient: '라자냐면',
        description: '면과 소스, 치즈를 층층이 쌓아 구운 이탈리아식 오븐요리',
        calories: 620,
        difficulty: '어려움',
        cookTime: '70분',
        servings: 1,
        ingredients: [
            { name: '라자냐면', amount: '2장', required: true },
            { name: '다진 소고기', amount: '100g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '토마토소스', amount: '3/4컵', required: true },
            { name: '버터', amount: '10g', required: true },
            { name: '밀가루', amount: '1큰술', required: true },
            { name: '우유', amount: '3/4컵', required: true },
            { name: '모짜렐라 치즈', amount: '50g', required: true },
            { name: '올리브유', amount: '1/2큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '라자냐면은 소금과 올리브유를 조금 넣은 끓는 물에 8~10분 삶아 찬물에 헹구고 펼쳐 둔다.' },
            { step: 2, instruction: '팬에 올리브유를 두르고 양파와 다진마늘을 볶다가 소고기를 넣어 소금, 후추로 간하며 볶는다. 토마토소스를 넣고 약불에서 15분 졸여 라구소스를 만든다.' },
            { step: 3, instruction: '냄비에 버터를 녹이고 밀가루를 넣어 타지 않게 볶다가, 우유를 조금씩 부어 저어 가며 걸쭉한 베샤멜소스를 만든다.' },
            { step: 4, instruction: '오븐 그릇에 면, 라구소스, 베샤멜소스, 모짜렐라 순으로 3~4겹 쌓고 맨 위에 치즈를 올린다.' },
            { step: 5, instruction: '200도로 예열한 오븐에서 20분 정도 노릇하게 굽는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6947878',
        references: ['https://www.10000recipe.com/recipe/6947878', 'https://www.10000recipe.com/recipe/6903723', 'https://www.10000recipe.com/recipe/6842893']
    },

    '에그인헬': {
        category: '양식',
        keywords: ['에그인헬', '샤크슈카'],
        baseIngredient: '계란',
        description: '토마토소스에 계란을 익혀낸 지중해식 요리',
        calories: 380,
        difficulty: '쉬움',
        cookTime: '25분',
        servings: 1,
        ingredients: [
            { name: '토마토소스', amount: '1컵', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '양송이버섯', amount: '1개', required: true },
            { name: '파프리카', amount: '1/4개', required: true },
            { name: '청양고추', amount: '1/2개', required: true },
            { name: '우유', amount: '35ml', required: true },
            { name: '모짜렐라 치즈', amount: '25g', required: true },
            { name: '버터', amount: '1/2큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '베이컨', amount: '1줄', required: false, noSubstituteHere: true },
            { name: '소세지', amount: '3개', required: false, noSubstituteHere: true },
            { name: '바질', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '양파, 파프리카, 양송이, 청양고추는 한입 크기로 썰고 베이컨과 소세지도 먹기 좋게 썬다.' },
            { step: 2, instruction: '팬에 버터를 녹이고 중불에서 다진마늘과 양파를 볶아 소금, 후추로 간한다.' },
            { step: 3, instruction: '베이컨, 소세지, 양송이를 볶다가 파프리카와 청양고추를 넣고 1분 더 볶는다.' },
            { step: 4, instruction: '토마토소스와 우유를 넣고 저어 가며 5분 정도 끓인다.' },
            { step: 5, instruction: '소스에 홈을 만들어 계란을 깨 넣고 모짜렐라를 올린 뒤, 뚜껑을 덮고 약불에서 계란이 반숙이 될 때까지 익힌다. 바질을 올려 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6846641',
        references: ['https://www.10000recipe.com/recipe/6846641', 'https://www.10000recipe.com/recipe/6844739', 'https://www.10000recipe.com/recipe/6914003']
    },

    '굴라쉬': {
        category: '양식',
        keywords: ['굴라쉬'],
        baseIngredient: '소고기',
        description: '파프리카가루로 맛을 낸 헝가리식 소고기 스튜',
        calories: 450,
        difficulty: '보통',
        cookTime: '80분',
        servings: 1,
        ingredients: [
            { name: '소고기(스튜용)', amount: '150g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '마늘', amount: '1과 1/2쪽', required: true },
            { name: '당근', amount: '30g', required: true },
            { name: '파프리카', amount: '1/4개', required: true },
            { name: '토마토소스', amount: '3/4컵', required: true },
            { name: '파프리카가루', amount: '1/2큰술', required: true },
            { name: '버터', amount: '1/2큰술', required: true },
            { name: '올리브유', amount: '1/2큰술', required: true },
            { name: '물', amount: '1/2컵', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '레드와인', amount: '35ml', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '소고기는 큐브 모양으로 썰어 소금, 후추로 밑간하고 채소는 한입 크기로 썬다.' },
            { step: 2, instruction: '냄비에 버터와 올리브유를 두르고 고기 겉면을 노릇하게 구운 뒤, 양파와 편 썬 마늘을 넣어 볶는다.' },
            { step: 3, instruction: '당근과 파프리카를 넣고 볶다가 레드와인을 부어 1분 정도 끓여 잡내를 날린다.' },
            { step: 4, instruction: '토마토소스, 파프리카가루, 물을 넣고 끓으면 약불로 줄여 뚜껑을 덮는다.' },
            { step: 5, instruction: '가끔 저어 가며 1시간 정도 푹 끓이고, 소금과 후추로 간을 맞춘다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6886299',
        references: ['https://www.10000recipe.com/recipe/6886299', 'https://www.10000recipe.com/recipe/6982771', 'https://www.10000recipe.com/recipe/6885435']
    },

    '치킨파니니': {
        category: '양식',
        keywords: ['치킨파니니'],
        baseIngredient: '닭가슴살',
        description: '그릴에 눌러 구운 담백한 치킨 샌드위치',
        calories: 480,
        difficulty: '쉬움',
        cookTime: '30분',
        servings: 1,
        ingredients: [
            { name: '치아바타빵', amount: '1개', required: true },
            { name: '닭가슴살', amount: '120g', required: true },
            { name: '적양파', amount: '1/4개', required: true },
            { name: '올리브유', amount: '2작은술', required: true },
            { name: '레몬즙', amount: '1작은술', required: true },
            { name: '다진마늘', amount: '약간', required: true },
            { name: '시금치', amount: '15g', required: true },
            { name: '슬라이스 치즈(그뤼에르 대신)', amount: '2장', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '양파는 채 썰어 올리브유 조금에 중불로 부드럽게 볶아 덜어 둔다.' },
            { step: 2, instruction: '닭가슴살은 두께가 고르게 두드려 소금, 후추로 간하고, 팬에서 앞뒤로 5분씩 익혀 잠시 두었다가 썬다.' },
            { step: 3, instruction: '남은 올리브유에 레몬즙과 다진마늘을 섞어 반으로 가른 빵 안쪽에 바른다.' },
            { step: 4, instruction: '빵에 시금치, 닭가슴살, 양파, 치즈 순으로 올리고 덮는다.' },
            { step: 5, instruction: '달군 팬에 올리고 무거운 냄비로 눌러, 앞뒤로 3~4분씩 치즈가 녹고 노릇해질 때까지 굽는다.' }
        ],
        source: 'https://www.williams-sonoma.com/m/recipe/chicken-and-gruyere-panini.amp.html',
        references: ['https://www.williams-sonoma.com/m/recipe/chicken-and-gruyere-panini.amp.html']
    },

    '스테이크 솥밥': {
        category: '양식',
        keywords: ['스테이크솥밥'],
        baseIngredient: '소고기',
        description: '갓 지은 솥밥에 구운 스테이크를 올린 든든한 한 그릇',
        calories: 650,
        difficulty: '보통',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '쌀', amount: '3/4컵', required: true },
            { name: '물', amount: '3/4컵', required: true },
            { name: '소고기(스테이크용)', amount: '125g', required: true },
            { name: '마늘', amount: '4쪽', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true },
            { name: '버터', amount: '3/4큰술', required: true },
            { name: '쪽파', amount: '2줄기', required: true },
            { name: '올리브유', amount: '1큰술', required: true },
            { name: '식용유', amount: '1과 1/2큰술', required: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '설탕', amount: '1/2큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '쌀은 씻어 20분 불린 뒤 물기를 빼고, 마늘은 얇게 편 썰고 쪽파는 송송 썬다.' },
            { step: 2, instruction: '냄비에 버터와 다진마늘을 볶다가 쌀을 넣어 1분 볶고 물을 붓는다. 센불에서 끓으면 약불로 줄여 10분 익히고, 불을 끈 뒤 5분 뜸 들인다.' },
            { step: 3, instruction: '소고기는 소금, 후추, 올리브유로 밑간해 달군 팬에서 앞뒤로 2분씩 굽고 5분 둔 뒤 썬다.' },
            { step: 4, instruction: '다른 팬에 식용유를 넉넉히 두르고 편마늘을 노릇하게 튀겨 마늘칩을 만든다. 고기 구운 팬에 간장과 설탕을 넣어 살짝 끓여 소스를 만든다.' },
            { step: 5, instruction: '밥 위에 쪽파, 고기, 마늘칩을 올리고 소스를 뿌린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6944923',
        references: ['https://www.10000recipe.com/recipe/6944923', 'https://www.10000recipe.com/recipe/6916870', 'https://www.10000recipe.com/recipe/7006833']
    },

    '맥앤치즈': {
        category: '양식',
        keywords: ['맥앤치즈'],
        baseIngredient: '마카로니',
        description: '꾸덕한 치즈소스에 버무린 마카로니 요리',
        calories: 580,
        difficulty: '쉬움',
        cookTime: '25분',
        servings: 1,
        ingredients: [
            { name: '마카로니', amount: '75g', required: true },
            { name: '버터', amount: '1큰술', required: true },
            { name: '밀가루', amount: '3/4큰술', required: true },
            { name: '우유', amount: '3/4컵', required: true },
            { name: '슬라이스 체다치즈', amount: '1장', required: true },
            { name: '모짜렐라 치즈', amount: '1/4컵', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '베이컨', amount: '1줄', required: false, noSubstituteHere: true },
            { name: '청양고추', amount: '1/2개', required: false },
            { name: '파슬리가루', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '끓는 소금물에 마카로니를 10분 삶아 헹구지 않고 물기만 뺀다.' },
            { step: 2, instruction: '베이컨과 청양고추는 잘게 썰고, 베이컨은 팬에 노릇하게 굽는다.' },
            { step: 3, instruction: '냄비에 버터를 녹이고 밀가루를 넣어 중약불에서 1분 볶는다.' },
            { step: 4, instruction: '우유를 조금씩 나눠 부으며 저어 걸쭉하게 만든 뒤, 체다치즈와 모짜렐라를 넣어 녹인다.' },
            { step: 5, instruction: '마카로니, 베이컨, 청양고추를 넣고 소금, 후추로 간한 뒤 파슬리가루를 뿌린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6868148',
        references: ['https://www.10000recipe.com/recipe/6868148', 'https://www.10000recipe.com/recipe/6829327', 'https://www.10000recipe.com/recipe/6934760']
    },

    '티라미수': {
        category: '디저트',
        keywords: ['티라미수'],
        baseIngredient: '마스카포네 치즈',
        description: '커피에 적신 빵과 치즈크림을 층층이 쌓은 이탈리아 디저트',
        calories: 420,
        difficulty: '보통',
        cookTime: '45분',
        servings: 3,
        ingredients: [
            { name: '에스프레소', amount: '60ml', required: true },
            { name: '레이디핑거', amount: '10개', required: true },
            { name: '마스카포네 치즈', amount: '110g', required: true },
            { name: '계란노른자', amount: '1개', required: true, substituteOverride: ['노른자 없는 크림(생크림+마스카포네)'] },
            { name: '설탕', amount: '25g', required: true },
            { name: '생크림', amount: '120ml', required: true },
            { name: '바닐라 익스트랙', amount: '약간', required: true },
            { name: '소금', amount: '한 꼬집', required: true },
            { name: '코코아가루', amount: '약간', required: true },
            { name: '럼', amount: '1/2큰술', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '에스프레소는 진하게 내려 실온으로 식힌다.' },
            { step: 2, instruction: '볼에 계란노른자, 설탕, 소금을 넣고 약하게 끓는 물 위(중탕)에서 저어 가며 걸쭉해질 때까지 익힌 뒤 식힌다.' },
            { step: 3, instruction: '차가운 마스카포네에 식힌 노른자 크림과 럼(선택)을 섞는다. 생크림은 바닐라를 넣어 단단하게 휘핑해 살살 섞는다.' },
            { step: 4, instruction: '레이디핑거를 에스프레소에 1초씩만 적셔 그릇에 깔고, 크림 절반, 레이디핑거, 남은 크림 순으로 올린다.' },
            { step: 5, instruction: '냉장고에서 2~3시간 굳힌 뒤 코코아가루를 뿌리고, 8시간 이상 더 차갑게 굳힌다.' }
        ],
        source: 'https://sallysbakingaddiction.com/tiramisu/',
        references: ['https://sallysbakingaddiction.com/tiramisu/']
    },

    '에그타르트': {
        category: '디저트',
        keywords: ['에그타르트'],
        baseIngredient: '커스터드',
        description: '바삭한 파이 반죽에 부드러운 커스터드를 채워 구운 디저트',
        calories: 320,
        difficulty: '보통',
        cookTime: '70분',
        servings: 3,
        ingredients: [
            { name: '박력분', amount: '75g', required: true },
            { name: '차가운 버터', amount: '50g', required: true },
            { name: '설탕(반죽용)', amount: '1/2작은술', required: true },
            { name: '소금', amount: '한 꼬집', required: true },
            { name: '차가운 물', amount: '25g', required: true },
            { name: '계란노른자', amount: '2개', required: true, noSubstituteHere: true },
            { name: '우유', amount: '100ml', required: true },
            { name: '생크림', amount: '70ml', required: true },
            { name: '설탕(필링용)', amount: '35g', required: true },
            { name: '바닐라 익스트랙', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '박력분, 설탕(반죽용), 소금에 차가운 버터를 넣고 잘라 가며 보슬보슬하게 섞은 뒤, 찬물을 넣어 한 덩어리로 뭉치고 냉장고에서 30분 휴지한다.' },
            { step: 2, instruction: '우유, 생크림, 설탕(필링용)을 약불에서 가장자리가 끓기 직전까지 데우고, 한 김 식혀 노른자와 바닐라에 조금씩 부어 섞은 뒤 체에 거른다.' },
            { step: 3, instruction: '반죽을 6등분해 머핀틀에 얇게 눌러 펴서 그릇 모양을 잡는다.' },
            { step: 4, instruction: '필링을 틀의 90%까지 채운다.' },
            { step: 5, instruction: '180도로 예열한 오븐에서 30~35분, 윗면이 노릇해질 때까지 굽고 식힘망에서 식힌다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6839690',
        references: ['https://www.10000recipe.com/recipe/6839690', 'https://www.10000recipe.com/recipe/6846669', 'https://www.10000recipe.com/recipe/6882628']
    },

    '브라우니': {
        category: '디저트',
        keywords: ['브라우니'],
        baseIngredient: '초콜릿',
        description: '진한 초콜릿 반죽을 구워낸 꾸덕한 디저트',
        calories: 450,
        difficulty: '보통',
        cookTime: '50분',
        servings: 4,
        ingredients: [
            { name: '다크초콜릿', amount: '120g', required: true },
            { name: '버터', amount: '80g', required: true },
            { name: '설탕', amount: '90g', required: true },
            { name: '계란', amount: '2개', required: true, substituteOverride: ['사과소스(계란 대신)', '바나나(베이킹용)', '아쿠아파바(베이킹용)'] },
            { name: '박력분', amount: '50g', required: true },
            { name: '코코아가루', amount: '15g', required: true }
        ],
        steps: [
            { step: 1, instruction: '다크초콜릿과 버터를 중탕이나 전자레인지(30초씩)로 녹여 섞는다.' },
            { step: 2, instruction: '계란을 풀고 설탕을 나눠 넣으며 섞은 뒤, 녹인 초콜릿을 넣어 섞는다.' },
            { step: 3, instruction: '박력분과 코코아가루를 체 쳐 넣고 가루가 보이지 않을 때까지만 주걱으로 섞는다.' },
            { step: 4, instruction: '유산지를 깐 15cm 틀에 붓고 바닥에 두어 번 쳐서 공기를 뺀다.' },
            { step: 5, instruction: '175도로 예열한 오븐에서 20~25분 굽고, 완전히 식힌 뒤 자른다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6884342',
        references: ['https://www.10000recipe.com/recipe/6884342', 'https://www.10000recipe.com/recipe/6901773', 'https://www.10000recipe.com/recipe/6814491']
    },

    '마들렌': {
        category: '디저트',
        keywords: ['마들렌'],
        baseIngredient: '밀가루',
        description: '조개 모양 틀에 구워낸 폭신한 프랑스 과자',
        calories: 180,
        difficulty: '쉬움',
        cookTime: '60분',
        servings: 4,
        ingredients: [
            { name: '박력분', amount: '100g', required: true },
            { name: '버터', amount: '100g', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '설탕', amount: '90g', required: true },
            { name: '베이킹파우더', amount: '1작은술', required: true }
        ],
        steps: [
            { step: 1, instruction: '박력분과 베이킹파우더를 체 쳐 둔다. 버터는 녹여 한 김 식힌다.' },
            { step: 2, instruction: '계란을 풀고 설탕을 2~3번 나눠 넣으며 거품이 나지 않게 섞는다.' },
            { step: 3, instruction: '가루를 넣어 가루가 보이지 않을 때까지 섞고, 녹인 버터를 조금씩 넣어 섞는다.' },
            { step: 4, instruction: '랩을 씌워 냉장고에서 30분 이상 휴지한다.' },
            { step: 5, instruction: '버터를 바른 틀에 반죽을 80%만 채우고, 180도로 예열한 오븐에서 10~12분 굽는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6900034',
        references: ['https://www.10000recipe.com/recipe/6900034', 'https://www.10000recipe.com/recipe/6790299', 'https://www.10000recipe.com/recipe/6632159']
    },

    '바스크 치즈케이크': {
        category: '디저트',
        keywords: ['바스크치즈케이크'],
        baseIngredient: '크림치즈',
        description: '윗면을 그을리듯 구워낸 진한 스페인식 치즈케이크',
        calories: 380,
        difficulty: '보통',
        cookTime: '40분',
        servings: 6,
        ingredients: [
            { name: '크림치즈', amount: '400g', required: true },
            { name: '계란', amount: '3개', required: true, noSubstituteHere: true },
            { name: '생크림', amount: '200ml', required: true },
            { name: '설탕', amount: '110g', required: true },
            { name: '박력분', amount: '15g', required: true }
        ],
        steps: [
            { step: 1, instruction: '크림치즈와 계란은 실온에 1시간 두고, 15cm 틀에 유산지를 구겨 깐다.' },
            { step: 2, instruction: '크림치즈를 부드럽게 풀고 설탕을 넣어 완전히 녹인다.' },
            { step: 3, instruction: '계란을 하나씩 넣어 섞고, 생크림과 체 친 박력분을 넣어 덩어리 없이 섞은 뒤 체에 한 번 거른다.' },
            { step: 4, instruction: '반죽을 틀에 붓고 바닥에 쳐서 기포를 뺀 뒤, 220도로 예열한 오븐에서 25~30분 겉이 진한 갈색이 될 때까지 굽는다.' },
            { step: 5, instruction: '실온에서 식힌 뒤 냉장고에서 4시간 이상 차갑게 굳혀 자른다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6932848',
        references: ['https://www.10000recipe.com/recipe/6932848', 'https://www.10000recipe.com/recipe/6935721', 'https://www.10000recipe.com/recipe/6985561']
    },

    '망고 사고': {
        category: '디저트',
        keywords: ['망고사고'],
        baseIngredient: '망고',
        description: '코코넛밀크와 망고로 만드는 시원한 동남아식 디저트',
        calories: 220,
        difficulty: '쉬움',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '사고펄(작은 타피오카펄)', amount: '2큰술', required: true },
            { name: '물', amount: '1컵', required: true },
            { name: '망고', amount: '1개(작은 것)', required: true },
            { name: '코코넛밀크', amount: '50ml', required: true },
            { name: '연유', amount: '1큰술', required: true },
            { name: '바닐라 익스트랙', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '물을 팔팔 끓여 사고펄을 넣고 저어 가며 중불에서 15~20분 삶는다. 가운데 흰 점이 남으면 불을 끄고 뚜껑을 덮어 10분 둔다.' },
            { step: 2, instruction: '투명해진 사고펄을 찬물에 헹궈 건진다.' },
            { step: 3, instruction: '망고는 토핑용으로 조금 깍둑 썰어 남기고, 나머지를 코코넛밀크, 연유, 바닐라와 함께 곱게 간다.' },
            { step: 4, instruction: '간 망고를 냉장고에 1시간 넣어 차갑게 한다.' },
            { step: 5, instruction: '사고펄을 섞어 그릇에 담고 남겨 둔 망고를 올린다.' }
        ],
        source: 'https://thewoksoflife.com/mango-sago/',
        references: ['https://thewoksoflife.com/mango-sago/']
    },

    '파나코타': {
        category: '디저트',
        keywords: ['파나코타'],
        baseIngredient: '생크림',
        description: '생크림을 부드럽게 굳혀낸 이탈리아식 푸딩',
        calories: 280,
        difficulty: '쉬움',
        cookTime: '15분',
        servings: 1,
        ingredients: [
            { name: '젤라틴 가루', amount: '1/3작은술', required: true },
            { name: '물', amount: '1/2큰술', required: true },
            { name: '생크림', amount: '80ml', required: true },
            { name: '우유', amount: '40ml', required: true },
            { name: '꿀', amount: '2작은술', required: true },
            { name: '설탕', amount: '1작은술', required: true },
            { name: '소금', amount: '한 꼬집', required: true },
            { name: '바닐라 익스트랙', amount: '1/4작은술', required: true },
            { name: '럼', amount: '1작은술', required: false, noSubstituteHere: true },
            { name: '캐러멜 소스', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '젤라틴 가루를 물에 고루 뿌려 5분 불린다.' },
            { step: 2, instruction: '냄비에 생크림, 우유, 꿀, 설탕, 소금을 넣고 약불에서 가장자리가 끓기 직전까지 데운다.' },
            { step: 3, instruction: '불을 끄고 불린 젤라틴, 바닐라, 럼(선택)을 넣어 완전히 녹인다.' },
            { step: 4, instruction: '볼째 얼음물에 받쳐 가끔 저으며 실온 정도로 식힌다.' },
            { step: 5, instruction: '컵에 붓고 랩을 씌워 냉장고에서 3시간 이상 굳힌 뒤, 캐러멜 소스를 얇게 올려 낸다.' }
        ],
        source: 'https://www.onceuponachef.com/recipes/panna-cotta.html',
        references: ['https://www.onceuponachef.com/recipes/panna-cotta.html']
    },

    '순두부찌개': {
        category: '한식',
        keywords: ['순두부찌개'],
        baseIngredient: '순두부',
        description: '얼큰하고 부드러운 국물이 일품인 찌개',
        calories: 320,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '순두부', amount: '1/2봉', required: true, noSubstituteHere: true },
            { name: '양파', amount: '25g', required: true },
            { name: '애호박', amount: '40g', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '고춧가루', amount: '3/4큰술', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '국간장', amount: '1/2큰술', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '식용유', amount: '1/2큰술', required: true },
            { name: '물', amount: '3/4컵', required: true },
            { name: '청양고추', amount: '1/2개', required: false },
            { name: '계란', amount: '1개', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '양파와 대파는 잘게 썰고, 애호박은 반달 썰고, 청양고추는 어슷 썬다.' },
            { step: 2, instruction: '뚝배기에 식용유와 참기름을 두르고 약불에서 대파와 양파를 볶아 향을 낸다.' },
            { step: 3, instruction: '불을 끄고 고춧가루를 넣어 섞은 뒤, 다시 약불에서 30초 볶아 고추기름을 낸다.' },
            { step: 4, instruction: '물, 국간장, 다진마늘을 넣고 센불에서 끓으면 애호박, 청양고추, 순두부를 큼직하게 떠 넣는다.' },
            { step: 5, instruction: '3분 정도 끓인 뒤 계란을 깨 넣고 한소끔 더 끓인다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6912220',
        references: ['https://www.10000recipe.com/recipe/6912220', 'https://www.10000recipe.com/recipe/6871912', 'https://www.10000recipe.com/recipe/6891575']
    },

    '닭볶음탕': {
        category: '한식',
        keywords: ['닭볶음탕', '닭도리탕'],
        baseIngredient: '닭고기',
        description: '매콤달콤한 양념에 조려낸 얼큰한 닭요리',
        calories: 480,
        difficulty: '보통',
        cookTime: '50분',
        servings: 1,
        ingredients: [
            { name: '닭고기(볶음탕용)', amount: '350g', required: true },
            { name: '감자', amount: '1개', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '당근', amount: '30g', required: true },
            { name: '대파', amount: '1/2대', required: true },
            { name: '청양고추', amount: '1개', required: true },
            { name: '고추장', amount: '1큰술', required: true },
            { name: '고춧가루', amount: '1큰술', required: true },
            { name: '간장', amount: '2와 1/2큰술', required: true },
            { name: '설탕', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true },
            { name: '맛술', amount: '1큰술', required: true },
            { name: '물', amount: '1과 1/4컵', required: true },
            { name: '후추', amount: '약간', required: false },
            { name: '당면', amount: '25g', required: false }
        ],
        steps: [
            { step: 1, instruction: '닭은 기름기를 떼고 끓는 물에 5분 데친 뒤 찬물에 헹군다.' },
            { step: 2, instruction: '고추장, 고춧가루, 간장, 설탕, 다진마늘, 맛술, 후추를 섞어 양념장을 만든다.' },
            { step: 3, instruction: '냄비에 닭, 양념장, 물을 넣고 센불에서 끓이다가 감자와 당근을 넣는다.' },
            { step: 4, instruction: '중불로 줄여 뚜껑을 덮고 25분 정도 졸이며, 국물이 너무 줄면 물을 조금 더한다.' },
            { step: 5, instruction: '감자가 익으면 양파, 대파, 청양고추(와 불린 당면)를 넣고 3분 더 끓여 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6876357',
        references: ['https://www.10000recipe.com/recipe/6876357', 'https://www.10000recipe.com/recipe/6883937', 'https://www.10000recipe.com/recipe/6887142']
    },

    '오징어볶음': {
        category: '한식',
        keywords: ['오징어볶음'],
        baseIngredient: '오징어',
        description: '쫄깃한 오징어를 매콤하게 볶아낸 밥도둑 반찬',
        calories: 310,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '오징어', amount: '1/2마리', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '양배추', amount: '1장', required: false },
            { name: '대파', amount: '1/4대', required: true },
            { name: '청양고추', amount: '1/2개', required: true },
            { name: '고추장', amount: '1/2큰술', required: true },
            { name: '고춧가루', amount: '3/4큰술', required: true },
            { name: '간장', amount: '3/4큰술', required: true },
            { name: '설탕', amount: '1/2큰술', required: true },
            { name: '물엿', amount: '3/4작은술', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '식용유', amount: '1/2큰술', required: true },
            { name: '참기름', amount: '3/4작은술', required: true }
        ],
        steps: [
            { step: 1, instruction: '오징어는 손질해 먹기 좋게 썰고, 양파·양배추는 큼직하게, 대파와 청양고추는 어슷 썬다.' },
            { step: 2, instruction: '고추장, 고춧가루, 간장, 설탕, 물엿, 다진마늘, 후추를 섞어 양념장을 만든다.' },
            { step: 3, instruction: '팬에 식용유와 대파 절반을 넣고 센불에서 볶아 파기름을 낸다.' },
            { step: 4, instruction: '오징어를 넣고 겉이 하얗게 변하면 양념장과 양파·양배추를 넣고 센불에서 빠르게 볶는다.' },
            { step: 5, instruction: '남은 대파와 청양고추를 넣고 1분 더 볶은 뒤 불을 끄고 참기름을 두른다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6903507',
        references: ['https://www.10000recipe.com/recipe/6903507', 'https://www.10000recipe.com/recipe/6870391', 'https://www.10000recipe.com/recipe/6935097']
    },

    '떡갈비': {
        category: '한식',
        keywords: ['떡갈비'],
        baseIngredient: '다진고기',
        description: '고기를 다져 치대어 구운 담양 향토 음식',
        calories: 420,
        difficulty: '보통',
        cookTime: '30분',
        servings: 1,
        ingredients: [
            { name: '다진 소고기', amount: '100g', required: true },
            { name: '다진 돼지고기', amount: '50g', required: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '설탕', amount: '3/4작은술', required: true },
            { name: '올리고당', amount: '3/4작은술', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '다진파', amount: '1/2큰술', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '식용유', amount: '1/2큰술', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '다진 고기는 키친타월로 눌러 핏물을 뺀다.' },
            { step: 2, instruction: '볼에 고기와 간장, 설탕, 올리고당, 다진마늘, 다진파, 참기름, 후추를 넣고 끈기가 생길 때까지 치댄다.' },
            { step: 3, instruction: '반죽을 1cm 두께로 동글납작하게 빚고 가운데를 살짝 눌러 오목하게 만든다.' },
            { step: 4, instruction: '팬에 식용유를 두르고 중약불에서 앞뒤로 노릇하게 굽는다.' },
            { step: 5, instruction: '겉이 타기 시작하면 약불로 줄이고 뚜껑을 덮어 속까지 익힌다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6851683',
        references: ['https://www.10000recipe.com/recipe/6851683', 'https://www.10000recipe.com/recipe/6953347', 'https://www.10000recipe.com/recipe/6955043']
    },

    '소고기뭇국': {
        category: '한식',
        keywords: ['소고기뭇국', '뭇국'],
        baseIngredient: '소고기',
        description: '깔끔하고 시원한 국물의 기본 국 요리',
        calories: 180,
        difficulty: '쉬움',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '소고기(국거리)', amount: '75g', required: true },
            { name: '무', amount: '100g', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '국간장', amount: '3/4큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '물', amount: '2컵', required: true },
            { name: '청양고추', amount: '1/2개', required: false }
        ],
        steps: [
            { step: 1, instruction: '소고기는 찬물에 10분 담가 핏물을 빼고, 무는 얇게 나박 썬다.' },
            { step: 2, instruction: '냄비에 참기름을 두르고 중불에서 소고기를 겉면 색이 변할 때까지 볶는다.' },
            { step: 3, instruction: '무를 넣고 살짝 투명해질 때까지 함께 볶는다.' },
            { step: 4, instruction: '물을 붓고 끓으면 거품을 걷어내고, 국간장과 다진마늘을 넣어 중불에서 20분 끓인다.' },
            { step: 5, instruction: '대파와 청양고추를 넣고 소금으로 간을 맞춘다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6897772',
        references: ['https://www.10000recipe.com/recipe/6897772', 'https://www.10000recipe.com/recipe/6833329', 'https://www.10000recipe.com/recipe/6832398']
    },

    '계란볶음밥': {
        category: '중식',
        keywords: ['계란볶음밥'],
        baseIngredient: '밥',
        description: '고슬고슬하게 볶아낸 기본 계란볶음밥',
        calories: 480,
        difficulty: '쉬움',
        cookTime: '10분',
        servings: 1,
        ingredients: [
            { name: '밥', amount: '1공기', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '대파', amount: '1/2대', required: true },
            { name: '식용유', amount: '1과 1/2큰술', required: true },
            { name: '간장', amount: '3/4작은술', required: true },
            { name: '굴소스', amount: '1/2큰술', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '대파는 잘게 썰고 계란은 풀어 둔다.' },
            { step: 2, instruction: '팬에 식용유를 넉넉히 두르고 중불에서 대파가 노릇해질 때까지 볶아 파기름을 낸다.' },
            { step: 3, instruction: '파를 한쪽으로 밀고 계란을 부어 스크램블한다.' },
            { step: 4, instruction: '간장을 팬 가장자리에 둘러 향을 낸 뒤 밥을 넣고 센불에서 빠르게 볶는다.' },
            { step: 5, instruction: '굴소스와 후추로 간을 맞추고 1분 더 볶아 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6889424',
        references: ['https://www.10000recipe.com/recipe/6889424', 'https://www.10000recipe.com/recipe/6869698', 'https://www.10000recipe.com/recipe/6876705']
    },

    '마파두부': {
        category: '중식',
        keywords: ['마파두부'],
        baseIngredient: '두부',
        description: '다진 고기와 두부를 매콤하게 졸여낸 중국식 두부요리',
        calories: 350,
        difficulty: '쉬움',
        cookTime: '25분',
        servings: 1,
        ingredients: [
            { name: '두부', amount: '1/2모', required: true, noSubstituteHere: true },
            { name: '다진 돼지고기', amount: '75g', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true },
            { name: '고춧가루', amount: '3/4큰술', required: true },
            { name: '간장', amount: '3/4큰술', required: true },
            { name: '된장', amount: '3/4작은술', required: true },
            { name: '굴소스', amount: '3/4작은술', required: true },
            { name: '설탕', amount: '3/4작은술', required: true },
            { name: '물', amount: '1/2컵', required: true },
            { name: '전분', amount: '1/2큰술', required: true },
            { name: '식용유', amount: '1/2큰술', required: true },
            { name: '참기름', amount: '1/4작은술', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '두부는 1.5cm 크기로 깍둑 썰고 대파는 잘게 썬다. 전분은 물 1큰술에 풀어 둔다.' },
            { step: 2, instruction: '팬에 식용유를 두르고 중불에서 대파와 다진마늘을 볶아 향을 낸다.' },
            { step: 3, instruction: '돼지고기와 후추를 넣고 고기가 익을 때까지 볶은 뒤, 고춧가루, 간장, 굴소스, 설탕을 넣어 타지 않게 30초 볶는다.' },
            { step: 4, instruction: '물과 된장을 넣고 끓으면 두부를 넣어 약불에서 5분 졸인다.' },
            { step: 5, instruction: '전분물을 조금씩 부어 농도를 맞추고 참기름을 둘러 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6881454',
        references: ['https://www.10000recipe.com/recipe/6881454', 'https://www.10000recipe.com/recipe/2765742', 'https://www.10000recipe.com/recipe/6911795']
    },

    '토마토계란볶음': {
        category: '중식',
        keywords: ['토마토계란볶음', '토달볶'],
        baseIngredient: '토마토',
        description: '새콤달콤한 토마토와 부드러운 계란의 조합',
        calories: 220,
        difficulty: '쉬움',
        cookTime: '15분',
        servings: 1,
        ingredients: [
            { name: '토마토', amount: '1개', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '굴소스', amount: '1/2큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '식용유', amount: '1큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '토마토는 한입 크기로 썰고 대파는 송송 썬다. 계란은 소금, 후추를 넣어 풀어 둔다.' },
            { step: 2, instruction: '팬에 식용유 1/2큰술을 두르고 중불에서 계란을 반쯤 익을 때까지 스크램블해 덜어 둔다.' },
            { step: 3, instruction: '남은 식용유에 대파를 볶아 향을 낸다.' },
            { step: 4, instruction: '토마토를 넣고 중불에서 즙이 살짝 나올 때까지 2분 정도 볶은 뒤 굴소스로 간한다.' },
            { step: 5, instruction: '계란을 다시 넣고 센불에서 가볍게 섞어 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6855392',
        references: ['https://www.10000recipe.com/recipe/6855392', 'https://www.10000recipe.com/recipe/6532908', 'https://www.10000recipe.com/recipe/6957368']
    },

    '고추잡채': {
        category: '중식',
        keywords: ['고추잡채'],
        baseIngredient: '돼지고기',
        description: '고기와 채소를 가늘게 썰어 볶은 중국식 요리',
        calories: 340,
        difficulty: '보통',
        cookTime: '30분',
        servings: 1,
        ingredients: [
            { name: '돼지고기(등심, 잡채용)', amount: '100g', required: true },
            { name: '파프리카', amount: '1/2개', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '표고버섯', amount: '1개', required: true },
            { name: '청양고추', amount: '1/2개', required: false },
            { name: '꽃빵', amount: '3개', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '굴소스', amount: '1/2큰술', required: true },
            { name: '설탕', amount: '3/4작은술', required: true },
            { name: '올리고당', amount: '3/4작은술', required: true },
            { name: '맛술', amount: '1/2큰술', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '식용유', amount: '1/2큰술', required: true },
            { name: '고추기름', amount: '1/2큰술', required: false }
        ],
        steps: [
            { step: 1, instruction: '돼지고기는 간장 1작은술, 맛술, 후추로 15분 밑간한다.' },
            { step: 2, instruction: '파프리카, 양파, 표고버섯은 채 썰고 청양고추는 잘게 썬다.' },
            { step: 3, instruction: '팬에 식용유(또는 고추기름)를 두르고 다진마늘을 볶다가 고기를 넣어 중불에서 익힌다.' },
            { step: 4, instruction: '센불로 올려 채소를 넣고 남은 간장, 굴소스, 설탕, 올리고당을 넣어 1분 정도만 빠르게 볶는다.' },
            { step: 5, instruction: '꽃빵은 김 오른 찜기에서 4~5분 찌거나 전자레인지에 데워 함께 낸다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6886754',
        references: ['https://www.10000recipe.com/recipe/6886754', 'https://www.10000recipe.com/recipe/6884814', 'https://www.10000recipe.com/recipe/6869980']
    },

    '꿔바로우': {
        category: '중식',
        keywords: ['꿔바로우', '탕수육'],
        baseIngredient: '돼지고기',
        description: '바삭한 튀김에 새콤달콤한 소스를 곁들인 중국식 튀김요리',
        calories: 590,
        difficulty: '보통',
        cookTime: '50분',
        servings: 1,
        ingredients: [
            { name: '돼지고기(등심)', amount: '150g', required: true },
            { name: '감자전분', amount: '1/4컵', required: true },
            { name: '찹쌀가루', amount: '2큰술', required: true },
            { name: '물(튀김옷용)', amount: '1/4컵', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '식용유(튀김용)', amount: '적당량', required: true },
            { name: '당근', amount: '30g', required: true },
            { name: '설탕', amount: '1과 1/2큰술', required: true },
            { name: '식초', amount: '2큰술', required: true },
            { name: '간장', amount: '1/2큰술', required: true },
            { name: '물(소스용)', amount: '25ml', required: true }
        ],
        steps: [
            { step: 1, instruction: '돼지고기는 0.5cm 두께로 썰어 소금, 후추로 10분 밑간한다.' },
            { step: 2, instruction: '감자전분, 찹쌀가루, 물을 섞어 걸쭉한 튀김옷을 만들고 고기를 버무린다.' },
            { step: 3, instruction: '170도 기름에 고기를 4~5분 튀겨 건진 뒤, 한 번 더 튀겨 바삭하게 만든다.' },
            { step: 4, instruction: '팬에 설탕, 식초, 간장, 물을 넣고 끓이다가 채 썬 당근을 넣어 살짝 졸인다.' },
            { step: 5, instruction: '튀긴 고기를 넣고 소스에 빠르게 버무려 바로 낸다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6868747',
        references: ['https://www.10000recipe.com/recipe/6868747', 'https://www.10000recipe.com/recipe/6833722', 'https://www.10000recipe.com/recipe/6963921']
    },

    '가츠동': {
        category: '일식',
        keywords: ['가츠동'],
        baseIngredient: '돈가스',
        description: '돈가스를 계란과 함께 조려 얹은 일본식 덮밥',
        calories: 650,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '돈가스', amount: '1장', required: true, noSubstituteHere: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '간장', amount: '1과 1/2큰술', required: true },
            { name: '맛술', amount: '1과 1/2큰술', required: true },
            { name: '설탕', amount: '1큰술', required: true },
            { name: '물', amount: '1/3컵', required: true },
            { name: '밥', amount: '1공기', required: true },
            { name: '식용유', amount: '적당량', required: true }
        ],
        steps: [
            { step: 1, instruction: '양파는 채 썰고 대파는 송송 썬다. 계란은 흰자와 노른자가 살짝 섞일 정도로만 푼다.' },
            { step: 2, instruction: '간장, 맛술, 설탕, 물을 섞어 소스를 만든다.' },
            { step: 3, instruction: '돈가스는 기름에 바삭하게 튀기거나 구워 먹기 좋게 썬다.' },
            { step: 4, instruction: '작은 팬에 소스와 양파를 넣고 센불에서 끓이다가, 끓어오르면 돈가스를 올린다.' },
            { step: 5, instruction: '계란물과 대파를 둘러 넣고 계란이 70% 정도 익으면 불을 끄고 밥 위에 얹는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6852502',
        references: ['https://www.10000recipe.com/recipe/6852502', 'https://www.10000recipe.com/recipe/6829070', 'https://www.10000recipe.com/recipe/6956731']
    },

    '오야코동': {
        category: '일식',
        keywords: ['오야코동'],
        baseIngredient: '닭고기',
        description: '닭고기와 계란을 조려 얹은 부모자식 덮밥',
        calories: 550,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '닭고기(닭다리살)', amount: '150g', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '간장', amount: '1과 1/4큰술', required: true },
            { name: '맛술', amount: '1큰술', required: true },
            { name: '설탕', amount: '1작은술', required: true },
            { name: '물', amount: '1/3컵', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '식용유', amount: '1/2작은술', required: true },
            { name: '밥', amount: '1공기', required: true }
        ],
        steps: [
            { step: 1, instruction: '닭다리살은 껍질과 기름을 떼고 한입 크기로 썰어 맛술 1/2큰술, 소금, 후추로 밑간한다.' },
            { step: 2, instruction: '양파는 채 썰고 대파는 송송 썬다. 계란은 대충 풀어 대파와 섞는다.' },
            { step: 3, instruction: '팬에 식용유를 살짝 두르고 중불에서 닭다리살을 볶다가 반쯤 익으면 양파를 넣는다.' },
            { step: 4, instruction: '간장, 남은 맛술, 설탕, 물을 붓고 끓으면 약불로 줄여 닭다리살을 완전히 익힌다.' },
            { step: 5, instruction: '계란물을 둘러 붓고 뚜껑을 덮어 1분 정도만 익힌 뒤 밥 위에 얹는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6870013',
        references: ['https://www.10000recipe.com/recipe/6870013', 'https://www.10000recipe.com/recipe/6871502', 'https://www.10000recipe.com/recipe/6859491']
    },

    '야키소바': {
        category: '일식',
        keywords: ['야키소바'],
        baseIngredient: '면',
        description: '채소와 고기를 볶아 소스에 버무린 일본식 볶음면',
        calories: 520,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '야키소바면', amount: '150g', required: true },
            { name: '양배추', amount: '1과 1/2장', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '베이컨', amount: '2장', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '우스터소스', amount: '1과 1/2큰술', required: true },
            { name: '굴소스', amount: '1/2큰술', required: true },
            { name: '간장', amount: '1/2큰술', required: true },
            { name: '설탕', amount: '3/4작은술', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '식용유', amount: '1큰술', required: true },
            { name: '계란', amount: '1개', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '양배추와 양파는 한입 크기로 썰고 베이컨은 3cm 길이로 썬다. 우스터소스, 굴소스, 간장, 설탕을 섞어 둔다.' },
            { step: 2, instruction: '팬에 식용유를 두르고 중불에서 다진마늘과 양파를 볶아 향을 낸다.' },
            { step: 3, instruction: '베이컨과 양배추를 넣고 양배추 숨이 죽을 때까지 볶는다.' },
            { step: 4, instruction: '면을 넣고 풀어 가며 볶다가 섞어 둔 소스와 후추를 넣어 고루 섞는다.' },
            { step: 5, instruction: '접시에 담고 계란프라이를 올린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6833395',
        references: ['https://www.10000recipe.com/recipe/6833395', 'https://www.10000recipe.com/recipe/7003939', 'https://www.10000recipe.com/recipe/7050981']
    },

    '카레라이스': {
        category: '일식',
        keywords: ['카레라이스', '카레'],
        baseIngredient: '카레',
        description: '고체카레로 만드는 부드럽고 든든한 한 그릇 요리',
        calories: 580,
        difficulty: '쉬움',
        cookTime: '35분',
        servings: 1,
        ingredients: [
            { name: '돼지고기(카레용)', amount: '75g', required: true },
            { name: '감자', amount: '1/2개', required: true },
            { name: '당근', amount: '30g', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '식용유', amount: '1큰술', required: true },
            { name: '고체카레', amount: '2조각', required: true },
            { name: '물', amount: '300ml', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '밥', amount: '1공기', required: true }
        ],
        steps: [
            { step: 1, instruction: '고기와 채소는 한입 크기로 썬다.' },
            { step: 2, instruction: '냄비에 식용유를 두르고 중불에서 양파를 노릇해질 때까지 볶는다.' },
            { step: 3, instruction: '고기와 후추를 넣고 겉이 하얗게 변할 때까지 볶은 뒤 감자와 당근을 넣어 2분 더 볶는다.' },
            { step: 4, instruction: '물을 붓고 끓으면 중약불로 줄여 감자가 익을 때까지 15분 정도 끓인다.' },
            { step: 5, instruction: '불을 약하게 줄이고 고체카레를 풀어 넣어, 눌어붙지 않게 저으며 5분 더 끓인 뒤 밥에 곁들인다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6886933',
        references: ['https://www.10000recipe.com/recipe/6886933', 'https://www.10000recipe.com/recipe/6942522', 'https://www.10000recipe.com/recipe/6874844']
    },

    '메밀소바': {
        category: '일식',
        keywords: ['메밀소바', '자루소바'],
        baseIngredient: '메밀면',
        description: '차갑게 즐기는 담백한 일본식 메밀국수',
        calories: 380,
        difficulty: '쉬움',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '메밀면', amount: '100g', required: true },
            { name: '쯔유', amount: '1/4컵', required: true },
            { name: '물', amount: '75ml', required: true },
            { name: '무', amount: '50g', required: true },
            { name: '쪽파', amount: '1대', required: true },
            { name: '김', amount: '1/4장', required: true },
            { name: '와사비', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '쯔유와 물을 2:3으로 섞어 냉동실에 30분 넣어 살얼음 육수를 만든다.' },
            { step: 2, instruction: '무는 강판에 갈아 물기를 살짝 짜고, 쪽파는 송송 썰고 김은 가늘게 자른다.' },
            { step: 3, instruction: '끓는 물에 메밀면을 4~5분 삶는다. 넘치려 하면 찬물을 조금 붓는다.' },
            { step: 4, instruction: '삶은 면은 찬물에 여러 번 헹궈 전분기를 빼고 물기를 꼭 짠다.' },
            { step: 5, instruction: '면을 담고 살얼음 육수에 간 무, 쪽파, 김, 와사비를 곁들여 찍어 먹는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6872606',
        references: ['https://www.10000recipe.com/recipe/6872606', 'https://www.10000recipe.com/recipe/6873434', 'https://www.10000recipe.com/recipe/6933727']
    },

    '까르보나라': {
        category: '양식',
        keywords: ['까르보나라', '카르보나라'],
        baseIngredient: '파스타',
        description: '계란과 치즈로 만드는 부드럽고 고소한 크림 없는 파스타',
        calories: 680,
        difficulty: '보통',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '파스타면', amount: '100g', required: true },
            { name: '베이컨', amount: '2줄', required: true },
            { name: '양파', amount: '25g', required: true },
            { name: '마늘', amount: '1과 1/2쪽', required: true },
            { name: '우유', amount: '1/2컵', required: true },
            { name: '계란노른자', amount: '1개', required: true, noSubstituteHere: true },
            { name: '파마산 치즈', amount: '1과 1/2큰술', required: true },
            { name: '올리브유', amount: '1/2큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '파슬리가루', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '끓는 물에 소금을 넣고 파스타면을 봉지 시간보다 1분 짧게 삶는다.' },
            { step: 2, instruction: '팬에 올리브유를 두르고 약불에서 편마늘, 양파, 베이컨을 양파가 투명해질 때까지 볶는다.' },
            { step: 3, instruction: '우유를 붓고 중불에서 살짝 되직해질 때까지 끓인 뒤 불을 끈다.' },
            { step: 4, instruction: '삶은 면을 넣고 섞은 다음, 계란노른자와 파마산 치즈를 넣어 뭉치지 않게 재빨리 버무린다.' },
            { step: 5, instruction: '소금으로 간하고 파슬리가루를 뿌린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/3845351',
        references: ['https://www.10000recipe.com/recipe/3845351', 'https://www.10000recipe.com/recipe/6980370', 'https://www.10000recipe.com/recipe/6833402']
    },

    '감바스알아히요': {
        category: '양식',
        keywords: ['감바스', '감바스알아히요'],
        baseIngredient: '새우',
        description: '마늘과 올리브유 향이 가득한 스페인식 새우 요리',
        calories: 380,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '새우', amount: '150g', required: true },
            { name: '마늘', amount: '5쪽', required: true },
            { name: '올리브유', amount: '75ml', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '페페론치노', amount: '1과 1/2개', required: false },
            { name: '파슬리가루', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '새우는 물기를 꼼꼼히 닦고 소금, 후추로 밑간한다. 마늘은 편으로 썬다.' },
            { step: 2, instruction: '팬에 올리브유를 붓고 중불로 데운 뒤 마늘을 넣어 노릇해질 때까지 튀기듯 익힌다.' },
            { step: 3, instruction: '페페론치노를 부숴 넣고 향을 낸다.' },
            { step: 4, instruction: '새우를 넣고 기름에 잠기게 한 상태로, 중불에서 붉게 익을 때까지 3~4분 끓이듯 익힌다.' },
            { step: 5, instruction: '소금으로 간하고 파슬리가루를 뿌린다. 센불은 마늘이 타니 피한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6958327',
        references: ['https://www.10000recipe.com/recipe/6958327', 'https://www.10000recipe.com/recipe/6920327', 'https://www.10000recipe.com/recipe/6862420']
    },

    '바질페스토파스타': {
        category: '양식',
        keywords: ['바질페스토파스타', '바질파스타'],
        baseIngredient: '파스타',
        description: '바질 페스토를 비벼 간단하게 완성하는 파스타',
        calories: 550,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '파스타면', amount: '100g', required: true },
            { name: '바질페스토', amount: '2큰술', required: true },
            { name: '마늘', amount: '2와 1/2쪽', required: true },
            { name: '올리브유', amount: '1과 1/2큰술', required: true },
            { name: '페페론치노', amount: '1과 1/2개', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '끓는 물에 소금을 넣고 파스타면을 8분 삶은 뒤 면수 반 국자를 덜어 둔다.' },
            { step: 2, instruction: '팬에 올리브유를 두르고 약불에서 편마늘과 페페론치노를 볶아 향을 낸다.' },
            { step: 3, instruction: '삶은 면을 넣고 중불에서 1분 볶는다.' },
            { step: 4, instruction: '불을 약하게 줄이고 바질페스토와 면수를 넣어 고루 버무린다.' },
            { step: 5, instruction: '소금과 후추로 간을 맞춘다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6845979',
        references: ['https://www.10000recipe.com/recipe/6845979', 'https://www.10000recipe.com/recipe/6774475', 'https://www.10000recipe.com/recipe/7013158']
    },

    '함박스테이크': {
        category: '양식',
        keywords: ['함박스테이크'],
        baseIngredient: '다진고기',
        description: '육즙 가득한 일본식 다진 고기 스테이크',
        calories: 520,
        difficulty: '보통',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '다진 소고기', amount: '75g', required: true },
            { name: '다진 돼지고기', amount: '75g', required: true },
            { name: '양파', amount: '1/2개', required: true },
            { name: '빵가루', amount: '1/4컵', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['전분 반죽물(계란 대신)', '불린 빵가루 추가(계란 대신)'] },
            { name: '다진마늘', amount: '1/2작은술', required: true },
            { name: '케첩', amount: '1과 1/2큰술', required: true },
            { name: '돈가스소스', amount: '1과 1/2큰술', required: true },
            { name: '물', amount: '1/4컵', required: true },
            { name: '버터', amount: '1/2큰술', required: true },
            { name: '식용유', amount: '1/2큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '양파 절반은 다져 버터에 갈색이 나도록 볶아 식히고, 남은 절반은 채 썬다.' },
            { step: 2, instruction: '다진 고기에 볶은 양파, 빵가루, 계란, 다진마늘, 케첩 1/2큰술, 소금, 후추를 넣고 찰기가 생길 때까지 치댄다.' },
            { step: 3, instruction: '반죽을 동글납작하게 빚고 가운데를 살짝 눌러 오목하게 만든다.' },
            { step: 4, instruction: '팬에 식용유를 두르고 중불에서 앞뒤로 노릇하게 굽고, 물을 조금 넣어 뚜껑을 덮고 약불에서 속까지 익힌다.' },
            { step: 5, instruction: '다른 팬에 채 썬 양파를 볶다가 남은 물, 돈가스소스, 남은 케첩을 넣고 끓여 소스를 만들어 고기 위에 붓는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6845657',
        references: ['https://www.10000recipe.com/recipe/6845657', 'https://www.10000recipe.com/recipe/6888373', 'https://www.10000recipe.com/recipe/6874149']
    },

    '크림리조또': {
        category: '양식',
        keywords: ['크림리조또'],
        baseIngredient: '쌀',
        description: '베이컨과 우유로 진하고 부드럽게 끓인 리조또',
        calories: 620,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '밥', amount: '1공기', required: true },
            { name: '우유', amount: '1과 1/4컵', required: true },
            { name: '베이컨', amount: '1과 1/2줄', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true },
            { name: '식용유', amount: '1/2큰술', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '버섯', amount: '1/2줌', required: false },
            { name: '소금', amount: '약간', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '양파는 다지고 베이컨과 버섯은 작게 썬다.' },
            { step: 2, instruction: '팬에 식용유를 두르고 중불에서 다진마늘과 양파를 양파가 투명해질 때까지 볶는다.' },
            { step: 3, instruction: '베이컨과 버섯을 넣고 1~2분 더 볶는다.' },
            { step: 4, instruction: '우유를 붓고 끓어오르면 밥을 넣어, 약불에서 저어 가며 걸쭉해질 때까지 5분 정도 끓인다.' },
            { step: 5, instruction: '후추를 뿌리고 맛을 본 뒤 부족한 간은 소금으로 맞춘다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6896017',
        references: ['https://www.10000recipe.com/recipe/6896017', 'https://www.10000recipe.com/recipe/4283336', 'https://www.10000recipe.com/recipe/6841807']
    },

    '프렌치토스트': {
        category: '디저트',
        keywords: ['프렌치토스트'],
        baseIngredient: '식빵',
        description: '계란물에 적셔 구운 폭신한 아침 메뉴',
        calories: 350,
        difficulty: '쉬움',
        cookTime: '15분',
        servings: 1,
        ingredients: [
            { name: '식빵', amount: '2장', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '우유', amount: '100ml', required: true },
            { name: '설탕', amount: '1/2큰술', required: true },
            { name: '소금', amount: '한 꼬집', required: true },
            { name: '버터', amount: '1/2큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '계란에 우유, 설탕, 소금을 넣고 고루 섞어 계란물을 만든다.' },
            { step: 2, instruction: '식빵은 반으로 자른다.' },
            { step: 3, instruction: '식빵을 계란물에 앞뒤로 10~15초씩 담가 촉촉하게 적신다.' },
            { step: 4, instruction: '팬을 달군 뒤 버터를 녹이고 중약불에서 식빵을 앞뒤로 노릇하게 굽는다.' },
            { step: 5, instruction: '접시에 담아 따뜻할 때 낸다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6879201',
        references: ['https://www.10000recipe.com/recipe/6879201', 'https://www.10000recipe.com/recipe/6893407', 'https://www.10000recipe.com/recipe/6904190']
    },

    '바나나팬케이크': {
        category: '디저트',
        keywords: ['바나나팬케이크'],
        baseIngredient: '바나나',
        description: '으깬 바나나를 넣어 달콤하게 구운 팬케이크',
        calories: 380,
        difficulty: '쉬움',
        cookTime: '15분',
        servings: 1,
        ingredients: [
            { name: '바나나', amount: '1개', required: true },
            { name: '계란', amount: '2개', required: true, substituteOverride: ['아쿠아파바(베이킹용)', '요구르트(베이킹용)'] },
            { name: '식용유', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '바나나는 껍질을 벗겨 포크로 곱게 으깬다.' },
            { step: 2, instruction: '계란을 넣고 덩어리 없이 고루 섞는다. 믹서를 써도 된다.' },
            { step: 3, instruction: '팬을 약불로 달군 뒤 식용유를 아주 얇게 바르고 키친타월로 닦아 낸다.' },
            { step: 4, instruction: '반죽을 손바닥보다 작게 떠 올려 약불에서 아랫면이 충분히 익을 때까지 기다린다.' },
            { step: 5, instruction: '가장자리가 익으면 조심히 뒤집어 반대쪽도 익힌다. 바나나가 달아 시럽 없이도 먹을 수 있다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6833897',
        references: ['https://www.10000recipe.com/recipe/6833897', 'https://www.10000recipe.com/recipe/6851022', 'https://www.10000recipe.com/recipe/1260706']
    },

    '플레인스콘': {
        category: '디저트',
        keywords: ['스콘', '플레인스콘'],
        baseIngredient: '밀가루',
        description: '버터 향 가득한 폭신하고 담백한 기본 스콘',
        calories: 320,
        difficulty: '보통',
        cookTime: '60분',
        servings: 4,
        ingredients: [
            { name: '박력분', amount: '200g', required: true },
            { name: '차가운 버터', amount: '50g', required: true },
            { name: '우유', amount: '100ml', required: true },
            { name: '설탕', amount: '30g', required: true },
            { name: '소금', amount: '한 꼬집', required: true },
            { name: '베이킹파우더', amount: '1작은술', required: true },
            { name: '계란노른자', amount: '1개', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '박력분과 베이킹파우더를 체 쳐 볼에 담고 설탕, 소금을 섞는다.' },
            { step: 2, instruction: '차가운 버터를 넣고 스크래퍼로 잘라 가며 보슬보슬한 가루 상태로 만든다.' },
            { step: 3, instruction: '우유를 넣고 가루가 보이지 않을 정도로만 가볍게 뭉친 뒤, 랩에 싸서 냉장고에서 30분 휴지한다.' },
            { step: 4, instruction: '반죽을 2cm 두께로 밀어 8등분하고, 노른자에 우유를 조금 섞은 계란물을 윗면에 바른다.' },
            { step: 5, instruction: '190도로 예열한 오븐에서 20분 노릇하게 굽는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6871919',
        references: ['https://www.10000recipe.com/recipe/6871919', 'https://www.10000recipe.com/recipe/6889196', 'https://www.10000recipe.com/recipe/6862903']
    },

    '퐁당오쇼콜라': {
        category: '디저트',
        keywords: ['퐁당오쇼콜라', '퐁당쇼콜라'],
        baseIngredient: '초콜릿',
        description: '겉은 익고 속은 촉촉한 초콜릿 디저트',
        calories: 420,
        difficulty: '보통',
        cookTime: '25분',
        servings: 1,
        ingredients: [
            { name: '다크초콜릿', amount: '60g', required: true },
            { name: '버터', amount: '25g', required: true },
            { name: '설탕', amount: '25g', required: true },
            { name: '계란', amount: '1개', required: true, noSubstituteHere: true },
            { name: '박력분', amount: '10g', required: true },
            { name: '코코아가루', amount: '5g', required: true }
        ],
        steps: [
            { step: 1, instruction: '다크초콜릿과 버터를 중탕이나 전자레인지로 녹여 섞는다.' },
            { step: 2, instruction: '계란에 설탕을 넣고 고루 섞은 뒤, 녹인 초콜릿을 넣어 섞는다.' },
            { step: 3, instruction: '박력분과 코코아가루를 체 쳐 넣고 가루가 보이지 않을 때까지만 섞는다.' },
            { step: 4, instruction: '버터를 바른 오븐용 컵 1개에 반죽을 80%까지 채우고 바닥에 쳐서 표면을 고른다.' },
            { step: 5, instruction: '190도로 예열한 오븐에서 10~12분, 겉은 익고 가운데는 흔들릴 정도로 굽는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6885805',
        references: ['https://www.10000recipe.com/recipe/6885805', 'https://www.10000recipe.com/recipe/6841716', 'https://www.10000recipe.com/recipe/6847569']
    },

    '우유푸딩': {
        category: '디저트',
        keywords: ['우유푸딩'],
        baseIngredient: '우유',
        description: '부드럽고 시원하게 즐기는 우유 디저트',
        calories: 180,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '우유', amount: '200ml', required: true },
            { name: '설탕', amount: '15g', required: true },
            { name: '판젤라틴', amount: '1과 1/2장', required: true },
            { name: '계란노른자', amount: '1개', required: true },
            { name: '바닐라 에센스', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '판젤라틴은 찬물에 10분 불린 뒤 물기를 꼭 짠다.' },
            { step: 2, instruction: '계란노른자에 우유 50ml를 넣고 거품이 나지 않게 살살 섞는다.' },
            { step: 3, instruction: '냄비에 남은 우유와 설탕을 넣고 약불에서 가장자리가 끓기 직전까지 데운 뒤, 불을 끄고 젤라틴을 넣어 녹인다.' },
            { step: 4, instruction: '한 김 식힌 우유를 노른자 섞은 것에 조금씩 부어 섞고, 바닐라를 넣은 뒤 체에 걸러 컵에 담는다.' },
            { step: 5, instruction: '냉장고에서 3시간 이상 굳힌다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6842907',
        references: ['https://www.10000recipe.com/recipe/6842907', 'https://www.10000recipe.com/recipe/5322514', 'https://www.10000recipe.com/recipe/7022108']
    },

    '뇨끼': {
        category: '양식',
        keywords: ['뇨끼', 'gnocchi'],
        baseIngredient: '감자',
        description: '포슬포슬한 감자로 만든 이탈리아식 수제비',
        calories: 550,
        difficulty: '보통',
        cookTime: '80분',
        servings: 1,
        ingredients: [
            { name: '감자(분질, 큰 것)', amount: '1/2개', required: true },
            { name: '리코타 치즈', amount: '1큰술', required: true },
            { name: '밀가루', amount: '25g', required: true },
            { name: '계란', amount: '1큰술(푼 것)', required: true, substituteOverride: ['계란 없이 빚기'] },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '올리브유', amount: '1큰술', required: true },
            { name: '완두콩', amount: '40g', required: true },
            { name: '버터', amount: '10g', required: true },
            { name: '파마산 치즈', amount: '약간', required: true },
            { name: '타임', amount: '약간', required: false },
            { name: '레몬 제스트', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '감자는 껍질째 200도 오븐(또는 에어프라이어)에서 1시간 정도 속까지 익히고, 뜨거울 때 껍질을 벗겨 곱게 으깬다.' },
            { step: 2, instruction: '으깬 감자에 리코타, 밀가루, 계란, 소금, 후추, 타임을 넣고 많이 치대지 않고 한 덩어리로 뭉친다.' },
            { step: 3, instruction: '반죽을 굵은 막대 모양으로 밀어 2cm 크기로 자르고 가운데를 살짝 눌러 홈을 낸다.' },
            { step: 4, instruction: '끓는 소금물에 넣어 떠오르면 1~2분 뒤 건진다.' },
            { step: 5, instruction: '팬에 올리브유를 두르고 뇨끼를 노릇하게 지진 뒤, 완두콩, 버터, 레몬 제스트를 넣어 섞고 파마산을 뿌린다.' }
        ],
        source: 'https://www.gordonramsay.com/gr/recipes/home-made-gnocchi/amp',
        references: ['https://www.gordonramsay.com/gr/recipes/home-made-gnocchi/amp']
    },

    '모츠나베': {
        category: '일식',
        keywords: ['모츠나베', '곱창전골'],
        baseIngredient: '소곱창',
        description: '곱창과 채소를 넣고 끓인 일본식 전골',
        calories: 480,
        difficulty: '보통',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '소대창', amount: '175g', required: true },
            { name: '양배추', amount: '100g', required: true },
            { name: '알배추', amount: '1과 1/2장', required: true },
            { name: '숙주나물', amount: '50g', required: false },
            { name: '두부', amount: '50g', required: true },
            { name: '느타리버섯', amount: '25g', required: true },
            { name: '부추', amount: '25g', required: true },
            { name: '페페론치노', amount: '2개', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true },
            { name: '쯔유', amount: '3큰술', required: true },
            { name: '맛술', amount: '1큰술', required: true },
            { name: '간장', amount: '1/2큰술', required: false, noSubstituteHere: true },
            { name: '물', amount: '1과 1/2컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '대창은 먹기 좋게 잘라 끓는 물에 살짝 데친 뒤 찬물에 헹궈 기름기를 뺀다.' },
            { step: 2, instruction: '쯔유, 맛술, 간장, 다진마늘, 물을 섞어 육수를 만든다.' },
            { step: 3, instruction: '냄비 바닥에 양배추, 알배추, 숙주를 깔고 두부, 버섯, 대창을 올린 뒤 가운데에 부추를 얹는다.' },
            { step: 4, instruction: '페페론치노를 잘라 올리고 육수를 냄비 가장자리로 붓는다.' },
            { step: 5, instruction: '중불에서 20분 정도 끓이며 위에 뜨는 기름을 걷어낸다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6994795',
        references: ['https://www.10000recipe.com/recipe/6994795', 'https://www.10000recipe.com/recipe/6952350', 'https://www.10000recipe.com/recipe/7031142']
    },

    '어묵탕': {
        category: '일식',
        keywords: ['어묵탕', '오뎅탕'],
        baseIngredient: '어묵',
        description: '시원한 국물의 어묵 꼬치탕',
        calories: 250,
        difficulty: '쉬움',
        cookTime: '35분',
        servings: 1,
        ingredients: [
            { name: '사각어묵', amount: '2장', required: true, noSubstituteHere: true },
            { name: '무', amount: '75g', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '청양고추', amount: '1/2개', required: true },
            { name: '다시마', amount: '1/2장', required: true },
            { name: '물', amount: '2와 1/2컵', required: true },
            { name: '국간장', amount: '1큰술', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '냄비에 물, 나박 썬 무, 다시마를 넣고 센불에서 끓이다가, 끓으면 다시마를 건지고 중불에서 무가 익을 때까지 15분 끓인다.' },
            { step: 2, instruction: '어묵은 먹기 좋게 잘라 꼬치에 끼우거나 접고, 뜨거운 물을 부어 기름기를 뺀다.' },
            { step: 3, instruction: '국물에 국간장, 다진마늘, 후추를 넣고 어묵을 넣는다.' },
            { step: 4, instruction: '끓어오르면 중불에서 10분 정도 더 끓여 어묵 맛이 우러나게 한다.' },
            { step: 5, instruction: '대파와 청양고추를 넣고 소금으로 간을 맞춘다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6868264',
        references: ['https://www.10000recipe.com/recipe/6868264', 'https://www.10000recipe.com/recipe/6884918', 'https://www.10000recipe.com/recipe/6841468']
    },

    '알리올리오 파스타': {
        category: '양식',
        keywords: ['알리올리오', '알리오올리오'],
        baseIngredient: '파스타',
        description: '마늘과 올리브유로 만드는 담백한 오일 파스타',
        calories: 600,
        difficulty: '쉬움',
        cookTime: '15분',
        servings: 1,
        ingredients: [
            { name: '파스타면', amount: '100g', required: true },
            { name: '마늘', amount: '4쪽', required: true },
            { name: '올리브유', amount: '3큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '페페론치노', amount: '2개', required: false },
            { name: '후추', amount: '약간', required: false },
            { name: '파슬리가루', amount: '약간', required: false },
            { name: '파마산 치즈', amount: '약간', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '끓는 물에 소금을 넣고 파스타면을 7~8분 삶은 뒤 면수 1국자를 덜어 둔다.' },
            { step: 2, instruction: '마늘은 얇게 편 썰고 페페론치노는 부숴 둔다.' },
            { step: 3, instruction: '팬에 올리브유를 두르고 중약불에서 마늘과 페페론치노를 마늘이 노릇해질 때까지 볶는다.' },
            { step: 4, instruction: '삶은 면과 면수를 넣고 중불에서 1~2분 볶아 기름과 면수가 어우러지게 한다.' },
            { step: 5, instruction: '소금과 후추로 간하고 파슬리가루와 파마산 치즈를 뿌린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6909506',
        references: ['https://www.10000recipe.com/recipe/6909506', 'https://www.10000recipe.com/recipe/6837737', 'https://www.10000recipe.com/recipe/6865251'],
        teamSubmitted: true
    },

    '우삼겹숙주볶음': {
        category: '한식',
        keywords: ['우삼겹숙주볶음', '숙주볶음'],
        baseIngredient: '우삼겹',
        description: '고소한 우삼겹과 아삭한 숙주의 조합',
        calories: 520,
        difficulty: '쉬움',
        cookTime: '10분',
        servings: 1,
        ingredients: [
            { name: '우삼겹', amount: '125g', required: true },
            { name: '숙주나물', amount: '100g', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '간장', amount: '1/2큰술', required: true },
            { name: '굴소스', amount: '1/2큰술', required: true },
            { name: '설탕', amount: '3/4작은술', required: true },
            { name: '식용유', amount: '1/2큰술', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '숙주는 씻어 물기를 빼고 대파는 송송 썬다. 간장, 굴소스, 설탕을 섞어 소스를 만든다.' },
            { step: 2, instruction: '팬에 식용유를 두르고 중불에서 대파와 다진마늘을 볶아 향을 낸다.' },
            { step: 3, instruction: '우삼겹을 펴 넣고 센불에서 소금, 후추를 뿌려 핏기가 거의 없어질 때까지 볶는다.' },
            { step: 4, instruction: '숙주와 소스를 넣고 센불에서 1분 정도만 빠르게 볶는다.' },
            { step: 5, instruction: '불을 끄고 참기름을 둘러 잔열로 섞는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6895911',
        references: ['https://www.10000recipe.com/recipe/6895911', 'https://www.10000recipe.com/recipe/6933625', 'https://www.10000recipe.com/recipe/6980522']
    },

    '제육볶음': {
        category: '한식',
        keywords: ['제육볶음'],
        baseIngredient: '돼지고기',
        description: '매콤달콤한 양념의 대표 한식 볶음 요리',
        calories: 480,
        difficulty: '쉬움',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '돼지고기(앞다리살)', amount: '200g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '청양고추', amount: '1/2개', required: true },
            { name: '고추장', amount: '1큰술', required: true },
            { name: '고춧가루', amount: '3/4큰술', required: true },
            { name: '간장', amount: '1/2큰술', required: true },
            { name: '설탕', amount: '1/2큰술', required: true },
            { name: '물엿', amount: '1/2큰술', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '식용유', amount: '1/2큰술', required: true }
        ],
        steps: [
            { step: 1, instruction: '고기는 키친타월로 핏물을 닦고 한입 크기로 썬다. 양파는 채 썰고 대파와 청양고추는 어슷 썬다.' },
            { step: 2, instruction: '고추장, 고춧가루, 간장, 설탕, 물엿, 다진마늘, 후추를 섞어 양념장을 만든다.' },
            { step: 3, instruction: '고기에 양념장의 2/3를 넣고 버무려 20분 정도 재운다.' },
            { step: 4, instruction: '팬에 식용유를 두르고 센불에서 고기를 볶다가, 반쯤 익으면 양파를 넣고 중불로 줄여 익힌다.' },
            { step: 5, instruction: '남은 양념으로 간을 맞추고 대파와 청양고추를 넣어 센불에서 1분 더 볶는다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6845428',
        references: ['https://www.10000recipe.com/recipe/6845428', 'https://www.10000recipe.com/recipe/6905743', 'https://www.10000recipe.com/recipe/6841752']
    },

    '리조또': {
        category: '양식',
        keywords: ['리조또', 'risotto'],
        baseIngredient: '쌀',
        description: '크리미하고 고소한 이탈리아식 쌀 요리',
        calories: 520,
        difficulty: '보통',
        cookTime: '45분',
        servings: 1,
        ingredients: [
            { name: '리조또용 쌀', amount: '75g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '버터', amount: '1큰술', required: true },
            { name: '채소육수', amount: '400ml', required: true },
            { name: '파마산 치즈', amount: '2큰술', required: true },
            { name: '올리브유', amount: '1/2큰술', required: true },
            { name: '화이트와인', amount: '2큰술', required: false, noSubstituteHere: true },
            { name: '바질', amount: '약간', required: false },
            { name: '발사믹식초', amount: '1작은술', required: false }
        ],
        steps: [
            { step: 1, instruction: '육수는 따뜻하게 데워 두고, 양파는 곱게 다진다.' },
            { step: 2, instruction: '팬에 버터 절반을 녹이고 약불에서 양파를 색이 나지 않게 볶은 뒤, 쌀을 넣어 가장자리가 투명해질 때까지 2분 볶는다.' },
            { step: 3, instruction: '화이트와인(선택, 생략 가능)을 넣어 완전히 졸인다.' },
            { step: 4, instruction: '육수를 한 국자씩 넣고 흡수될 때마다 저어 가며, 20~25분 쌀알이 살짝 씹히게 익힌다.' },
            { step: 5, instruction: '불을 끄고 파마산, 남은 버터, 올리브유, 다진 바질을 넣어 섞고 뚜껑을 덮어 2분 둔다. 발사믹식초를 몇 방울 뿌려 낸다.' }
        ],
        source: 'https://bbcgoodfoodme.com/recipes/herb-parmesan-risotto',
        references: ['https://bbcgoodfoodme.com/recipes/herb-parmesan-risotto']
    },

    '아란치니': {
        category: '양식',
        keywords: ['아란치니', 'arancini'],
        baseIngredient: '쌀',
        description: '치즈가 들어간 바삭한 이탈리아식 쌀 튀김',
        calories: 350,
        difficulty: '보통',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '밥', amount: '1공기', required: true },
            { name: '양파', amount: '25g', required: true },
            { name: '당근', amount: '15g', required: true },
            { name: '햄', amount: '25g', required: true },
            { name: '슬라이스 체다치즈', amount: '1장', required: true },
            { name: '모짜렐라 치즈', amount: '30g', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '밀가루', amount: '1과 1/2큰술', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['전분물(계란물 대신)', '쌀가루물(글루텐 프리)', '아쿠아파바(무맛 결합제)'] },
            { name: '빵가루', amount: '1/4컵', required: true },
            { name: '식용유(튀김용)', amount: '적당량', required: true },
            { name: '토마토소스', amount: '약간', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '양파, 당근, 햄은 0.5cm 크기로 잘게 다진다.' },
            { step: 2, instruction: '팬에 식용유를 조금 두르고 다진 재료를 볶다가, 밥과 소금, 후추를 넣어 볶는다.' },
            { step: 3, instruction: '약불에서 체다치즈를 넣어 녹이며 섞고 한 김 식힌다.' },
            { step: 4, instruction: '밥을 동그랗게 떼어 가운데에 모짜렐라를 넣고 단단히 뭉친 뒤, 밀가루, 계란물, 빵가루 순으로 입힌다.' },
            { step: 5, instruction: '170도 기름에 굴려 가며 노릇하게 튀기고 토마토소스를 곁들인다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6877392',
        references: ['https://www.10000recipe.com/recipe/6877392', 'https://www.10000recipe.com/recipe/6833166', 'https://www.10000recipe.com/recipe/6879954']
    },

    '순두부 계란찜': {
        category: '한식',
        keywords: ['순두부계란찜', '순두부 계란찜'],
        baseIngredient: '순두부',
        description: '부드러운 순두부와 계란으로 만든 담백한 찜 요리',
        calories: 200,
        difficulty: '쉬움',
        cookTime: '25분',
        servings: 1,
        ingredients: [
            { name: '순두부', amount: '1/2봉', required: true, noSubstituteHere: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '다시마', amount: '1/2조각', required: true },
            { name: '물', amount: '50ml', required: true },
            { name: '맛술', amount: '1/2큰술', required: true },
            { name: '참치액', amount: '1/2작은술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '대파', amount: '약간', required: true },
            { name: '참기름', amount: '1/2작은술', required: true }
        ],
        steps: [
            { step: 1, instruction: '물 50ml에 다시마를 10분 담가 다시마물을 만든다.' },
            { step: 2, instruction: '계란을 풀고 다시마물, 맛술, 참치액, 소금을 넣어 섞은 뒤 체에 한 번 거른다.' },
            { step: 3, instruction: '순두부를 숟가락으로 떠서 그릇이나 뚝배기에 담고 계란물을 붓는다.' },
            { step: 4, instruction: '송송 썬 대파를 올리고 뚜껑을 덮어 약불에서 10분 정도 익힌다.' },
            { step: 5, instruction: '가운데까지 익으면 불을 끄고 참기름을 둘러 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6879566',
        references: ['https://www.10000recipe.com/recipe/6879566', 'https://www.10000recipe.com/recipe/6967585', 'https://www.10000recipe.com/recipe/6997263']
    },

    '팬케이크': {
        category: '한식',
        keywords: ['팬케이크', '핫케이크'],
        baseIngredient: '밀가루',
        description: '폭신하고 든든한 기본 팬케이크',
        calories: 300,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '밀가루', amount: '50g', required: true },
            { name: '베이킹파우더', amount: '1/2작은술', required: true },
            { name: '설탕', amount: '1/2큰술', required: true },
            { name: '계란', amount: '1개', required: true, substituteOverride: ['사과소스(계란 대신)', '바나나(베이킹용)', '아쿠아파바(베이킹용)'] },
            { name: '우유', amount: '60ml', required: true },
            { name: '식용유', amount: '약간', required: true },
            { name: '버터', amount: '약간', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '밀가루, 베이킹파우더, 설탕을 체에 쳐서 볼에 담는다.' },
            { step: 2, instruction: '계란과 우유를 넣고 덩어리 없이 섞어, 떨어뜨리면 자국이 살짝 남았다 사라지는 농도로 맞춘다.' },
            { step: 3, instruction: '팬에 식용유를 아주 얇게 바르고 중약불로 달군다.' },
            { step: 4, instruction: '반죽을 한 국자씩 붓고 표면에 기포가 올라오면 뒤집는다.' },
            { step: 5, instruction: '반대쪽도 노릇하게 익혀 접시에 담고 버터를 올린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6878513',
        references: ['https://www.10000recipe.com/recipe/6878513', 'https://www.10000recipe.com/recipe/1834871', 'https://www.10000recipe.com/recipe/6978811']
    },

    '꽁치 김치찌개': {
        category: '한식',
        keywords: ['꽁치김치찌개', '꽁치 김치찌개'],
        baseIngredient: '꽁치',
        description: '꽁치 통조림으로 구수하게 끓인 김치찌개',
        calories: 350,
        difficulty: '쉬움',
        cookTime: '25분',
        servings: 1,
        ingredients: [
            { name: '꽁치통조림', amount: '1/2캔', required: true, noSubstituteHere: true },
            { name: '신김치', amount: '150g', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '물', amount: '1/2캔(약 200ml)', required: true },
            { name: '된장', amount: '3/4작은술', required: true },
            { name: '고춧가루', amount: '1큰술', required: true },
            { name: '설탕', amount: '3/4작은술', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '청양고추', amount: '1/2개', required: false }
        ],
        steps: [
            { step: 1, instruction: '김치는 한입 크기로 썰고 대파와 청양고추는 송송 썬다.' },
            { step: 2, instruction: '냄비에 참기름을 두르고 중불에서 김치를 숨이 죽을 때까지 볶는다.' },
            { step: 3, instruction: '꽁치통조림을 국물째 넣고, 빈 캔에 물을 가득 채워 붓고 센불에서 끓인다.' },
            { step: 4, instruction: '끓어오르면 중불로 줄이고 된장, 고춧가루, 설탕, 다진마늘을 넣어 꽁치가 부서지지 않게 살살 섞는다.' },
            { step: 5, instruction: '10분 정도 끓여 양념이 배면 대파와 청양고추를 올려 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6904987',
        references: ['https://www.10000recipe.com/recipe/6904987', 'https://www.10000recipe.com/recipe/6878016', 'https://www.10000recipe.com/recipe/6840237']
    },

    '잡채': {
        category: '한식',
        keywords: ['잡채'],
        baseIngredient: '당면',
        description: '쫄깃한 당면과 채소, 고기를 볶아 무친 명절 대표 요리',
        calories: 400,
        difficulty: '보통',
        cookTime: '50분',
        servings: 1,
        ingredients: [
            { name: '당면', amount: '50g', required: true },
            { name: '돼지고기(잡채용)', amount: '40g', required: true },
            { name: '시금치', amount: '25g', required: true },
            { name: '당근', amount: '30g', required: true },
            { name: '양파', amount: '25g', required: true },
            { name: '파프리카', amount: '20g', required: true },
            { name: '목이버섯(말린 것)', amount: '3g', required: true },
            { name: '간장', amount: '1과 1/2큰술', required: true },
            { name: '설탕', amount: '1/2큰술', required: true },
            { name: '물엿', amount: '1/2큰술', required: true },
            { name: '다진마늘', amount: '1/4작은술', required: true },
            { name: '맛술', amount: '1/2작은술', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '식용유', amount: '1큰술', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '통깨', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '당면은 찬물에 30분 불리고 목이버섯도 물에 불린다. 채소는 모두 채 썬다.' },
            { step: 2, instruction: '돼지고기는 간장 1/2작은술, 다진마늘, 맛술, 후추로 밑간한다.' },
            { step: 3, instruction: '팬에 식용유를 두르고 양파, 당근, 파프리카, 목이버섯, 고기 순으로 각각 볶아 덜어 둔다. 시금치는 끓는 물에 30초 데쳐 물기를 짠다.' },
            { step: 4, instruction: '팬에 남은 간장과 설탕, 물엿을 넣고 끓으면 불린 당면을 넣어, 센불에서 국물이 거의 없어질 때까지 볶는다.' },
            { step: 5, instruction: '한 김 식힌 당면에 볶은 재료와 시금치, 참기름, 통깨를 넣고 버무린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6879533',
        references: ['https://www.10000recipe.com/recipe/6879533', 'https://www.10000recipe.com/recipe/6905889', 'https://www.10000recipe.com/recipe/6953648']
    },

    '김치볶음밥': {
        category: '한식',
        keywords: ['김치볶음밥'],
        baseIngredient: '밥',
        description: '새콤한 김치와 밥을 볶아 만드는 간단 한 끼',
        calories: 550,
        difficulty: '쉬움',
        cookTime: '15분',
        servings: 1,
        ingredients: [
            { name: '밥', amount: '1공기', required: true },
            { name: '신김치', amount: '1/2컵', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '식용유', amount: '1큰술', required: true },
            { name: '설탕', amount: '3/4작은술', required: true },
            { name: '고춧가루', amount: '1/2큰술', required: true },
            { name: '간장', amount: '1/2큰술', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '계란', amount: '1개', required: false, noSubstituteHere: true }
        ],
        steps: [
            { step: 1, instruction: '김치는 잘게 썰고 대파는 송송 썬다.' },
            { step: 2, instruction: '팬에 식용유를 두르고 센불에서 대파를 볶아 파기름을 낸다.' },
            { step: 3, instruction: '김치와 설탕을 넣고 중불에서 김치가 부드러워질 때까지 3분 정도 볶는다.' },
            { step: 4, instruction: '고춧가루를 넣고, 간장은 팬 가장자리에 부어 살짝 끓인 뒤 함께 섞는다.' },
            { step: 5, instruction: '밥을 넣고 중약불에서 고루 볶은 뒤 참기름을 둘러 담고, 계란프라이를 올린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6923068',
        references: ['https://www.10000recipe.com/recipe/6923068', 'https://www.10000recipe.com/recipe/6876755', 'https://www.10000recipe.com/recipe/6852249'],
        teamSubmitted: true
    },

    '간장계란밥': {
        category: '한식',
        keywords: ['간장계란밥'],
        baseIngredient: '밥',
        description: '간단하지만 든든한 간장과 계란의 조합',
        calories: 450,
        difficulty: '쉬움',
        cookTime: '10분',
        servings: 1,
        ingredients: [
            { name: '밥', amount: '1공기', required: true },
            { name: '계란', amount: '2개', required: true, noSubstituteHere: true },
            { name: '간장', amount: '1큰술', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '식용유', amount: '1큰술', required: true },
            { name: '통깨', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '팬에 식용유를 두르고 중불에서 계란을 풀어 넣는다.' },
            { step: 2, instruction: '주걱으로 저어 부드러운 스크램블로 반쯤 익힌다.' },
            { step: 3, instruction: '밥을 넣고 계란과 섞으며 1분 정도 볶는다.' },
            { step: 4, instruction: '간장을 넣고 고루 섞어 밥에 색이 배도록 볶는다.' },
            { step: 5, instruction: '불을 끄고 참기름과 통깨를 넣어 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6893429',
        references: ['https://www.10000recipe.com/recipe/6893429', 'https://www.10000recipe.com/recipe/6884289', 'https://www.10000recipe.com/recipe/6856565'],
        teamSubmitted: true
    },

    '올리브 파스타': {
        category: '양식',
        keywords: ['올리브파스타', '올리브 파스타'],
        baseIngredient: '파스타',
        description: '블랙올리브와 마늘로 짭짤하게 즐기는 오일 파스타',
        calories: 550,
        difficulty: '보통',
        cookTime: '30분',
        servings: 1,
        ingredients: [
            { name: '파스타면', amount: '100g', required: true },
            { name: '블랙올리브', amount: '3큰술', required: true },
            { name: '올리브유', amount: '1.5큰술', required: true },
            { name: '다진마늘', amount: '1작은술', required: true },
            { name: '토마토 페이스트', amount: '1/2작은술', required: true },
            { name: '페페론치노', amount: '2개', required: true },
            { name: '파마산 치즈', amount: '2큰술', required: true },
            { name: '파슬리', amount: '약간', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '선드라이토마토', amount: '1큰술', required: false, noSubstituteHere: true },
            { name: '식빵(빵가루용)', amount: '1/2장', required: false, noSubstituteHere: true },
            { name: '바질', amount: '5장', required: false },
            { name: '레몬', amount: '1/4개', required: false }
        ],
        steps: [
            { step: 1, instruction: '올리브는 굵게 다지고, 올리브유 1큰술에 다진마늘, 토마토 페이스트, 부순 페페론치노, 선드라이토마토, 올리브를 섞어 둔다.' },
            { step: 2, instruction: '식빵은 잘게 부숴 남은 올리브유에 노릇하게 볶아 빵가루를 만든다.' },
            { step: 3, instruction: '끓는 소금물에 파스타면을 봉지 시간보다 1분 짧게 삶고 면수 1/2컵을 덜어 둔다.' },
            { step: 4, instruction: '빈 팬에 올리브 양념을 넣고 중불에서 붉은 기름이 돌 때까지 볶은 뒤, 면수와 면을 넣어 버무린다.' },
            { step: 5, instruction: '파마산, 파슬리, 바질을 넣어 섞고 그릇에 담아 빵가루를 뿌리고 레몬을 곁들인다.' }
        ],
        source: 'https://www.americastestkitchen.com/recipes/4323-pasta-with-olives-garlic-and-herbs',
        references: ['https://www.americastestkitchen.com/recipes/4323-pasta-with-olives-garlic-and-herbs']
    },

    '로제 파스타': {
        category: '양식',
        keywords: ['로제파스타', '로제 파스타'],
        baseIngredient: '파스타',
        description: '토마토와 크림이 어우러진 부드러운 로제 소스 파스타',
        calories: 650,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '파스타면', amount: '100g', required: true },
            { name: '베이컨', amount: '1과 1/2줄', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true },
            { name: '토마토소스', amount: '1/2컵', required: true },
            { name: '생크림', amount: '1/2컵', required: true },
            { name: '우유', amount: '1/4컵', required: true },
            { name: '모짜렐라 치즈', amount: '25g', required: true },
            { name: '올리브유', amount: '1/2큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '새우', amount: '4마리', required: false, noSubstituteHere: true },
            { name: '후추', amount: '약간', required: false },
            { name: '파슬리가루', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '끓는 물에 소금을 넣고 파스타면을 7분 삶는다.' },
            { step: 2, instruction: '팬에 올리브유를 두르고 약불에서 다진마늘을 볶다가 양파를 넣어 투명해질 때까지 볶는다.' },
            { step: 3, instruction: '베이컨과 새우를 넣고 중불에서 익을 때까지 볶는다.' },
            { step: 4, instruction: '토마토소스, 생크림, 우유를 넣고 끓어오르면 삶은 면과 치즈를 넣어 섞는다.' },
            { step: 5, instruction: '소스가 면에 배도록 1~2분 졸인 뒤 소금, 후추로 간하고 파슬리가루를 뿌린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6884145',
        references: ['https://www.10000recipe.com/recipe/6884145', 'https://www.10000recipe.com/recipe/6830586', 'https://www.10000recipe.com/recipe/6896799']
    },

    '우동': {
        category: '일식',
        keywords: ['우동'],
        baseIngredient: '국수',
        description: '따뜻하고 쫄깃한 기본 우동',
        calories: 400,
        difficulty: '쉬움',
        cookTime: '10분',
        servings: 1,
        ingredients: [
            { name: '우동면', amount: '1개', required: true },
            { name: '물', amount: '1L', required: true },
            { name: '쯔유', amount: '1과 1/2큰술', required: true },
            { name: '간장', amount: '1/2큰술', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '김가루', amount: '약간', required: false },
            { name: '쑥갓', amount: '약간', required: false },
            { name: '고춧가루', amount: '약간', required: false }
        ],
        steps: [
            { step: 1, instruction: '대파는 송송 썬다.' },
            { step: 2, instruction: '냄비에 물을 붓고 센불에서 팔팔 끓인다.' },
            { step: 3, instruction: '쯔유와 간장을 넣고 간을 본다. 싱거우면 쯔유를 조금 더 넣는다.' },
            { step: 4, instruction: '우동면을 넣고 젓가락으로 풀어 가며 중불에서 3~4분 끓인다.' },
            { step: 5, instruction: '그릇에 담고 대파, 김가루, 쑥갓, 고춧가루를 올린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6992701',
        references: ['https://www.10000recipe.com/recipe/6992701', 'https://www.10000recipe.com/recipe/6880682', 'https://www.10000recipe.com/recipe/6903123']
    },

    '크림 파스타': {
        category: '양식',
        keywords: ['크림파스타', '크림 파스타'],
        baseIngredient: '파스타',
        description: '부드럽고 풍미 있는 크림 파스타',
        calories: 650,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '파스타면', amount: '100g', required: true },
            { name: '베이컨', amount: '2줄', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '양송이버섯', amount: '1과 1/2개', required: true },
            { name: '다진마늘', amount: '1/2큰술', required: true },
            { name: '우유', amount: '1컵', required: true },
            { name: '슬라이스 치즈', amount: '1장', required: true },
            { name: '올리브유', amount: '1/2큰술', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '끓는 물에 소금을 넣고 파스타면을 봉지 시간보다 2분 짧게 삶아, 헹구지 않고 물기만 뺀다.' },
            { step: 2, instruction: '팬에 올리브유를 두르고 중불에서 다진마늘을 볶다가 양파와 양송이를 넣어 볶는다.' },
            { step: 3, instruction: '베이컨을 넣고 노릇하게 볶는다.' },
            { step: 4, instruction: '우유를 붓고 끓어오르면 슬라이스 치즈를 넣어 녹이고 소금으로 간한다.' },
            { step: 5, instruction: '삶은 면을 넣고 약불에서 소스가 면에 배도록 2분 졸인 뒤 후추를 뿌린다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6901938',
        references: ['https://www.10000recipe.com/recipe/6901938', 'https://www.10000recipe.com/recipe/6871779', 'https://www.10000recipe.com/recipe/6841484']
    },

    '김치찌개': {
        category: '한식',
        keywords: ['김치찌개', '김치 찌개'],
        baseIngredient: '찌개',
        description: '밥도둑 국민 찌개',
        calories: 300,
        difficulty: '쉬움',
        cookTime: '35분',
        servings: 1,
        ingredients: [
            { name: '신김치', amount: '150g', required: true },
            { name: '돼지고기(목살)', amount: '100g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '대파', amount: '1/4대', required: true },
            { name: '청양고추', amount: '1/2개', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '고춧가루', amount: '1/2큰술', required: true },
            { name: '국간장', amount: '1/2큰술', required: true },
            { name: '김치국물', amount: '1과 1/2큰술', required: true },
            { name: '참기름', amount: '3/4작은술', required: true },
            { name: '후추', amount: '약간', required: true },
            { name: '물', amount: '1과 1/4컵', required: true }
        ],
        steps: [
            { step: 1, instruction: '돼지고기는 한입 크기로 썰어 국간장 1작은술, 다진마늘, 후추로 밑간한다. 김치는 큼직하게 썬다.' },
            { step: 2, instruction: '냄비에 참기름을 두르고 중불에서 고기를 볶다가, 김치와 김치국물을 넣고 김치 숨이 죽을 때까지 5분 정도 볶는다.' },
            { step: 3, instruction: '물을 붓고 센불에서 끓이다가 끓어오르면 중불로 줄여 15분 끓인다.' },
            { step: 4, instruction: '고춧가루와 남은 국간장으로 간을 맞추고 양파를 넣어 5분 더 끓인다.' },
            { step: 5, instruction: '대파와 청양고추를 넣고 한소끔 끓여 마무리한다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/4295567',
        references: ['https://www.10000recipe.com/recipe/4295567', 'https://www.10000recipe.com/recipe/1785098', 'https://www.10000recipe.com/recipe/6835685']
    },

    '된장찌개': {
        category: '한식',
        keywords: ['된장찌개', '된장 찌개'],
        baseIngredient: '찌개',
        description: '깊고 구수한 전통 찌개',
        calories: 250,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '된장', amount: '1큰술', required: true, noSubstituteHere: true },
            { name: '물', amount: '1컵', required: true },
            { name: '두부', amount: '1/4모', required: true },
            { name: '애호박', amount: '40g', required: true },
            { name: '양파', amount: '1/4개', required: true },
            { name: '느타리버섯', amount: '25g', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '고춧가루', amount: '3/4작은술', required: true },
            { name: '청양고추', amount: '1/2개', required: true },
            { name: '대파', amount: '1/4대', required: false }
        ],
        steps: [
            { step: 1, instruction: '애호박과 양파는 한입 크기로, 두부는 깍둑 썰고, 버섯은 먹기 좋게 찢고, 대파와 청양고추는 어슷 썬다.' },
            { step: 2, instruction: '냄비에 물을 붓고 된장과 다진마늘을 풀어 끓인다.' },
            { step: 3, instruction: '끓어오르면 양파, 애호박, 버섯을 넣고 애호박이 투명해질 때까지 5분 정도 끓인다.' },
            { step: 4, instruction: '두부와 고춧가루, 청양고추를 넣고 2~3분 더 끓인다.' },
            { step: 5, instruction: '대파를 올리고 맛을 본 뒤, 부족한 간은 된장으로 맞춘다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6859263',
        references: ['https://www.10000recipe.com/recipe/6859263', 'https://www.10000recipe.com/recipe/6863103', 'https://www.10000recipe.com/recipe/6867859']
    },

    '계란국': {
        category: '한식',
        keywords: ['계란국', '계란 국'],
        baseIngredient: '국',
        description: '담백하고 부드러운 아침 국',
        calories: 120,
        difficulty: '쉬움',
        cookTime: '20분',
        servings: 1,
        ingredients: [
            { name: '계란', amount: '1개', required: true, noSubstituteHere: true },
            { name: '다시마', amount: '1/2장', required: true },
            { name: '물', amount: '1과 1/2컵', required: true },
            { name: '국간장', amount: '3/4작은술', required: true },
            { name: '양파', amount: '25g', required: false },
            { name: '대파', amount: '1/4대', required: true },
            { name: '소금', amount: '약간', required: true },
            { name: '후추', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '냄비에 물과 다시마를 넣고 센불에서 끓이다가, 끓으면 중약불로 줄여 10분 우린 뒤 다시마를 건져내고 국간장을 넣는다.' },
            { step: 2, instruction: '계란에 소금 한 꼬집을 넣고 풀어 둔다. 양파는 채 썰고 대파는 송송 썬다.' },
            { step: 3, instruction: '국물에 양파를 넣고 투명해질 때까지 2분 정도 끓인다.' },
            { step: 4, instruction: '계란물을 원을 그리듯 천천히 붓고, 30초 정도 그대로 두었다가 한 번 젓는다.' },
            { step: 5, instruction: '불을 끄고 대파와 후추를 넣은 뒤 소금으로 간을 맞춘다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6866483',
        references: ['https://www.10000recipe.com/recipe/6866483', 'https://www.10000recipe.com/recipe/6876572', 'https://www.10000recipe.com/recipe/4574454']
    },

    '미역국': {
        category: '한식',
        keywords: ['미역국', '미역 국'],
        baseIngredient: '국',
        description: '풍미 깊은 소고기 미역국',
        calories: 150,
        difficulty: '쉬움',
        cookTime: '40분',
        servings: 1,
        ingredients: [
            { name: '건미역', amount: '5g', required: true },
            { name: '소고기(국거리)', amount: '50g', required: true },
            { name: '참기름', amount: '1/2큰술', required: true },
            { name: '다진마늘', amount: '3/4작은술', required: true },
            { name: '국간장', amount: '1/2큰술', required: true },
            { name: '물', amount: '2컵', required: true },
            { name: '소금', amount: '약간', required: true }
        ],
        steps: [
            { step: 1, instruction: '건미역은 찬물에 20~30분 불린 뒤 헹궈 물기를 꼭 짜고 먹기 좋게 썬다.' },
            { step: 2, instruction: '냄비에 참기름을 두르고 소고기를 겉면이 익을 때까지 볶는다.' },
            { step: 3, instruction: '미역을 넣고 물기가 거의 없어질 때까지 중불에서 충분히 볶는다.' },
            { step: 4, instruction: '물 1컵과 다진마늘을 넣고 센불에서 끓이다가, 국물이 줄면 나머지 물을 붓는다.' },
            { step: 5, instruction: '국간장으로 간하고 중약불에서 20분 이상 끓인 뒤, 부족한 간은 소금으로 맞춘다.' }
        ],
        source: 'https://www.10000recipe.com/recipe/6867565',
        references: ['https://www.10000recipe.com/recipe/6867565', 'https://www.10000recipe.com/recipe/6892241', 'https://www.10000recipe.com/recipe/6895084']
    }
};
