const producto = {
    nore:"Monnitor 20 pulgadas",
    precio: 300,
    disponible: true,

}

// Destructuring

const {disponible} = producto;

console.log(disponible);

//Destructuring con Arreglos
const numero = [10,20,30,40,50];

const [primero, ...tercero] = numero;

console.log(tercero);

