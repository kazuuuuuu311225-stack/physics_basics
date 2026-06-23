/**
 * 物理基礎（力学）4択クイズ
 * PC: ↑↓ で選択、Enter で決定
 * スマホ/タップ: 1回目で選択、同じ選択肢を2回目で回答確定
 */

const questions = [
  {
    id: 1,
    question: 'F = ma の F は何を表すか？',
    choices: ['加速度', '質量', '速さ', '力'],
    answer: 3,
    explanation: 'F は力（Force）を表す。',
  },
  {
    id: 2,
    question: '重力の大きさを表す式はどれか？',
    choices: ['F = ma', 'W = mg', 'p = F/A', 'U = kx'],
    answer: 1,
    explanation: '重力は W = mg で表される。',
  },
  {
    id: 3,
    question: '弾性力のフックの法則を表す式はどれか？',
    choices: ['F = kx', 'F = ma', 'W = mg', 'p = ρgh'],
    answer: 0,
    explanation: '弾性力は F = kx に比例する。',
  },
  {
    id: 4,
    question: '圧力を表す式はどれか？',
    choices: ['p = F/A', 'p = ρgh', 'F = ma', 'W = mg'],
    answer: 0,
    explanation: '圧力は p = F/A で表される。',
  },
  {
    id: 5,
    question: '水圧を表す式はどれか？',
    choices: ['p = F/A', 'p = ρgh', 'F = kx', 'W = mg'],
    answer: 1,
    explanation: '水圧は p = ρgh で表される。',
  },
];

const CHOICE_LABELS = ['A', 'B', 'C', 'D'];

const state = {
  screen: 'title',
  currentIndex: 0,
  currentSelection: 0,
  awaitingConfirm: false,
  menuAwaitingConfirm: false,
  score: 0,
  lastAnswer: null,
};

let screens;
let elements;

function initApp() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.documentElement.classList.add('touch-device');
  }

  screens = {
    title: document.getElementById('screenTitle'),
    quiz: document.getElementById('screenQuiz'),
    result: document.getElementById('screenResult'),
    score: document.getElementById('screenScore'),
  };

  elements = {
    questionCounter: document.getElementById('questionCounter'),
    scoreDisplay: document.getElementById('scoreDisplay'),
    questionText: document.getElementById('questionText'),
    choicesArea: document.getElementById('choicesArea'),
    resultLabel: document.getElementById('resultLabel'),
    resultAnswer: document.getElementById('resultAnswer'),
    explanationText: document.getElementById('explanationText'),
    finalScore: document.getElementById('finalScore'),
    scoreRank: document.getElementById('scoreRank'),
    btnStart: document.getElementById('btnStart'),
    btnSubmit: document.getElementById('btnSubmit'),
    btnNext: document.getElementById('btnNext'),
    btnRetry: document.getElementById('btnRetry'),
    startItem: document.getElementById('startItem'),
    retryItem: document.getElementById('retryItem'),
  };

  document.addEventListener('keydown', handleKeydown);

  elements.startItem.addEventListener('click', handleStartClick);
  elements.btnStart.addEventListener('click', handleStartClick);
  elements.btnSubmit.addEventListener('click', answerQuestion);
  elements.btnNext.addEventListener('click', nextQuestion);
  elements.retryItem.addEventListener('click', handleRetryClick);
  elements.btnRetry.addEventListener('click', handleRetryClick);

  document.body.focus();
  showScreen('title');
}

function showScreen(name) {
  Object.values(screens).forEach(function (el) {
    el.classList.add('hidden');
  });
  screens[name].classList.remove('hidden');
  state.screen = name;

  if (name === 'title') {
    resetTitleMenu();
  } else if (name === 'score') {
    resetRetryMenu();
  }
}

function resetTitleMenu() {
  state.menuAwaitingConfirm = false;
  updateStartHighlight();
}

function resetRetryMenu() {
  state.menuAwaitingConfirm = false;
  updateRetryHighlight();
}

function updateStartHighlight() {
  if (!elements.startItem) return;
  elements.startItem.classList.add('selected');
  elements.startItem.classList.toggle('confirm-ready', state.menuAwaitingConfirm);
}

function updateRetryHighlight() {
  if (!elements.retryItem) return;
  elements.retryItem.classList.add('selected');
  elements.retryItem.classList.toggle('confirm-ready', state.menuAwaitingConfirm);
}

function handleStartClick() {
  if (state.screen !== 'title') return;

  if (state.menuAwaitingConfirm) {
    startQuiz();
    return;
  }

  state.menuAwaitingConfirm = true;
  updateStartHighlight();
}

function handleRetryClick() {
  if (state.screen !== 'score') return;

  if (state.menuAwaitingConfirm) {
    showScreen('title');
    return;
  }

  state.menuAwaitingConfirm = true;
  updateRetryHighlight();
}

function renderQuiz() {
  var q = questions[state.currentIndex];
  var total = questions.length;

  elements.questionCounter.textContent = 'Q.' + (state.currentIndex + 1) + '/' + total;
  elements.scoreDisplay.textContent = 'SCORE: ' + state.score;
  elements.questionText.textContent = q.question;

  var choicesHtml = q.choices
    .map(function (choice, i) {
      var selected = i === state.currentSelection ? ' selected' : '';
      var confirmReady = i === state.currentSelection && state.awaitingConfirm ? ' confirm-ready' : '';
      return (
        '<li class="choice-item' + selected + confirmReady + '" data-index="' + i + '">' +
        '<span class="cursor">▶</span>' +
        '<span class="choice-label">' + CHOICE_LABELS[i] + '.</span>' +
        '<span class="choice-text">' + escapeHtml(choice) + '</span>' +
        '</li>'
      );
    })
    .join('');

  elements.choicesArea.innerHTML = '<ul class="choices-list">' + choicesHtml + '</ul>';
  bindChoiceEvents();
}

function bindChoiceEvents() {
  var items = elements.choicesArea.querySelectorAll('.choice-item');
  items.forEach(function (item) {
    item.addEventListener('click', handleChoiceClick);
  });
}

function handleChoiceClick(event) {
  if (state.screen !== 'quiz') return;

  var index = parseInt(event.currentTarget.getAttribute('data-index'), 10);
  if (isNaN(index)) return;

  if (state.currentSelection === index && state.awaitingConfirm) {
    answerQuestion();
    return;
  }

  state.currentSelection = index;
  state.awaitingConfirm = true;
  updateChoiceHighlight();
}

function updateChoiceHighlight() {
  var items = elements.choicesArea.querySelectorAll('.choice-item');
  items.forEach(function (item, i) {
    var isSelected = i === state.currentSelection;
    item.classList.toggle('selected', isSelected);
    item.classList.toggle('confirm-ready', isSelected && state.awaitingConfirm);
  });
}

function renderResult(isCorrect) {
  var q = questions[state.currentIndex];
  var correctLabel = CHOICE_LABELS[q.answer];
  var correctText = q.choices[q.answer];

  elements.resultLabel.textContent = isCorrect ? '正解！' : '不正解…';
  elements.resultLabel.className = 'result-label ' + (isCorrect ? 'correct' : 'incorrect');

  if (isCorrect) {
    elements.resultAnswer.innerHTML = correctLabel + '. ' + escapeHtml(correctText);
  } else {
    var chosen = CHOICE_LABELS[state.lastAnswer];
    var chosenText = q.choices[state.lastAnswer];
    elements.resultAnswer.innerHTML =
      'あなたの回答: ' + chosen + '. ' + escapeHtml(chosenText) +
      '<br>正解: ' + correctLabel + '. ' + escapeHtml(correctText);
  }

  elements.explanationText.textContent = q.explanation || '';
  elements.btnNext.textContent =
    state.currentIndex + 1 >= questions.length ? '結果を見る' : '次の問題へ';
}

function renderScore() {
  var total = questions.length;
  elements.finalScore.textContent = state.score + ' / ' + total;
  elements.scoreRank.textContent = getRankMessage(state.score, total);
}

function getRankMessage(score, total) {
  var ratio = score / total;
  if (ratio === 1) return '★ パーフェクト！ ★';
  if (ratio >= 0.8) return 'よくできました！';
  if (ratio >= 0.6) return 'もう少し！';
  if (ratio >= 0.4) return '復習しよう';
  return 'がんばろう！';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function startQuiz() {
  state.currentIndex = 0;
  state.currentSelection = 0;
  state.awaitingConfirm = false;
  state.menuAwaitingConfirm = false;
  state.score = 0;
  showScreen('quiz');
  renderQuiz();
}

function answerQuestion() {
  if (state.screen !== 'quiz') return;

  var q = questions[state.currentIndex];
  state.lastAnswer = state.currentSelection;
  var isCorrect = state.currentSelection === q.answer;

  if (isCorrect) {
    state.score += 1;
  }

  state.awaitingConfirm = false;
  renderResult(isCorrect);
  showScreen('result');
}

function nextQuestion() {
  state.currentIndex += 1;

  if (state.currentIndex >= questions.length) {
    renderScore();
    showScreen('score');
    return;
  }

  state.currentSelection = 0;
  state.awaitingConfirm = false;
  showScreen('quiz');
  renderQuiz();
}

function moveSelection(delta) {
  var count = questions[state.currentIndex].choices.length;
  state.currentSelection = (state.currentSelection + delta + count) % count;
  state.awaitingConfirm = false;
  updateChoiceHighlight();
}

function handleKeydown(event) {
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Enter') {
    event.preventDefault();
  }

  switch (state.screen) {
    case 'title':
      if (event.key === 'Enter') startQuiz();
      break;
    case 'quiz':
      if (event.key === 'ArrowUp') moveSelection(-1);
      else if (event.key === 'ArrowDown') moveSelection(1);
      else if (event.key === 'Enter') answerQuestion();
      break;
    case 'result':
      if (event.key === 'Enter') nextQuestion();
      break;
    case 'score':
      if (event.key === 'Enter') showScreen('title');
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
