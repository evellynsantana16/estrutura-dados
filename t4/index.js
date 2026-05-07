const LinkedList = require("./linkedList.js");

const trail = new LinkedList();

// Inserções
trail.insertAtBeginning("Cachoeira");

trail.insertAtEnd("Caverna");

trail.insertAtEnd("Mirante");

trail.insertAtBeginning("Entrada da Trilha");

console.log("Locais da trilha:");
trail.printList();

// Remove local perigoso
trail.removeByValue("Caverna");

console.log("\nApós remover a caverna:");
trail.printList();

// Busca
console.log("\nO mirante está na trilha?");

console.log(trail.search("Mirante"));