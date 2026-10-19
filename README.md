# 먹고죽자! (mukgojugja)

식이제약(알레르기·기저질환)이 있는 사람을 위한 레시피/대체식품 안내 사이트.

## 파일 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 화면과 동작(검색, 필터, 장보기, 로그인 등) |
| `recipes-data.js` | 레시피 80개 데이터 (`const recipes`) |
| `diet-data.js` | 알레르기/기저질환 매핑, 대체품 설명 (`allergyMapping`, `diseaseMapping`, `substituteInfo`), 입력 별칭(`HEALTH_ALIASES`), "제품에 따라 들어 있을 수 있는 재료"(`MAYBE_CONTAIN`) |
| `substitute-logic.js` | 대체품 결정 로직 (`resolveSubstitutes`, `isIngredientMatch`, `getSubstituteInfo`), 입력 해석 (`resolveAllergyKey`, `getUnrecognizedHealthItems`), 성분표 확인 안내 (`findMaybeContain`). 검토 도구(review.html)도 같은 함수를 씀 |

## 수정할 때

- 레시피 추가/수정은 `recipes-data.js`, 대체품 설명은 `diet-data.js`의 `substituteInfo`.
- **데이터/로직 파일을 고친 뒤에는 `index.html`의 `?v=` 값을 바꿔 주세요.** (예: `?v=20260921`) 그래야 브라우저 캐시가 갱신돼요.
- 파일은 `<script src>` 방식이라 `index.html`을 더블클릭으로 열어도 돼요(일부 기능은 인터넷 필요).

## 재료 옵션 (recipes-data.js)

- `substituteOverride: ['전분물(계란물 대신)', ...]` : 이 재료 전용 대체품. 칩 이름은 `substituteInfo`의 키와 같아야 팁이 나와요 (괄호 안은 무시하고도 찾음).
- `noSubstituteHere: true` : 필수 재료면 "대체 불가", 선택 재료면 "그냥 빼도 됨" 안내.
- `noSubstituteHere: '문구'` : "대체 불가/권장 안 함" 안내를 직접 쓴 문구로 표시.

## 변경 이력

- 2026-09-20: 데이터/로직 분리. 계란 대체 검토 반영(계란 포함 32개 레시피 중 21개 조정, 애호박전 포함 22개). 게맛살(크래미)·레이디핑거를 계란 함유 재료로 인식.
- 2026-10-19: 알레르기 입력 별칭 처리(밀·달걀·'○○ 알레르기' 등)와 미지원 항목 안내, 식약처 표시 대상 19종 중 빠져 있던 5개(토마토·닭고기·쇠고기·오징어·아황산류) 추가, 제품에 따라 달라지는 재료를 노랑 "성분표 확인"으로 표시, 대체품 설명 25개 추가, 재료 줄 레이아웃 수정.
- 2026-10-19: 대체식품 찾기 개편. 재료를 한 줄씩 분석(내 알레르기·질환 기준 위험/성분표 확인/안전), 입력 재료가 들어간·들어가지 않은 레시피 목록(위험 레시피는 "주의 필요" 표시), 피해야할 음식은 접이식(더보기) 칩 목록 하나로 통합.
