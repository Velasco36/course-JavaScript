let cliente = {
    mesa : '',
    hora: '',
    pedido: []
};

const categorias = {
    1: 'Comida',
    2: 'Bebida',
    3: 'Postres'

}

const btnGuardasCLiente = document.querySelector('#guardar-cliente')

btnGuardasCLiente.addEventListener('click', guardarCLiente);


function guardarCLiente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;


    const camposVacios = [mesa, hora].some(campo => campo === '');

    if(camposVacios){
        const existeAlerta = document.querySelector('.invalid-feedback');
        if (!existeAlerta){
            console.log('Si hay al menos un campo Vacio')
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center')
            alerta.textContent = 'Todos los campos son Obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(()=>{
                alerta.remove();
            },3000)
        }
    
        return;
    }
    cliente = {...cliente, mesa, hora}
    //console.log(cliente);

    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    mostrarSecciones();

    obtenerPlatillos();

}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));

}

function obtenerPlatillos(){
    const url = '  http://localhost:4000/platillos'

    fetch(url)
       .then(respuesta => respuesta.json())
       .then(resultado => mostrarPlatillos(resultado))
       .catch(error => console.log(error));
}

function mostrarPlatillos(platillos) {
    const contenido = document.querySelector('#platillos .contenido');
    platillos.forEach(platillos => {
        const row = document.createElement('DIV');
        row.classList.add('row', 'py-3', 'border-top');

        const nombre = document.createElement('DIV');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillos.nombre;

        const precio = document.createElement('DIV');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `$ ${platillos.precio}`;
        //console.log(precio);

        const categoria = document.createElement('DIV');
        categoria.classList.add('col-md-3', 'fw-bold');
        categoria.textContent = categorias [platillos.categoria];

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${platillos.id}`
        inputCantidad.classList.add('form-control');

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value);
            //console.log(cantidad);

            agragarPlatillo({...platillos, cantidad})
        }
        
        const agregar = document.createElement('DIV');
        agregar.classList.add('col-md-2')
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);
        contenido.appendChild(row);
        
        contenido.appendChild(row);

        //console.log(platillos);
    })
    //console.log(platillos);

}


function agragarPlatillo(producto){
    console.log(producto);

    let {pedido} = cliente

    if (producto.cantidad > 0 ){

        if(pedido.some( articulo => articulo.id === producto.id)){
            //el articulo ya existe
            const pedidoActualizado = pedido.map( articulo => {
                if(articulo.id === producto.id){
                    articulo.cantidad = producto.cantidad;

                }
                return articulo;
            });
            cliente.pedido = [...pedidoActualizado];

        }else{
            //El articulo no existe lo agg al array de pedidos
            cliente.pedido = [...pedido, producto]
        }
       
    }else {
        const resultado = pedido.filter(articulo => articulo.id != producto.id);
        cliente.pedido = [...resultado];
        //console.log('no es mayor a 0 jaja')
    }
    //console.log(cliente.pedido);
    // Mostrar 
    limpiarHTML();

    if(cliente.pedido.length){
        actualizarResumen();

    }else{

        mensajePedidoVacio(); //
    }


}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-2', 'px-3', 'shadow');

    //informacion de la mesa
    const mesa = document.createElement('p');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw.bold');

    const mensaSpan = document.createElement('SPAN');
    mensaSpan.textContent = cliente.mesa;
    mensaSpan.classList.add('fw.-normal');

    //Informacion de la hora
    const hora = document.createElement('p');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw.bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw.-normal');

    mesa.appendChild(mensaSpan);
    hora.appendChild(horaSpan);

    const heading = document.createElement('H3');
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add('my-4', 'text-center');

    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach( articulo => {
    
        const {nombre, cantidad, precio, id} = articulo;
        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        const nombreEl = document.createElement('H4');
        nombreEl.classList.add('my-4')
        nombreEl.textContent = nombre;


        //cantidad del artculo
        const cantidadEl = document.createElement('P');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.textContent = 'cantidad: ';

        const cantidadValor = document.createElement('SPAN');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;


        //precio del artculo
        const precioEl = document.createElement('P');
        precioEl.classList.add('fw-bold');
        precioEl.textContent = 'Precio: ';

        const precioValor = document.createElement('SPAN');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$ ${precio}`;

        
  
        //subtotal del articulo

        const subtotalEl = document.createElement('P');
        subtotalEl.classList.add('fw-bold');
        subtotalEl.textContent = 'Subtotal: ';

        const subtotalValor = document.createElement('SPAN');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(cantidad , precio);


        //Boon para eliminar
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = 'Eliminar del pedido ';


        //Funcion para eliminar del pedido
        btnEliminar.onclick = function() {
            eliminarproducto(id)
        }


        
        cantidadEl.appendChild(cantidadValor);
        precioEl.appendChild(precioValor);
        subtotalEl.appendChild(subtotalValor);




        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotalEl);
        lista.appendChild(btnEliminar);

        grupo.appendChild(lista);

    });
    
    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);    
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);


    //Mostrar formulario de propinas
    formularioPropinas();
}


function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido');
    
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}

function calcularSubtotal(precio, cantidad){
    return `$ ${precio * cantidad}` ;
}


function eliminarproducto(id){

    //console.log('elimiando', id);

    const {pedido} = cliente;
    const resultado = pedido.filter( articulo => articulo.id !== id);
    cliente.pedido = [...resultado];

    //console.log(cliente.pedido);

    limpiarHTML();

    if(cliente.pedido.length){
        actualizarResumen();

    }else{

        mensajePedidoVacio(); //
    }
    //El producto se elimino por lo tanto regresamos la cantd a 0
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);

    inputEliminado.value =0;
    console.log(productoEliminado);

}


function mensajePedidoVacio(){
    const contenido = document.querySelector('#resumen .contenido')

    const texto = document.createElement('p');
    texto.classList.add('text-center');
    texto.textContent = 'añade los elementos del pedido';
    contenido.appendChild(texto);
}


function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('DIV');
    formulario.classList.add('col-md-6', 'formulario', );

    const divFormulario = document.createElement('DIV');
    divFormulario.classList.add('card', 'py-5', 'px-3', 'shawdow')

    const heading = document.createElement('H3');
    heading.classList.add('my-4','text-center');
    heading.textContent = 'Propinas';


    const radio10 = document.createElement('INPUT');
    radio10.type = "radio";
    radio10.name = 'Propina';
    radio10.value = "10";
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('LABEL');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('DIV');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10), 
    radio10Div.appendChild(radio10Label);
   
    //Radio button del 25%

    const radio25 = document.createElement('INPUT');
    radio25.type = "radio";
    radio25.name = 'Propina';
    radio25.value = "25";
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('LABEL');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('DIV');
    radio25Div.classList.add('form-check');

    radio25Div.appendChild(radio25), 
    radio25Div.appendChild(radio25Label);


    //Radio button del 50%

    const radio50 = document.createElement('INPUT');
    radio50.type = "radio";
    radio50.name = 'Propina';
    radio50.value = "50";
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('LABEL');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label');

    const radio50Div = document.createElement('DIV');
    radio50Div.classList.add('form-check');

    radio50Div.appendChild(radio50), 
    radio50Div.appendChild(radio50Label);

    // agregar al div principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);

    formulario.appendChild(divFormulario);
   
    contenido.appendChild(formulario);
}


function calcularPropina(){
    
    const {pedido} = cliente;
    let subtotal = 0;
    pedido.forEach(articulo => {
        subtotal += articulo.cantidad * articulo.precio;
    });

    const propinnaSeleccionada = document.querySelector('[name="Propina"]:checked').value;



    const propina = ((subtotal* parseInt(propinnaSeleccionada))/100);
    console.log(propina);


    const total = subtotal + propina;

    console.log(total);

    mostrarTotalHTML(subtotal, total, propina);

    
}

function mostrarTotalHTML(subtotal, total, propina){
    const divTottaless = document.createElement('DIV');
    divTottaless.classList.add('total-pagar');

    const subtotalParrafo = document.createElement('P');
    subtotalParrafo.classList.add('fs-3', 'fw-bold', 'mt-5');
    subtotalParrafo.textContent = 'Subtotal Consumo: ';

    const subtotalSpan = document.createElement('SPAN');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `$${subtotal}`;

    //propina
    const propinaParrafo = document.createElement('P');
    propinaParrafo.classList.add('fs-3', 'fw-bold', 'mt-5');
    propinaParrafo.textContent = 'Propina : ';

    const propinaSpan = document.createElement('SPAN');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

     //Total
    const totalParrafo = document.createElement('P');
    totalParrafo.classList.add('fs-3', 'fw-bold', 'mt-5');
    totalParrafo.textContent = 'Total a Pagar : ';

    const totalSpan = document.createElement('SPAN');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;
 
    
    subtotalParrafo.appendChild(subtotalSpan);
    propinaParrafo.appendChild(propinaSpan);
    totalParrafo.appendChild(totalSpan);
   
    const totalpagarDiv = document.querySelector('.total-pagar');
    if (totalpagarDiv){
        totalpagarDiv.remove();
    }

    divTottaless.appendChild(subtotalParrafo);
    divTottaless.appendChild(propinaParrafo);
    divTottaless.appendChild(totalParrafo);

    const formulario = document.querySelector('.formulario > div');

    formulario.appendChild(divTottaless);

}













