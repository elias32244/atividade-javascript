const readline = require('readline-sync');

let salarioBruto = parseFloat(readline.question("Digite o salario bruto: "));
let adicionalNoturno = parseFloat(readline.question("Digite o adicional noturno: "));
let horasExtras = parseFloat(readline.question("Digite as horas extras: "));
let descontos = parseFloat(readline.question("Digite os descontos: "));

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Salário Líquido: " + salarioLiquido.toFixed(2));
