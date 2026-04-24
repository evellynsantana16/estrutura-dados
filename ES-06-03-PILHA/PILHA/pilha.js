class MinhaPilha {
    // Atributos privados
    #items = [];
    #tamanho = 0;

    // Adiciona elemento ao topo
    adicionar(elemento) {
        this.#items[this.#tamanho] = elemento;
        this.#tamanho++;
    }

    // Remove e retorna o topo
    remover() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        const ultimoItem = this.#items[this.#tamanho - 1];
        delete this.#items[this.#tamanho - 1];
        this.#tamanho--;

        return ultimoItem;
    }

    // Retorna o topo sem remover
    topo() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        return this.#items[this.#tamanho - 1];
    }

    // Limpa a pilha
    limpar() {
        this.#items = [];
        this.#tamanho = 0;
    }

    // Verifica se está vazia
    estaVazia() {
        return this.#tamanho === 0;
    }

    // Retorna o tamanho
    tamanhoPilha() {
        return this.#tamanho;
    }
}

module.exports = MinhaPilha;