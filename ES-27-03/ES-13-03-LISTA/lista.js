class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

export default class LinkedList {

    constructor() {
        this.head = null;
        this.tamanho = 0;
    }

    // inserir no início
    insertAtBeginning(valor) {
        const novo = new Node(valor);

        novo.proximo = this.head;
        this.head = novo;

        this.tamanho++;
    }

    // inserir no final
    insertAtEnd(valor) {
        const novo = new Node(valor);

        if (!this.head) {
            this.head = novo;
        } else {
            let atual = this.head;

            while (atual.proximo) {
                atual = atual.proximo;
            }

            atual.proximo = novo;
        }

        this.tamanho++;
    }

    // remover por valor
    removeByValue(valor) {
        if (!this.head) return null;

        // se for o primeiro
        if (this.head.valor === valor) {
            this.head = this.head.proximo;
            this.tamanho--;
            return;
        }

        let atual = this.head;

        while (atual.proximo && atual.proximo.valor !== valor) {
            atual = atual.proximo;
        }

        if (atual.proximo) {
            atual.proximo = atual.proximo.proximo;
            this.tamanho--;
        }
    }

    // buscar valor
    find(valor) {
        let atual = this.head;
        let index = 0;

        while (atual) {
            if (atual.valor === valor) {
                return index;
            }
            atual = atual.proximo;
            index++;
        }

        return -1;
    }

    // tamanho
    size() {
        return this.tamanho;
    }

    // vazia?
    isEmpty() {
        return this.tamanho === 0;
    }

    // mostrar lista
    toString() {
        let atual = this.head;
        let resultado = "";

        while (atual) {
            resultado += atual.valor + " -> ";
            atual = atual.proximo;
        }

        return resultado + "null";
    }
}