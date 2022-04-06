
//Para melhor jogabilidade utilize o terminal na vertical;

//Função verificadora de caracteries digitados pelo usuário, caso não seja sim ou não, repete a pergunta;
function verificadora(resposta) {
    while (resposta != "sim" && resposta != "nao") {
        let novaPergun = prompt("Você digitou o comando errado, digite novamente: ").toLowerCase();
        resposta = novaPergun;
        if (resposta === "sim" || resposta === "nao") {
            break;
        };
    };
    return resposta;
};

//Função arrow utilizada apenas para parar o terminal em um momento específico e depois limpar o terminal;

let limpar = () => {
    console.log(`\n`);
    let parar = prompt("Pressione ENTER para prosseguir");
    console.clear();
};

// Array utilizado para armazenar as respostas do usuário, para ser utilizado em funções de escolhas do usuário;
let armazenaPergun = [];

//Objetos do personagem com métodos para acrescentar e retirar vida;
let max = {
    nome: "Max",
    energia: 100,
    sanidade: 100,
    vida: this.energia + this.sanidade,
    /*Alterações status, perdas diárias e ganhos com objetivos do jogo.
    Está sendo feita a perda e ganho na mesma função pelo fato do personagem mesmo ganhando energia acaba gastando energia em atividades. Também é permitida numeros negativos, para punir o usuário*/
    alteraEnergia: function (ganho = 0) {
        this.energia -= 20;
        this.energia += ganho;

        if (this.energia > 100) {
            this.energia = 100;
        };
    },
    alteraSanidade: function (ganho = 0) {
        this.sanidade -= 20;
        this.sanidade += ganho;

        if (this.sanidade > 100) {
            this.sanidade = 100;
        };
    },
    /*permitido números negativos, com intuíto de punir o usuário, uma vez que o numero negativo irá diminur a vida dele no total, pois na conta da vida ira subtrair o valor da outra propriedade*/
    alteraVida: function () {
        this.vida = this.sanidade + this.energia;
    },
    /*Método criado com intuito de tornar o jogo mais difícil, dando uma aleatoriedade as escolhas do usuário. Desta forma o usuário pode ou não ser recompensado, tornando o jogo mais real */
    aleatoriedade: function () {

        let aleatorio = Math.floor(Math.random() * 11);

        if (aleatorio < 5) {
            this.alteraEnergia(30), this.alteraSanidade(30), this.alteraVida();
            console.log(`\n
            (COMPUTADOR) Você achou alimento!
            
            Teve ganho de ernergia e sanidade`);
        } else {
            this.alteraEnergia(), this.alteraSanidade(), this.alteraVida();
            console.log(`\n
            (COMPUTADOR) Você não conseguiu localizar alimento!
            
            Teve apenas perda de ernergia e sanidade`);
        };
    },
    //Metodo utilizado com base nas escolhas do personagem;
    escolhas: function () {
        if (armazenaPergun[1] == "sim") {
            this.alteraSanidade(10);

            if (armazenaPergun[2] == "nao") {
                this.alteraEnergia();
            };
            this.alteraVida();

        } else if (armazenaPergun[2] == "sim") {
            this.alteraEnergia(10);

            if (armazenaPergun[1] == "nao") {
                this.alteraSanidade();
            };
            this.alteraVida();

        } else if (armazenaPergun[1] == "nao" && armazenaPergun[2] == "nao") {
            this.alteraEnergia();
            this.alteraSanidade();
            this.alteraVida();
        };
    },
    //Verificação se o jogador ainda está vivo;
    morte: function () {
        if (max.vida <= 0) {
            console.log(`\n`);
            console.log(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ GAME OVER!⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢠⠠⠤⠄⣒⣂⠤⠤⡄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠒⠉⠁⠠⠔⠋⠉⠉⠉⠈⠃⠆⠈⠙⠢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠉⣠⠖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢑⢮⣑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢋⡴⣓⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣐⣭⣢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢯⠀⢹⢀⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡇⣥⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢺⣤⡼⡀⠮⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠌⠕⠌⢦⠳⣧⡟⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣾⣿⡅⠠⠑⡀⠀⠠⠠⠄⠀⠀⠀⠀⠀⠀⡄⡈⠈⠄⣷⣽⣿⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣽⣷⠟⢁⣶⣿⣿⣷⣶⡀⠀⠀⠀⠀⢀⣤⣾⣿⣶⣶⣤⠘⢷⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠏⣴⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⣠⣻⣿⣿⣿⣿⣿⣿⣿⠸⡻⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⣻⣿⣿⣿⣿⣿⣿⣿⣯⡅⡀⠽⣿⣿⣿⣿⣿⣿⣿⡿⣽⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣫⡇⡻⣿⣿⡿⣿⢿⢙⣥⣿⣿⣶⣘⡫⡛⡛⠛⠟⣛⣼⣧⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡏⠉⢀⠀⠈⠀⠀⠛⣟⣿⣿⣿⣿⡟⠃⡀⢂⡄⠀⢩⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣭⣤⣴⣽⢴⣯⡀⠀⢉⡛⣏⢛⠙⢀⣤⣿⣆⣵⣤⣮⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠓⣿⢿⣼⣿⣿⣄⣀⣀⡙⠀⢀⣮⣼⣿⢷⣿⣿⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢷⠋⣿⣿⣾⡡⡏⡍⢹⢹⣹⣿⣡⡿⣾⠰⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢯⣇⠘⠷⢿⢫⡩⡩⠸⡸⣄⡴⡶⠿⠇⢸⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠷⣌⠁⣈⠁⢉⠈⠈⠁⡀⣄⢋⠄⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⣆⡀⢈⢠⢀⡛⢠⡖⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠚⠛⠓⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀        VOCÊ NÃO CONSEGUIU SOBREVIVER!!!⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`);
        };

    },
};

//Objeto do tempo, contagem de dias, contagem e início de horas
let tempo = {
    dias: [1, 2, 3, 4, 5],
    horas: 0,
    diasStatus: 1,
    contagemTempo: function (tarefa) {
        this.horas += tarefa;
        if (this.horas >= 24) {
            this.horas -= 24;
            this.diasStatus++
        };
    },
};
// função status, objetivo de diminuir o tamanho do código;
function status() {
    return console.log(`╭═══════════╮
    Status
╰═══════════╯
╭═══════════╮
 Dia: ${tempo.diasStatus}
 Horas: ${tempo.horas} 
 Vida: ${max.vida}  
 Energia: ${max.energia} 
 Sanidade: ${max.sanidade}
╰═══════════╯`);
};
const prompt = require("prompt-sync")();

//Variável utilizada para controlar o Do..while;
let continuarJogo = "sim";

//Estrutura de controle de jogo, do while e um For...of o qual irá percorrer o array de tempo, que são 7 dias. Dentro fica um while com o ciclo de cada dia, sendo feitas as alterações no status do jogador e do tempo, conforme suas decisões.
do {
    jogo: for (let i of tempo.dias) {

        //primeiro dia, parte manhã;
        while (i == 1) {
            //Reinicialização dos valores dos objetos, caso o jogador queira jogar novamente.
            max.sanidade = 100;
            max.energia = 100;
            max.alteraVida();
            tempo.horas = 0;
            tempo.diasStatus = 1;

            // Explicação do jogo e suas funções
            console.log("\n");
            console.log("                                       ▂▃▄▅▆▇█▓▒░SURVIVOR░▒▓█▇▆▅▄▃▂");
            console.log("\n");
            console.log(`\n
                Bem vindo ao jogo SURVIVOR, este é um jogo de sobrevivência em primeira pessoa. 

                A narrativa do jogo será feita através de um monólogo pelo personagem Max. 
                
                Ele será seu avatar!

                Objetivo do jogo é sobreviver. Cada escolha sua irá interferir em seu destino.`);
            console.log("\n");

            let start = prompt(`
                Dentro do jogo serão aceitos apenas comandos de SIM e NAO.

                ATENÇÃO! Sua vida depende de sua energia e sanidade, tome cuidado com suas escolhas!

                Caso sua vida chegue a zero você perde o jogo. Aperte ENTER para iniciar o jogo`);

            console.clear();
            console.log(`\n`);
            //Início do jogo;
            console.log(`                                          ╔═══════════════╗
                                           INICIO DO JOGO
                                          ╚═══════════════╝`);
            console.log("\n")
            //status do personagem;
            max.alteraVida();
            status();
            //Introdução;

            console.log(`\n
                Max, um repórter de campo investigativo. Foi enviado para o Vietnã, para investigar e cobrir a conturbada vida política do país.`
            );

            console.log(`\n
                (MAX) Mais um trabalho para fazer, as vezes fico pensando se realmente deveria estar fazendo isso!

                Mas quando penso na reportagem sempre fico empolgado! 
                
                Investigar, desvendar, escrever e depois publicar tudo, é algo bem satisfatório!
                A final sempre falam, Max você gosta de viver sempre no limite!

                Bem vou cruzar metade do planeta, pelo menos o canal poderia ter pago uma passagem de primeira classe! 
                Quem dera hahaha!

                Meu acento é um dos últimos, bem próximo a calda do avião, pelo menos é perto da cozinha e do banheiro!
                Além de ser supostamente um dos mais seguros! Agora antes de decolar começa aquela ladainha de "atenção senhores passageiros...",

            `);

            let perg1 = prompt("Devo colocar o cinto de segurança? ").toLowerCase();
            perg1 = verificadora(perg1);
            console.log("\n");

            if (perg1 === "sim") {
                max.alteraSanidade(5);
                max.alteraEnergia(5);
                max.alteraVida();
                tempo.contagemTempo(17);

            } else if (perg1 === "nao") {
                max.alteraSanidade();
                max.alteraEnergia();
                max.alteraVida();
                tempo.contagemTempo(17);
            };

            console.log(`\n
                Estou vendo as aeremoças correrem de um lado para o outro, o que está acontecendo?

                (Barulho de explosão) Bummmmmmmm!!!
            `);
            console.log(`\n
                Não acredito no que aconteceu! O avião acabou de cair!!! Apenas ouvi uma explosão!

                Não sei como ainda estou vivo! Eu vejo apenas destroços por todo lado! Está quase anoitecendo!
            `);
            console.log(`\n`)
            status();
            console.log("\n");
            //Parte tarde;

            let perg2 = prompt("Devo procurar sobreviventes? ").toLowerCase();
            perg2 = verificadora(perg2);
            armazenaPergun.push(perg2);

            console.log("\n");

            if (perg2 === "sim") {
                console.log(`
                Já se passaram 10 horas e não encontrei nem um sobrevivente!

                Finalmente achei a cabine dos pilotos. Não acredito um deles está vivo!`);
                console.log(`\n
                (PILOTO) Olá rapaz! Estou muito ferido, provavelmente vou morrer, mas fique calmo, fomos atingidos por um raio!
            
                Tivemos que passar no meio de uma tempestade! Agora preste bem atenção no que vou te falar!
            
                O socorro deve chegar em poucos dias! Fique perto do avião! Pegue aquela maleta vermelha, ela contém um sinalizador!
            
                Quando ouvir ou ver alguma aeronave, atire para cima! Vai dar tudo certo! (MORTE DO PILOTO)`);

                console.log(`\n
                (MAX) Não acredito que ele morreu! Estou adormecendo!`);
                console.log(`\n
                (COMPUTADOR) Você recuperou sanidade! 
                E recuperou vida.`);
                console.log("\n");

                max.alteraVida();
                tempo.contagemTempo(10);
                status();
                limpar();

            } else if (perg2 === "nao") {
                console.log(`\n
                Como isso pode ter acontecido, preciso sair daqui! Agora!
            
                já fazem 10 horas que estou dando voltas, só vejo corpos e destroços!
            
                Não aguento mais, quero apenas dormir e acorda deste pesadelo!`);
                console.log(`\n
                (COMPUTADOR) Você perdeu pontos de sanidade e não vai recuperar vida`);
                console.log("\n");

                max.alteraSanidade();
                max.alteraVida();
                max.alteraEnergia();
                tempo.contagemTempo(10);
                status();
                limpar();
            };
            break;
        };
        //Segundo dia;
        while (i == 2) {
            //Manhã;

            tempo.contagemTempo(6);
            status();

            console.log(`\n
                (MAX) Acabei de acordar, pensei que era um pesadelo, mas infelizmente eu vi que era verdade, agora só sei que preciso sobreviver!!! 
        
                Minha vida não pode acabar aqui!!`);

            console.log(`\n
                (COMPUTADOR) Você teve 6 horas de sono.`);
            console.log(`\n`);

            let perg3 = prompt("Devo procurar alimentos e água? ").toLowerCase();
            perg3 = verificadora(perg3);

            if (perg3 == "sim") {
                console.log(`\n
                Já estou procurando a 4 horas no meio destes destroços. O avião se despedaçou no ar, alguns pedaços maiores estão por perto. 

                Já sei vou tentar voltar para o meu acento, ele era perto da cozinha. 

                (2 horas depois) Consegui achar! Nossa a cozinha ainda existe, vou procurar alimentos e água.
            `);
                console.log("\n");

                max.aleatoriedade();
                tempo.contagemTempo(6);
                status();
                limpar();

            } else if (perg3 == "nao") {
                console.log(`\n 
                Não quero procurar nada, o resgate deve estar chegando!
            
                O Vietnã não é tão grande assim! Vou apenas dormir mais um pouco!`);

                console.log(`\n
                (COMPUTADOR) Entre cochilos e tentativas de dormir se passaram 6 horas`);
                console.log("\n");

                max.alteraEnergia();
                max.alteraSanidade();
                max.alteraVida();
                tempo.contagemTempo(6);
                status();
                limpar();
            };
            //Tarde;
            console.log(`\n
                Preciso de um local para me proteger da chuva e dos animais. Além disso a noite está começando a esfriar bastante!

                O resgate pode demorar para achar o avião!
        
                Aqui próximo dos destroços tem uma floresta de bambu, com bastante ramos e colmos.`);
            console.log("\n");

            let perg4 = prompt(`Será que devo mesmo construir um abrigo? `).toLowerCase();
            perg4 = verificadora(perg4);
            armazenaPergun.push(perg4);

            if (perg4 == "sim") {
                console.log(`\n
                Deu trabalho construir o abrigo, mas agora estou protegido!
            
                Nossa já é noite, estou muito cansado, me sentindo fraco, vou dormir!`)
                console.log(`\n
                (COMPUTADOR) Você gastou 5 horas construindo o abrigo, mas a partir de agora perderá menos sanidade de um dia para o outro.`);

                max.alteraEnergia(10);
                max.alteraSanidade(10);
                max.alteraVida();
                tempo.contagemTempo(15);
                console.log(`\n`);
                status();

            } else if (perg4 == "nao") {
                console.log(`\n
                Não vou construir um abrigo, tenho certeza de que o resgate irá chegar em breve, além disso estou muito fraco, minha cabeça apenas se lembra dos cadáveres!

                Quero apenas ficar perto da fuselagem do avião. Quando o resgate chegar estarei aqui!`);
                console.log(`\n
                (COMPUTADOR) Como você não construiu abrigo, as perdas de vida diárias não serão diminuídas!
            
                Atenção com suas escolhas! Seu objetivo é sobreviver!
            
                Foram acrescentadas mais 5 horas em sua jornada!`);

                max.alteraEnergia();
                max.alteraSanidade();
                max.alteraVida();
                tempo.contagemTempo(5);
                console.log(`\n`);
                status();
            };
            //Função utilizada para limpar o teminal. 
                limpar();
                break;
        };
        //Terceiro dia;
        //Manhã;
        while (i == 3) {
            tempo.contagemTempo(10);
            status();
            console.log(`\n
                (COMPUTADOR) Você durmiu 10 horas.`);
            console.log(`\n
                (MAX) Mais um dia e nada do resgate chegar, quanto tempo mais vão demora!

                Estou perdendo energia, não posso continuar assim!

                Preciso sobreviver!
        
                Estou pensando em explorar o lugar! Não sei se é uma boa ideia já perdi bastante energia! 
        
                Talvez para explorar precise de algo que ajude! Que não me deixe gastar tanta energia`);
            console.log(`\n`);

            let perg5 = prompt(`Devo construir ferramentas com os destroços do avião? `).toLowerCase();
            perg5 = verificadora(perg5);
            armazenaPergun.push(perg5);

            if (perg5 == "sim") {
                console.log(`\n
                (COMPUTADOR) Você gastou 4 horas construindo ferramentas.

                A sua perda de energia em atividades diárias será menor`);
                tempo.contagemTempo(4);

            } else if (perg5 == "nao") {
                console.log(`\n
                (COMPUTADOR) Se passaram 4 horas, você não fez nenhuma atividade.

                Como não tem ferramentas gastara mais energia para fazer atividades`);
                tempo.contagemTempo(4);
            };

            max.escolhas();
            if(max.vida <= 0){
                max.morte();
                break jogo;
            };

            console.log(`\n`);
            status();
            limpar();

            //Tarde;
            status();
            console.log(`\n 
                Estou sentindo um cheiro forte de combustível! Vou verificar.
        
                As noites estão sendo frias! Mesmo o dia sendo absurdamente quente!`);
            console.log(`\n 
                Acabei de achar combustível do avião, parece que está evaporando, ainda tem pouco! 
        
                Desta forma posso fazer uma fogueira!`);
            console.log(`\n`);

            let perg6 = prompt("Devo fazer uma fogueira e coletar madeira para que ela não apague? ").toLowerCase();
            perg6 = verificadora(perg6);
            armazenaPergun.push(perg6);

            if (perg6 == "sim") {
                console.log(`\n
                Estou exausto! Mas agora tenho fogo, nem acredito que já está anoitecendo!

                Estou bem fraco, preciso descansar!`)
                console.log(`\n
                (COMPUTADOR) Você ficou 5 horas fazendo a fogueira. 
            
                O fogo é fundamental para sobrevivência, você teve ganhou energia!`);

                max.alteraEnergia(10);
                max.escolhas();
                max.alteraVida();
                tempo.contagemTempo(5);

            } else if (perg6 == "nao") {
                console.log(`\n
                Estou exausto! Não quero fazer fogo! Não aguento mais esse lugar! O resgate tem que chegar!!! Estão demorando muito!`)
                console.log(`\n
                (COMPUTADOR) Você ficou 5 horas parado! Não teve ganho de vida por não ter realizado a atividade!`);
                max.escolhas();
                max.alteraVida();
                tempo.contagemTempo(5);
            };

            console.log(`\n`);
            status();
            if(max.vida <= 0){
                max.morte();
                break jogo;
            };

            limpar();
            break;
        };

        //Quarto dia;
        //Manhã;
        while (i == 4) {
            tempo.contagemTempo(9);
            status();

            console.log(`\n
                (COMPUTADOR) Você durmiu durante 9 horas`);
            console.log(`\n 
                Já se passaram 4 dias e nada do resgate aparecer! Estou ficando mais fraco a cada dia que passa! 
        
                Preciso fazer algo para poder sobreviver, não posso ficar apenas parado!`);
            console.log("\n");

            let perg7 = prompt("Devo procurar alimentos na zona próxima aos destroços avião? ").toLowerCase();
            perg7 = verificadora(perg7);

            if (perg7 == "sim") {
                console.log(`\n 
                Estou procurando alimentos há 4 horas achei um riacho próximo da floresta de bambu!
            
                Já tinha ouvido barulhos de rãs, vou pegar água do riacho e vou tentar pegar umas rãs`);
                console.log(`\n`);

                max.alteraEnergia(20);
                max.aleatoriedade();
                max.alteraVida();
                tempo.contagemTempo(4);
                status();

                if(max.vida <= 0){
                    max.morte();
                    break jogo;
                };

                limpar();

            } else if (perg7 == "nao") {
                console.log(`\n
                Não vou explorar nas áreas próximas ao avião, vou apenas olhar nos destroços, acredito que devo encontrar algo!`);
                console.log(`\n
                (COMPUTADOR) Após 4 horas de procura, você não encontrou alimento nos destroços do avião, teve apenas gasto de energia e sanidade`);
                console.log(`\n`);

                max.escolhas();
                max.alteraVida();
                tempo.contagemTempo(4);
                status();
                if(max.vida <= 0){
                    max.morte();
                    break jogo;
                };
                limpar();
            };
            // Tarde;
            status();
            console.log(`\n
                Estou bem cansado, mas preciso de mantimento para sobreviver!
        
                Neste momento não posso só ficar pensando que o resgate vai chegar a qualquer momento, preciso sobreviver!

                Tenho que admitir que estou quase pirando, mas não posso desistir!`);
            console.log(`\n`);

            let perg8 = prompt(`Vou continuar a procurar mais alimentos? `).toLowerCase();
            perg8 = verificadora(perg8);

            if (perg8 == "sim") {
                console.log(`\n
                (COMPUTADOR) Se passaram 7 horas Você conseguiu localizar alimentos! Bananas selvagens! 
            
                Teve um ganho de 10 de energia.`);

                max.alteraEnergia(30);
                max.alteraVida();
                tempo.contagemTempo(7);
                status();
                limpar();

            } else if (perg8 == "nao") {
                console.log(`\n
                (COMPUTADOR) Você não coletou alimentos, sua energia está baixa! Se passaram 7 horas.`);

                max.alteraEnergia();
                max.alteraVida();
                tempo.contagemTempo(7);
                status();

                if(max.vida <= 0){
                    max.morte();
                    break jogo;
                };

                limpar();
            };
            //Noite, ataque felino;
            status();
            console.log(`\n
                Estou muito cansado! Consigo sentir o cheiro dos corpos apodrecendo! Será que serei mais um!!!

                Toda noite estou ouvindo barulho de algo ao meu redor! Como se estivesse apenas me observando!
        
                Tenho essa sensação o tempo todo!`);
            console.log(`\n
                Estou ouvindo um barulho na minha frente! Parece que vejo algo me encarando! 
        
                Só consigo ver dois pontos amarelos se aproximando!! `);
            console.log(`\n`);

            let jumpscare = prompt(`PRESSIONE ENTER`);
            console.log(`\n`)
            console.log(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢤⣶⠶⠭⠭⣻⡯⠝⣛⣓⣩⡑⠲⠤⡶⣖⢒⡿⢁⡀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣤⡤⢊⣴⠻⠶⣚⣉⣙⠺⡗⢋⣭⣍⠛⣽⣈⠻⡞⠈⠻⣧⣾⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⢸⠀⣈⠙⣧⡼⢩⠏⣱⠁⠷⣿⡁⡯⠭⢽⡟⡭⢄⠋⠀⣡⠤⠘⣦⣼⡀⠀⢛⠁⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠘⡄⢹⣷⣸⣷⡏⣶⢱⣟⣵⡺⠿⣽⡽⣷⡗⠁⢆⣠⠾⡉⡍⣿⢡⢵⠈⠆⠈⣮⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠘⣀⠩⢌⣾⢃⣨⣶⣿⡱⠫⠟⡽⣳⣿⣗⡢⢈⠾⣦⡑⣋⡅⠸⠃⢹⣀⢠⡉⠉⢠⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⣘⣹⢸⣿⡿⢛⣇⣿⣞⠿⠯⡻⣗⣯⣿⠀⠇⠆⢏⠁⡸⢟⣦⢀⣼⣿⠀⢻⡆⠈⢳⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⣌⣟⠏⣿⡇⢸⣿⣿⢇⡘⠿⣧⡿⠿⡟⠲⠥⣊⢻⡀⠐⢊⣹⢨⡟⠁⢠⣾⡇⠀⠬⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠠⢯⣾⡀⢿⣿⣄⡈⢽⣈⠛⢿⣿⠧⣶⢦⠠⢰⠫⠡⢇⡩⠭⡿⡜⠀⢠⣿⡟⠀⣐⣒⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢚⠋⣿⣧⡀⠹⣿⣿⣦⣳⡙⣛⣿⢯⣽⠁⣳⣾⣀⣾⣴⠾⣿⡇⢰⢞⣿⣟⠀⠠⢔⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⣸⠛⢹⣷⡄⠈⠛⠻⠿⣿⣮⣾⠛⢻⣩⣯⣥⣧⣼⡇⠀⡟⣀⢰⠟⠁⠀⠀⢀⣼⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠈⠛⣛⣙⢿⣿⣿⣶⣦⡙⣿⣿⣆⠈⣿⡿⢿⠿⠿⡇⢸⡇⡝⠘⣠⢮⣀⣫⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣏⢻⣥⣾⣿⣿⣿⣧⣼⣿⣦⡹⢀⣀⠤⢀⣧⣿⣇⣼⢂⣵⣿⡿⠋⣰⣿⡙⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⡄⠈⢻⣿⣿⣶⣿⣿⣯⣙⣍⢿⡏⠻⢯⣴⠶⠶⠾⠃⣸⢧⣾⡿⢁⣤⣾⢟⣡⣤⣤⣅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⡰⣿⢦⡀⠻⢿⣿⣿⡿⣿⣿⣿⣿⣻⣶⣶⠲⠿⠿⠿⠿⠋⣶⡟⢁⣾⢋⡵⠟⠛⠛⠛⠛⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⡰⢃⣴⠿⣿⣤⣄⡀⠉⠓⢄⡙⢿⣿⣿⣇⠀⠀⠀⠀⠀⠀⡼⡋⣀⡞⠱⠋⣴⠂⠁⠶⠶⣶⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣳⠋⠀⣴⣶⠄⣩⡿⣷⣶⣤⡹⣾⡛⢿⣿⣷⣶⣶⣶⡶⠋⣼⠁⢀⣉⡂⠀⠏⠀⠀⠀⠀⠈⠻⣿⡄⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢃⡤⠛⠛⢁⣼⣿⣿⣆⢹⣿⠟⠋⠉⠓⠾⣍⠉⠉⠁⡰⢛⣁⣐⣛⠛⠛⠷⣆⠀⡐⣄⠀⠑⠶⣿⣧⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠚⠀⣠⣶⠟⣙⣿⣿⣟⠉⢀⣴⡾⢿⣿⣶⣦⣈⠀⠀⣵⣿⡿⠛⠉⠉⠀⠀⠀⠃⣨⣽⣿⣿⠲⢶⣬⣦⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⢰⢠⣿⡟⠁⣸⣿⣿⣿⡿⠁⢋⣭⣶⣶⣤⣌⡙⢿⣧⣴⡿⠋⢀⣴⣿⠶⠚⠙⢒⠚⠿⣿⣿⡋⠳⢦⡈⠛⡷⡀⠀⠀⠀⠀
        ⠀⠀⠀⠀⢀⢇⣾⡿⠟⠀⣿⣿⣿⣿⠀⣠⠿⠛⢋⣿⣿⡏⠛⠦⠙⠿⠁⢰⡿⠟⠀⠀⠢⡀⠐⠓⠀⠀⠙⢿⣆⠀⢻⣆⠀⢱⠀⠀⠀⠀
        ⠀⠀⠀⢀⣮⡿⢋⣠⣾⣄⠉⠻⣿⣿⣴⣫⡶⢿⡿⠏⠀⢈⠑⠒⠖⠐⠬⠁⢀⣀⠄⠀⡀⠀⠀⢀⡴⠠⠤⠀⠉⠴⠌⣿⠀⢸⡇⠀⠀⠀
        ⠀⠀⠀⣼⠟⠀⣠⣴⣶⡿⣿⣧⢸⣿⠃⣠⣴⣿⡵⡽⠀⡮⡔⣰⡆⠀⠀⠄⠈⢀⣐⠉⠀⠀⠀⢰⣀⣀⣀⡀⠀⠀⠀⠃⠀⢸⣇⠀⠀⠀
        ⠀⠀⢠⡏⣼⣾⡿⢛⣩⣵⣶⣌⢻⡿⢀⣿⣿⣿⣿⣿⣶⠾⣼⣟⢁⡄⡠⢂⡈⠙⠘⣐⡈⠀⢠⣾⡥⠀⠀⠀⠀⠀⠁⠀⢀⣼⡏⠀⠀⠀
        ⠀⠀⢸⠁⣿⠋⢠⣿⣿⡿⣿⣿⡧⣿⠈⣿⣿⣿⣿⠻⣿⡇⠉⠙⢿⣿⣰⣵⠃⡔⡠⡄⢠⡸⠎⢉⡙⢿⡛⠓⠀⠤⠤⠴⠋⠹⠁⠀⠀⠀
        ⠀⠀⢸⢰⡇⢀⣿⡟⢡⣾⣿⣿⣶⣶⣦⠉⠉⠻⣿⣦⡘⠿⣦⣄⡀⠀⠟⠓⠺⣿⣟⡡⠟⠀⠘⠻⠿⣮⣝⡓⠶⠶⣶⣶⣶⣦⣅⠃⠀⠀
        ⠀⠀⠀⠺⡇⢸⡿⠀⣿⣿⣿⡿⢛⣿⣿⣯⣿⣶⡶⢬⣝⣦⡀⠀⠀⠀⠀⠀⠐⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀
        ⠀⠀⠀⠀⠙⠀⣿⡄⢱⣿⢏⣴⣿⣿⣿⣷⣿⣝⢿⣷⣝⠞⠉⠻⠒⠒⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠙⠇⢸⣿⣾⣿⣿⠛⣵⣿⣷⣯⡳⡮⠝⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⢻⣱⣿⣷⣿⣧⣢⣌⣻⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⣿⢟⣿⣽⣛⠿⠏⡏⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠻⣼⣿⣭⡙⠛⡙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⣿⣚⢯⡭⡗⠚⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢝⠮⡷⠰⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`);
            let verAnimal = prompt(`Pressione ENTER`);
            console.log("\n");

            if (armazenaPergun[2] == "sim") {
                console.log(`\n
                Um tigre! Aquela figura aterrorizante em menos de um segundo pulou na minha frente! 
            
                Me encarou, enquanto eu me afogava na imensidão amarela de seus olhos! 
            
                O sentimento era apenas o da emoção da luta! E de uma certeza! A que eu era sua presa!

                Eu apenas sabia de que tinha que me manter firme! 

                Em um segundo de hesitação e por um milagre divino! A madeira que estava na fogueira apenas estourou!
            
                E a fera diante daquele brilho do fogo simplesmente desapareceu na imensidão da floresta! `);
                console.log(`\n
                (COMPUTADOR) Graças a fogueira você sobreviveu ao ataque!`);

            } else if (armazenaPergun[2] == "nao") {
                console.log(`\n
                Um tigre! Aquela figura aterrorizante em menos de um segundo pulou na minha frente!
            
                Me encarou, enquanto eu me afogava na imensidão amarela de seus olhos!
            
                O sentimento era apenas o da emoção da luta! E de uma certeza! A que eu era sua presa!

                Eu apenas sabia de que tinha que me manter firme! 

                Em um segundo a fera simplesmente me atacou, desferindo um golpe que pegou apenas de raspão!
            
                Mas foi o bastante para me arremessar quase 1 metro para trás!

                Em seguida ele me cheirou, e sumiu na imensidão da floresta!

                Ele apenas queria mostrar que era ele que mandava ali! `);

                console.log(`\n(COMPUTADOR) Como você não fez uma fogueira, sofreu um ataque!
            
                Teve perda de via e sanidade!`);

                max.escolhas();
                max.alteraVida();

                if(max.vida <= 0){
                    max.morte();
                    break jogo;
                };
            };

            console.log(`\n`);
            status();
            limpar();
            break;
        };
        // Quinto dia;
        while (i == 5) {
            console.log(`\n
                (COMPUTADOR) Se passaram 9 horas desde o ataque!`);
            tempo.contagemTempo(9);
            status();

            console.log(`\n
                Não acredito que ainda estou vivo!! Estou muito cansado, não consegui dormir nada!
        
                Tudo o que aconteceu foi inacreditável!`);

            console.log(`\n
                Barulho e helicóptero!!!`);
            console.log(`\n
                Um helicóptero!!! Não acredito!!! Essa é minha chance de sobreviver!`);
            console.log(`\n`);

            perg9 = prompt("Devo tentar chamar a atenção do helicóptero? ").toLowerCase();
            perg9 = verificadora(perg9);
            
            //hora de resgate análise de escolhas do personagem para descobrir se será salvo e ganhará o jogo ou não será resgatado;
            if (armazenaPergun[0] == "sim" && perg9 == "sim") {
                console.log(`\n
                Vou utilizar o sinalizador!`);
                console.log(`\n
                (COMPUTADOR) Você foi salvo! A equipe de resgate conseguiu ver o sinalizador!`);
                console.log(`\n
                (MAX) Tudo isso finalmente passou! Mas eu só consegui chegar até aqui pelo fato de lutar!
            
                De agora em diante lutarei por tudo na minha vida!`);

            } else if (armazenaPergun[3] == "sim" && armazenaPergun[0] == "nao" && perg9 == "sim") {
                console.log(`\n
                Eu preciso chamar a atenção do helicóptero!!!

                Já sei, vou usar a fogueira, vou jogar folhas verdes sobre ela, vai levantar uma fumaça branca!`);
                console.log(`\n
                (COMPUTADOR) Você foi salvo! A equipe de resgate conseguiu ver a fumaça branca! `);
                console.log(`\n
                (MAX) Tudo isso finalmente passou! Mas eu só consegui chegar até aqui pelo fato de lutar!
            
                De agora em diante lutarei por tudo na minha vida!`);

            } else if (armazenaPergun[0] == "nao" && armazenaPergun[3] == "nao" || perg9 == "nao") {
                console.log(`\n
                Eu deveria chamar a atenção do helicóptero!!!

                Mas eu não tenho absolumente nada!`);
                console.log(`\n
                (COMPUTADOR) Você não foi salvo! A equipe de resgate não consegui ver os destroços do avião, devido a mata fechada!
            
                Apenas duas semanas depois conseguiram localizar o avião, mas já era tarde para você!
            
                Devido aos ferimentos você não sobreviveu e falta de recursos você morreu!`);

                max.alteraEnergia();
                max.alteraSanidade();
                max.alteraVida();
                max.morte();
            };
            status();
            max.morte();
            break
        };
    };
    console.log(`\n`);
    continuarJogo = prompt(`Deseja jogar novamente? SIM para iniciar e NAO para sair: `).toLocaleLowerCase(); continuarJogo = verificadora(continuarJogo);
    console.clear();

} while (continuarJogo == "sim");


