const automovil = {
    modelo: 'camara',
    year: '2022',
    motor: 'V8'
}

/*
for (let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`)
}
*/
for (let [llave, valor]of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}