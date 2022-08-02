const efectivo = 300;
const credito = 400;
const disponibl = efectivo + credito;
const totoalPagar =  600;


if (efectivo > totalPagar || credito > totalPagar || disponibl > totalPagar) {
    console.log('si podemos Pagar');
}else {
    console.log('Fondos Insuficientes');
}