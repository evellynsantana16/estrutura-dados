import MeuArray from './MeuArray.js';
 import Pilha from './pilha.js';
import Fila from './fila.js';
import LinkedList from './lista.js';
import BinaryTree from './arvorebinaria.js';
 import AVLTree from './AVLTree.js';
import DoublyLinkedList from './listaDupla.js';


const meuArray = new MeuArray();
 const pilha = new Pilha();
 const fila = new Fila();
 const lista = new LinkedList();
 const arvore = new BinaryTree();
 const avl = new AVLTree();
 const listaDupla = new DoublyLinkedList();

const size = 100000;
const valorBusca = 'Evellyn';

function getRandomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.time("tempoArray");

for(let i = 0; i < size; i++) {
    if(i == size - 1) {
        meuArray.adicionar(valorBusca);
    } else {
        meuArray.adicionar(getRandomIntRange(1, size));
    }
}

console.timeEnd("tempoArray");

console.time("buscaArray");

const resultadoArray = meuArray.obterIndice(valorBusca);

console.timeEnd("buscaArray");

console.log("Resultado da busca:", resultadoArray);


//PILHA

console.log("Pilha"); //apresentação da pilha

console.time("tempoPilha");//iniciando a contagem do tempo pra add elementos na pilha

for(let i = 0; i < size; i++) { //aqui é um loop onde o valor é add a pilha, se for o ultimo valor ele add o valor de busca, se n add um valor aleatorio entre 1 e o tamanho da pilha

    if(i == size - 1) { //se for o ultimo valor, add o valor da busca

        pilha.adicionar(valorBusca); //add valor da busca

    } else { // se n 

        pilha.adicionar( //add valor aleatorio
            getRandomIntRange(1, size)// gera valor aleatorio
        );

    }

}

console.timeEnd("tempoPilha"); //fim da contagem

console.time("buscaPilha"); //inicia a contagem do tempo pra busca na pilha

const resultadoPilha = pilha.buscar(valorBusca); //com o novo método

console.timeEnd("buscaPilha"); //fim da contagem de busca

console.log("Resultado da busca:", resultadoPilha); //exibe o resultado da busca



//FILA 


console.log("Fila");

console.time("tempoFila");

for(let i = 0; i < size; i++) {
    if(i == size - 1) {
        fila.enqueue(valorBusca);
    } else {
        fila.enqueue(getRandomIntRange(1, size));
    }
}

console.timeEnd("tempoFila");

console.time("buscaFila");

const resultadoFila = fila.buscar(valorBusca);

console.timeEnd("buscaFila");

console.log("Resultado da busca:", resultadoFila);



//LISTA ENCADEADA


console.log("Lista Encadeada");

console.time("tempoLista");

for(let i = 0; i < size; i++) {
    if(i == size - 1) {
        lista.insertAtEnd(valorBusca);
    } else {
        lista.insertAtEnd(getRandomIntRange(1, size));
    }
}

console.timeEnd("tempoLista");

console.time("buscaLista");

const resultadoLista = lista.find(valorBusca);

console.timeEnd("buscaLista");

console.log("Resultado da busca:", resultadoLista);


//LISTA DUPLAMENTE ENCADEADA

// LISTA DUPLAMENTE ENCADEADA

console.log("Lista Duplamente Encadeada");

console.time("tempoListaDupla");

for(let i = 0; i < size; i++) {

    if(i == size - 1) {

        listaDupla.append(valorBusca);

    } else {

        listaDupla.append(
            getRandomIntRange(1, size)
        );

    }
}

console.timeEnd("tempoListaDupla");

console.time("buscaListaDupla");

const resultadoListaDupla =
    listaDupla.indexOf(valorBusca);

console.timeEnd("buscaListaDupla");

console.log(
    "Resultado da busca:",
    resultadoListaDupla
);


// ÁRVORE BINÁRIA


console.log("Árvore Binária");

console.time("tempoArvore");

for(let i = 0; i < size; i++) {
    if(i == size - 1) {
        // último valor precisa ser meu nome, como o professor pediu
        arvore.inserir(valorBusca);
    } else {
        // transformei o número em texto para não misturar number com string na árvore
        arvore.inserir(String(getRandomIntRange(1, size)));
    }
}

console.timeEnd("tempoArvore");


//buscando valor da arvore

console.time("buscaArvore");

const resultadoArvore = arvore.buscar(arvore.raiz, valorBusca);

console.timeEnd("buscaArvore");

if(resultadoArvore){
    console.log("Nome encontrado na Árvore Binária!");
} else {
    console.log("Nome NÃO encontrado na Árvore Binária!");
}

// AVL 


// mesma lógica que arvore binaria
console.log("AVL");

console.time("tempoAVL");

for(let i = 0; i < size; i++) {
    if(i == size - 1) {
        avl.insert(valorBusca);
    } else {
        avl.insert(String(getRandomIntRange(1, size)));
    }
}

console.timeEnd("tempoAVL");

console.time("buscaAVL");

const resultadoAVL = avl.search(valorBusca);

console.timeEnd("buscaAVL");

if(resultadoAVL){
    console.log("Nome encontrado na AVL!");
} else {
    console.log("Nome NÃO encontrado na AVL!");
}