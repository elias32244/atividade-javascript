const leia = require('readline-sync')

let numero = leia.questionInt("Digite um número: ")

if (numero > 0) {
    if (numero % 2 === 0) {
        console.log("O número é par e positivo!")
    } else {
        console.log("O número é ímpar e positivo!")
    }
} else if (numero < 0) {
    if (numero % 2 === 0) {
        console.log("O número é par e negativo!")
    } else {
        console.log("O número é ímpar e negativo!")
    }
} else {
    console.log("O número é zero!")
}
