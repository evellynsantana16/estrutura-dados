//Na escala de plantão, "Daniel" ficou doente e "Diego" vai cobrir o turno dele
//exatamente na mesma posição da lista. Usando apenas uma função,
//remova "Daniel" e insira "Diego" no mesmo índice.

const escala = ['carlos', 'daniel', 'eduardo', 'felipe'];

const indiceDaniel = escala.ondexOf('daniel');

escala.splice(indiceDaniel, 1, "diego");
 console.log(escala);