// Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido.

let numeroSurtidos = [];
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

//For utilizado para obter as 100 jogadas. Math random para sortear números aleatórios entre 1 e 6, com Math ceil para arrendondar os número para cima, com intuíto de atingir o número 6. Todos os resultados foram armazenados em uma array;

for (let i = 1; i <= 100; i++) {
   numeroSurtidos.push(Math.ceil(Math.random() * 6));
};

//For Of utilizado para verificação do array de números, com if e else if para armazenar os resultados;
for (let i of numeroSurtidos) {

   if (numeroSurtidos[i] === 1) {
      num1++
   } else if (numeroSurtidos[i] === 2) {
      num2++
   } else if (numeroSurtidos[i] === 3) {
      num3++
   } else if (numeroSurtidos[i] === 4) {
      num4++
   } else if (numeroSurtidos[i] === 5) {
      num5++
   } else if (numeroSurtidos[i] === 6) {
      num6++
   };
};

console.log("O total de números obtidos foi", numeroSurtidos, "o número 1 apareceu:", num1, "o número 2 apareceu:", num2, "o número 3 apareceu:", num2, "o número 4 apareceu:", num4, "o número 5 apareceu:", num5, "o número 6 apareceu:", num6, "total lançamentos:", numeroSurtidos.length);
