
// Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno.

const prompt = require("prompt-sync")();
let numAlunos = 0;
let contador = 0;
//estrutura while utilizada para ter a quantidade de alunos;
while (contador == 0) {
    const quantiAlunos = +prompt("Quantos alunos deseja cadastrar? ");
    numAlunos += quantiAlunos;
    contador++;
};
//Alunos e notas armazenados em arrays. For utilizado com o número de alunos para acrescentar cada informação em seu array;
let alunos = [];
let notas = [];

for (let i = 0; i < numAlunos; i++) {
    const aluno = prompt("Qual o nome do aluno? ");
    const nota = +prompt("Qual a nota do aluno? ");

    alunos.push(aluno);
    notas.push(nota);
};

console.log(alunos, notas);

//Acesso as informações através do indexOf, dentro de um for, que repete o tamanho do array de notas. Saída do sistema através de break;
for (let i = 0; i < notas.length; i++) {

    const qualAluno = prompt("Qual aluno você deseja saber a nota? ");

    alunos.indexOf(qualAluno);
    console.log("O aluno", qualAluno, "tem a nota", notas[alunos.indexOf(qualAluno)]);

    const continuar = prompt("Deseja continuar? ").toLowerCase();

    if (continuar != "sim") {
        console.log("Saindo do sistema...")
        break;

    };

};