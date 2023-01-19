function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorButton = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

colorButton.addEventListener('click', () => {
  const colorValue = getRandomHexColor();
  spanColor.innerHTML = colorValue;
  document.body.style.backgroundColor = colorValue;
});

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку 
// на button.change-color і виводить значення кольору в span.color.