//los set no permiten valores duplicados y se pueden iterar

const carrtito = new Set();

carrtito.add('camisa');
carrtito.add('disco#1');
carrtito.add('disco#2');
carrtito.add('disco#3');

console.log(carrtito.delete('Guitarrar'));


// console.log(carrtito.has('Guitarrar'));

console.log(carrtito.size);
carrtito.forEach((producto, index, pertenece)=> {

    // console.log(producto
    console.log(index)
    console.log(pertenece);
})

console.log(carrtito);

// De los siguentes arreglos eliminar el duplicado

const numeros = [ 10,20,30,40,50,10,20, 30, 40, 50, 10, 20, 30, 50, 10, 70,80,90,100,200,300,400,500,600,]

const noDuplicados =new Set(numeros);
 console.log(noDuplicados);