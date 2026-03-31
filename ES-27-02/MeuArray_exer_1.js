/*Uma empresa deseja criar um sistema simples para gerenciar as tarefas da equipe. Cada tarefa será armazenada em um array utilizando a classe MeuArray . • Requisitos : –
 Criar uma instância da classe MeuArray . – Adicionar cinco tarefas ao array . 
– Remover a última tarefa adicionada. – Exibir todas as tarefas armazenadas. • Perguntas : 
– O que acontece quando tentamos acessar um índice fora do tamanho do array ? –
 Como garantir que a ordem das tarefas seja mantida ao adicionar e remover itens?*/





//const MeuArray = require("./MeuArray.js");
import MeuArray from "./MeuArray.js";
import readlineSync from "readline-sync";

let teste = readlineSync.question("Digite um valor para teste: ");
console.log("Valor digitado:", teste);

// Criando uma instância da classe MeuArray
const tarefas = new MeuArray();

// Adicionando cinco tarefas ao array
tarefas.adicionar("Revisar relatório financeiro");
tarefas.adicionar("Preparar apresentação para a diretoria");
tarefas.adicionar("Responder e-mails pendentes");
tarefas.adicionar("Agendar reunião com fornecedores");
tarefas.adicionar("Atualizar documentação interna");

// Removendo a última tarefa adicionada
console.log("Tarefa removida:", tarefas.remover());

// Exibindo todas as tarefas armazenadas
console.log("Lista de tarefas:");
for (let i = 0; i < tarefas.tamanhoArray(); i++) {
    console.log(tarefas.obterElemento(i));
}