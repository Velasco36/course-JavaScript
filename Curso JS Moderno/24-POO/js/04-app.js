class Cliente {
    #nombre
    setNombre(nombre){
        this.#nombre =nombre;
    }

    getNombre(){
        return this.#nombre;
    }

}

const juan = new Cliente();
juan.setNombre('juan');
console.log(juan.getNombre());
/*
    constructor(nombre,saldo){

        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;

    }
    static bienvenida(){
        return `bienvenido al cajero`
    }
}

const Juan =new CLiente('Juan', 400);
console.log(Juan.mostrarInformacion());
//console.log(juan.#nombre); 

*/