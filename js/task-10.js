function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const createColection = document.querySelector('[data-create]');
const destroyColection = document.querySelector('[data-destroy]');
const boxesColection = document.querySelector('#boxes');

createColection.addEventListener('click', createBoxes);

function createBoxes(amount) {
  var boxSize = 30;
  const inputValue = document.querySelector('#controls>input').value;
  for (var index = 0; index < Number(inputValue); index++) {
    var newSize = boxSize + (index * 10);
    const inputEl = document.createElement('input');
    inputEl.style.width = `${newSize}px`;
    inputEl.style.backgroundColor = getRandomHexColor();
    boxesColection.appendChild(inputEl);
  }
}


function destroyBoxes() {
  // const destroyEl = document.querySelectorAll('#boxes>input');
  boxes.innerHTML = '';
  // destroyEl.forEach(el => {
  //   el.remove();
  // })
}

destroyColection.addEventListener('click', destroyBoxes);


// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів 
// в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку 
// Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки 
// <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову 
// функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені 
// елементи.