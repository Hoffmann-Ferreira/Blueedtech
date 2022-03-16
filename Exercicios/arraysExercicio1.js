/*Faça um Programa que leia 10 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.*/

const prompt = require("prompt-sync")();

let numerosPar = [];
let numeroImpar = [];
let contador = 1;

//Estrutura de while utilizada para poder fazer a repetição das perguntas. Obs. poderia ser utilizado um for.

while (numerosPar.length < 5) {
    pergunNumero = +prompt(`Usuário digite 10 números, você está no número ${contador}. Digite seu número:  `);

    contador++;
    console.log("\n");

    if (pergunNumero % 2 == 0) {
            numerosPar.push(pergunNumero);
    } else {
            numeroImpar.push(pergunNumero)
    };

};
// Impressão do resultado.
    
console.log(`Os números PARES que você digitou são: ${numerosPar}\n`);

console.log(`Os números IMPARES que você digitou são: ${numeroImpar}`);






