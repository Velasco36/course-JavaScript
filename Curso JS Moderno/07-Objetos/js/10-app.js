const Product = {
    nombre: "MOnitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medida = {
    peso:"1kl",
    medida: "1m"
}



console.log(Product);
console.log(medida);


// unir dos objetos en una sola variable 
const resultado = Object.assign(Product,medida);

// Spread OPerador o Rest OPerator

const resultado2 = {...Product.Product, ...medida};

console.log(resultado);
console.log(resultado2);