const carrito =[
    {nombre: 'monitor', precio: 500},
    {nombre:'television', precio: 100},
    {nombre:'tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    
]

/*
const nuevoArrego = Carrito.map(function(producto){
    return `${producto.nombre} -precio: ${producto.precio}`;
})
*/

const nuevoArreglo = carrito.map(producto => `${producto.nombre} -precio: ${producto.precio}`)

/*

const NuevoArreglo2 = carrito.forEach( function(producto){

    return`${producto.nombre} - precio: ${producto.precio}`;
})
*/

carrito.forEach(producto => console.log(`${producto.nombre} -precio: ${producto.precio}`));


console.log(nuevoArrego);
console.log(NuevoArreglo2);