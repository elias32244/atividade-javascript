const leia = require('readline-sync')

console.log("1 - Cachorro Quente = 10")
console.log("2 - X-Salada = 15")
console.log("3 - X-Bacon = 18")
console.log("4 - Bauru = 12")
console.log("5 - Refri = 8")
console.log("6 - Suco = 13")

let cod = leia.questionInt("Digite o número do lanche: ")
let qtd = leia.questionInt("Quantos você quer: ")

let preco = 0
let nome = ""

switch (cod) {
    case 1:
        nome = "Cachorro Quente"
        preco = 10
        break
    case 2:
        nome = "X-Salada"
        preco = 15
        break
    case 3:
        nome = "X-Bacon"
        preco = 18
        break
    case 4:
        nome = "Bauru"
        preco = 12
        break
    case 5:
        nome = "Refri"
        preco = 8
        break
    case 6:
        nome = "Suco"
        preco = 13
        break
    default:
        console.log("Número errado!")
        break
}

if (preco > 0) {
    let total = qtd * preco
    console.log("Você comprou: " + nome)
    console.log("Total: R$ " + total.toFixed(2))
}
