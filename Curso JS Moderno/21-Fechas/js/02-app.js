const DiaHoy = new Date();

moment.locale('es');

console.log( moment().format('MMM Do YYY h:mm:ss a') );

console.log( moment().format('LLL', DiaHoy) );

console.log ( moment().add(3, 'days'),caleendar())