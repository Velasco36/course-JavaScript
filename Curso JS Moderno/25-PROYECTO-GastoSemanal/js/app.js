const formulario = document.getElementById('agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');


// evento 

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregandoGastos);
    gastosListado.addEventListener('click', eliminarGasto);

}

// classes
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos= [...this.gastos, gasto];
        this.calcularRestante();
        console.log(this.gastos)
    }

    eliminarGasto(id){
        //this.gastos = [...this.gastos, gasto];
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        this.calcularRestante();
        console.log('desde la clase');
    }
    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto)=> total + gasto.cantidad,0);
        this.restante = this.presupuesto - gastado;
    }

}

class UI{
    
    insertarPresupuesto( cantidad ){
        
        const {presupuesto, restante}= cantidad;

        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert');

        if (tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        //insertar en el html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // quitar en el html
        setTimeout(()=> {
            divMensaje.remove();
        },3000);

    }

    mostrarGastos(gastos){
        this.limparHTML(); //elimina el html previo
        //iterar sobre los gatos
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;

            // creaar un Li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id= id;

            // Agregar gastos al html
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;

            //boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.onclick = ()=>{
                eliminarGasto(id);
            }

            nuevoGasto.appendChild(btnBorrar);


            //gregar al html
            
            gastosListado.appendChild(nuevoGasto);
        });
    }
    limparHTML(){
        while (gastosListado.firstChild){
            gastosListado.removeChild(gastosListado.firstChild);  
        }
            
    }
    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }
    
    comprobarPresupuesto(presupuestoObj) {
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        // comprobar el 25%
        if( (presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if ((presupuesto/2)> restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        }else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }


        //si el total es menor a o
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agptado', 'error');
            formulario.querySelector('button[type="submit"]').disabled=true;
        }
    }
}


// Intanciar 
const ui = new UI();

let presupuesto;





// funciones
function preguntarPresupuesto(){
    const presupuuestoUsuaro = prompt('¿Cual es tu prespuesto ?');
    console.log ( Number (presupuuestoUsuaro));
    if (presupuuestoUsuaro === "" || presupuuestoUsuaro === null || isNaN(presupuuestoUsuaro) ||  presupuuestoUsuaro <=0){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuuestoUsuaro);
    console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);
}

//Añadiendo gastos
function agregandoGastos(e){
    e.preventDefault();

    //leer los gastos del formulario

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //validar 
    if (nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    }else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('cantidad no  valida', 'error');
        return;
    }


    // Generar un Objecto

    const gasto = {nombre,cantidad, id:Date.now()}
    console.log('agregando gastos');

    //añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    ui.imprimirAlerta('Gasto agreagado Correctamente');

    // imprimir los gatos
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

    //Reiniciar el formulario
    formulario.reset();
}
function eliminarGasto(id){
    presupuesto.eliminarGasto(id);

    // elimina los gasos del html
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}


