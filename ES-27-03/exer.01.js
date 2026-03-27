//O RH precisa de uma lista apenas com os desenvolvedores de nível
//"Senior" para um novo projeto. Use uma função para retornar um novo array
//contendo apenas os funcionários com o cargo de "Senior".

const funcionarios = [
    {nome: 'joao', cargo: 'senior'},
    {nome: 'joao', cargo: 'pleno'},
    {nome: 'maria', cargo: 'junior'},
    {nome: 'carlos', cargo: 'senior'},
    {nome: 'ana', cargo: 'pleno'},
    {nome: 'joao', cargo: 'junior'},
    {nome: 'marcos', cargo: 'senior'},
    {nome: 'maria', cargo: 'pleno'},
    {nome: 'lucas', cargo: 'junior'},
    {nome: 'ana', cargo: 'senior'},
    {nome: 'pedro', cargo: 'pleno'},
    {nome: 'carlos', cargo: 'junior'}

];

const seniors = funcionarios.filter( i => i.cargo === 'senior');

console.log(seniors);