/*Simule as funcionalidades de "Desfazer" e "Refazer" de um editor de texto com
duas pilhas: uma para as ações feitas, outra para as ações desfeitas.
Exemplo: Digitar "A", "B", "C", desfazer duas vezes, refazer uma vez.*/


let acoes = [];
let desfeitas = [];

//digitar A, B e C

acoes.push("A");
acoes.push("B");
acoes.push("C");

//desfazer (undo)
desfeitas.push(acoes.pop()); // tira C
desfeitas.push(acoes.pop()); // tira B

//refazer (redo)
acoes.push(desfeitas.pop()); // Volta B

console.log("Ações:", acoes);
console.log("Desfeitas:", desfeitas);
