const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', (el) => {
    const inputValue = el.target.value;
    if (inputValue.length) {
        span.innerHTML = inputValue;
        return ;
    } 
    span.innerHTML = 'Anonymous';
});



// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".