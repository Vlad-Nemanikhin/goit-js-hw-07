'use strict'

const counter = document.querySelector('#value');

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const onClickBtnincrement = (e) => {
	counterValue += 1;
	counter.textContent = counterValue;
}
incrementEl.addEventListener('click', onClickBtnincrement)

const onClickBtndecrement = (e) => {
	counterValue -= 1;
	counter.textContent=counterValue;
}
decrementEl.addEventListener('click', onClickBtndecrement)

