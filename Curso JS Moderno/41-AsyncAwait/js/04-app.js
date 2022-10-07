function DescargarNuevosClientes(){
     return new Promise(resolve => {
        console.log('DescargarNuevosClientes');

        setTimeout(()=> {
            resolve('Los clientes Fueron Descargados');
        },5000);
     })
}

function DescargarNuevosPedidos(){
    return new Promise(resolve => {
       console.log('Descargando Pedidos');

       setTimeout(()=> {
           resolve('Los pedidos fueron descragados');
       },3000);
    })
}

const app = async () => {
    try {
      const respuesta = await Promise.all([DescargarNuevosClientes(), DescargarNuevosPedidos()]);
      console.log(respuesta[0])
      console.log(respuesta[1])
    }catch(error){
        console.log(error);
    }


}

app();
   