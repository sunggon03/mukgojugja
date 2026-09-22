<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>먹고죽자! 레시피 검토 도구</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%94%8D%3C/text%3E%3C/svg%3E">
<style>
    :root { --green:#5A8B4A; --green-d:#3B6D11; --cream:#FAF8F5; --line:#E8E3DD; --ink:#2B3E2F; --red:#DC3545; --amber:#B7791F; --gray:#8a8a8a; }
    * { box-sizing: border-box; }
    body { margin:0; background:var(--cream); color:var(--ink); font:14px/1.5 -apple-system,'Malgun Gothic','Apple SD Gothic Neo',sans-serif; }
    header { background:#fff; border-bottom:1px solid var(--line); padding:10px 16px; position:sticky; top:0; z-index:10; }
    header h1 { margin:0 0 6px; font-size:17px; }
    .bar { display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
    .tabs button { border:1px solid var(--line); background:#fff; padding:6px 12px; border-radius:8px; cursor:pointer; font:inherit; }
    .tabs button.on { background:var(--green); color:#fff; border-color:var(--green); }
    input, select, textarea, button { font:inherit; }
    input[type=text], input[type=search], select, textarea { border:1px solid #ccc; border-radius:6px; padding:5px 8px; background:#fff; }
    textarea { width:100%; min-height:70px; }
    main { padding:14px 16px 60px; max-width:1200px; margin:0 auto; }
    .hidden { display:none !important; }
    .card { background:#fff; border:1px solid var(--line); border-radius:10px; padding:12px 14px; margin-bottom:12px; }
    .card h2, .card h3 { margin:0 0 8px; font-size:15px; }
    .muted { color:var(--gray); font-size:12px; }
    .pill { display:inline-block; padding:1px 8px; border-radius:20px; font-size:11px; font-weight:600; white-space:nowrap; }
    .p-approved { background:#E8F5E9; color:#2E7D32; } .p-revise { background:#FFEBEE; color:var(--red); }
    .p-hold { background:#FFF4DC; color:var(--amber); } .p-none { background:#eee; color:#666; }
    .p-stale { background:#EDE7F6; color:#5E35B1; }
    .sev-error { color:var(--red); } .sev-warn { color:var(--amber); } .sev-info { color:var(--gray); }
    .chip { display:inline-block; padding:2px 8px; margin:2px 3px 2px 0; border-radius:14px; border:1px solid #ccc; font-size:12px; background:#fff; cursor:pointer; user-select:none; }
    .chip.on { outline:2px solid var(--green); }
    .st-none { background:#f3f3f3; color:#999; } .st-sub { background:#EAF3DE; border-color:var(--green); color:var(--green-d); }
    .st-omit { background:#FFF4DC; border-color:#e0b04a; color:var(--amber); } .st-block { background:#FFEBEE; border-color:#e58; color:var(--red); }
    .layout { display:grid; grid-template-columns:300px 1fr; gap:14px; align-items:start; }
    #list { max-height:calc(100vh - 210px); overflow:auto; }
    .item { padding:8px 10px; border-bottom:1px solid var(--line); cursor:pointer; display:flex; justify-content:space-between; gap:6px; align-items:center; }
    .item:hover { background:#f4f8f1; } .item.on { background:#EAF3DE; }
    .issue { padding:6px 0; border-bottom:1px dashed var(--line); }
    .issue:last-child { border-bottom:none; }
    .ing { padding:8px 0; border-bottom:1px solid var(--line); }
    .ing.warn { background:#FFF5F5; margin:0 -14px; padding:8px 14px; }
    .alt { background:#EAF3DE; border-left:3px solid var(--green); border-radius:4px; padding:8px 10px; margin-top:6px; font-size:12px; }
    .alt .reason { color:var(--red); margin-bottom:4px; }
    .banner { background:#FFEBEE; border-left:4px solid var(--red); border-radius:6px; padding:10px 12px; margin-bottom:10px; color:#c5192d; font-weight:600; }
    .warnbox { background:#FFF4DC; border-left:4px solid #e0b04a; padding:8px 12px; border-radius:6px; margin-bottom:10px; font-size:13px; }
    .grp { padding:8px 0; border-bottom:1px solid var(--line); }
    .rec-link { color:var(--green-d); cursor:pointer; text-decoration:underline; margin-right:8px; white-space:nowrap; font-size:12px; }
    .btn { border:1px solid var(--green); background:var(--green); color:#fff; padding:6px 12px; border-radius:8px; cursor:pointer; }
    .btn.sub { background:#fff; color:var(--green-d); }
    .btn:disabled { opacity:.5; cursor:default; }
    label.rd { margin-right:10px; white-space:nowrap; }
    details summary { cursor:pointer; color:var(--green-d); }
    .fatal { background:#FFEBEE; color:var(--red); padding:14px; border-radius:8px; }
    @media (max-width:860px){ .layout { grid-template-columns:1fr; } #list { max-height:34vh; } }
</style>
</head>
<body>
<header>
    <h1>🔍 먹고죽자! 레시피 검토 도구 <span class="muted">(팀 내부용 · 기록은 이 브라우저에만 저장돼요)</span></h1>
    <div class="bar">
        <span class="tabs">
            <button data-tab="summary" class="on">① 전체 요약</button>
            <button data-tab="review">② 레시피 검토</button>
            <button data-tab="records">③ 기록 · 내보내기</button>
        </span>
        <span style="margin-left:auto">검토자 <input type="text" id="reviewerName" placeholder="이름" size="8"></span>
    </div>
</header>
<main>
    <div id="fatal" class="fatal hidden"></div>
    <div id="storageWarn" class="warnbox hidden"></div>

    <section id="tab-summary"></section>

    <section id="tab-review" class="hidden">
        <div class="layout">
            <aside class="card" style="padding:0">
                <div style="padding:10px; border-bottom:1px solid var(--line)">
                    <input type="search" id="q" placeholder="레시피 검색" style="width:100%; margin-bottom:6px">
                    <div class="bar">
                        <select id="fStatus">
                            <option value="all">상태: 전체</option><option value="none">미검토</option>
                            <option value="approved">승인</option><option value="revise">수정 필요</option>
                            <option value="hold">보류</option><option value="stale">재검토 필요(레시피 바뀜)</option>
                        </select>
                        <select id="fSev">
                            <option value="all">점검: 전체</option><option value="error">🔴 안전 문제 있음</option>
                            <option value="warn">🟡 확인 필요 있음</option><option value="clean">문제 없음</option>
                        </select>
                        <select id="fCat"><option value="all">분류: 전체</option></select>
                    </div>
                    <div class="muted" id="listCount" style="margin-top:6px"></div>
                </div>
                <div id="list"></div>
            </aside>
            <article id="detail"></article>
        </div>
    </section>

    <section id="tab-records" class="hidden"></section>
</main>

<script>
/* ============================================================
   데이터·로직 파일 불러오기 (?r=지금시각 → 항상 최신 파일. index.html의 ?v= 올리기와 별개예요)
   ============================================================ */
const REVIEW_FILES = ['diet-data.js', 'recipes-data.js', 'substitute-logic.js', 'review-checks.js'];
function showFatal(msg) { const el = document.getElementById('fatal'); el.textContent = msg; el.classList.remove('hidden'); }

/* ============================================================
   공통 도우미
   ============================================================ */
const $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const STATUS_LABEL = { approved: '승인', revise: '수정 필요', hold: '보류' };
const TASTE_LABEL = { good: '맛있음', ok: '보통', bad: '별로' };
const SEV_LABEL = { error: '🔴 안전', warn: '🟡 확인', info: '⚪ 참고' };
const RULE_LABEL = {
    'hidden-allergen': '숨은 알레르겐(경고가 안 뜸)', 'sub-conflict': '대체품이 다른 제약과 충돌', 'optional-no-omit': '선택 재료인데 "빼도 됨" 없음',
    'sub-in-recipe': '대체품이 이미 레시피에 있음', 'step-mention': '조리 단계에만 나오는 알레르겐', 'no-source': '출처 미확인', 'bad-source': '출처 형식 이상',
    'no-tip': '대체품 설명 없음', 'dead-flag': '쓸모없는 옵션', 'dup-ingredient': '재료 중복', 'steps-empty': '조리 단계 없음', 'required-missing': '필수/선택 값 없음',
    'alias-mismatch': '같은 알레르기인데 별칭마다 내용이 다름', 'no-tip-data': '대체품 설명 누락', 'no-alt-combo': '제약 조합에서 대체품이 안 남음'
};
const RULE_ORDER = ['alias-mismatch', 'hidden-allergen', 'no-alt-combo', 'sub-conflict', 'optional-no-omit', 'sub-in-recipe', 'step-mention', 'no-source', 'bad-source', 'dup-ingredient', 'steps-empty', 'required-missing', 'no-tip', 'no-tip-data', 'dead-flag'];

let ctx, results, selected = null;
let previewIds = new Set();
const filters = { status: 'all', sev: 'all', cat: 'all', q: '' };
let sevShow = { error: true, warn: true, info: false };

/* ============================================================
   기록 저장소 (localStorage). 기록은 "덧붙이기만" 해서 JSON 병합 때 충돌이 안 나요.
   entry = { id, recipe, status, taste, note, reviewer, at, hash }
   ============================================================ */
const KEY = 'mukgo_review_v1', KEY_EXPORT = 'mukgo_review_exported_at', KEY_NAME = 'mukgo_review_name';
let entries = [], storageOK = true;
function lsGet(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { storageOK = false; return d; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { storageOK = false; } }
function loadEntries() { try { const arr = JSON.parse(lsGet(KEY, '[]')); return Array.isArray(arr) ? arr : []; } catch (e) { return []; } }
function saveEntries() { lsSet(KEY, JSON.stringify(entries)); }
function entriesOf(name) { return entries.filter(e => e.recipe === name).sort((a, b) => (a.at < b.at ? -1 : a.at > b.at ? 1 : 0)); }
function stateOf(name) {
    const list = entriesOf(name);
    const lastStatus = [...list].reverse().find(e => e.status);
    const lastTaste = [...list].reverse().find(e => e.taste);
    const hash = reviewHash(recipes[name]);
    return { status: lastStatus ? lastStatus.status : null, taste: lastTaste || null, stale: !!lastStatus && lastStatus.hash !== hash, count: list.length, statusEntry: lastStatus || null };
}
function newId() { return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8); }
function unexportedCount() { const t = lsGet(KEY_EXPORT, ''); return entries.filter(e => !t || e.at > t).length; }
/* ============================================================
   시작
   ============================================================ */
function boot() {
    if (typeof recipes === 'undefined' || typeof reviewRunAll !== 'function') { if (!$('fatal').textContent) showFatal('데이터를 불러오지 못했어요.'); return; }
    ctx = reviewMakeContext();
    results = reviewRunAll(ctx);
    entries = loadEntries();
    $('reviewerName').value = lsGet(KEY_NAME, '');
    $('reviewerName').addEventListener('input', e => lsSet(KEY_NAME, e.target.value.trim()));
    if (!storageOK) { $('storageWarn').textContent = '⚠️ 이 브라우저에서는 기록이 저장되지 않을 수 있어요(카톡 등 앱 내장 브라우저·시크릿 모드). 크롬/사파리에서 열거나, 기록을 남긴 뒤 바로 ③에서 내보내기 하세요.'; $('storageWarn').classList.remove('hidden'); }
    const cats = [...new Set(Object.values(recipes).map(r => r.category))];
    $('fCat').innerHTML += cats.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
    document.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => showTab(b.dataset.tab)));
    ['q', 'fStatus', 'fSev', 'fCat'].forEach(id => $(id).addEventListener('input', () => { filters.q = $('q').value.trim().toLowerCase(); filters.status = $('fStatus').value; filters.sev = $('fSev').value; filters.cat = $('fCat').value; renderList(); }));
    $('list').addEventListener('click', e => { const el = e.target.closest('[data-r]'); if (el) selectRecipe(el.dataset.r); });
    document.body.addEventListener('click', e => { const el = e.target.closest('[data-goto]'); if (el) { showTab('review'); selectRecipe(el.dataset.goto); } });
    renderAll();
}
function showTab(t) {
    ['summary', 'review', 'records'].forEach(n => $('tab-' + n).classList.toggle('hidden', n !== t));
    document.querySelectorAll('.tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === t));
    if (t === 'summary') renderSummary(); if (t === 'records') renderRecords(); if (t === 'review') { renderList(); if (!selected) renderDetail(); }
    window.scrollTo(0, 0);
}
function renderAll() { renderSummary(); renderList(); renderDetail(); renderRecords(); }

/* ============================================================
   ① 전체 요약
   ============================================================ */
function issueCounts(name) { const c = { error: 0, warn: 0, info: 0 }; results.byRecipe[name].forEach(i => c[i.severity]++); return c; }
function renderSummary() {
    const names = Object.keys(recipes);
    const cnt = { approved: 0, revise: 0, hold: 0, none: 0, stale: 0, taste: 0 };
    names.forEach(n => { const s = stateOf(n); cnt[s.status || 'none']++; if (s.stale) cnt.stale++; if (s.taste) cnt.taste++; });
    const sevTotals = { error: 0, warn: 0, info: 0 };
    results.groups.forEach(g => sevTotals[g.severity]++);
    const noTaste = names.length - cnt.taste;

    let html = `<div class="card"><h2>진행 현황</h2>
        <div>레시피 ${names.length}개 · <span class="pill p-approved">승인 ${cnt.approved}</span> <span class="pill p-revise">수정 필요 ${cnt.revise}</span>
        <span class="pill p-hold">보류 ${cnt.hold}</span> <span class="pill p-none">미검토 ${cnt.none}</span>
        ${cnt.stale ? `<span class="pill p-stale">재검토 필요 ${cnt.stale}</span>` : ''}</div>
        <div class="muted" style="margin-top:6px">시식 기록이 있는 레시피 ${cnt.taste}개 / 시식 미확인 ${noTaste}개 · 출처 미확인 ${names.filter(n => !recipes[n].source).length}개</div></div>`;

    html += `<div class="card"><h2>자동 점검 결과 <span class="muted">— 같은 원인끼리 묶었어요. 원인 하나를 고치면 여러 레시피가 함께 정리돼요.</span></h2>
        <div style="margin-bottom:8px">${['error', 'warn', 'info'].map(s => `<label class="rd"><input type="checkbox" data-sev="${s}" ${sevShow[s] ? 'checked' : ''}> ${SEV_LABEL[s]} ${sevTotals[s]}묶음</label>`).join('')}</div>`;

    const dataIssues = results.dataIssues.filter(d => sevShow[d.severity]);
    if (dataIssues.length) {
        html += `<div class="grp"><b>데이터 파일 자체 점검</b> <span class="muted">(diet-data.js · 레시피 채팅 몫)</span>${dataIssues.map(d => `<div class="issue"><span class="sev-${d.severity}">${SEV_LABEL[d.severity]}</span> ${esc(d.text)}</div>`).join('')}</div>`;
    }
    RULE_ORDER.forEach(rule => {
        const gs = results.groups.filter(g => g.rule === rule && sevShow[g.severity]);
        if (!gs.length) return;
        gs.sort((a, b) => ({ error: 0, warn: 1, info: 2 }[a.severity] - { error: 0, warn: 1, info: 2 }[b.severity]) || b.recipes.length - a.recipes.length);
        html += `<div class="grp"><b>${esc(RULE_LABEL[rule] || rule)}</b> <span class="muted">${gs.length}묶음</span>`;
        gs.forEach(g => {
            html += `<div class="issue"><span class="sev-${g.severity}">${SEV_LABEL[g.severity]}</span> ${esc(g.text)}
                <div class="muted">${g.profiles.length ? '관련 제약: ' + esc(g.profiles.join(', ')) + ' · ' : ''}레시피 ${g.recipes.length}개</div>
                <div>${g.recipes.map(n => `<span class="rec-link" data-goto="${esc(n)}">${esc(n)}</span>`).join('')}</div></div>`;
        });
        html += `</div>`;
    });
    html += `</div>`;
    $('tab-summary').innerHTML = html;
    $('tab-summary').querySelectorAll('input[data-sev]').forEach(cb => cb.addEventListener('change', () => { sevShow[cb.dataset.sev] = cb.checked; renderSummary(); }));
}

/* ============================================================
   ② 레시피 검토 — 목록
   ============================================================ */
function statusPill(s) {
    if (!s.status) return '<span class="pill p-none">미검토</span>';
    return `<span class="pill p-${s.status}">${STATUS_LABEL[s.status]}</span>` + (s.stale ? ' <span class="pill p-stale">재검토</span>' : '');
}
function filteredNames() {
    return Object.keys(recipes).filter(n => {
        const r = recipes[n], s = stateOf(n), c = issueCounts(n);
        if (filters.q && !(n.toLowerCase().includes(filters.q) || (r.keywords || []).some(k => k.toLowerCase().includes(filters.q)))) return false;
        if (filters.cat !== 'all' && r.category !== filters.cat) return false;
        if (filters.status === 'none' && s.status) return false;
        if (['approved', 'revise', 'hold'].includes(filters.status) && s.status !== filters.status) return false;
        if (filters.status === 'stale' && !s.stale) return false;
        if (filters.sev === 'error' && !c.error) return false;
        if (filters.sev === 'warn' && !c.warn) return false;
        if (filters.sev === 'clean' && (c.error || c.warn)) return false;
        return true;
    });
}
function renderList() {
    const names = filteredNames();
    $('listCount').textContent = `${names.length}개 표시 중`;
    $('list').innerHTML = names.map(n => {
        const c = issueCounts(n), s = stateOf(n);
        return `<div class="item ${n === selected ? 'on' : ''}" data-r="${esc(n)}"><span>${esc(n)}
            <span class="muted">${c.error ? '🔴' + c.error : ''}${c.warn ? ' 🟡' + c.warn : ''}</span></span>${statusPill(s)}</div>`;
    }).join('') || '<div class="item muted">조건에 맞는 레시피가 없어요</div>';
}
function selectRecipe(name) {
    selected = name;
    renderList(); renderDetail(); // 미리보기에서 고른 제약은 레시피를 바꿔도 유지돼요
    if (window.innerWidth <= 860) $('detail').scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   ② 레시피 검토 — 상세 (점검 결과 / 사용자 시점 미리보기 / 기록)
   ============================================================ */
function renderDetail() {
    if (!selected || !recipes[selected]) { $('detail').innerHTML = '<div class="card muted">왼쪽에서 레시피를 골라 주세요. 요약 화면에서 이름을 눌러도 와요.</div>'; return; }
    const name = selected, r = recipes[name], s = stateOf(name);
    const issues = results.byRecipe[name];
    const bySev = sev => issues.filter(i => i.severity === sev);
    const srcHtml = r.source && /^https?:\/\//.test(r.source) ? `<a href="${esc(r.source)}" target="_blank" rel="noopener noreferrer">출처 열기</a>` : (r.teamSubmitted ? '팀원 제출' : '<span class="sev-warn">출처 없음</span>');

    let html = `<div class="card"><h2>${esc(name)} ${statusPill(s)}</h2>
        <div class="muted">${esc(r.category)} · 난이도 ${esc(r.difficulty)} · ${esc(r.cookTime)} · 약 ${esc(r.calories)}kcal · ${srcHtml}
        ${s.taste ? ' · 시식 ' + esc(TASTE_LABEL[s.taste.taste]) : ' · <span class="sev-info">시식 미확인</span>'}</div>
        ${s.stale ? '<div class="warnbox" style="margin-top:8px">이 레시피는 마지막 검토 이후 내용이 바뀌었어요. 다시 확인해 주세요.</div>' : ''}</div>`;

    html += `<div class="card"><h3>자동 점검 (${issues.length}건)</h3>`;
    if (!issues.length) html += '<div class="muted">걸린 항목이 없어요 👍</div>';
    ['error', 'warn', 'info'].forEach(sev => bySev(sev).forEach(i => {
        html += `<div class="issue"><span class="sev-${sev}">${SEV_LABEL[sev]}</span> ${esc(i.text)}
            ${i.profiles.length ? `<div class="muted">관련 제약: ${esc(i.profiles.join(', '))}</div>` : ''}</div>`;
    }));
    html += `</div>`;

    html += `<div class="card"><h3>사용자 시점 미리보기</h3>
        <div class="muted" style="margin-bottom:6px">아래 칩을 눌러 알레르기/기저질환을 골라 보세요(여러 개 가능). 칩 색은 이 레시피가 그 제약 사용자에게 어떻게 보이는지 뜻해요.</div>
        <div id="matrix"></div>
        <div class="muted" style="margin:4px 0 8px"><span class="chip st-none">해당 없음</span><span class="chip st-sub">대체품 안내</span><span class="chip st-omit">빼도 됨</span><span class="chip st-block">대체 불가</span>
        <button class="btn sub" id="clearPreview" style="padding:2px 8px">선택 해제</button>
        <button class="btn sub" id="topPreview" style="padding:2px 8px">"내 정보" 상위 5개 알레르기</button></div>
        <div id="preview"></div></div>`;

    const hist = entriesOf(name).slice().reverse();
    html += `<div class="card"><h3>검토 기록 남기기</h3>
        <div style="margin-bottom:6px">
            <label class="rd"><input type="radio" name="fStatusIn" value="approved"> 승인</label>
            <label class="rd"><input type="radio" name="fStatusIn" value="revise"> 수정 필요</label>
            <label class="rd"><input type="radio" name="fStatusIn" value="hold"> 보류</label>
            <label class="rd"><input type="radio" name="fStatusIn" value="" checked> 상태 변경 없음</label></div>
        <div style="margin-bottom:6px">시식:
            <label class="rd"><input type="radio" name="fTasteIn" value="good"> 맛있음</label>
            <label class="rd"><input type="radio" name="fTasteIn" value="ok"> 보통</label>
            <label class="rd"><input type="radio" name="fTasteIn" value="bad"> 별로</label>
            <label class="rd"><input type="radio" name="fTasteIn" value="" checked> 안 함</label></div>
        <textarea id="fNote" placeholder="메모 (예: 계란물 대신 전분물 넣었더니 튀김옷이 잘 안 붙음 / 재료 OO 추가 필요)"></textarea>
        <div style="margin-top:6px"><button class="btn" id="saveEntry">기록 저장</button>
        <button class="btn sub" id="saveNext">저장하고 다음 미검토로 →</button> <span class="muted" id="saveMsg"></span></div>
        ${hist.length ? `<details style="margin-top:10px"><summary>이전 기록 ${hist.length}개</summary>${hist.map(e => `<div class="issue"><span class="muted">${esc(e.at.slice(0, 16).replace('T', ' '))} · ${esc(e.reviewer || '이름 없음')}</span>
            ${e.status ? `<span class="pill p-${e.status}">${STATUS_LABEL[e.status]}</span>` : ''} ${e.taste ? `<span class="pill p-none">시식 ${TASTE_LABEL[e.taste]}</span>` : ''}
            ${e.hash !== reviewHash(r) ? '<span class="pill p-stale">이전 버전</span>' : ''}<div>${esc(e.note)}</div></div>`).join('')}</details>` : ''}</div>`;

    html += `<details class="card"><summary>재료·조리 단계 원문 보기</summary>
        <div style="margin-top:8px">${r.ingredients.map(i => `<div>${esc(i.name)}${i.required ? '' : ' (선택)'} — ${esc(i.amount)}${i.noSubstituteHere ? ` <span class="muted">[noSubstituteHere${typeof i.noSubstituteHere === 'string' ? ': ' + esc(i.noSubstituteHere) : ''}]</span>` : ''}${i.substituteOverride ? ` <span class="muted">[override: ${esc(i.substituteOverride.join(', '))}]</span>` : ''}</div>`).join('')}</div>
        <ol>${r.steps.map(st => `<li>${esc(st.instruction)}</li>`).join('')}</ol></details>`;

    $('detail').innerHTML = html;
    renderMatrix(); renderPreview();
    $('clearPreview').onclick = () => { previewIds.clear(); renderMatrix(); renderPreview(); };
    $('topPreview').onclick = () => { previewIds = new Set(['계란', '우유', '밀가루', '대두', '갑각류'].map(k => 'a:' + k).filter(id => ctx.profiles.some(p => p.id === id))); renderMatrix(); renderPreview(); };
    $('saveEntry').onclick = () => saveEntry(false);
    $('saveNext').onclick = () => saveEntry(true);
}

function renderMatrix() {
    const m = reviewProfileMatrix(recipes[selected], ctx);
    const chip = x => `<span class="chip st-${x.state} ${previewIds.has(x.profile.id) ? 'on' : ''}" data-pid="${esc(x.profile.id)}">${esc(x.profile.label)}</span>`;
    $('matrix').innerHTML = `<div>${m.filter(x => x.profile.kind === 'allergy').map(chip).join('')}</div><div>${m.filter(x => x.profile.kind === 'disease').map(chip).join('')}</div>`;
    $('matrix').onclick = e => {
        const el = e.target.closest('[data-pid]'); if (!el) return;
        const id = el.dataset.pid; previewIds.has(id) ? previewIds.delete(id) : previewIds.add(id);
        renderMatrix(); renderPreview();
    };
}

function renderPreview() {
    const r = recipes[selected];
    const chosen = ctx.profiles.filter(p => previewIds.has(p.id));
    const sources = reviewSourcesFor(chosen);
    const rows = r.ingredients.map(ing => ({ ing, res: resolveSubstitutes(ing, sources) }));
    let html = '';
    if (!chosen.length) { html += '<div class="muted" style="margin-bottom:6px">제약을 고르지 않은 화면이에요.</div>'; }
    else if (rows.some(x => x.res.hasAllergy)) html += `<div class="banner">🚨 주의! 당신의 알레르기/기저질환에 해당하는 재료가 포함되어 있습니다</div>`;
    else html += `<div class="muted" style="margin-bottom:6px">✅ 선택한 제약에 걸리는 재료가 없어요(“안전” 배지).</div>`;
    rows.forEach(({ ing, res }) => {
        const flagged = res.hasAllergy && sources.length > 0;
        html += `<div class="ing ${flagged ? 'warn' : ''}"><b>${flagged ? '⚠️ ' : ''}${esc(ing.name)}${ing.required ? '' : ' (선택)'}</b> <span class="muted">${esc(ing.amount)}</span>`;
        if (res.hasAllergy && (res.alternativeFoods.length > 0 || res.noSubMessage || res.noAlternative)) {
            html += `<div class="alt">${res.allergyReason ? `<div class="reason">⚠️ <b>왜 피해야 하나요?</b> ${esc(res.allergyReason)}</div>` : ''}`;
            if (res.noSubMessage) {
                html += typeof ing.noSubstituteHere === 'string' ? `🙅 ${esc(ing.noSubstituteHere)}`
                    : ing.required ? `🙅 이 요리는 <b>${esc(ing.name)}</b>이(가) 맛과 식감의 핵심이라 마땅한 대체품이 없어요. 다른 메뉴를 골라보시는 걸 추천해요.`
                        : `✂️ <b>${esc(ing.name)}</b>은(는) 선택 재료예요. 대체할 필요 없이 그냥 빼고 만들어도 괜찮아요.`;
            } else if (res.noAlternative) {
                html += `🙅 고르신 제약을 모두 지키면서 <b>${esc(ing.name)}</b>을(를) 대신할 수 있는 대체품이 없어요. ${ing.required ? '다른 메뉴를 골라보시는 걸 추천해요.' : '선택 재료라면 빼고 만들어 보세요.'}`;
            } else {
                html += `<div>✅ <b>대체 음식</b></div>` + res.alternativeFoods.map(f => `<div style="margin-top:4px">💡 <b>${esc(f)}</b>: ${esc(getSubstituteInfo(f) || res.allergyTip)}</div>`).join('');
            }
            if (res.excludedFoods.length) html += `<div class="muted" style="margin-top:4px">다른 제약과 겹쳐서 뺀 대체품: ${esc(res.excludedFoods.map(e => e.food + ' (' + e.by + '와 겹침)').join(', '))}</div>`;
            html += `</div>`;
        } else if (res.hasAllergy) {
            html += `<div class="alt" style="background:#FFEBEE;border-color:var(--red)">⚠️ 경고는 뜨는데 안내할 내용(대체품/불가/빼도 됨)이 없어요.</div>`;
        }
        html += `</div>`;
    });
    $('preview').innerHTML = html;
}

/* ============================================================
   기록 저장
   ============================================================ */
function saveEntry(goNext) {
    const status = document.querySelector('input[name=fStatusIn]:checked').value || null;
    const taste = document.querySelector('input[name=fTasteIn]:checked').value || null;
    const note = $('fNote').value.trim();
    if (!status && !taste && !note) { $('saveMsg').textContent = '상태·시식·메모 중 하나는 적어 주세요.'; return; }
    entries.push({ id: newId(), recipe: selected, status, taste, note, reviewer: $('reviewerName').value.trim(), at: new Date().toISOString(), hash: reviewHash(recipes[selected]) });
    saveEntries();
    const cur = selected;
    if (goNext) {
        const names = filteredNames(); const start = names.indexOf(cur);
        const order = [...names.slice(start + 1), ...names.slice(0, Math.max(start, 0))];
        const nxt = order.find(n => !stateOf(n).status);
        renderList(); if (nxt) { selectRecipe(nxt); return; }
    }
    renderList(); renderDetail(); $('saveMsg').textContent = '저장했어요 ✔';
}

/* ============================================================
   ③ 기록 · 내보내기 · 가져오기
   ============================================================ */
function buildExport() { return { app: 'mukgojugja-review', version: 1, exportedAt: new Date().toISOString(), entries }; }
function download(filename, text, mime) {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: mime })); a.download = filename; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
function mergeEntries(incoming) {
    const have = new Set(entries.map(e => e.id)); let added = 0, unknown = new Set(), bad = 0;
    (incoming || []).forEach(e => {
        if (!e || typeof e.id !== 'string' || typeof e.recipe !== 'string' || typeof e.at !== 'string') { bad++; return; }
        if (have.has(e.id)) return;
        entries.push({ id: e.id, recipe: e.recipe, status: ['approved', 'revise', 'hold'].includes(e.status) ? e.status : null, taste: ['good', 'ok', 'bad'].includes(e.taste) ? e.taste : null, note: String(e.note || ''), reviewer: String(e.reviewer || ''), at: e.at, hash: String(e.hash || '') });
        have.add(e.id); added++; if (!recipes[e.recipe]) unknown.add(e.recipe);
    });
    saveEntries(); return { added, bad, unknown: [...unknown] };
}
function buildHandoff() {
    const today = new Date().toISOString().slice(0, 10);
    const lines = [`# 레시피 채팅에서 할 일 (검토 도구 자동 생성 ${today})`, ''];
    const names = Object.keys(recipes);
    const pick = st => names.filter(n => stateOf(n).status === st);
    const noteOf = n => { const notes = entriesOf(n).filter(x => x.note).map(x => `${x.reviewer ? x.reviewer + ': ' : ''}${x.note}`); return notes.length ? ' — ' + notes.join(' / ') : ''; };
    const rv = pick('revise'), hd = pick('hold');
    const badTaste = names.filter(n => { const t = stateOf(n).taste; return t && t.taste === 'bad'; });
    lines.push(`## 검토자가 "수정 필요"로 남긴 레시피 (${rv.length})`); rv.forEach(n => lines.push(`- ${n}${noteOf(n)}`)); if (!rv.length) lines.push('- (없음)');
    lines.push('', `## 보류 (${hd.length})`); hd.forEach(n => lines.push(`- ${n}${noteOf(n)}`)); if (!hd.length) lines.push('- (없음)');
    lines.push('', `## 시식 결과 "별로" (${badTaste.length})`); badTaste.forEach(n => lines.push(`- ${n}${noteOf(n)}`)); if (!badTaste.length) lines.push('- (없음)');
    const stale = names.filter(n => stateOf(n).stale);
    if (stale.length) { lines.push('', `## 검토 후 내용이 바뀐 레시피 — 재검토 필요 (${stale.length})`); stale.forEach(n => lines.push(`- ${n}`)); }
    [['error', '자동 점검 — 안전 관련(경고가 안 뜨는 알레르겐 등)'], ['warn', '자동 점검 — 확인 필요']].forEach(([sev, title]) => {
        lines.push('', `## ${title}`);
        const gs = results.groups.filter(g => g.severity === sev);
        if (!gs.length) lines.push('- (없음)');
        RULE_ORDER.forEach(rule => gs.filter(g => g.rule === rule).forEach(g => lines.push(`- [${RULE_LABEL[rule] || rule}] ${g.text} → ${g.recipes.length}개: ${g.recipes.join(', ')}`)));
    });
    results.dataIssues.filter(d => d.severity !== 'info').forEach(d => { if (!lines.includes('## 데이터 파일(diet-data.js) 점검')) lines.push('', '## 데이터 파일(diet-data.js) 점검'); lines.push(`- ${d.text}`); });
    return lines.join('\n');
}
function renderRecords() {
    const total = entries.length, un = unexportedCount();
    const reviewers = [...new Set(entries.map(e => e.reviewer).filter(Boolean))];
    $('tab-records').innerHTML = `
        <div class="card"><h2>내 기록</h2>
            <div>기록 ${total}개${reviewers.length ? ' · 검토자: ' + esc(reviewers.join(', ')) : ''}</div>
            <div class="${un ? 'sev-warn' : 'muted'}" style="margin:4px 0 8px">${un ? `⚠️ 아직 내보내지 않은 기록이 ${un}개 있어요. 브라우저 데이터가 지워지면 사라져요.` : '내보내기까지 완료된 상태예요.'}</div>
            <button class="btn" id="btnExport" ${total ? '' : 'disabled'}>JSON 내보내기</button>
            <span class="muted">파일 이름에 검토자 이름과 날짜가 들어가요. 팀원에게 이 파일을 받아 아래에서 가져오면 병합돼요.</span></div>
        <div class="card"><h2>팀원 기록 가져오기(병합)</h2>
            <input type="file" id="fileImport" accept="application/json,.json" multiple>
            <div class="muted" style="margin-top:6px">기록마다 고유 번호가 있어서, 같은 파일을 여러 번 가져오거나 서로 겹쳐도 중복되지 않고 덮어쓰지도 않아요. 같은 레시피에 여러 사람이 남긴 기록은 모두 남고, "현재 상태"는 가장 늦게 남긴 기록을 따라가요.</div>
            <div id="importMsg" style="margin-top:6px"></div></div>
        <div class="card"><h2>레시피 채팅에 넘길 요약</h2>
            <div class="muted" style="margin-bottom:6px">수정 요청·보류·시식 결과와 자동 점검을 원인별로 묶은 텍스트예요. 복사해서 레시피 채팅에 붙여 넣으면 돼요.</div>
            <button class="btn" id="btnHandoff">요약 만들기</button> <button class="btn sub" id="btnCopy">복사</button>
            <textarea id="handoff" style="min-height:220px; margin-top:8px" readonly></textarea></div>`;
    $('btnExport').onclick = () => {
        const who = ($('reviewerName').value.trim() || 'anon').replace(/[^\w가-힣-]/g, '');
        download(`mukgojugja-review-${new Date().toISOString().slice(0, 10)}-${who}.json`, JSON.stringify(buildExport(), null, 2), 'application/json');
        lsSet(KEY_EXPORT, new Date().toISOString()); setTimeout(renderRecords, 600);
    };
    $('fileImport').onchange = async ev => {
        const msgs = [];
        for (const f of ev.target.files) {
            try {
                const data = JSON.parse(await f.text());
                if (data.app !== 'mukgojugja-review' || !Array.isArray(data.entries)) throw new Error('검토 도구에서 내보낸 파일이 아니에요');
                const r = mergeEntries(data.entries);
                msgs.push(`✔ ${esc(f.name)}: 새 기록 ${r.added}개 추가${r.bad ? `, 형식이 이상해 건너뜀 ${r.bad}개` : ''}${r.unknown.length ? `, 지금 없는 레시피 이름 ${r.unknown.length}개(${esc(r.unknown.join(', '))})` : ''}`);
            } catch (e) { msgs.push(`✖ ${esc(f.name)}: ${esc(e.message)}`); }
        }
        $('importMsg').innerHTML = msgs.join('<br>'); renderList(); renderDetail(); renderSummary();
        $('fileImport').value = '';
    };
    $('btnHandoff').onclick = () => { $('handoff').value = buildHandoff(); };
    $('btnCopy').onclick = async () => { if (!$('handoff').value) $('handoff').value = buildHandoff(); try { await navigator.clipboard.writeText($('handoff').value); } catch (e) { $('handoff').select(); document.execCommand('copy'); } };
}

(function loadAll(i) {
    if (typeof recipes !== 'undefined' && typeof reviewRunAll === 'function') { boot(); return; }
    if (i >= REVIEW_FILES.length) { boot(); return; }
    const s = document.createElement('script');
    s.src = REVIEW_FILES[i] + '?r=' + Date.now();
    s.onload = () => loadAll(i + 1);
    s.onerror = () => showFatal(REVIEW_FILES[i] + ' 파일을 불러오지 못했어요. review.html과 같은 폴더에 있는지 확인해 주세요.');
    document.head.appendChild(s);
})(0);
</script>
</body>
</html>
