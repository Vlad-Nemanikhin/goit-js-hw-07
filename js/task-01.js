'use strict'
const categoryEl = document.querySelector('#categories');
console.log(categoryEl);
const itemsEl = categoryEl.children;
console.log(`В списке ${itemsEl.length}  категории.`);
for (const item of itemsEl) {
	const categoryEl = item.firstElementChild.textContent;
	const elAmount = item.lastElementChild.children.length;
	console.log(`Категория: ${categoryEl}`);
	console.log(`Количество элементов: ${elAmount}`);
}
