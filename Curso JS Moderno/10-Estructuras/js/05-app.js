// Switch case

const metodoPago = 'ejectivo';

switch (metodoPago) {
    case 'ejectivo':
        pagarr ();
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aun no has seleccionado un método de pago o método de oago no soportado');
}

function pagar () {
    console.log('pagando ....');
}