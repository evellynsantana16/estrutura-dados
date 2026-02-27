import MeuArray from "./MeuArray.mjs";

const minha_variavel = new MeuArray();

minha_variavel.adicionar(10);
minha_variavel.adicionar(20);
minha_variavel.adicionar(30);
console.table(minha_variavel.verItems());

console.log(minha_variavel.obterElemento(1)); // saida = 20
console.log(minha_variavel.tamanhoArray()); //saida = 3

//saida = 30 (remove o ultimo elemento)
console.log(minha_variavel.remover());
console.log(minha_variavel.tamanhoArray()); //saida = 2
console.table(minha_variavel.verItems());
