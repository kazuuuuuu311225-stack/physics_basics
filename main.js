/**
 * PHYSICS MISSION - 物理基礎クイズ（ミッション制）
 * PC: ↑↓ で選択、Enter で決定
 * スマホ: タップで選択・決定
 */

const mission1 = [
  { id: 1, question: 'F = ma の F は何を表すか？',
    choices: ['加速度', '質量', '速さ', '力'], answer: 3 },
  { id: 2, question: '重力の大きさ W を表す式はどれか？',
    choices: ['W = mg', 'F = ma', 'p = F/S', 'F = kx'], answer: 0 },
  { id: 3, question: '圧力 p を表す式はどれか？',
    choices: ['p = F/S', 'p = ρgh', 'F = ma', 'W = mg'], answer: 0 },
  { id: 4, question: '摩擦力 F を表す式はどれか？',
    choices: ['F = μN', 'F = ma', 'p = F/S', 'W = mg'], answer: 0 },
  { id: 5, question: '弾性力 F = kx の k は何を表すか？',
    choices: ['ばね定数', '密度', '圧力', '摩擦係数'], answer: 0 },
  { id: 6, question: '加速度 a を求める式はどれか？',
    choices: ['a = F/m', 'a = mF', 'a = v/t', 'a = S/t'], answer: 0 },
  { id: 7, question: '質量 m を求める式はどれか？',
    choices: ['m = F/a', 'm = a/F', 'm = v/t', 'm = ρV'], answer: 0 },
  { id: 8, question: '力の単位はどれか？',
    choices: ['Pa', 'N', 'J', 'kg'], answer: 1 },
  { id: 9, question: '圧力の単位はどれか？',
    choices: ['N', 'Pa', 'J', 'W'], answer: 1 },
  { id: 10, question: '摩擦係数 μ は何を表すか？',
    choices: ['力の大きさ', '滑りやすさ', '密度', '圧力'], answer: 1 },
];

const mission2 = [
  { id: 11, question: '水圧を表す式はどれか？',
    choices: ['p = F/S', 'p = ρgh', 'F = kx', 'W = mg'], answer: 1 },
  { id: 12, question: 'p = ρgh の h は何を表すか？',
    choices: ['密度', '深さ', '重力加速度', '体積'], answer: 1 },
  { id: 13, question: '浮力の大きさを表す式はどれか？',
    choices: ['F = ma', 'F = kx', 'ρVg', 'p = ρgh'], answer: 2 },
  { id: 14, question: '浮力 ρVg の V は何を表すか？',
    choices: ['物体の体積', '押しのけた液体の体積', '密度', '圧力'], answer: 1 },
  { id: 15, question: 'アルキメデスの原理：浮力は押しのけた液体の（　）に比例する。',
    choices: ['密度', '体積', '深さ', '圧力'], answer: 1 },
  { id: 16, question: 'アルキメデスの原理：浮力の式はどれか？',
    choices: ['ρVg', 'F = ma', 'p = F/S', 'W = mg'], answer: 0 },
  { id: 17, question: '密度 ρ の単位はどれか？',
    choices: ['kg/m³', 'N/m²', 'm/s²', 'J/kg'], answer: 0 },
  { id: 18, question: '水圧 p = ρgh の ρ は何を表すか？',
    choices: ['密度', '圧力', '深さ', '重力加速度'], answer: 0 },
  { id: 19, question: '深い場所ほど水圧が大きくなる理由は？',
    choices: ['密度が増える', '重力が強くなる', '上の水の重さが増える', '温度が下がる'], answer: 2 },
  { id: 20, question: '浮力が大きいほど物体はどうなるか？',
    choices: ['沈む', '浮きやすくなる', '重くなる', '密度が上がる'], answer: 1 },
];

const mission3 = [
  { id: 21, question: 'ニュートンの第1法則（慣性の法則）を正しく説明しているのは？',
    choices: ['力が加わらなければ運動状態は変わらない',
              '力は質量と加速度の積である',
              '作用反作用の法則',
              '物体は常に加速する'], answer: 0 },
  { id: 22, question: 'ニュートンの第2法則を表す式はどれか？',
    choices: ['F = ma', 'F = μN', 'p = F/S', 'W = mg'], answer: 0 },
  { id: 23, question: 'ニュートンの第3法則（作用反作用）を正しく説明しているのは？',
    choices: ['力が加わらなければ運動状態は変わらない',
              '力は質量と加速度の積である',
              '同じ大きさで反対向きの力が返ってくる',
              '物体は常に一定の速さで運動する'], answer: 2 },
  { id: 24, question: '力の三要素に含まれないものはどれか？',
    choices: ['作用点', '作用線', '大きさ', '密度'], answer: 3 },
  { id: 25, question: '力の三要素：力がどこに加わるかを示すものは？',
    choices: ['作用点', '作用線', '大きさ', '方向'], answer: 0 },
  { id: 26, question: '力の三要素：力の向きと一直線になる線を何という？',
    choices: ['作用点', '作用線', '大きさ', '方向'], answer: 1 },
  { id: 27, question: '慣性とは何か？',
    choices: ['物体が動き続けようとする性質',
              '物体が浮こうとする性質',
              '摩擦が小さくなる性質',
              '密度が変わる性質'], answer: 0 },
  { id: 28, question: '質量が大きいほど慣性はどうなる？',
    choices: ['大きくなる', '小さくなる', '変わらない', 'ゼロになる'], answer: 0 },
  { id: 29, question: '作用反作用の力の大きさは？',
    choices: ['作用の方が大きい', '反作用の方が大きい', '等しい', '比べられない'], answer: 2 },
  { id: 30, question: 'F = ma において、加速度 a が2倍になる条件は？',
    choices: ['F を2倍にする', 'm を2倍にする', 'F を半分にする', 'm を増やす'], answer: 0 },
];

const mission4 = [
  { id: 31,
    question: '質量 m = 5 kg の物体に加速度 a = 3 m/s² が生じた。力 F はいくらか？（F = ma）',
    choices: ['8 N', '12 N', '15 N', '20 N'], answer: 2,
    explanation: 'F = ma\nm = 5, a = 3 を代入 → F = 5 × 3 = 15 N' },
  { id: 32,
    question: '重力加速度 g = 9.8 m/s²、質量 m = 2 kg の物体の重力 W は？（W = mg）',
    choices: ['9.8 N', '14 N', '19.6 N', '25 N'], answer: 2,
    explanation: 'W = mg\nm = 2, g = 9.8 → W = 2 × 9.8 = 19.6 N' },
  { id: 33,
    question: '力 F = 40 N が面積 S = 2 m² に働くとき、圧力 p は？（p = F/S）',
    choices: ['10 Pa', '20 Pa', '40 Pa', '80 Pa'], answer: 1,
    explanation: 'p = F/S\nF = 40, S = 2 → p = 40 / 2 = 20 Pa' },
  { id: 34,
    question: 'ばね定数 k = 50 N/m のばねを x = 0.2 m 伸ばしたときの弾性力 F は？（F = kx）',
    choices: ['5 N', '8 N', '10 N', '12 N'], answer: 2,
    explanation: 'F = kx\nk = 50, x = 0.2 → F = 50 × 0.2 = 10 N' },
  { id: 35,
    question: '摩擦係数 μ = 0.3、垂直抗力 N = 100 N のとき、摩擦力 F は？（F = μN）',
    choices: ['20 N', '25 N', '30 N', '35 N'], answer: 2,
    explanation: 'F = μN\nμ = 0.3, N = 100 → F = 0.3 × 100 = 30 N' },
  { id: 36,
    question: '密度 ρ = 1000 kg/m³、体積 V = 0.01 m³ の水が押しのけられた。浮力 F は？（F = ρVg, g = 9.8）',
    choices: ['49 N', '78 N', '98 N', '120 N'], answer: 2,
    explanation: 'F = ρVg\nρ = 1000, V = 0.01, g = 9.8\nF = 1000 × 0.01 × 9.8 = 98 N' },
  { id: 37,
    question: '水深 h = 5 m、密度 ρ = 1000 kg/m³、g = 9.8 のとき水圧 p は？（p = ρgh）',
    choices: ['9800 Pa', '24,500 Pa', '49,000 Pa', '98,000 Pa'], answer: 2,
    explanation: 'p = ρgh\nρ = 1000, g = 9.8, h = 5\np = 1000 × 9.8 × 5 = 49,000 Pa' },
  { id: 38,
    question: '速度 v = 20 m/s の物体が t = 4 s で止まった。加速度 a は？（a = Δv / t）',
    choices: ['-2 m/s²', '-4 m/s²', '-5 m/s²', '-10 m/s²'], answer: 2,
    explanation: 'a = Δv / t\nΔv = 0 - 20 = -20\n-20 / 4 = -5 m/s²' },
  { id: 39,
    question: '質量 m = 10 kg の物体に F = 50 N の力が働く。加速度 a は？（a = F/m）',
    choices: ['2 m/s²', '3 m/s²', '4 m/s²', '5 m/s²'], answer: 3,
    explanation: 'a = F/m\nF = 50, m = 10 → a = 50 / 10 = 5 m/s²' },
  { id: 40,
    question: 'ばね定数 k = 80 N/m のばねを x = 0.05 m 伸ばした。弾性力 F は？（F = kx）',
    choices: ['2 N', '3 N', '4 N', '5 N'], answer: 2,
    explanation: 'F = kx\nk = 80, x = 0.05 → F = 80 × 0.05 = 4 N' },
];

const MISSIONS = {
  1: { title: 'MISSION 1', subtitle: '基礎公式', questions: mission1 },
  2: { title: 'MISSION 2', subtitle: '流体・浮力', questions: mission2 },
  3: { title: 'MISSION 3', subtitle: '運動の三法則', questions: mission3 },
  4: { title: 'MISSION 4', subtitle: '計算問題', questions: mission4 },
};

const CHOICE_LABELS = ['A', 'B', 'C', 'D'];

const state = {
  screen: 'mission',
  missionId: 1,
  missionSelection: 0,
  currentIndex: 0,
  currentSelection: 0,
  score: 0,
  lastAnswer: null,
  questions: [],
  shuffledMap: [],
  answers: [],
  reviewMode: false,
  resumeIndex: 0,
};

let screens;
let elements;

function initApp() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.documentElement.classList.add('touch-device');
  }

  screens = {
    mission: document.getElementById('screenMission'),
    quiz: document.getElementById('screenQuiz'),
    result: document.getElementById('screenResult'),
    score: document.getElementById('screenScore'),
  };

  elements = {
    missionList: document.getElementById('missionList'),
    missionBadge: document.getElementById('missionBadge'),
    progressText: document.getElementById('progressText'),
    progressFill: document.getElementById('progressFill'),
    questionText: document.getElementById('questionText'),
    choicesList: document.getElementById('choicesList'),
    resultIcon: document.getElementById('resultIcon'),
    resultLabel: document.getElementById('resultLabel'),
    resultDetail: document.getElementById('resultDetail'),
    explanationText: document.getElementById('explanationText'),
    btnNext: document.getElementById('btnNext'),
    scoreMissionTitle: document.getElementById('scoreMissionTitle'),
    scoreValue: document.getElementById('scoreValue'),
    scoreRank: document.getElementById('scoreRank'),
    btnRetry: document.getElementById('btnRetry'),
    btnHome: document.getElementById('btnHome'),
    btnBackQuiz: document.getElementById('btnBackQuiz'),
    btnBackResult: document.getElementById('btnBackResult'),
    btnForwardQuiz: document.getElementById('btnForwardQuiz'),
    hintReview: document.getElementById('hintReview'),
    hintForwardKeyboard: document.getElementById('hintForwardKeyboard'),
    hintForwardTouch: document.getElementById('hintForwardTouch'),
    hintQuizKeyboard: document.getElementById('hintQuizKeyboard'),
    hintQuizTouch: document.getElementById('hintQuizTouch'),
  };

  document.addEventListener('keydown', handleKeydown);

  renderMissionList();

  elements.btnNext.addEventListener('click', nextQuestion);
  elements.btnRetry.addEventListener('click', retryMission);
  elements.btnHome.addEventListener('click', goHome);
  elements.btnBackQuiz.addEventListener('click', goPreviousQuestion);
  elements.btnBackResult.addEventListener('click', goPreviousQuestion);
  elements.btnForwardQuiz.addEventListener('click', goForwardQuestion);

  document.body.focus();
  showScreen('mission');
}

function showScreen(name) {
  Object.values(screens).forEach(function (el) {
    el.classList.add('hidden');
  });
  screens[name].classList.remove('hidden');
  state.screen = name;
}

function renderMissionList() {
  var html = Object.keys(MISSIONS).map(function (key, i) {
    var mission = MISSIONS[key];
    var selected = i === state.missionSelection ? ' selected' : '';
    return (
      '<li class="mission-item' + selected + '" data-mission="' + key + '">' +
      '<span class="mission-cursor">▶</span>' +
      '<span class="mission-label">' + mission.title + '</span>' +
      '<span class="mission-desc">' + mission.subtitle + '</span>' +
      '</li>'
    );
  }).join('');

  elements.missionList.innerHTML = html;

  elements.missionList.querySelectorAll('.mission-item').forEach(function (item) {
    item.addEventListener('click', handleMissionClick);
  });
}

function getMissionItems() {
  return elements.missionList.querySelectorAll('.mission-item');
}

function updateMissionHighlight() {
  getMissionItems().forEach(function (item, i) {
    item.classList.toggle('selected', i === state.missionSelection);
  });
}

function handleMissionClick(event) {
  var item = event.currentTarget;
  var id = parseInt(item.getAttribute('data-mission'), 10);
  if (isNaN(id) || !MISSIONS[id]) return;

  state.missionSelection = id - 1;
  updateMissionHighlight();
  startMission(id);
}

function moveMissionSelection(delta) {
  var count = Object.keys(MISSIONS).length;
  state.missionSelection = (state.missionSelection + delta + count) % count;
  updateMissionHighlight();
}

function shuffleChoices(choices, correctIndex) {
  var order = choices.map(function (_, i) { return i; });

  for (var i = order.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = order[i];
    order[i] = order[j];
    order[j] = tmp;
  }

  return {
    choices: order.map(function (i) { return choices[i]; }),
    answer: order.indexOf(correctIndex),
  };
}

function getShuffledFor(index) {
  if (!state.shuffledMap[index]) {
    var q = state.questions[index];
    state.shuffledMap[index] = shuffleChoices(q.choices, q.answer);
  }
  return state.shuffledMap[index];
}

function getCurrentShuffled() {
  return getShuffledFor(state.currentIndex);
}

function startMission(id) {
  if (!MISSIONS[id]) return;

  state.missionId = id;
  state.questions = MISSIONS[id].questions;
  state.shuffledMap = state.questions.map(function () { return null; });
  state.answers = state.questions.map(function () { return null; });
  state.reviewMode = false;
  state.resumeIndex = 0;
  state.currentIndex = 0;
  state.currentSelection = 0;
  state.score = 0;
  showScreen('quiz');
  renderQuiz();
}

function isQuestionAnswered(index) {
  return state.answers[index] !== null;
}

function isCurrentReview() {
  return state.reviewMode && isQuestionAnswered(state.currentIndex);
}

function recordAnswer(index, selection) {
  if (isQuestionAnswered(index)) return;

  var shuffled = getShuffledFor(index);
  state.answers[index] = selection;

  if (selection === shuffled.answer) {
    state.score += 1;
  }
}

function updateNavButtons() {
  var canBack = false;

  if (state.screen === 'quiz') {
    canBack = state.currentIndex > 0;
  } else if (state.screen === 'result') {
    canBack = state.currentIndex > 0;
  }

  var canForward = state.screen === 'quiz' &&
    state.reviewMode &&
    state.currentIndex < state.resumeIndex;

  [elements.btnBackQuiz, elements.btnBackResult].forEach(function (btn) {
    if (!btn) return;
    btn.disabled = !canBack;
    btn.classList.toggle('disabled', !canBack);
  });

  if (elements.btnForwardQuiz) {
    elements.btnForwardQuiz.classList.toggle('hidden', !canForward);
  }

  if (elements.hintReview) {
    elements.hintReview.classList.toggle('hidden', !isCurrentReview());
  }

  [elements.hintForwardKeyboard, elements.hintForwardTouch].forEach(function (el) {
    if (!el) return;
    el.classList.toggle('hidden', !canForward);
  });

  if (elements.hintQuizKeyboard) {
    elements.hintQuizKeyboard.classList.toggle('hidden', isCurrentReview());
  }

  if (elements.hintQuizTouch) {
    elements.hintQuizTouch.classList.toggle('hidden', isCurrentReview());
  }
}

function goPreviousQuestion() {
  if (state.screen !== 'quiz' && state.screen !== 'result') return;

  if (state.currentIndex <= 0) return;

  if (state.screen === 'result') {
    state.resumeIndex = state.currentIndex;
    state.reviewMode = true;
    state.currentIndex -= 1;
    showScreen('quiz');
    renderQuiz();
    return;
  }

  if (!state.reviewMode) {
    state.resumeIndex = state.currentIndex;
  }

  state.reviewMode = true;
  state.currentIndex -= 1;
  renderQuiz();
}

function goForwardQuestion() {
  if (!state.reviewMode) return;

  if (state.currentIndex < state.resumeIndex - 1) {
    state.currentIndex += 1;
    renderQuiz();
    return;
  }

  state.reviewMode = false;
  state.currentIndex = state.resumeIndex;

  if (isQuestionAnswered(state.currentIndex)) {
    var shuffled = getShuffledFor(state.currentIndex);
    renderResult(state.answers[state.currentIndex] === shuffled.answer);
    showScreen('result');
    updateNavButtons();
    return;
  }

  state.currentSelection = 0;
  renderQuiz();
}

function getChoiceClass(index, shuffled, userAnswer) {
  if (userAnswer === null) return '';

  if (index === userAnswer && index === shuffled.answer) {
    return ' choice-correct';
  }
  if (index === userAnswer) {
    return ' choice-incorrect';
  }
  if (index === shuffled.answer) {
    return ' choice-correct';
  }
  return ' is-locked';
}

function renderQuiz() {
  var mission = MISSIONS[state.missionId];
  var q = state.questions[state.currentIndex];
  var shuffled = getCurrentShuffled();
  var total = state.questions.length;
  var current = state.currentIndex + 1;
  var userAnswer = state.answers[state.currentIndex];
  var isReview = isCurrentReview();

  elements.missionBadge.textContent = mission.title;
  elements.progressText.textContent = current + ' / ' + total;
  elements.progressFill.style.width = ((current - 1) / total * 100) + '%';
  elements.questionText.textContent = q.question;

  var html = shuffled.choices.map(function (choice, i) {
    var classes = 'choice-item';

    if (isReview) {
      classes += getChoiceClass(i, shuffled, userAnswer);
    } else if (i === state.currentSelection) {
      classes += ' selected';
    }

    return (
      '<li class="' + classes + '" data-index="' + i + '">' +
      '<span class="choice-cursor">▶</span>' +
      '<span class="choice-label">' + CHOICE_LABELS[i] + '.</span>' +
      '<span class="choice-text">' + escapeHtml(choice) + '</span>' +
      '</li>'
    );
  }).join('');

  elements.choicesList.innerHTML = html;

  if (!isReview) {
    elements.choicesList.querySelectorAll('.choice-item').forEach(function (item) {
      item.addEventListener('click', handleChoiceClick);
    });
  }

  updateNavButtons();
}

function handleChoiceClick(event) {
  if (state.screen !== 'quiz' || isCurrentReview()) return;
  if (isQuestionAnswered(state.currentIndex)) return;

  var index = parseInt(event.currentTarget.getAttribute('data-index'), 10);
  if (isNaN(index)) return;

  if (state.currentSelection === index) {
    answerQuestion();
    return;
  }

  state.currentSelection = index;
  updateChoiceHighlight();
}

function updateChoiceHighlight() {
  elements.choicesList.querySelectorAll('.choice-item').forEach(function (item, i) {
    item.classList.toggle('selected', i === state.currentSelection);
  });
}

function moveSelection(delta) {
  if (isCurrentReview() || isQuestionAnswered(state.currentIndex)) return;
  var count = getCurrentShuffled().choices.length;
  state.currentSelection = (state.currentSelection + delta + count) % count;
  updateChoiceHighlight();
}

function answerQuestion() {
  if (state.screen !== 'quiz') return;
  if (isCurrentReview() || isQuestionAnswered(state.currentIndex)) return;

  var shuffled = getCurrentShuffled();
  recordAnswer(state.currentIndex, state.currentSelection);
  state.lastAnswer = state.currentSelection;
  var isCorrect = state.currentSelection === shuffled.answer;

  renderResult(isCorrect);
  state.reviewMode = false;
  showScreen('result');
  updateNavButtons();
}

function renderResult(isCorrect) {
  var q = state.questions[state.currentIndex];
  var shuffled = getCurrentShuffled();
  var correctLabel = CHOICE_LABELS[shuffled.answer];
  var correctText = shuffled.choices[shuffled.answer];

  elements.resultIcon.textContent = isCorrect ? '✓' : '✗';
  elements.resultIcon.className = 'result-icon ' + (isCorrect ? 'correct' : 'incorrect');
  elements.resultLabel.textContent = isCorrect ? '正解！' : '不正解…';
  elements.resultLabel.className = 'result-label ' + (isCorrect ? 'correct' : 'incorrect');

  if (isCorrect) {
    elements.resultDetail.innerHTML =
      '<span class="text-correct">' + correctLabel + '. ' + escapeHtml(correctText) + '</span>';
  } else {
    var chosen = CHOICE_LABELS[state.lastAnswer];
    var chosenText = shuffled.choices[state.lastAnswer];
    elements.resultDetail.innerHTML =
      '<span class="text-incorrect">あなたの回答: ' + chosen + '. ' + escapeHtml(chosenText) + '</span>' +
      '<br><span class="text-correct">正解: ' + correctLabel + '. ' + escapeHtml(correctText) + '</span>';
  }

  if (elements.explanationText) {
    if (q.explanation) {
      elements.explanationText.innerHTML = formatExplanation(q.explanation);
      elements.explanationText.classList.remove('hidden');
    } else {
      elements.explanationText.textContent = '';
      elements.explanationText.classList.add('hidden');
    }
  }

  var isLast = state.currentIndex + 1 >= state.questions.length;
  elements.btnNext.textContent = isLast ? '結果を見る' : '次の問題へ';
}

function nextQuestion() {
  state.reviewMode = false;
  state.currentIndex += 1;

  if (state.currentIndex >= state.questions.length) {
    renderScore();
    showScreen('score');
    return;
  }

  state.currentSelection = 0;
  state.resumeIndex = state.currentIndex;
  showScreen('quiz');
  renderQuiz();
}

function renderScore() {
  var mission = MISSIONS[state.missionId];
  var total = state.questions.length;

  elements.scoreMissionTitle.textContent = mission.title + ' — ' + mission.subtitle;
  elements.scoreValue.textContent = state.score;
  elements.scoreRank.textContent = getRankMessage(state.score, total);
  elements.progressFill.style.width = '100%';
}

function getRankMessage(score, total) {
  var ratio = score / total;
  if (ratio === 1) return '★ パーフェクトクリア！ ★';
  if (ratio >= 0.8) return 'よくできました！';
  if (ratio >= 0.6) return 'もう少し！';
  if (ratio >= 0.4) return '復習しよう';
  return 'がんばろう！';
}

function retryMission() {
  startMission(state.missionId);
}

function goHome() {
  state.missionSelection = state.missionId - 1;
  renderMissionList();
  showScreen('mission');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatExplanation(text) {
  return escapeHtml(text).replace(/\n/g, '<br>');
}

function handleKeydown(event) {
  if (['ArrowUp', 'ArrowDown', 'Enter', 'Escape', 'Backspace', 'ArrowRight'].includes(event.key)) {
    event.preventDefault();
  }

  switch (state.screen) {
    case 'mission':
      if (event.key === 'ArrowUp') moveMissionSelection(-1);
      else if (event.key === 'ArrowDown') moveMissionSelection(1);
      else if (event.key === 'Enter') startMission(state.missionSelection + 1);
      break;
    case 'quiz':
      if (isCurrentReview()) {
        if (event.key === 'Enter' || event.key === 'ArrowRight') goForwardQuestion();
        else if (event.key === 'Escape' || event.key === 'Backspace') goPreviousQuestion();
      } else if (event.key === 'Escape' || event.key === 'Backspace') {
        goPreviousQuestion();
      } else if (!isQuestionAnswered(state.currentIndex)) {
        if (event.key === 'ArrowUp') moveSelection(-1);
        else if (event.key === 'ArrowDown') moveSelection(1);
        else if (event.key === 'Enter') answerQuestion();
      }
      break;
    case 'result':
      if (event.key === 'Escape' || event.key === 'Backspace') goPreviousQuestion();
      else if (event.key === 'Enter') nextQuestion();
      break;
    case 'score':
      break;
    default:
      break;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
