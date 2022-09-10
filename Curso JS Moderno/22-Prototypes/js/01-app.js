const cliente = {
    nombre: 'juan',
    saldo : 500
}

console.log ( cliente);

function Cliente1 (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente1('juan', 500);
console.log (juan)