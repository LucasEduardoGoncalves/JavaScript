let receitas = [
    'bolo',
    'paoDeQueijo',
    'bife',
    'arroz'
];

let despesas = [
    'gas',
    'agua',
    'energia',
    'aluguel'
];

function despesasConta (valor1, valor2) {
    let value1 = valor1.length;

    let value2 = valor2.length;

    let saldo = value1 - value2;

    if (saldo > 0){
        console.log("Seu saldo é positivo");
    } else if(saldo === 0) {
        console.log("Seu saldo é nulo");
    } else {
        console.log("Seu saldo é negativo");
    }
    return saldo
}

despesasConta(receitas, despesas)