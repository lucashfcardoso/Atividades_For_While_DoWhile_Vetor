const readline = require('readline-sync');

const array = [], arrayimpar = [], arraypar = [];
let sumAll = 0, average = 0;

do {
    let number = readline.questionInt("Digite o número que deseja guardar: ");

    array.push(number);

} while (array.length < 10);

for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
        arrayimpar.push(array[i]);
    }

    if (array[i] % 2 === 0) {
        arraypar.push(array[i]);
    }

    sumAll += array[i];

}

average = sumAll / (array.length);

console.log(`Elementos nos índices ímpares:
${arrayimpar}
Elementos pares:
${arraypar}
Soma: ${sumAll}
Média: ${average}
`)