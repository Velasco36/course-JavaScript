const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }

];

restaurantApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurantApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro Menú:`)
        platillos.forEach((platillo, index) => {
            console.log(`${index})  ${platillo.platillo} $ ${platillo.precio}`)
        });
    }
}


restaurantApp.funciones.agregarPlatillo('Pastel', 20);

const {platillos} =  restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);
restaurantApp.funciones.ordenar(1);

    
