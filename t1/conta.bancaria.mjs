export default class contaBancaria {
    #saldo = 0;

    //método para add dinheiro
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Seu depósito de ${valor} realizado.`)
        }
    }

    //metodo pra retira dimdim
    sacar(valor) {
        if (valor && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} concedido.`);
        }

        else {
            console.log(`Tem grana suficiente n mano...`)
        }
    }

    //metodo de leitura 
    verSaldo(){
        return this.#saldo;
    }
}