import nuevaFuncion,{nombreCliente, ahorro , mostrarInformacion, tieneSaldo,Cliente} from './cliente.js';
import {Empresa} from './empresa.js';


nuevaFuncion();
console.log (ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

console.log(nombreCliente);

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion());

//Importar Emprresa

const empresa = new Empresa('quiero jugar magic', 100, 'lo vas a hacer');
console.log(empresa.mostrarInformacion())