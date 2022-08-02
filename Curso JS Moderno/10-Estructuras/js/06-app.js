const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('si puedes comprar')
}else if (!puedePagar && !usuario) {
    console.log ( 'No, no puedes compraar')
}else if (!usuario){
    console.log('Inicia session o saca una cuenta');
}else if (!puedePagar){
    console.log('Fondo Insuficientes');
}