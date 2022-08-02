const pendientes =['Tarea', 'comer',Proyecto,'Estudiar javaScript'];

pendientes.forEach((pendientes, indice)=>{
    console.log(`${indice}:${pendientes}`)
})

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200, descuento: true},
    {nombre: 'Audifonnos', precio :300},
    {nombre: 'Teclado', precio :400},
    {nombre: 'Celular', precio :700},
]
const nuevoArreglo = carrito.forEach(producto =>producto.nombre);

const nuevoArreglo2 = carrito.map(producto =>producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);