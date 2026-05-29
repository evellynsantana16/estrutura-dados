/*O Capitão Barbarruiva tem um baú cheio de tesouros, mas ele só
consegue pegar o último item que colocou.

• Crie um programa para ajudá-lo a:

– Guardar um novo tesouro no baú.
– Retirar o último tesouro guardado.
– Olhar qual é o último tesouro sem pegá-lo.
– Saber se o baú está vazio*/





const Pilha = require('./pilha.js');

const tesouros = new Pilha();


console.log("---------------------------");

// Retirar o último tesouro guardado.
console.log(tesouros.remover()); // "Coroa de Diamantes" 

console.log("---------------------------");

// Olhar qual é o último tesouro sem pegá-lo
console.log(tesouros.topo());    // "Moedas de Ouro"

console.log("---------------------------");

// Saber se o baú está vazio.
console.log(tesouros.estaVazia()); // false

console.log("---------------------------");