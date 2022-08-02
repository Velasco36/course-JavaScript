const encabezado = document.querySelector('h1')
/*
encabezado.style.backgroundColor= 'blue';
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.TextTransform = 'uppercase';
*/

const card =document.querySelector('.card');
card.classList.add('Nueva-clase', 'Segunda-clase');
card.classList.remove('.card');
console.log(card.classList);
