const producto ={
    nombre:"Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    information: {
        medidas: {
            peso: '1kg',
            medida: 'lm'
        },
        fabrcacion: {
            pais: 'China'
        }
    }
}

//console.log(prducto);

console.log(producto.information.fabrcacion.pais);
