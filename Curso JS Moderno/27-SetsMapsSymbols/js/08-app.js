// Veamos unas erie de iteradores que se pueden considerar nuevos en JavaScript, ya vimos algunos en videos anteriores y usualmente con un for un map estarás bien, pero hay otros que pueden facilitarte tu código.


// Entries Iterador

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');

// entries a las ciudades
for( let entry of ciudades.entries() ){
    console.log(entry);
}

// entries a las ordenes
for( let entry of ordenes.entries() ){
    console.log(entry);
}

// entries a los datos
for( let entry of datos.entries() ){
    console.log(entry);
}


// Values iterator
// values a las ciudades
for(let value of ciudades.values()) {
    console.log(value);
}

// values a las ordenes
for( let value of ordenes.values() ){
    console.log(value);
}

// values a los datos
for( let value of datos.values() ){
    console.log(value);
}

