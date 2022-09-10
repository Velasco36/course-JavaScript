function Cliente ( nombre, saldo){
    this.nombre = nombre ;
    this.saldo = saldo ;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;
    if (this.saldo = 10000){
        tipo = "Gold";
    }else if (this.saldo = 5000){
        tipo = "Platinium";
    }else {
        tipo = "Normal";
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo=function(){
    return `Nombre: ${this.nombre}, Saldo : ${this.saldo}, Tipo de cliente: ${this.tipoCliente()} `
}


cliente.prototype.nombreClienteSaldo = function(){
    return  `Nombre: ${this.nombre}, Saldo : ${this.saldo}, Tipo de cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo = function(retirar){
    this.saldo = retirar

}

function Persona(nombre, saldo, Telefono){
    Cliente.call(this, nombre, saldo);
    thistelefono = Telefono;
}

Persona.prototype = object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instanciarlo
const juan = new Persona('Juan', 5000, 10123464);
console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.Telefono}`
}
