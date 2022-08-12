const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets=[];

// event Listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo

    document.addEventListener('DOMContentLoaded', () => {
        tweets =JSON.parse( localStorage.getItem('tweets')) || [];



        console.log(tweets);

        crearHTML();
    })

}



// Funciones

function agregarTweet(e){
    e.preventDefault();

    //Textarea dnde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validacion

    if(tweet ===''){
        mostrarError('Un mensaje no puede ir vacio');

        return; // evita que se ejecute mas lines de codigo

    }
    console.log('agregando Tweets');

    
    const tweetObj= {
        id : Date.now(),
        tweet
    
    }
    
    // añadir al arreglo de los tweets
    tweets = [...tweets, tweetObj];

    // una vez agregado vamos a crear el html

    crearHTML();

    // Reinicir al formulario

    formulario.reset()
       
}

 

// mostrar Error

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina a alerta despues de 3 segundo)

    setTimeout(() => {
        mensajeError.remove();
        
    }, 3000);
}



function crearHTML(){

    limpiarHTML();

    if (tweets.length > 0){
        tweets.forEach( tweet => {

            //Agregar el boton de eliminar 

            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerHTML = 'X';

            // insertar el boton de eliminar
            btnEliminar.onclick = () =>{
                BorrarTweet(tweet.id);
            }

            // crear el html
            const li = document.createElement('li');

            // añade el texto
            li.innerHTML = tweet.tweet;

            //Asignar el boton 
            li.appendChild(btnEliminar);

            // insertarlo en el html
            listaTweets.appendChild(li);

            // Insertar en el html
            listaTweets.appendChild(li);

        });

    }
    sincronizarStorage();
}
// Elimminar el Tweet del DOM

function BorrarTweet(id){  
    console.log(" borrando ....", id);

    tweets = tweets.filter(tweet => tweet.id !== id);

    crearHTML();

}
// AAgregando los Tweets actuals a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


function limpiarHTML(){
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}







