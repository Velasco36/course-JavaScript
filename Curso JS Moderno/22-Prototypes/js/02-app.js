function Cliente ( nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);


function formatearClient(cliente){
    const {nombre, saldo}= cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log( formatearClient(juan) );

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const ccj = new Empresa( 'Codigo con Juan', 400);
console.log( ccj );