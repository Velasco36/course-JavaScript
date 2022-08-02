const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
/*
console.log(navegacion)
console.log(navegacion.childNodes) // LOs espacios en blanco son considerados elementos
console.log(navegacion.children) // Los espacios en blanco son considerados elementos


console.log(avegacion.childer[1].nodeName)
console.log(navegacion.children[1].nodeType)
*/
const card = document.querySelector('.card');

/*
card.children[1].children[1].textContent = 'Nuevo heading desde travesing the dom'

card.childer[0].src = 'img/hacer3.jpg';
*/

// Traversiong the son to father
/*
console.log(card,parentNode);
console.log(card.parentElement.parentElement.parentElement);

console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);
*/