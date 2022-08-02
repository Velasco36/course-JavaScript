const carrito =[
    {nombre: 'monitor', precio: 500},
    {nombre:'television', precio: 100},
    {nombre:'tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    
]




for (let i =0; i < carrito.length; i++){
    console.log(carrito[i]);
}

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);

})

