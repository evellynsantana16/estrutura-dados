/*
==================================================
ARQUIVO: AVLTree.js

AVL = Árvore Binária de Busca que se balanceia sozinha.

QUANDO USAR NA PROVA:
- Enunciado fala em AVL.
- Fala em balanceamento.
- Fala em altura ou fator de balanceamento.
- Fala em manter busca eficiente com muitos dados.

IMPORTANTE:
Você NÃO faz rotação manual no exercício.
Você chama insert(), e a classe faz as rotações sozinha.
==================================================
*/

const AVLNode = require('./AVLNode');

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(current, value) {
    // 1) Inserção normal de ABB.
    if (current === null) {
      return new AVLNode(value);
    }

    if (value < current.value) {
      current.left = this.insertNode(current.left, value);
    } else if (value > current.value) {
      current.right = this.insertNode(current.right, value);
    } else {
      return current; // Ignora repetidos.
    }

    // 2) Atualiza altura.
    this.updateNodeHeight(current);

    // 3) Calcula FB.
    const fb = this.balanceFactor(current);

    // 4) Corrige os 4 casos.

    // LL: esquerda-esquerda => rotação direita.
    if (fb > 1 && value < current.left.value) {
      return this.rightRotation(current);
    }

    // RR: direita-direita => rotação esquerda.
    if (fb < -1 && value > current.right.value) {
      return this.leftRotation(current);
    }

    // LR: esquerda-direita => esquerda no filho + direita no nó.
    if (fb > 1 && value > current.left.value) {
      current.left = this.leftRotation(current.left);
      return this.rightRotation(current);
    }

    // RL: direita-esquerda => direita no filho + esquerda no nó.
    if (fb < -1 && value < current.right.value) {
      current.right = this.rightRotation(current.right);
      return this.leftRotation(current);
    }

    return current;
  }

  height(node) {
    if (node === null) return 0;
    return node.height;
  }

  updateNodeHeight(node) {
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    node.height = Math.max(leftHeight, rightHeight) + 1;
  }

  balanceFactor(node) {
    if (node === null) return 0;
    return this.height(node.left) - this.height(node.right);
  }

  leftRotation(node) {
    const newRoot = node.right;
    const temp = newRoot.left;

    newRoot.left = node;
    node.right = temp;

    this.updateNodeHeight(node);
    this.updateNodeHeight(newRoot);

    return newRoot;
  }

  rightRotation(node) {
    const newRoot = node.left;
    const temp = newRoot.right;

    newRoot.right = node;
    node.left = temp;

    this.updateNodeHeight(node);
    this.updateNodeHeight(newRoot);

    return newRoot;
  }

  search(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }

    return false;
  }

  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  toArrayInOrder() {
    const resultado = [];

    const percorrer = (node) => {
      if (node !== null) {
        percorrer(node.left);
        resultado.push(node.value);
        percorrer(node.right);
      }
    };

    percorrer(this.root);
    return resultado;
  }
}

module.exports = AVLTree;
