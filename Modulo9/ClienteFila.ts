// Importa o módulo readline-sync para ler entradas do usuário
import * as readline from "readline-sync";

// Classe que representa a Fila (Queue)
class Queue {
  private items: string[] = [];

  // Adiciona um novo cliente à fila
  enqueue(cliente: string) {
    this.items.push(cliente);
    console.log(`\nCliente "${cliente}" adicionado à fila!`);
  }

  // Remove o primeiro cliente da fila
  dequeue() {
    if (this.isEmpty()) {
      console.log("\nA fila está vazia!");
    } else {
      const cliente = this.items.shift();
      console.log(`\nCliente "${cliente}" foi chamado!`);
    }
  }

  // Lista todos os clientes na fila
  listar() {
    if (this.isEmpty()) {
      console.log("\nA fila está vazia!");
    } else {
      console.log("\nLista de clientes na fila:");
      this.items.forEach((c) => console.log(`- ${c}`));
    }
  }

  // Verifica se a fila está vazia
  private isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Função principal (menu)
function main() {
  const fila = new Queue();
  let opcao: number;

  do {
    console.log("\n=== MENU FILA DE CLIENTES ===");
    console.log("1 - Adicionar cliente");
    console.log("2 - Listar clientes");
    console.log("3 - Chamar cliente");
    console.log("0 - Sair");
    opcao = Number(readline.question("Escolha uma opcao: "));

    switch (opcao) {
      case 1:
        const nome = readline.question("Digite o nome do cliente: ");
        fila.enqueue(nome);
        break;
      case 2:
        fila.listar();
        break;
      case 3:
        fila.dequeue();
        break;
      case 0:
        console.log("\nPrograma finalizado!");
        break;
      default:
        console.log("\nOpcao invalida!");
    }
  } while (opcao !== 0);
}

// Executa o programa
main();
