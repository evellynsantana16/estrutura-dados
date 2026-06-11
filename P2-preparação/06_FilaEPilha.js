/*
  06_FilaEPilha.js

  ARQUIVO DE APOIO

  QUANDO USAR:
  Use se a questão misturar:
  - BFS com fila
  - DFS com pilha
  - ordem de atendimento
  - empilhar/desempilhar

  FILA:
  Primeiro que entra é o primeiro que sai.
  FIFO

  PILHA:
  Último que entra é o primeiro que sai.
  LIFO
*/

class Fila {
  constructor() {
    this.itens = [];
  }

  enfileirar(valor) {
    this.itens.push(valor);
  }

  desenfileirar() {
    return this.itens.shift();
  }

  frente() {
    return this.itens[0];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  tamanho() {
    return this.itens.length;
  }

  imprimir() {
    console.log(this.itens);
  }
}

class Pilha {
  constructor() {
    this.itens = [];
  }

  empilhar(valor) {
    this.itens.push(valor);
  }

  desempilhar() {
    return this.itens.pop();
  }

  topo() {
    return this.itens[this.itens.length - 1];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  tamanho() {
    return this.itens.length;
  }

  imprimir() {
    console.log(this.itens);
  }
}

/*
  EXEMPLO DE TESTE
*/
const fila = new Fila();

fila.enfileirar("Cliente 1");
fila.enfileirar("Cliente 2");
console.log("Saiu da fila:", fila.desenfileirar());

const pilha = new Pilha();

pilha.empilhar("Caixa 1");
pilha.empilhar("Caixa 2");
console.log("Saiu da pilha:", pilha.desempilhar());

module.exports = { Fila, Pilha };
