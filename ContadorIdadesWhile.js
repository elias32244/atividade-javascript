const leia = require("readline-sync");

let idade = 0;
let menores21 = 0;
let maiores50 = 0;

idade = leia.questionInt("Digite uma idade (número negativo para parar): ");

while (idade >= 0) {

  if (idade < 21) {
    menores21++;
  } else if (idade > 50) {
    maiores50++;
  }

  idade = leia.questionInt("Digite uma idade (número negativo para parar): ");
}

console.log("\nTotal de pessoas menores de 21 anos: " + menores21);
console.log("Total de pessoas maiores de 50 anos: " + maiores50);

