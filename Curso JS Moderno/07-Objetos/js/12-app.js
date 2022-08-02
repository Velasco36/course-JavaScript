const product = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Object Constructor

function Product(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;    
}

const product2 = new Product('Monitor', 500);
console.log(product2);

const product3 = new Product('TABLE', 700);
console.log(product3);