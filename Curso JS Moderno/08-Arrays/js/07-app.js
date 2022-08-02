const carrito = [];

const product = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const Producto2 = {
    nombre: 'Celular',
    precio:800
}

carrito.push(Producto2);
carrito.push(product);
const Producto3 = {
    nombre : 'Teclado',
    precio: 50

}

carrito.unshift(Producto3);
console.table(carrito);

/*
// Eliminar Ultimo elemento de un arreglo ...
carrito.pop();
console.table(carrito);

//Eliminar del inicio del arreglo ...
carrito.shift();
consol
*/

carrito.splice(3,1);
console.table(carrito);

