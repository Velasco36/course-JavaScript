/*4
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
*/
//Eliinar desde el padre ...
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

navegacion.removeChild( navegacion.childer[2]);