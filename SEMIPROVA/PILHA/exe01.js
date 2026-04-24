/*Um mágico embaralha 5 cartas com os valores A, B, C, D, E e as empilha. Peça aos
alunos para simular o processo de colocar as cartas na pilha (push) e depois revelar
a ordem em que saem (pop), mostrando que o último a entrar é o primeiro a sair
(LIFO).
Desafio extra: inverter a ordem da pilha usando uma segunda pilha.*/





// push : coloca elemento no final da pilha
// unshift : coloca elemento no inicio da pilha
//pop : tira o elemento do topo da pilha ou seja, o ultimo elemento add


const pilha = [];

pilha.push("A");
pilha.push("B");
pilha.push("C");
pilha.push("E"); //primeira carta a sair
while (pilha.length > 0) {
    console.log(pilha.pop()); // → mostra o que saiu (LIFO de verdade)
}

/* console.log(pilha)  → mostra o que ficou
SAIDA : A, B, C
        A, B
        A*/

    //DESAFIO EXTRA: inverter a ordem da pilha usando uma 2 pilha


const pilha2 = [];

// empilhando na pilha original (ordem normal)
pilha.push("A");
pilha.push("B");
pilha.push("C");
pilha.push("E");

// while: enquanto ainda tiver elementos na pilha original
while (pilha.length > 0) {

    // tira o último elemento da pilha (LIFO)
    // e já coloca esse elemento na pilha2
    pilha2.push(pilha.pop());
}

// mostra a nova pilha já invertida
console.log(pilha2);

