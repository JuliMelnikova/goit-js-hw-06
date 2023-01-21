const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listWrapper = document.querySelector("#ingredients");

const engridientsList = ingredients.map(ingredient => {
  const currentItem = document.createElement('li');
  currentItem.textContent = ingredient;
  currentItem.classList.add('item');
  return currentItem;
});
listWrapper.append(...engridientsList);


//Варіант 2
// ingredients.forEach(ingredient => {
//   const currentItem = document.createElement('li');
//   currentItem.textContent = ingredient;
//   currentItem.classList.add('item');
//   listWrapper.append(currentItem);
// });



// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

