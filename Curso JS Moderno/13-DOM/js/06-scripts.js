const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);
/*
console.log(encabezado.innerText); // Si en el CSS -visibility: hidden; no lo va a aencontrar
console.dir(encabezado.textContent); // si lo va a encontrar
console.log(encabezado.innerHTML); // se trae el HTML

const nuevoHeading = 'Nuevo Hading';
document.querySelector('.contenido-h1').textContent = nuevoHeading;
*/

const imagen = document.querySelector('.card imagen');
imagen.src = 'imaghacer2.jpg';