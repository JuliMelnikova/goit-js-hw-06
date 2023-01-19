


const counter = document.querySelector('#value');
const decButton = document.querySelector('[data-action="decrement"]');
const incButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decButton.addEventListener("click", () => {
    if(counterValue > 0) {
        counterValue -= 1;
        counter.innerHTML = counterValue;
    }
    
});

incButton.addEventListener("click", () => {
counterValue += 1;
counter.innerHTML = counterValue;
});

