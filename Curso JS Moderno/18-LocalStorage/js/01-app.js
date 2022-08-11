localStorage.setItem('nombre', 1);

const producto ={
    nombre: 'Monitos 24 pulgadas',
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];
localStorage.setItem('mses', JSON.stringify(meses));