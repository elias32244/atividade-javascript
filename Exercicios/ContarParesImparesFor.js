const leia = require("readline-sync");

let numero, pares = 0, impares = 0

for (let contador = 1; contador <= 10; contador++) {
  numero = leia.questionInt("Digite o " + contador + "º número: ");

  if (numero % 2 === 0) {
    pares++
  } else {
    impares++
  }
}

console.log("\nTotal de números pares: " + pares);
console.log("Total de números ímpares: " + impares);
