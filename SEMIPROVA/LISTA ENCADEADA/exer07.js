/*Cada nó representa um corredor. Simule a passagem do bastão com insertAtEnd
e remova um corredor machucado com removeByValue. Mostre a lista após cada
modificação.*/

let corrida = new LinkedList();
corrida.insertAtEnd("Corredor 1");
corrida.insertAtEnd("Corredor 2");
corrida.insertAtEnd("Corredor 3");

4
console.log("Passagem do bastão:");
corrida.printList();
console.log("Corredor 2 machucou!");
corrida.removeByValue("Corredor 2");
corrida.printList();