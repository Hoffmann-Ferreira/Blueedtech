// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.

const prompt = require("prompt-sync")();

const usuario1 = [];
const usuario2 = [];
const usuario3 = [];
const usuario4 = [];
const usuario5 = [];

/*Utilizando estrutura for para obter e armazenar informações dos usuários; com if e else if para armazenar em cada array específico.*/

for (let i = 0; i < 5; i++) {

    if (usuario1.length < 3) {

        console.log("\nOlá, usuário, digite seus dados abaixo e descubra á média de sua idade e altura\n");

        const perg1 = prompt("Qual seu nome? ");
        const perg2 = +prompt("Qual sua idade? ");
        const perg3 = +prompt("Qual seu altura? ");

        usuario1.push(perg1);
        usuario1.push(perg2);
        usuario1.push(perg3);

        console.log("\n", perg1, "seus dados são", usuario1, "á média de sua idade e altura é:", (usuario1[1] + usuario1[2]) / 2);

    } else if (usuario2.length < 3) {

        console.log("\nOlá, usuário, digite seus dados abaixo e descubra á média de sua idade e altura\n");

        const perg1 = prompt("Qual seu nome? ");
        const perg2 = +prompt("Qual sua idade? ");
        const perg3 = +prompt("Qual seu altura? ");

        usuario2.push(perg1);
        usuario2.push(perg2);
        usuario2.push(perg3);

        console.log("\n", perg1, "seus dados são", usuario2, "á média de sua idade e altura é:", (usuario2[1] + usuario2[2]) / 2);

    } else if (usuario3.length < 3) {

        console.log("\nOlá, usuário, digite seus dados abaixo e descubra á média de sua idade e altura\n");

        const perg1 = prompt("Qual seu nome? ");
        const perg2 = +prompt("Qual sua idade? ");
        const perg3 = +prompt("Qual seu altura? ");

        usuario3.push(perg1);
        usuario3.push(perg2);
        usuario3.push(perg3);

        console.log("\n", perg1, "seus dados são", usuario3, "á média de sua idade e altura é:", (usuario3[1] + usuario3[2]) / 2);

    } else if (usuario4.length < 3) {

        console.log("\nOlá, usuário, digite seus dados abaixo e descubra á média de sua idade e altura\n");

        const perg1 = prompt("Qual seu nome? ");
        const perg2 = +prompt("Qual sua idade? ");
        const perg3 = +prompt("Qual seu altura? ");

        usuario4.push(perg1);
        usuario4.push(perg2);
        usuario4.push(perg3);

        console.log("\n", perg1, "seus dados são", usuario4, "á média de sua idade e altura é:", (usuario4[1] + usuario4[2]) / 2);

    } else if (usuario5.length < 3) {

        console.log("\nOlá, usuário, digite seus dados abaixo e descubra á média de sua idade e altura\n");

        const perg1 = prompt("Qual seu nome? ");
        const perg2 = +prompt("Qual sua idade? ");
        const perg3 = +prompt("Qual seu altura? ");

        usuario5.push(perg1);
        usuario5.push(perg2);
        usuario5.push(perg3);

        console.log("\n", perg1, "seus dados são", usuario5, "á média de sua idade e altura é:", (usuario5[1] + usuario5[2]) / 2);
    };

};


