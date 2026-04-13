import contaBancaria from "./conta.bancaria.mjs";

//instanciando a conta
const minhaConta = new contaBancaria();


//simulando operações
minhaConta.depositar(500);
minhaConta.sacar(600);

minhaConta.depositar(100)

minhaConta.sacar(600)
//exibir o resultado final
console.log(`Saldo atual: ${minhaConta.verSaldo()}`);

