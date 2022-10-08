import {obtenerCliente, editarCliente} from './API.js';
import { mostrarAlerta, validar } from './funciones.js';
(function(){

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener("DOMContentLoaded", async () => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get("id"));
        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener("submit", validarCliente);
    });

    function mostrarCliente(cliente){
        //console.log(cliente);

        const {nombre, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        empresaInput.value = empresa;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e){
        e.preventDefault();


        const cliente ={
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        console.log(cliente);
        //console.log(Object.values(cliente).every(input => input !== ''));

        if (validar(cliente)){
            mostrarAlerta('Todos los campos son Obligatorios')
            return;
        }


        editarCliente(cliente);
    }


})();