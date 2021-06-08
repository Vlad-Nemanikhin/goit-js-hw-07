'use strict'

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (e)=>{
	if (e.currentTarget.value.trim() !== ""){
		spanEl.textContent = e.currentTarget.value;
	} else {
		
		spanEl.textContent = 'незнакомец';
		
	};

})
