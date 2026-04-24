/*Módulos espaciais pousam um sobre o outro. O último a pousar é o primeiro a sair
da base. Simule essa sequência com uma pilha e peça para exibir a ordem de
retorno à nave.*/


let modulos = [];
modulos.push("Módulo Alpha");
modulos.push("Módulo Beta");
modulos.push("Módulo Gama");
console.log("Ordem de retorno:");
while (modulos.length > 0) {
console.log("Retornando:", modulos.pop());
}