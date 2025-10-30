const leia = require('readline-sync')

let n1 = parseFloat(leia.question("Digite o primeiro número: "))
let n2 = parseFloat(leia.question("Digite o segundo número: "))

console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")

let op = parseInt(leia.question("Escolha uma opção: "))

switch (op) {
    case 1:
        console.log("Resultado: " + (n1 + n2).toFixed(1))
        break
    case 2:
        console.log("Resultado: " + (n1 - n2).toFixed(1))
        break
    case 3:
        console.log("Resultado: " + (n1 * n2).toFixed(1))
        break
    case 4:
        console.log("Resultado: " + (n1 / n2).toFixed(1))
        break
    default:
        console.log("Opção inválida!")
}


