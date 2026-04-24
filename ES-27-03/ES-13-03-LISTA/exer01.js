// ===============================
// EXERCÍCIO 1
// Enunciado:
// Inserir pontos da trilha no início e no fim.
// Remover um local perigoso.
// Verificar se um local ainda existe na trilha.
// ===============================

const trilha = new LinkedList();

// adiciona no início
trilha.insertAtBeginning("Cachoeira");

// adiciona no final
trilha.insertAtEnd("Caverna");
trilha.insertAtEnd("Mirante");

// mostra lista
console.log("Trilha:", trilha.toString());

// remove local perigoso
trilha.removeByValue("Caverna");

// mostra lista atualizada
console.log("Após remover Caverna:", trilha.toString());

// verifica se "Mirante" existe
if (trilha.find("Mirante") !== -1) {
    console.log("Mirante ainda está na trilha");
}