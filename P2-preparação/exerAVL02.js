// Importa a classe AVL que já está pronta
// Ela já sabe inserir e balancear sozinha
const AVLTree = require("./AVLTree.js");

// Cria a árvore AVL vazia
const funcionarios = new AVLTree();

/*
  ENUNCIADO:
  Uma empresa precisa cadastrar os IDs dos funcionários:
  50, 30, 70, 20, 40, 60, 80

  Como o enunciado fala em armazenar IDs,
  manter organizado e buscar de forma eficiente,
  usamos AVL.
*/

// Inserindo os valores na árvore
// A própria classe faz as rotações se precisar
funcionarios.insert(50);
funcionarios.insert(30);
funcionarios.insert(70);
funcionarios.insert(20);
funcionarios.insert(40);
funcionarios.insert(60);
funcionarios.insert(80);

// Se o professor pedir: mostrar a raiz
console.log("Raiz da árvore:", funcionarios.root.value);

// Se o professor pedir: mostrar altura da raiz
console.log("Altura da raiz:", funcionarios.height(funcionarios.root));

// Se o professor pedir: mostrar fator de balanceamento da raiz
console.log("FB da raiz:", funcionarios.balanceFactor(funcionarios.root));

// Se o professor pedir: mostrar os valores em ordem crescente
console.log("Valores em ordem:");
funcionarios.inOrder();