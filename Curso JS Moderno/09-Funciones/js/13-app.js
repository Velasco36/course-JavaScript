const reproductor = {
    cancion: '',
    reproductor: id => console.log(`Reproducir cancione con el id ${id}`),
    pausar: () => console.log('pausando ...'),
    borrar: id => console.log(`Borrando Cancion ... ${id}`),
    crearPlaylist: nombre=> console.log(`Creando la Playlist de ${nombre}`),
    reproducirPlaylist: nombre=> console.log(`Reproduciendo la Playlist de ${nombre}`),

    set Nuevacancion(cancion){
        this.cancion =cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get ObtenerCancion() {
        console.log(`$(this.cancion)`);
    }
}


reproductor.Nuevacancion= 'Una Lady como tu'
reproductor.ObtenerCancion;

reproductor.borrar(30);
reproductor.crearPlayList('la bamba' )