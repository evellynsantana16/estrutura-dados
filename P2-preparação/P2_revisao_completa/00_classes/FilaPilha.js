/*
==================================================
ARQUIVO: FilaPilha.js

Aqui tem duas classes:
- Fila
- Pilha

Como são CLASSES, usa new.

Exemplo:
const { Fila, Pilha } = require('../00_classes/FilaPilha');
const pacientes = new Fila();
const historico = new Pilha();
==================================================
*/

class Fila {
  constructor() {
    this.itens = [];
  }

  enfileirar(valor) {
    // Adiciona no FINAL da fila.
    this.itens.push(valor);
  }

  desenfileirar() {
    // Remove o PRIMEIRO da fila.
    return this.itens.shift();
  }

  frente() {
    // Mostra o primeiro sem remover.
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
    // Adiciona no TOPO da pilha.
    this.itens.push(valor);
  }

  desempilhar() {
    // Remove o TOPO da pilha.
    return this.itens.pop();
  }

  topo() {
    // Mostra o topo sem remover.
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

module.exports = { Fila, Pilha };
