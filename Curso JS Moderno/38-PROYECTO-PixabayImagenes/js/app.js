const resultado = document.querySelector('#resultado');
const paginacionDiv = document.querySelector('#paginacion');
const formulario = document.querySelector('#formulario');


const registroPorPagina =40;
let totalPaginas;
let iterador;
let paginaActual =1;

window.onload = () => {
   
    formulario.addEventListener('submit', validarFormulario);
    //paginacionDiv.addEventListener('click', direccionPaginacion);
}

function validarFormulario(e){
    e.preventDefault();

    const terminoBsqueda = document.querySelector('#termino').value;

    if (terminoBsqueda === ''){
        mostrarAlerta('Agregar Termino de Busqueda');
        return;
    }
    busquedaImagenes();
}


function mostrarAlerta(mensaje){

    
    const alerta = document.querySelector('.bg-red-100');

    if (!alerta){
        const alerta = document.createElement('p');

        alerta.classList.add('bg-red-100', "vorder-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-auto", "mt-6", "text-center");

        alerta.innerHTML=`
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        formulario.appendChild(alerta);

        setTimeout (()=>{
            alerta.remove();
        },4000);
    }
}

function busquedaImagenes(){

    const termino = document.querySelector('#termino').value;
    const key = '30327467-37421c40fc13a92ee70f6b7fe';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&${registroPorPagina}&${paginaActual}`;

    console.log(url);

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            totalPaginas = calcularPaginas(resultado.totalHits)
            console.log(totalPaginas);
            mostrarImagenes(resultado.hits)
        })
}

function *crearGenerador(total){
    console.log(total)
    for(let i =1 ; i<= total ; i++){
        yield i;
    }
}

function calcularPaginas(total){
    return parseInt(Math.ceil(total/ registroPorPagina));
}

function mostrarImagenes(imagenes){
    console.log(imagenes);

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);

    }

    imagenes.forEach( imagen => {

        const { likes, views, previewURL, largeImageURL } = imagen;
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
                <div class="bg-white ">
                    <img class="w-full" src=${previewURL} alt={tags} />
                    <div class="p-4">
                        <p class="card-text">${likes} Me Gusta</p>
                        <p class="card-text">${views} Vistas </p>
        
                        <a href=${largeImageURL} 
                        rel="noopener noreferrer" 
                        target="_blank" class="bg-blue-800 w-full p-1 block mt-5 rounded text-center font-bold uppercase hover:bg-blue-500 text-white">Ver Imagen</a>
                    </div>
                </div>
            </div>
            `;
    });


    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }
    imprimirPaginador();
}





function imprimirPaginador(){
    iterador =crearGenerador(totalPaginas);

    while(true){
        const {value, done}= iterador.next();
        if(done) return;


        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'uppercase', 'rounded')

        boton.onclick =() =>{
            paginaActual = value;

            busquedaImagenes();
        }


        paginacionDiv.appendChild(boton);
    }
}