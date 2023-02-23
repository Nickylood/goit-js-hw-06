const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', event => {
    const quantitySymbols = event.target.value.length

    const realQuantity = Number(inputRef.dataset.length)
    console.log(inputRef.dataset)

    if (quantitySymbols === realQuantity) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }

});