import promptSync from "prompt-sync";
import { Stack } from "./Stack";

const prompt = promptSync();
const pilha = new Stack<string>();
let opcao: number;

do {
    console.log("\n------------------------------");
    console.log("1 - Adicionar livro na pilha");
    console.log("2 - Listar livros");
    console.log("3 - Retirar livro");
    console.log("0 - Sair");
    console.log("------------------------------");

    opcao = Number(prompt("Digite uma opção: "));

    switch (opcao) {
        case 1:
            const livro = prompt("Digite o nome do livro: ");
            pilha.push(livro);
            console.log("\nPilha:");
            pilha.printStack();
            console.log("\nLivro adicionado!");
            break;

        case 2:
            if (pilha.isEmpty()) {
                console.log("\nA pilha está vazia!");
            } else {
                console.log("\nLista de livros na pilha:");
                pilha.printStack();
            }
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log("\nA pilha está vazia!");
            } else {
                pilha.pop();
                console.log("\nPilha atual:");
                pilha.printStack();
                console.log("\nUm livro foi retirado da pilha!");
            }
            break;

        case 0:
            console.log("\nPrograma finalizado!");
            break;

        default:
            console.log("\nOpção inválida!");
            break;
    }
} while (opcao !== 0);
