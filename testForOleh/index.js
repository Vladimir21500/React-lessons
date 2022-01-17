const countDefault = 45; // кол-во строк по умолчанию
const countRowNew = 56; // передаешь ты

const resultElem = document.querySelector('.result');
const btnElem = document.querySelector('.result__btn');

let intervalId;

const checkCritick = countOfRowsNew => {
  console.log('critick');
  return countDefault !== countOfRowsNew;
};

function renderMessage() {
  clearInterval(intervalId);
  resultElem.classList.remove('result_hide');
}

function startInterval() {
  return setInterval(() => {
    if (checkCritick(countRowNew)) renderMessage();
  }, 1000);
}

function onClick() {
  resultElem.classList.add('result_hide');
  intervalId = startInterval();
}

intervalId = startInterval();
btnElem.addEventListener('click', onClick);
