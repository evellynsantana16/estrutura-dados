export default class MeuArray {

    // atributo privado
    #items = [];

    // quantidade de itens
    #tamanho = 0;

    // chamado quando o objeto é criado
    constructor() {
        console.log("MeuArray criado!!!!!");
    }

    // adiciona um elemento ao final
    adicionar(elemento) {
        this.#items[this.#tamanho] = elemento;
        this.#tamanho++;
    }

    // remove o último elemento
    remover() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        const ultimoItem = this.#items[this.#tamanho - 1];
        delete this.#items[this.#tamanho - 1];
        this.#tamanho--;

        return ultimoItem;
    }

    // acessa elemento por índice
    obterElemento(indice) {
        if (indice < 0 || indice >= this.#tamanho) {
            return undefined;
        }

        return this.#items[indice];
    }

    // limpa o array
    limpar() {
        this.#items = [];
        this.#tamanho = 0;
    }

    // retorna o tamanho
    tamanhoArray = () => this.#tamanho;

    // retorna os itens
    verItems = () => this.#items;
}



