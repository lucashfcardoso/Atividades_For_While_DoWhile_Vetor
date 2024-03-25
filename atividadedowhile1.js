const readline = require('readline-sync');

let positivos = 0;                                                  //contagem começa no 0
let num                                              

do {
    num = readline.questionInt("Digite um numero: ");

    if (num > 0  && num !== 0) {                               //se número de entrada for positivo e diferente de 0
        positivos += num;                                      //positivos soma seu valor + o valor do número digitado
    }

} while (num !== 0);                                           //fazer isso enquanto número for diferente de 0

console.log(`A soma dos números positivos é: ${positivos}`);