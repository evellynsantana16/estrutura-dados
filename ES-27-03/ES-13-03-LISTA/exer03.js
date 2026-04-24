// ===============================
// EXERCÍCIO 3
// Enunciado:
// Adicionar poderes no início e no final.
// Remover "Raio Congelante".
// Verificar se "Escudo de Fogo" existe.
// ===============================

const poderes = new LinkedList();

// adiciona poderes
poderes.insertAtBeginning("Super Força");
poderes.insertAtEnd("Raio Congelante");
poderes.insertAtEnd("Escudo de Fogo");

// remove poder ineficaz
poderes.removeByValue("Raio Congelante");

// verifica se existe
if (poderes.find("Escudo de Fogo") !== -1) {
    console.log("Escudo de Fogo disponível!");
}

// mostra lista final
console.log("Lista de poderes:", poderes.toString());