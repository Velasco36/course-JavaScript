"use strict";

const producto ={
    nombre:"Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}


Object.seal(producto);
 
// permite modifcar un objecto pero no permite agg or delete
 producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;


console.log(producto);

console.log(Object.isFrozen(producto));