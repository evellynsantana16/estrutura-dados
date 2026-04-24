// ===============================
// EXERCÍCIO 2
// Enunciado:
// Inserir tartarugas no início e no final.
// Remover a tartaruga "Lenta".
// Encontrar a posição da tartaruga "Veloz".
// ===============================

const corrida = new LinkedList();

// adiciona tartarugas
corrida.insertAtBeginning("Tartaruga 1");
corrida.insertAtEnd("Lenta");
corrida.insertAtEnd("Tartaruga 3");

// adiciona "Veloz"
corrida.insertAtEnd("Veloz");

// remove "Lenta"
corrida.removeByValue("Lenta");

// busca posição da "Veloz"
let pos = corrida.find("Veloz");

console.log("Posição da Veloz:", pos);