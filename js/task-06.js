
const inputEl = document.querySelector('#validation-input');

const blurHandler = (val) => {
    const inputDataLength = val.target.value.length;
    const dataLength = Number(inputEl.getAttribute('data-length'));

    if (inputDataLength === dataLength) {
        inputEl.className = 'valid';
    } else {
        inputEl.className = 'invalid';
    };

};

inputEl.addEventListener('blur', blurHandler);



// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна 
// кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали 
// у вихідні файли завдання.