export const nombreCliente = 'miguel'
export const ahorro = 5000;

export function mostrarInformacion(nombre, ahorro){
    return `cliente ${nombre} -Ahorro: ${ahorro}`;
}

export  function tieneSaldo(ahorro){
    if(ahorro > 0) {
        console.log('tiene saldo');
    }else{
        console.log('No posees saldo tiene saldo');
    }
}

export class Cliente {
    constructor (nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;

    }
    mostrarInformacion(){
        return `cliente: ${this.nombre} -Ahorro ${this.ahorro} `;
    }

}
export default function nuevaFuncion(){
    console.log('Este es el export default')
}