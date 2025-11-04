let cores: string[] = ["Azul", "Verde", "Amarelo", "Branco", "Laranja"];

console.log("Listar todas as cores:\n");
for (let i = 0; i < cores.length; i++) {
  console.log(cores[i]);
}

cores.sort();

console.log("\nOrdenar as cores:\n");
for (let i = 0; i < cores.length; i++) {
  console.log(cores[i]);
}
