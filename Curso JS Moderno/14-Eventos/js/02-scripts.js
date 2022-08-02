const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('mouseout', () =>{
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';

})

nav.addEventListener('dblclick', () =>{
    console.log('Entrandi en la navegacion');
    nav.style.backgroundColor = 'white';
})

// mousedown - similiar al click
// click
//dblclick = doble click
// mouseup = cuando sueltas el mouse
