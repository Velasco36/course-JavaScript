const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const messe2 = ['Agosto', 'Septiembre', 'Octubre'];
const messe3 = ['Noviembre', 'Diciembre'];

// .concat

const resultado = meses.concat(messe2, messe3, 'Otro Mes');

console.log(resultado);

// spread operator

const resultado2 = [...meses, ...messe2, ...messe3, 'Otro mes'];
console.log(resultado2);