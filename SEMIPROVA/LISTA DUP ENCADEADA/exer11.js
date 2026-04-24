/*Cada letra digitada é um nó. O cursor pode ir para frente e para trás (simulando o
next e prev). Permita inserções e remoções em qualquer posição (insertAt,
removeAt).*/
let editor = new DoublyLinkedList();
editor.insertAt("H", 0);
editor.insertAt("e", 1);
editor.insertAt("l", 2);
editor.insertAt("l", 3);
editor.insertAt("o", 4);
editor.traverse(); // Hello
editor.removeAt(1); // Remove o 'e'
editor.traverse(); // Hllo