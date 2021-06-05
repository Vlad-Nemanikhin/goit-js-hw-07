'use strict'
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

const createItems = el => {
	return ingredients.map(item => {
		const liEl = document.createElement('li');
		liEl.textContent = item;
		return liEl;
	});
}

const itemsEl = createItems(ingredients);

ingredientsListEl.append(...itemsEl);


