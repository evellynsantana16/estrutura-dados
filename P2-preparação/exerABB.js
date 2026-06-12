/*
==================================================
ENUNCIADO

Uma empresa deseja armazenar os IDs dos funcionários
de forma organizada para facilitar consultas futuras.

Os seguintes IDs foram cadastrados:

50
30
70
20
40
60
80

O sistema deve:

a) cadastrar todos os IDs;

b) mostrar a raiz da estrutura;

c) mostrar os IDs em ordem crescente;

d) informar em qual lado do nó 70 o valor 60 foi inserido.
==================================================
*/

// Importa a classe ABB
const AVLTree = require("./AVLTree");

// Cria a árvore vazia
const funcionarios = new AVLTree();

/*
==================================================
QUESTÃO A

Cadastrar todos os IDs.

Como precisamos armazenar valores de forma
organizada automaticamente, utilizamos uma
Árvore Binária de Busca (ABB).
==================================================
*/

funcionarios.insert(50);
funcionarios.insert(30);
funcionarios.insert(70);
funcionarios.insert(20);
funcionarios.insert(40);
funcionarios.insert(60);
funcionarios.insert(80);

/*
Árvore formada:

        50
       /  \
     30    70
    / \    / \
  20  40 60  80

*/

/*
==================================================
QUESTÃO B

Mostrar a raiz da árvore.

A raiz é o primeiro elemento inserido.
==================================================
*/

console.log("Raiz:", funcionarios.root.value);

/*
Saída:

Raiz: 50
*/

/*
==================================================
QUESTÃO C

Mostrar os IDs em ordem crescente.

O percurso em ordem (inOrder)
visita:

esquerda -> raiz -> direita

Em uma ABB isso gera os valores
automaticamente em ordem crescente.
==================================================
*/

console.log("Funcionários em ordem:");

funcionarios.inOrder();

/*
Saída:

20
30
40
50
60
70
80
*/

/*
==================================================
QUESTÃO D

Informar em qual lado do nó 70
o valor 60 foi inserido.

Raciocínio:

60 > 50
então vai para a direita

60 < 70
então vai para a esquerda

Logo:

60 ficou à ESQUERDA de 70
==================================================
*/

console.log("O valor 60 foi inserido à esquerda do nó 70.");