/*Um navegador precisa armazenar o histórico de 
páginas visitadas.

O usuário acessou:

google.com
github.com
youtube.com

Ao clicar em "Voltar", o sistema deve remover 
a página atual e retornar para a página anterior.*/


import Pilha from "./Pilha.js";
const historico = new Pilha();

// páginas visitadas
historico.push("google.com");
historico.push("github.com");
historico.push("youtube.com");

// voltar
const paginaAtual = historico.pop();

console.log("Página fechada:", paginaAtual);
console.log("Página atual:", historico.topo());