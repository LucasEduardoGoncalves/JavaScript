## CONTROL FLOW ##

__if... else__ 
<!--
    let temperature = 36;
    let highTemperature = temperature >= 38;
    let mediumTemperature = temperature >= 37 || temperature > 38;

    if(highTemperature) {
        console.log('Febre alta')
    } else if(mediumTemperature) {
        console.log('Febre moderada')
    } else {
        console.log('Saudavel')
    }
-->

__switch__
<!--
function calculate(number1, operator, number2) {
    let result

    switch(operator) {
        case'+':
            result = number1 + number2;
            break;

        case'-':
            result = number1 - number2;
            break;

        case'*':
            result = number1 * number2;
            break;

        case'/':
            result = number1 / number2;
            break;

        default:
            console.log('Não implementado');
            break;
    }
    return result
}
console.log(calculate(4, '/' , 8))
-->

__throw / try...catch__
 - throw = jogar
 - try = tentar
 - catch = pegar 
<!--
    function  sayMyName(name = '') {
        if (name === '') {
            throw "Nome é necessário";
        }
        console.log('Depois do erro');
    }

    try {
        sayMyName();
    } catch(e) {
        console.log(e);
    }

    console.log("Depois do cath");
-->