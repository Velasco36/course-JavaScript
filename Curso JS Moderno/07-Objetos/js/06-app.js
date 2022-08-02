const producto ={
    nombre:"Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    information: {
        medidas: {
            peso: '1kg',
            medida: 'lm'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}


const {nombre, information, information: {fabriacion, fabricacion: pais}} = producto;

console.log(nombre);
console.log(information);
console.log(fabricacion);
console.log(pais);

