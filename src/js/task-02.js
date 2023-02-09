const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients')

const fullIngrediens = [];

ingredients.forEach(ingredient => {
  
  const itemLi = document.createElement('li');
  
  itemLi.textContent = ingredient
  
  itemLi.classList.add('item');

  fullIngrediens.push(itemLi);
});

console.log(fullIngrediens);
ingredientsList.append(...fullIngrediens);