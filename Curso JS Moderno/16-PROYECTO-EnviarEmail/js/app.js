const btnEnviar= document.querySelector('#enviar');
const btnReset= document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//variables para campos 
const email= document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

eventListeners();
function eventListeners(){


    document.addEventListener('DOMContentLoaded', iniarApp);

    //Campos de formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //Reiniciar el formulario
    btnReset.addEventListener('submit', resetearFormulario);

    // enviar email

    formulario.addEventListener('submit', enviarEmail);


}


//funciones
function iniarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// valida el formulario 
function validarFormulario(e) {

    //ELimina los errores



    if(e.target.value.length > 0) {
        //console.log('Si hay algo')
        // elimina los errores ...
        const error = document.querySelector('p.error');
            if (error!==null) {
                error.remove();
            }
        

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son Obligatorios');
    }    

    if(e.target.type === 'email'){
        
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
            if (error !== null) {
                error.remove();
            }
           

            e.target.classList.remove('borde', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
            console.log('Email valido')
        }else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no valid')
            
            console.log('Email  no valido')
            
        }
        
    }
    if (er.test(email.value) && asunto.value !== "" && mensaje.value !== ""){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
        console.log('pasaste la validación')
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

// envia el email
function enviarEmail(e){
    e.preventDefault();

    //Muestra el spinner

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';


    // Despues de 3 segundos ocultar el spinner y muestra el mensaje
    setTimeout  ( ()=>{
        spinner.style.display = "none";


        // mensaje que se dice ue se envio corretamente       
        const parrafo= document.createElement('p');
       
        parrafo.textContent = 'El mensaje se envio corretamente';
        parrafo.classList.add('text-center', 'ny-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');


         // inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);
        setTimeout(()=>{
            parrafo.remove();
        },5000);
    }, 3000);
}



// funcion para resetear el formulario
function resetearFormulario(){
    formulario.reset();
    iniarApp();
}
