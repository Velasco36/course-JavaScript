const product = "monitor de 20 pulgadas";

// .replace para remmplazar

console.log(product);
console.log(product.replace('pulgadas', '"'));
console.log(product.replace('monitor', 'Monitor curvo'));
 

// .slice pata cortar

console.log(product.slice(0,10) );

//console.log(product.slice(8));
 console.log(product.slice(2,1));

 // Alternativa a slice

 console.log(product.substring(0,10));
 console.log(product.substring(2,1));

 const user = "Mario";
 console.log(user.substring(0,1));
 console.log(user.charAt(0));

