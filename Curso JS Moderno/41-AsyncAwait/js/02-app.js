function descargarClientes(){
    return new Promise((resolve, reject)=> {
        const error = false;

        setTimeout(()=> {
            if(!error){
                resolve('El listado de los clientes se descargo correctamente');
            }else {
                reject('Eroor en la conexión');
            }
        }, 3000);
    })
}


async function ejecutar(){
    try {
        console.log(1+1);
        const respusta = await descargarClientes();
        console.log( 2 *2);
        console.log(respusta)
    }catch(error){
        console.log(error);
    }
}

ejecutar();
