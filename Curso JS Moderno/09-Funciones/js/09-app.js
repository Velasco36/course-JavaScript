const reproductor = {
    reproducir: function(id){
        console.log(`reproduciendo cancion con el id $(id)`);
    },
    pausar: function(){
        console.log(`pausando ...`);
    },
    borrar: function(){
        console.log(`borrando cancion ... $(id)`);
    },
    crearPlayList: function(nombre){
        console.log(`Reproduciendo la playlist de $(nombre)`)
    }
}

reproductor.reproducir(38)
reproductor.pausar(16)
reproductor.borrar(63)
reproductor.crearPlayList(Rricardo-Arjona)