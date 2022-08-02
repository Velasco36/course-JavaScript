
const carrito =[
    {nombre: 'monitor', precio: 500},
    {nombre:'television', precio: 100},
    {nombre:'tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    
]

// crea un nuevo arreglo con .map mentras que con el ForEach no puedes esa es la direfencia para lo de mas funciona igual
const nuevoArrego = Carrito.map(function(producto){
    return `${producto.nombre} -precio: ${producto.precio}`;
})


const NuevoArreglo2 = carrito.forEach( function(producto){

    return`${producto.nombre} - precio: ${producto.precio}`;
})

console-log(nuevoArrego);
console.log(NuevoArreglo2);