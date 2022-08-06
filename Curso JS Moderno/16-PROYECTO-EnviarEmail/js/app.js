const btnEnviar= document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

//variables para campos 
const email= document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners(){


    document.addEventListener('DOMContentLoaded', iniarApp);

    //Campos de formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);


}


//funciones
function iniarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// valida el formulario 
function validarFormulario(e) {
    if(e.target.value.length > 0) {
        console.log('Si hay algo')
    }else {
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todso los campos son Obligatorios');
    }    

    if(e.target.type == 'mail'){
        const resultado = e.target.value.indexOf('@');
        if(resultado< 0) {
            mostrarError();
        }
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add(
        'border',
        'border-red-500',
        'blackgroung-color-100',
        'text-red-500', 
        'p-3',
        'nt-5',
        'text-center',
        'error');
    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }

}
