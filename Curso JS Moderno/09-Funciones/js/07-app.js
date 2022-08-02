iniciarApp();

function iniciarApp(){
    console.log("iniciando app ");
    segundaFuncion();
};

function segundaFuncion(){
    console.log('Desde la segunda Funcion');
    usuarioAutenticado(pablo);
}

function usuarioAutenticado(usuario){
    console.log('Authenticndo usuario espere ....');
    console.log(`Usuario authenticado extitosamente : ${usuario}`);

}