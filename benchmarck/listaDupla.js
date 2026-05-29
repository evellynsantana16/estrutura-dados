class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}

export default class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.tamanho = 0;
    }

    // inserir no final
    append(valor) {

        const novo = new Node(valor);

        if(this.head === null) {

            this.head = novo;
            this.tail = novo;

        } else {

            this.tail.proximo = novo;
            novo.anterior = this.tail;

            this.tail = novo;
        }

        this.tamanho++;
    }

    // buscar valor
    indexOf(valor) {

        let atual = this.head;
        let indice = 0;

        while(atual !== null) {

            if(atual.valor === valor) {
                return indice;
            }

            atual = atual.proximo;
            indice++;
        }

        return -1;
    }

    size() {
        return this.tamanho;
    }

    isEmpty() {
        return this.tamanho === 0;
    }
}