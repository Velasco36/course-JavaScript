class CLiente {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;

    }
    static bienvenida(){
        return `bienvenido al cajero`
    }
}

//Herencia
class Empresa extends CLiente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){ // Reescribir el metodo
        return `Bienvenido al cajero de  empresa`

    }
}


const Juan =new CLiente('Juan', 400);
const empresa = new Empresa ('codigo con miguel', 500, 1872653, 'developer');
console.log(empresa);
console.log(empresa.mostrarInformacion())

console.log(CLiente.bienvenida());
console.log(Empresa.bienvenida());