/*
==================================================
ENUNCIADO

Teste os 4 casos clássicos de AVL:
LL, RR, LR e RL.

O sistema deve:
a) criar uma árvore para cada caso;
b) inserir os valores;
c) mostrar a raiz final;
d) comentar qual rotação aconteceu.
==================================================
*/

const AVLTree = require('../00_classes/AVLTree');

function testarCaso(nome, valores) {
  const arvore = new AVLTree();

  for (const valor of valores) {
    arvore.insert(valor);
  }

  console.log(`\n${nome}`);
  console.log('Valores inseridos:', valores);
  console.log('Raiz final:', arvore.root.value);
  console.log('Em ordem:', arvore.toArrayInOrder());
}

// LL: rotação à direita.
testarCaso('Caso LL: 30, 20, 10', [30, 20, 10]);

// RR: rotação à esquerda.
testarCaso('Caso RR: 10, 20, 30', [10, 20, 30]);

// LR: esquerda no filho, depois direita no nó.
testarCaso('Caso LR: 30, 10, 20', [30, 10, 20]);

// RL: direita no filho, depois esquerda no nó.
testarCaso('Caso RL: 10, 30, 20', [10, 30, 20]);
