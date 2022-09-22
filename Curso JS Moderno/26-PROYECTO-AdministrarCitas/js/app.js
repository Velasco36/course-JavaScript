// campos del frmulario

const mascotaInput = document.querySelector('#mascota');
const propietarioinput = document.querySelector('#propietario');
const telefonoinputo = document.querySelector('#telefono');
const fechainput = document.querySelector('#fecha');
const horainput = document.querySelector('#hora');
const sintomasinput = document.querySelector('#sintomas');


//UI
const formulario = document.querySelector('#nueva-cita');

const contenedorCitas = document.querySelector('#citas');


let editando;

class Citas {

    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }
    eliminarCita(id){
        this.citas = this.citas.filter(cita=> cita.id !== id);
    }

    editarCita(citaActualizada){
        this.citas =this.citas.map(cita=> cita.id === citaActualizada.id ? citaActualizada : cita)

    }

}

class UI{

        imprimirAlerta(mensaje, tipo){
            //  crear el div
            const divMensaje = document.createElement('div');
            divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

            //Agregar clase en base al tipo de error

            if(tipo === 'error'){
                divMensaje.classList.add('alert-danger');
            }else{
                divMensaje.classList.add('alert-success');
            }

            // mensaje de error
            divMensaje.textContent =mensaje;

            //agregar al Dom
            document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));
            setTimeout( ()=>{
                divMensaje.remove();
            },5000);
            
        }
        imprimirCitas({citas}){
            this.limpiarHTML();
            console.log(citas);

            citas.forEach(cita => {
                const {mascota, propietario, telefono, fecha, hora, sintomas, id}= cita;

                const divCita = document.createElement('div');
                divCita.classList.add('cita', 'p-3');
                divCita.dataset.id = id;

                // Scripting de los elementos de la cita
                const mascotaParrafo = document.createElement('h2');
                mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
                mascotaParrafo.textContent = mascota;

                const propietarioParrafo = document.createElement('p');
                propietarioParrafo.innerHTML = `
                    <span class="font-weight-bolder">Propietario: </span> ${propietario}
                `;
                const telefonoParrafo = document.createElement('p');
                telefonoParrafo.innerHTML = `
                    <span class="font-weight-bolder">telefono: </span> ${telefono}
                `;
                const fechaParrafo = document.createElement('p');
                fechaParrafo.innerHTML = `
                    <span class="font-weight-bolder">fecha: </span> ${fecha}
                `;
                const horaParrafo = document.createElement('p');
                horaParrafo.innerHTML = `
                    <span class="font-weight-bolder">hora: </span> ${hora}
                `;
                const sintomasParrafo = document.createElement('p');
                sintomasParrafo.innerHTML = `
                    <span class="font-weight-bolder">sintomas: </span> ${sintomas}
                `;                

                //Button to delete the date
                const btnEliminar = document.createElement('button');
                btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
                btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
                btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'


                btnEliminar.onclick = () =>eliminarCita(id)
    
                //añade el boton de editar
                const btnEditar = document.createElement('button')
                btnEditar.classList.add('btn', 'btn-info');
                btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
                btnEditar.onclick = ()=> cargarEdicion(cita);



                // agregar los parrafos al divCita
                divCita.appendChild(mascotaParrafo);
                divCita.appendChild(propietarioParrafo);
                divCita.appendChild(telefonoParrafo);
                divCita.appendChild(fechaParrafo);
                divCita.appendChild(horaParrafo);
                divCita.appendChild(sintomasParrafo);
                divCita.appendChild(btnEliminar);
                divCita.appendChild(btnEditar);

                //agregar la cita en el html
                contenedorCitas.appendChild(divCita);
            })
            
        }
        limpiarHTML() {
            while(contenedorCitas.firstChild){
                contenedorCitas.removeChild(contenedorCitas.firstChild);
            }
        }
        
        
}


const ui= new UI();
const administrarCitas = new Citas();

eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('input', datosCita);
    propietarioinput.addEventListener('input', datosCita);
    telefonoinputo.addEventListener('input', datosCita);
    fechainput.addEventListener('input', datosCita);
    horainput.addEventListener('input', datosCita);
    sintomasinput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

// Objecto con la informacion de la cita
const citaObj ={
    mascota: "",
    propietario: "",
    telefono: "",
    fecha : "",
    hora: "",
    sintomas: "",
}

// Agrega datos al Objecto de la cita
function datosCita(e){
    citaObj[e.target.name]= e.target.value;

    //console.log(citaObj);

}

// Valida y agrea una nueva cita a la clase citas
function nuevaCita(e){

    e.preventDefault();
    //Extraer la informacion del Objeto de citas
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    //validar
    if( mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '', sintomas ===''){
        ui.imprimirAlerta('Todos los campos son Obligatorios', 'error');
        return;
    }

    if(editando){

        ui.imprimirAlerta('Editando correctamete');

        // pasar el objecto de la cita a edicion

        administrarCitas.editarCita({...citaObj});


        // regresar el valor
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        // Quitar modo edicion
        editando = false;
        console.log('Modo Edicion')
    }else{

    citaObj.id = Date.now();

    // Creando una nueva cita 
    administrarCitas.agregarCita({...citaObj}); 
    console.log('Modo Nueva Cita')


    // mesnsaje de aggregado correctamente
    ui.imprimirAlerta('se ha agregado correctamente');
    }
    // creando una nueva cita


    reiniciarObjeto();

    formulario.reset();

    ui.imprimirCitas(administrarCitas);

}

function reiniciarObjeto(){
    citaObj.mascota = '',
    citaObj.propietario='',
    citaObj.telefono='',
    citaObj.fecha='',
    citaObj.hora='',
    citaObj.sintomas= ''
}


function eliminarCita(id) {
    console.log(id);
    //eliminarCita
    administrarCitas.eliminarCita(id);

    // Muestra un mensaj
    ui.imprimirAlerta('La cita se elimino correctamente');

    // refrescar las citas
    ui.imprimirCitas(administrarCitas);
}
// carga los datos y el modo edicion
function cargarEdicion(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    // Llenar los input 

    mascotaInput.value = mascota;
    propietarioinput.value = propietario;
    telefonoinputo.value = telefono;
    fechainput.value = fecha;
    horainput.value = hora;
    sintomasinput.value = sintomas;


    //LLenar el Objecto

    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardaar Cambios';

    editando = true;
}