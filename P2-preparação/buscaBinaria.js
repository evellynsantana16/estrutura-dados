/*vetor ordenado + procurar = buscaBinária
vetor bagunçado + procurar = buscaSequencial
ordenar simples = bubbleSort
ordenar com pivô = quickSort
ordenar dividindo e mesclando = mergeSort*/


/*uma loja posssui esses produtos cadastrados e ordem crescente(busca binaria)

[10, 15, 20, 25, 30, 35, 40]

desenvolva uma solução para verificar se o numero 25 existe na lista e se existir, mostre no vetor*/


const {buscaBinaria} = require("./05_OrdenacaoEBusca");

const produtos = [10, 15, 20, 25, 30, 35, 40];

const resultado = buscaBinaria(produtos, 25);

console.log(resultado);