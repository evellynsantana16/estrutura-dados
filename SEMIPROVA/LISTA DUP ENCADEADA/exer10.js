/*Cada vagão é um nó. Simule adicionar vagões à frente e atrás. Mostre a composição
do trem indo e voltando com traverse e traverseReverse.*/

let trem = new DoublyLinkedList();
trem.append("Vagão 1");
trem.append("Vagão 2");
trem.prepend("Locomotiva");

5
console.log("Trem normal:");
trem.traverse();
console.log("Trem reverso:");
trem.traverseReverse();