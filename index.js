const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
startBtn.addEventListener('click', onStartSetInterval);
stopBtn.addEventListener('click', onStopSetInterval);
const TIME = 1000;
let intervalId = null;

// функція для випадкового числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// функція для старту
function onStartSetInterval(evt) {
  if (startBtn) {
    startBtn.disabled = true;
    intervalId = setInterval(() => {
  if (randomIntegerFromInterval) {
    const colorNumber = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[colorNumber] ;
  }
  return
}, TIME);
  }
}
// функція для відміни інтервалу
function onStopSetInterval(evt) {
  if (stopBtn) {
    startBtn.disabled = false;
    clearInterval(intervalId);
  }
}