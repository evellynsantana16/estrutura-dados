/*
==================================================
ENUNCIADO

Uma clínica recebe pacientes por ordem de chegada.
Os pacientes que chegaram foram:
Maria, João, Carlos, Ana.

O sistema deve:
a) cadastrar todos os pacientes na estrutura correta;
b) atender o primeiro paciente;
c) mostrar quem foi atendido;
d) mostrar quem ainda aguarda.
==================================================
*/

const { Fila } = require('../00_classes/FilaPilha');

/*
POR QUE USEI FILA?
Porque o enunciado fala "ordem de chegada".
Fila segue FIFO:
First In, First Out = primeiro que entra, primeiro que sai.
*/

const pacientes = new Fila();

// QUESTÃO A: cadastrar todos os pacientes.
pacientes.enfileirar('Maria');
pacientes.enfileirar('João');
pacientes.enfileirar('Carlos');
pacientes.enfileirar('Ana');

// QUESTÃO B: atender o primeiro paciente.
const pacienteAtendido = pacientes.desenfileirar();

// QUESTÃO C: mostrar quem foi atendido.
console.log('Paciente atendido:', pacienteAtendido);

// QUESTÃO D: mostrar quem ainda aguarda.
console.log('Pacientes aguardando:');
pacientes.imprimir();
