//O grande feiticeiro Eldrin vive em uma torre cheia de livros de feitiços. Ele
//sempre coloca os novos livros no topo da pilha e só pode pegar o que está
//no topo primeiro.

//• Implemente um sistema para ajudá-lo a organizar seus feitiços com as
//seguintes funcionalidades:

//– Adicionar um novo feitiço no topo da pilha.
//– Remover o feitiço do topo (Eldrin usou e guardou em outro lugar).
//– Ver qual feitiço está no topo sem removê-lo.
//– Verificar se não há mais feitiços na pilha.

//class Pilha {
//constructor() {
//  this.itens = [ ];
//  this.topo = -1;
//}

//adicionar(feitico){
//   this.topo = this.topo + 1;
//   this.itens[this.topo] = feitico;

//   this.#feitico++; 
//}

//remover(){
//if (this.#feitico === 0){
//      return underfined; 

//    }


//pega o ultimo item do no topo da pilha 
//const ultimoFeitico = this.#itens[this.topo -1 ];

//remove o item do topo
//delete this.#itens[this.#tamanho - 1];

// decremetna o iterm removido
//return ultimoFeitico;

//}

//tamanhoPilha = () => this#feitico;
//}


// ate aqui acima foi oq tentei fazer, porém vi que era bem mais pratico e facil kkkkkkk

// código do thiago



const Pilha = require('./pilha.js');

const feiticos = new Pilha();

feiticos.adicionar("Feitiço de Fogo");
feiticos.adicionar("Feitiço de Gelo");
feiticos.adicionar("Feitiço de Raio");

console.log(feiticos.remover()); // "Feitiço de Raio" removido
console.log(feiticos.topo()); // "Feitiço de Gelo"
console.log(feiticos.estaVazia()); // false

