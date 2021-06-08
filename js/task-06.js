'use strict'

const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', (e) => {
	if (e.currentTarget.value.length === 6) {
		if (inputEl.classList.contains('invalid')) {
			inputEl.classList.remove('invalid');
		} 
		inputEl.classList.add('valid')
	} else {
		inputEl.classList.add('invalid')
	};
}) 