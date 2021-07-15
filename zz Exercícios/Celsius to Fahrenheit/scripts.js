// function converter(celcius, fahrenheit) {
//     let c = Number(celcius);
//     let f = Number(fahrenheit);

//     if(c != 0 && f != 0){
//        console.log("o Valor em Celsius é: " + (f-32) * 5/9)
//        console.log("O Valor em Fahrenheit: " + c * 9/5 + 32)
//     } else if (c != 0){
//         console.log("O Valor em Fahrenheit: " + c * 9/5 + 32)
//     } else if (f != 0){
//         console.log("o Valor em Celsius é: " + (f-32) * 5/9)
//     } else{
//         console.log("Adicione um valor...")
//     }
// }

// converter('5','5')

function transformDegree(degree){
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celciusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // Fluxo ideal, F -> Celsius
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula =(fahrenheit) => (fahrenheit -32) * 5/9
    let degreeSign = '°C'

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50f'))
} catch (error) {
    console.log(error.message)
}