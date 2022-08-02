/*
for(let i=0; i<=10; i++) {
    console.log(`Numero ${i}`);
}
for (let i=1; i<=20; i++) {
    if (i% 2 ==0){
        console.log(`EL numero ${i} es PAR`);
    }else{
        console.log(`El numero ${i} es IMPAR`);
    }
}

*/

const CARRITO = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonnos', precio :300},
    {nombre: 'Teclado', precio :400},
    {nombre: 'Celular', precio :700},
]

console.log (CARRITO.length);

for (let i = 0; 1 < CARRITO.length; i++) {
    console.log (CARRITO[i].nombre);
}
