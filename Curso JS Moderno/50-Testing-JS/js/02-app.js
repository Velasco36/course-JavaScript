function suma(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

let resultado =  suma(1,2);

let esperado = 3;
expected(esperado).toBe(resultado);
resultado = restar(10,5);
esperado = 4;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);



function expected (esperado){
    return {
        toBe(esperado){
            if (resultado !== esperado){
                console.error(`el ${resultado}  es diferente a lo esperado; la prueba no paso`)
            }else{
                console.log('La prueba paso satisfactoriamente')
            }
            
        },
        toEqual(resultado){
            if (resultado !== esperado){
                console.error(`el ${resultado}  es diferente a lo esperado; la prueba no paso`)
            }else{
                console.log('La prueba paso satisfactoriamente')
            }

        }
    }
}