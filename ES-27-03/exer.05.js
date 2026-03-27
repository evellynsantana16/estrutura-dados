//O setor de compliance precisa garantir que todos os funcionários da lista
//completaram o treinamento de segurança da informação. Verifique se
//todos os itens possuem a propriedade treinamentoConcluido como true. O
//retorno deve ser um booleano.

const equipe = [
    { nome: 'marcos', treinamentoConcluido: true },
    { nome: 'ferbanda', treinamentoConcluido: true },
    { nome: 'roberto', treinamentoConcluido: false },
];


const todosTreinados = equipe.every(funcionario => funcionario.treinamentoConcluido === true);

console.log(todosTreinados); // false, porque o Roberto ainda não completou