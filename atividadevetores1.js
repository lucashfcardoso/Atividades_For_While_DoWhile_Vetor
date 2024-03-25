const readline = require('readline-sync');

const array = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const num = readline.questionInt('Digite o número que você deseja encontar: ');

for (let i = 0; i <= array.length; i++) {                                 //length é o tamanho total do vetor
    if (array[i] === num) {                                              //i é a posição, posição [i] é o número digitado
        console.log(`O número ${num} está localizado na posição: ${i}`)
    } else if (i === array.length) {
        console.log(`O número ${num} não foi encontrado!`)
    }
}