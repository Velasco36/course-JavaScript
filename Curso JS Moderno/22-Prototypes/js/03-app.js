function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;

}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000){
        tipo = 'Gold';
    }else if (this.saldo > 5000){
        tipo = 'Platinium';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo = function(retira) {
    this.saldo -= retira
}

// Instanciarlo

const pedro = new Cliente(`Pedro`, 6000);
console.log( pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo() );
pedro.retirarSaldo(1000);
console.log( pedro.nombreClienteSaldo() );
console.log(pedro);
