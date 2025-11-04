let numerosEntrada = [2, 5, 10, 3, 4, 2, 2, 3, 10, 5]


let numeros = new Set(numerosEntrada)
console.log("Listar dados do Set:");

let listaOrdenada = [...numeros].sort((a, b) => a - b);

for (let numero of listaOrdenada) {
  console.log(numero);
}
