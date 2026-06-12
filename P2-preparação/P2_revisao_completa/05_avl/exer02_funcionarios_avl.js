/*
==================================================
ENUNCIADO

Uma empresa precisa cadastrar os IDs dos funcionários:
50, 30, 70, 20, 40, 60, 80.

O sistema deve:
a) cadastrar todos os IDs;
b) mostrar a raiz;
c) mostrar a altura da raiz;
d) mostrar os valores em ordem crescente.
==================================================
*/

const AVLTree = require('../00_classes/AVLTree');

/*
POR QUE USEI AVL?
Porque além de organizar como uma ABB, ela mantém a árvore balanceada.
Isso ajuda em buscas futuras.
*/

const funcionarios = new AVLTree();

funcionarios.insert(50);
funcionarios.insert(30);
funcionarios.insert(70);
funcionarios.insert(20);
funcionarios.insert(40);
funcionarios.insert(60);
funcionarios.insert(80);

console.log('Raiz:', funcionarios.root.value);
console.log('Altura da raiz:', funcionarios.height(funcionarios.root));

console.log('Funcionários em ordem crescente:');
funcionarios.inOrder();
