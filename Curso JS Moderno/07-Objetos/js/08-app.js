"use strict";

const producto ={
    nombre:"Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}
// No permite modificar agg or delete


Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;


console.log(producto);

console.log(Object.isFrozen(producto));