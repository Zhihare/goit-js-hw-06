const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const conteiner = document.querySelector('#ingredients');

const contRef = ingredients.map((ingredient) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  return liEl;
});

conteiner.append(...contRef);

