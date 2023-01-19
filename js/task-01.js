
const allCategories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${allCategories.length}`);

//const ul = document.querySelectorAll('#categories>li');

allCategories.forEach(el => {
    const category = el.querySelector('h2').textContent;
    const categoryList = el.querySelector('ul').children.length;

    console.log(`Category: ${category} Elements: ${categoryList}`,
);
});


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5