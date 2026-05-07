const AVLTree = require("./AVLTree.js");

const avl = new AVLTree();

// Exercício dois

// Inserções na AVL
avl.insert(20);
avl.insert(10);
avl.insert(30);
avl.insert(25);
avl.insert(40);
avl.insert(22);

// Mostrar elementos em ordem
console.log("Árvore em ordem:");

avl.inOrder();