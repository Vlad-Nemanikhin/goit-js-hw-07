'use strict'

const addEl = document.querySelector('[data-action="render"]');
const deleteEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls').firstElementChild;

let amount = 0;
let size = 30;


inputEl.addEventListener('input', (e) => {
	console.log(e.currentTarget.value)
	amount = e.currentTarget.value;
	return amount;
})

addEl.addEventListener('click', (e) => {
	console.log(e.target)
	
	for (let i = 0; i < amount; i += 1) {
		
		const divEl = document.createElement('div');
		divEl.style.backgroundColor = `#${Math.floor(Math.random() * 8 ** 8).toString(16)}`;
		
		
		divEl.style.width = `${size}px`;
		divEl.style.height = `${size}px`;
		size += 10;

		divEl.style.margin = '20px';
		console.log(divEl.style.height);
		boxesEl.append(divEl);
	}
})

deleteEl.addEventListener('click', (e) => {
	for (let i = 0; i < amount; i += 1) {
		if(boxesEl.hasChildNodes())
		boxesEl.removeChild(boxesEl.firstChild);
	}
	inputEl.value = "";
})      