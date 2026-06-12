/*
==================================================
ENUNCIADO

Uma árvore recebe os valores:
30, 20, 10.

Após a inserção, a estrutura precisa se manter balanceada.

O sistema deve:
a) inserir todos os valores;
b) mostrar a raiz após o balanceamento;
c) mostrar o fator de balanceamento da raiz;
d) mostrar os valores em ordem.
==================================================
*/

const AVLTree = require('../00_classes/AVLTree');

/*
POR QUE USEI AVL?
Porque o enunciado fala em manter balanceada.
30, 20, 10 gera caso LL e precisa rotação à direita.
A classe faz isso sozinha dentro do insert().
*/

const arvore = new AVLTree();

arvore.insert(30);
arvore.insert(20);
arvore.insert(10);

console.log('Raiz após balancear:', arvore.root.value);
console.log('FB da raiz:', arvore.balanceFactor(arvore.root));

console.log('Valores em ordem:');
arvore.inOrder();
