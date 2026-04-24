// ===============================
// EXERCÍCIO 4A
// Enunciado:
// Remover um valor específico da lista.
// ===============================

const listaA = new LinkedList();

// adiciona valores
listaA.insertAtEnd("A");
listaA.insertAtEnd("B");
listaA.insertAtEnd("C");

// mostra antes
console.log("Lista original:", listaA.toString());

// remove B
listaA.removeByValue("B");

// mostra depois
console.log("Após remover B:", listaA.toString());


// ===============================
// EXERCÍCIO 4B
// Enunciado:
// Buscar um valor na lista.
// ===============================

const listaB = new LinkedList();

// adiciona valores
listaB.insertAtEnd("X");
listaB.insertAtEnd("Y");

// busca valor
let resultado = listaB.find("Y");

// verifica resultado
if (resultado !== -1) {
    console.log("Valor encontrado na posição:", resultado);
} else {
    console.log("Valor não encontrado");
}