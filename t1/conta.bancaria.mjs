export default class contaBancaria {
    #saldo = 0;

    

    //método/funcao para add dinheiro
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Seu depósito de ${valor} realizado.`)
        }
    }

    //metodo pra retira dimdim
    sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} concedido.`);
        }

        else {
            console.log(`Sinto muito, saldo insuficiente!`) 
        }
    }

    //metodo de leitura 
    verSaldo(){
        return this.#saldo;
    }
}