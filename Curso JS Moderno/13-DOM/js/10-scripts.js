const enlace = document.createElement('A');

// Agregando el texto
enlace.textContent = 'Nuevo Enlace';

//añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);
enlace.target= "_blank";
enlace.setAttribute('data-enlace', 'Nuevo-enlace');
enlace.classList.add('Alguna-clase');
enlace.onclick= miFunction;

// Seleccionar la navegacion
const navegacion = document.querySelector('navegacion');
//console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFunction() {
    alert('Diste click')
}

// Creaar un CARD
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('Categoria','Concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('Titulo');

const parrafo3 = document.createElment('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de informacion
const info = document.createElement('info');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2jpg'

// crear el card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);

// asignat info

card.appendChild(info);

// insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);









console.log(info);