const product = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`EL Producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

const product2 = {
    nombre: "Mouse",
    precio: 3000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`EL Producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}


product.mostrarInfo();
product2.mostrarInfo();