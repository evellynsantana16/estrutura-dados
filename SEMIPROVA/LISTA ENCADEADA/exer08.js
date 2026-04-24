/*Usuário monta uma lista de compras com insertAtBeginning e insertAtEnd.
Permita remover itens com removeByValue e buscar com find. Imprima a lista em
cada etapa.*/
let compras = new LinkedList();
compras.insertAtBeginning("Arroz");
compras.insertAtEnd("Feijão");
compras.insertAtEnd("Leite");
compras.printList();
compras.removeByValue("Feijão");
compras.printList();
let item = compras.find("Leite");
console.log(item ? "Item encontrado!" : "Não encontrado.");