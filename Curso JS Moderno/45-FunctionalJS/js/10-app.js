const obtenerNombre = info =>({
    mostrarNombre(){
        console.log(`Nombre:${info.nombre}`);
    }
})


const guardarEmail = (info) => ({
    agregarEmail(email){
        console.log(`Guardar email en: ${info.nombre}`)
        info.email = email;
    }
})


const obtenerEmail = (info) => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`);
    }
})

const ObtenerEMpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }

})

const obtenerPuestp = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
})

function Cliente ( nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info), 
        obtenerEmail(info),
        ObtenerEMpresa(info)
    )
}

function Empleado ( nombre, email, puesto){
    let info = {
        nombre, 
        email,
        puesto
    }
    return Object.assign (
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuestp(info)
    )
}

const cliente = Cliente('Miguel', 'miguel@gmail.com', 'codigo Con Juan');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@gmail.com');
cliente.mostrarEmail() ;
cliente.mostrarEmpresa();

console.log('================================================================')

const empleado = Empleado ('Pedro', 'pedro@gmail.com', 'Developer');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@gmail.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();

