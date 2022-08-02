const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validaFormulario);

function validaFormulario(e) {
    e.preventDefault();
    console.log('Consultar api');
    console.log(e.target.action);
}