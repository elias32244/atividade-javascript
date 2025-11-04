const leia = require("readline-sync");

let numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// Mostra todos os elementos do vetor
for (let indice = 0; indice < 10; indice++) {
  console.log((indice + 1) + "º elemento: " + numeros[indice]);
}

let busca = leia.questionInt("\nDigite um número para procurar: ");

let encontrado = false;

// Procura o número dentro do vetor
for (let indice = 0; indice < 10; indice++) {
  if (numeros[indice] === busca) {
    console.log("\nO número " + busca + " está localizado na posição: " + indice);
    encontrado = true;
    break;
  }
}

if (encontrado === false) {
  console.log("\nNúmero não foi encontrado!");
}
