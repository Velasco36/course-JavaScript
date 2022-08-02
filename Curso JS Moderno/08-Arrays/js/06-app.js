const carrito = [];

const product = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const Producto2 = {
    nombre: 'Celular',
    precio:800
}

const Producto3 = {
    nombre : 'Teclado',
    precio: 50

}

let resultado;

resultado = [...resultado, ...product];
resultado = [...resultado, ...Producto2];
resultado = [Producto3, ... resultado];
console.table(carrito);