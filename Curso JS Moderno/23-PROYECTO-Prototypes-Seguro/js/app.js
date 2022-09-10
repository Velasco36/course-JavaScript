// constructores
function Seguros(Marca, year, tipo){
    this.marca = Marca;
    this.year = year;
    this.tipo = tipo;
}



// Realiza la cotizacion con los datoss

Seguros.prototype.contizarSeguros = function(){

    /*
    1= Americado 1.15
    2= asiatico 1.05
    3= Europeo 1.35

    */
   let cantidad;
   const base = 2000;

   //console.log(this.marca)
    switch(this.marca){
        case '1':
            cantidad = base *1.15;
            break;
        case '2':
            cantidad = base *1.05;
            break;
        case '3':
            cantidad = base *1.35;
            break;
        default:
            break;
       }

       // Leer el año 
       const diferencia = new Date().getFullYear() -this.year;

       // cada año que la diferencia es mayor, el costo se va a reducir en 3 %
       cantidad -= ((diferencia *3 ) * cantidad )/ 100;
       console.log(cantidad);

       /*
       Si el seguro es basico se multiplica por 30% mas 
       si el seguro es complet se pultiplica por 50% mas 
       
       */

       if (this.tipo==='basico'){
           cantidad *=1.30;
       }else{
           cantidad *=1.50;
       }
       return cantidad;
   }

function UI() {}

// Muestra alerta en pantalla 
UI.prototype.mostrarMensaje = (mensaje, tipo)=>{
    const div = document.createElement("div");
    if (tipo ==='error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.innerHTML = `${mensaje}`;

    // insertar en el html
    const formulario =document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() =>{
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (total, seguros)=>{

    const {marca, year, tipo} = seguros;

    let textoMarca;

    switch(marca){
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
        default:
            break;

    }


    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `

        <p class="header">El resultado</p>
        <p class="font-bold">Marca: <span class="font-normal">  ${textoMarca} </span></p>
        <p class="font-bold">Year: <span class="font-normal">  ${year} </span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${tipo} </span></p>
        <p class="font-bold">Total: <span class="font-normal"> $ ${total} </span></p>
    `;
    const resultadoDiv = document.querySelector('#resultado');
    

    // Mostar el Spinner

    const spinner = document.querySelector('#cargando');
    spinner.style.display ='block';

    setTimeout(() =>{
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);

    },3000);
    
}


//LLen alas opcion de los años
UI.prototype.llenarOption = ()=>{
    const max = new Date().getFullYear(),
        min = max -20;

    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i --){
        let option = document.createElement('option');
        option.value = i;
        option.textContent =i;
        selectYear.appendChild(option);    
    }
}




// instanciar UI
const ui = new UI();




document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOption(); // llena el select con los años ....

});

const formulario = document.querySelector('#cotizar-seguro');







addEventListener();
function addEventListener(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada 
    const Marca = document.querySelector('#marca').value;
    // Leer el año seleccionado
    const year = document.querySelector('#year').value;

    // Leer el tipo de covertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (Marca === '' || year === '' || tipo === '') {

        ui.mostrarMensaje('Todos los campos son Obligatorios', 'error');
        console.log('Error')
            
        return;

    }
    ui.mostrarMensaje('Cotizando ...', 'exito');
    console.log('Cotizando...');

    // Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null) {
        resultados.remove();
    }

    // Instanciarlo el seguro

    const seguros = new Seguros(Marca, year, tipo);
    seguros.contizarSeguros();
    const total = seguros.contizarSeguros();

    console.log(seguros);

    // Utilizar el prototype que va a cotizar 
    ui.mostrarResultado(total, seguros);
    ui.mostrarMensaje('corizando', 'Exito');

}



