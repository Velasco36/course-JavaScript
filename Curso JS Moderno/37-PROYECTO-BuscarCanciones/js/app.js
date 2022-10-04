import {API} from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e) {
    e.preventDefault();
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        UI.divMensajes.innerHTML = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
             UI.divMensajes.innerHTML = '';
             UI.divMensajes.classList.remove('error');
        }, 3000);
   } else {
        // El formulario esta completo, realizar consulta a la API
        new API(artista, cancion);
   }

};
