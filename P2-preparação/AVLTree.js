const AVLNode = require("./AVLNode.js");

class AVLTree {

    constructor() {
        this.root = null;
    }

    // Inserção principal
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    // Inserção recursiva
    insertNode(current, value) {

        // Cria o nó caso esteja vazio
        if (current === null) {
            return new AVLNode(value);
        }

        // Vai para esquerda
        if (value < current.value) {
            current.left = this.insertNode(current.left, value);
        }

        // Vai para direita
        else if (value > current.value) {
            current.right = this.insertNode(current.right, value);
        }

        // Ignora repetidos
        else {
            return current;
        }

        // Recalcula altura
        this.updateNodeHeight(current);

        // Calcula balanceamento
        let fb = this.balanceFactor(current);

        // ESQUERDA - ESQUERDA
        if (fb > 1 && value < current.left.value) {
            return this.rightRotation(current);
        }

        // DIREITA - DIREITA
        if (fb < -1 && value > current.right.value) {
            return this.leftRotation(current);
        }

        // ESQUERDA - DIREITA
        if (fb > 1 && value > current.left.value) {
            current.left = this.leftRotation(current.left);
            return this.rightRotation(current);
        }

        // DIREITA - ESQUERDA
        if (fb < -1 && value < current.right.value) {
            current.right = this.rightRotation(current.right);
            return this.leftRotation(current);
        }

        return current;
    }

    // Retorna altura
    height(node) {

        if (node === null) {
            return 0;
        }

        return node.height;
    }

    // Atualiza altura do nó
    updateNodeHeight(node) {

        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);

        node.height = Math.max(leftHeight, rightHeight) + 1;
    }

    // Fator de balanceamento
    balanceFactor(node) {

        if (node === null) {
            return 0;
        }

        return this.height(node.left) - this.height(node.right);
    }

    // Rotação para esquerda
    leftRotation(node) {

        let newRoot = node.right;
        let temp = newRoot.left;

        newRoot.left = node;
        node.right = temp;

        this.updateNodeHeight(node);
        this.updateNodeHeight(newRoot);

        return newRoot;
    }

    // Rotação para direita
    rightRotation(node) {

        let newRoot = node.left;
        let temp = newRoot.right;

        newRoot.right = node;
        node.left = temp;

        this.updateNodeHeight(node);
        this.updateNodeHeight(newRoot);

        return newRoot;
    }

    // Percurso em ordem
    inOrder(node = this.root) {

        if (node !== null) {

            this.inOrder(node.left);

            console.log(node.value);

            this.inOrder(node.right);
        }
    }
}

module.exports = AVLTree;