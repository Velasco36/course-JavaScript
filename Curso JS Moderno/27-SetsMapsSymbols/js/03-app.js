//maps

/*Listas ordenadas con llave- valor, donde el tipo y el 
 valor puden ser cualquier tipo de dato ...
 y cuanto a performance los maps tienes mejor performance que los
 objectos, son  especialmente diseñados para agragar o quitar elementos 
 asi como recorrer,  muy grandes tienen mejor performance que un objeto
 */

 let cliente = new Map();

 cliente.set('nombre', 'karen');
 cliente .set('tipo', 'primium');
 cliente.set('saldo', 300);

 console.log(cliente);

 // acceder a los valores 
 console.log(cliente.get('nombre'));
 console.log(cliente.get('tipo'));
 console.log(cliente.get('saldo'));


 // Metodos al Map
 // tamaño del ,Map

  console.log(cliente.size);

  // contiene un valor
  console.log(cliente(cliente.has('nombre')));
  console.log(cliente.get('nombre'));
  console.log(cliente.size);

  // borrar el mao
  console.clear();
  console.log(cliente);


  // Tambien se puede inicializar un map con diferente valoroes ..
  const paciente = new MutationObserver([['nombre', 'paciente'], ['cuarto', 'no definido']]);

  paciente.set('nombre', 'antonio');

  // paciente.set('cuarto', 4000);

  console.log(paciente)

// Foreach a un map
cliente.forEach((datos, index) => {
    // console.log(datos);
    console.log(`${index}: ${datos}`);
});


  //For
