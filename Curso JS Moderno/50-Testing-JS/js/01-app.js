function suma(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

let resultado =  suma(1,2);

let esperado = 3;

if (resultado !== esperado){
    console.error(`el ${resultado}  es diferente a lo esperado; la prueba no paso`)
}else{
    console.log('La prueba paso satisfactoriamente')
}

resultado = restar(10,5);
esperado = 5;

if (resultado !== esperado){
    console.error(`el ${resultado}  es diferente a lo esperado; la prueba no paso`)
}else{
    console.log('La prueba paso satisfactoriamente')
}