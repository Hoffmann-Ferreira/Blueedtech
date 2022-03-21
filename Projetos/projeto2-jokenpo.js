

let prompt = require("prompt-sync")();
let jogo;
// estrutura while de controle, para acesso ao jogo;
while (true) {
    console.log("\n");

    jogo = prompt("Olá, está preparado para jogar? Digite SIM para jogar e NAO para sair ").toLowerCase();

    if (jogo === "sim") {
        break;

    } else if (jogo === "nao") {
        console.log("Obrigado, quando quiser jogar inicie novamente o programa");
        console.log("\n");
        break;

    } else if (jogo != "sim" || "nao") {
        console.log(`Digite apenas SIM ou NAO.`);
        console.log("\n")
    };
};
//O jogo está dentro de um while, para que possa ser reinicializado conforme desejo do usuário;
while (jogo === "sim") {

    console.log("\n");

    console.log(`Bem vindo JOKENPÔ! que é uma competição onde temos 3 elementos, PEDRA, PAPEL e TESOURA, seguindo as regras:

    * PAPEL ganha de PEDRA, mas perde para TESOURA;
    * TESOURA por sua vez perde para PEDRA, mas GANHA DE PAPEL;
    * PEDRA perde para PAPEL, mas ganha de TESOURA;

    Assim todos os elementos tem chance um contra o outro, tudo depende da sua estratégia! 
    Seu adversário será o computador!`);

    console.log("\n");

    const nome = prompt(`Por favor, digite seu nome ou apelido: `);

    console.log("\n");

    let rodadas;
    //Estrutura das rodadas, com verificação de valores válidos digitados;
    while (true) {
        rodadas = +prompt("Por favor, digite o número de rodadas: ");
        console.log("\n");

        if (isNaN(rodadas) || rodadas === 0) {
            console.log("Favor digitar um valor válido!");
            console.log("\n");
        } else {
            break;
        };

    };
    //Variáveis que recebem dados, sendo que os valores do jogo estão armazenados em um array; 
    let computador;
    const jogo = ["pedra", "papel", "tesoura"];
    let vitorias = [];
    let perguntajogo;
    //Rodadas estabelecidas dentro de um for, onde o computador faz sorteios aleatórios entre 0 e 2 para poder jogar com o usuário. Também está presente estrutura de controle de valores digitados;
    for (let i = 1; i <= rodadas; i++) {

        while (true) {

            perguntajogo = prompt(`${nome}, escolha? PEDRA, PAPEL, ou TESOURA ? `).toLowerCase();

            console.log("\n");

            if (perguntajogo === "pedra" || perguntajogo === "papel" || perguntajogo === "tesoura") {
                break;

            } else if (perguntajogo != "pedra" || perguntajogo != "papel" || perguntajogo != "tesoura") {
                console.log(`${nome}, você não digitou corretamente o nome do elemento, tente novamente.`);
                console.log("\n");
            };
        };

        //Estrutura que faz o computador realizar os sorteios, analisando o número com o array do jogo;
        computador = Math.floor(Math.random() * (3 - 0) + 0);
        console.log(`O computador jogou ${jogo[computador]}`);
        console.log("\n");

        //Estrutura para verificar os resultados;
        if (perguntajogo === jogo[computador]) {
            console.log("Empate");
            vitorias.push("empate");
            console.log("\n");

        } else if (perguntajogo === "pedra" && jogo[computador] === "tesoura") {
            console.log(`${nome}, Ganhou!`);
            vitorias.push("jogador");
            console.log("\n");

        } else if (perguntajogo === "papel" && jogo[computador] === "pedra") {
            console.log(`${nome}, Ganhou!`);
            vitorias.push("jogador");
            console.log("\n");

        } else if (perguntajogo === "tesoura" && jogo[computador] === "papel") {
            console.log(`${nome}, Ganhou!`);
            vitorias.push("jogador");
            console.log("\n");

        } else {
            console.log("Computador ganhou");
            vitorias.push("computador");
            console.log("\n");
        };
    };
    //Variáveis que serão utilizadas como contador, para definir os vencedores;

    let jogador = 0;
    let compu = 0
    let empate = 0
    //Estrutura que conta o número de vitórias de cada um;
    for (let i of vitorias) {

        if (i === "jogador") {
            jogador++;

        } else if (i === "computador") {
            compu++;

        } else if (i === "empate") {
            empate++
        };
    };
    //Análise dos resultados para determinar o campeão
    if (jogador > computador) {
        console.log(`Parabéns ${nome} você é o grande campeão!
        Ganhou ${jogador} vezes, contra ${compu} vezes do computador!`);
        console.log("\n");

    } else if (jogador < computador) {
        console.log(`Vitória do COMPUTADOR, com ${compu} vitórias!
         ${nome} você ganhou apenas ${jogador} vezes!`);
        console.log("\n");

    } else {
        console.log(`Temos um EMPATE! ${nome} você ganhou ${jogador},
        e o COMPUTADOR gahou ${compu}.`);
        console.log("\n");
    };

    console.log("Total resultados", vitorias, vitorias.length);
    console.log("\n");

    //Estrutura que analisa se o jogador gostaria de iniciar um novo jogo; 

    while(true){
        let = novoJogo = prompt(`${nome}, gostaria de jogar novamente? Digite SIM para jogar e NAO para sair do jogo `).toLowerCase();
        console.log("\n");

        if (novoJogo === "sim") {
            console.log("Vamos iniciar um novo jogo!");
            console.log("\n");
            console.clear();
            break;

        } else if (novoJogo === "nao") {
            jogo = "nao";
            break;

        } else if (novoJogo != "sim" || novoJogo != "não"){
            console.log("Favor digitar SIM ou NAO");
            console.log("\n");
        };
    };
};

