/*
for(let i=0; i<=10; i++) {
    if (i ===5){
        console.log("CINCO")
        continue;
        //break;
    }
    console.log(`Numero ${i}`);
    
}
*/


const CARRITO = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200, descuento: true},
    {nombre: 'Audifonnos', precio :300},
    {nombre: 'Teclado', precio :400},
    {nombre: 'Celular', precio :700},
]

for (let i = 0; i < CARRITO.length; i++){
    if(CARRITO[i].descuento){
        console.log(`El Articulo ${CARRITO[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(CARRITO[i].nombre);
}