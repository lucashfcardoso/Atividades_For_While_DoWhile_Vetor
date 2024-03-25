const readline = require('readline-sync');

let menorde21 = 0;
let maiorde50 = 0;
let booleano = true;

while (booleano) {                                         //enquanto booleano for true, repita:
    let idade = readline.question(`Digite uma idade: `);   //leia a idade de entrada

    if (idade < 21 && idade > 0) {                        //enquanto idade for menor que 21 E maior que 0 
        menorde21 ++                                      //menorde21 ganha um
    } else if (idade > 50) {                              //ou se idade for maior que 50
        maiorde50++                                       //maior de 50 ganha um
    } else if (idade < 0) {                               //ou se idade for negativa
        booleano = false                                  //o booleano vai ser falso, e o loop vai parar
    }
}
console.log(`\nTotal de pessoas menores de 21 anos: ${menorde21}`);
console.log(`\nTotal de pessoas maiores de 50 anos: ${maiorde50}`);