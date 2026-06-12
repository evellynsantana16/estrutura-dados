export default class MeuArray {

    // atributo privado
    #items = [];

    // quantidade de itens
    #tamanho = 0;

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
        this.#tamanho--; // corrigido

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
    verItens= () => this.#items;



 // edita um valor
    editar(indice, novoValor) {
        if (indice < 0 || indice >= this.#tamanho) {
            return;
        }

        this.#items[indice] = novoValor; // corrigido
    }

    // procura o índice de um valor
    obterIndice(valor) {
        for (let i = 0; i < this.#tamanho; i++) {
            if (this.#items[i] === valor) { // corrigido
                return i;
            }
        }
        console.log("Drink Inválido")
        return null;
    }

}

