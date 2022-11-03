let instancia = null;

class Persona {
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else {
            return instancia;
        }
    }
}

const persona = new Persona ('Juan', 'Correo@correo.com');
const  persona2 = new Persona('Karen', 'Correo@correo.com');

console.log(persona);
console.log(persona2);