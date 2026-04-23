/* Implemente uma variação da fila onde clientes com mais de 60 anos passam na
frente. (Dica: fazer com duas filas e intercalar atendimento.) */

class Fila {
    constructor() {
        this.itens = [];
    }

    enqueue(elemento) {
        this.itens.push(elemento);
    }

    dequeue() {
        return this.itens.shift();
    }

    isEmpty() {
        return this.itens.length === 0;
    }
}

// filas
let filaNormal = new Fila();
let filaPreferencial = new Fila();

// controle de alternância
let vezPreferencial = true;

function enfileirar(nome, idade) {
    if (idade >= 60) filaPreferencial.enqueue(nome);
    else filaNormal.enqueue(nome);
}

function atender() {
    // tenta preferencial primeiro se for a vez
    if (vezPreferencial && !filaPreferencial.isEmpty()) {
        vezPreferencial = false;
        return filaPreferencial.dequeue();
    }

    // senão atende normal
    if (!filaNormal.isEmpty()) {
        vezPreferencial = true;
        return filaNormal.dequeue();
    }

    // se uma fila acabar, continua com a outra
    if (!filaPreferencial.isEmpty()) {
        return filaPreferencial.dequeue();
    }

    return null;
}

// testes
enfileirar("Dona Maria", 65);
enfileirar("Carlos", 30);
enfileirar("Seu João", 70);
enfileirar("Ana", 25);

// atendimento
while (!filaNormal.isEmpty() || !filaPreferencial.isEmpty()) {
    console.log("Atendendo:", atender());
}