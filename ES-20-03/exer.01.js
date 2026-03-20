//Crie um objeto para armazenar informações de alunos, onde a chave é o
//número de matrícula e o valor é o nome do aluno. Adicione pelo menos 3
//alunos ao dicionário e exiba os nomes iterando sobre as chaves.
const alunos = {
  
        101: "Ana",
        102: "Bruno",
        103: "Carla"
    
};

for (let matricula in alunos) {
    console.log(matricula, alunos[matricula]);
}