let total = 0;
function  agregarCarrito(precio){
    return total +=precio;

}

function calcularImpuesto(total){
    return total * 0,15;
}
total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);
const totalPagar = calcularImpuesto(total);

console.log(`El total a agar es de ${totalPagar}`);
console.log(total);