const readline = require('readline-sync');

let n1 = parseFloat(readline.question("Digite o primeiro numero: "));
let n2 = parseFloat(readline.question("Digite o segundo numero: "));
let n3 = parseFloat(readline.question("Digite o terceiro numero: "));
let n4 = parseFloat(readline.question("Digite o quarto numero: "));

let diferenca = (n1 * n2) - (n3 * n4);

console.log("Diferença: " + diferenca.toFixed(1));
