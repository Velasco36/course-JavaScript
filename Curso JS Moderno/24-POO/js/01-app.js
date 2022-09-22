class CLiente {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: $(this.nombre), tu saldo es de $(this.saldo)`;

    }
    static bienvenida(){
        return `bienvenido al cajero`
    }
}

const Juan =new CLiente('Juan', 400);
console.log(Juan);
console.log(Juan.mostrarInformacion());
//console.log(Juan.bienvenida());
console.log(CLiente.bienvenida());

const Cliente2 = class {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}


const juan2 =new Cliente2('MIguel',400);
console.log(juan2)