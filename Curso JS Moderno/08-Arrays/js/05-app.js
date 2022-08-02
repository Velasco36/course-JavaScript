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