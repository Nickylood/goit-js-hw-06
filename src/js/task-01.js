const categoryCounter = document.querySelectorAll('.item') 

console.log(`Number of categories: ${categoryCounter.length}`)

categoryCounter.forEach(item => {
    
    const categoryHeader = item.querySelector('h2')
    console.log(`Category: ${categoryHeader.textContent}`);

    const elements = item.querySelectorAll('li')
    console.log( `Elements: ${elements.length}`);
});


