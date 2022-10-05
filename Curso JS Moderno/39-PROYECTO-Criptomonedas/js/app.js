const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda= {
    moneda: '',
    criptomodena: ''
}

const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
});


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

function consultarCriptomonedas() {

    // Ir  AtoPLISTS Y Despues market capp 
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then( respuesta => respuesta.json()) // Consulta exitosa...
        .then( resultado => obtenerCriptomonedas(resultado.Data)) // 
        .then( criptomonedas  =>  selectCriptomonedas(criptomonedas) )

}

function selectCriptomonedas(criptomodenas) {
    criptomodenas.forEach(cripto =>{
        const {FullName, Name}= cripto.CoinInfo;

        const option  = document.createElement('option');
        
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    })
}

function leerValor(e){
    
    objBusqueda[e.target.name] = e.target.value;
    console.log(e.target.value);
}

function submitFormulario(e){
    e.preventDefault();

    const { moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    ConsultarApi();

}

function mostrarAlerta(mensaje){
    const ExisteError = document.querySelector('.error');
    if(!ExisteError){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
    
        //Mensaje de error
    
        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);
    
        setTimeout(()=>{
            divMensaje.remove();
        },700)

    }
    
}

function ConsultarApi(){
    const {moneda, criptomoneda}= objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();
    fetch(url)
       .then((respuesta) => respuesta.json())
      .then(cotizacion =>{
        mostrarCOtizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
      })

}

function mostrarCOtizacionHTML(cotizacion){

    limpiarHTML();

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE}= cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = ` 
    El Precio es : <span>${PRICE}</span> `


    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>Precio mas alto del dia <pan>${HIGHDAY}</pan>`


    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<p>Precio mas bajo del dia <pan>${LOWDAY}</pan>`


    const ultmasHoras = document.createElement('p');
    ultmasHoras.innerHTML = `<p>Varion de las Ultimas 24 horas <pan>${CHANGEPCT24HOUR}%</pan>`


    const UltimaActualizacion = document.createElement('p');
    UltimaActualizacion.innerHTML = `<p>Ultima actualizacion <pan>${LASTUPDATE}</pan>`

    

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultmasHoras);
    resultado.appendChild(UltimaActualizacion);

}


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner(){
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    
        spinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>    
    `;

    resultado.appendChild(spinner);
    

    

    

}