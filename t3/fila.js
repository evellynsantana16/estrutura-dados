class Fila {
    // Atributos privados
    #items = [];
    #inicio = 0;
    #fim = 0;

    // Adiciona elemento no final da fila
    enqueue(elemento) {
        this.#items[this.#fim] = elemento;
        this.#fim++;
    }

    // Remove e retorna o primeiro elemento
    dequeue() {
        if (this.estaVazia()) {
            return undefined;
        }

        const item = this.#items[this.#inicio];
        delete this.#items[this.#inicio];
        this.#inicio++;

        // Reset quando a fila fica vazia
        if (this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
        }

        return item;
    }

    // Retorna o primeiro elemento sem remover
    front() {
        if (this.estaVazia()) {
            return undefined;
        }

        return this.#items[this.#inicio];
    }

    // Verifica se está vazia
    estaVazia() {
        return this.#fim === this.#inicio;
    }

    // Retorna o tamanho
    tamanho() {
        return this.#fim - this.#inicio;
    }

    // Limpa a fila
    limpar() {
        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;
    }
}

module.exports = Fila;