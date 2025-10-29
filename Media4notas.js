const readline = require('readline-sync');

let n1 = parseFloat(readline.question("Digite a primeira nota: "));
let n2 = parseFloat(readline.question("Digite a segunda nota: "));
let n3 = parseFloat(readline.question("Digite a terceira nota: "));
let n4 = parseFloat(readline.question("Digite a quarta nota: "));

let media = (n1 + n2 + n3 + n4) / 4;

console.log("Média final: " + media.toFixed(1));
