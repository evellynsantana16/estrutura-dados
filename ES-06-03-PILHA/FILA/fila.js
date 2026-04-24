/*enqueue → entra na fila (no FINAL)
dequeue → sai da fila (do INÍCIO)*/




export default class Fila {

    #items = {};
    #inicio = 0;
    #fim = 0;

    constructor() {
        console.log("Fila criada!");
    }

    // adicionar no final
    enqueue(elemento) {
        this.#items[this.#fim] = elemento;
        this.#fim++;
    }

    // remover do início
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const primeiro = this.#items[this.#inicio];
        delete this.#items[this.#inicio];
        this.#inicio++;

        return primeiro;
    }

    // ver primeiro da fila
    front() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.#items[this.#inicio];
    }

    // verificar se está vazia
    isEmpty() {
        return this.#fim === this.#inicio;
    }

    // tamanho da fila
    size() {
        return this.#fim - this.#inicio;
    }

    // limpar fila
    clear() {
        this.#items = {};
        this.#inicio = 0;
        this.#fim = 0;
    }

    // ver itens
    verItens() {
        return this.#items;
    }
}