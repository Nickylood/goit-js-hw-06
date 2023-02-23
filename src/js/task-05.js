const inputRef = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

inputRef.addEventListener('input', onInput);

function onInput(event) {
 output.textContent = event.target.value || 'Anonymous'

}