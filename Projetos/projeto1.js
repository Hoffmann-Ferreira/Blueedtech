

// Estrutura do códgo feita dentro e uma while, para que o leitor possa jogar novamente, caso queira. 
//Impressão da história.
while (true) {
    console.log(`
Em um mundo apocalíptico destruído por guerras travadas entre humanos e vampiros, vive o caçador de vampiros chamado Dante, metade vampiro e metade humano, filho de um vampiro original e uma humana.

Charlotte, uma garota de família abastada foi sequestrada por um vampiro, Barão Meier Link. Elbourne, o pai dela, contrata Dante, para resgatar sua filha Charlotte viva, ou se necessário matá-la antes de se transformar em vampira.
    
Dante segue o rastro deixado pelo Barão em sua fuga, conseguindo alcança-lo no castelo Bran Castle. Em uma dramática luta Dante derrota o Barão Vampiro, mas antes de executar o golpe final, percebe que Charlotte estava em perigo, sendo hipnotizada e atacada por um velho vampiro chamado de Vlad, o empalador, que vivia aprisionado nas catacumbas do castelo.
    
O Barão e Dante se unem para derrotar para derrotar Vlad, no combate Dante tem sua vida salvo pelo Barão e ambos eliminam o velho vampiro. 
    
Após a luta em uma atitude desesperada para salva a vida da amada o Barão transforma Charlotte em vampira e revela a Dante que o casal tinha planos de fugir para Sinaia, um reduto vampiro, afastado de toda a civilização onde humano nenhum um jamais pisou. 
    
Dante lembra-se da paixão de seus pais, que foram perseguidos e mortos por causa de seu amor proibido permitindo a fuga do casal. 
    
Dante retorna para família de Charllote e relata que ambos foram mortos. 
    
Com base na história acima responda 5 perguntas com Sim e Não e descubra como Dante se saiu:
    `);

    console.log("\n");

    //Perguntas contendo estrura ToLowerCase, para evitar erros de digitação dentro de uma array. 

    const prompt = require("prompt-sync")();

    const perguntas = [prompt(`1. Dante fez o correto ao agir com base em seus sentimentos? `).toLowerCase(), prompt(`2. Ao descobrir a paixão do casal, Dante realmente deveria ter os deixado fugir? `).toLowerCase(), prompt(`3. Dante fez o certo ao deixar o Barão salvar Charllote? `).toLowerCase(), prompt(`4. Ao omitir a fuga do casal, Dante agiu de forma correta? `).toLowerCase(), prompt(`5. O desfecho da história foi positivo? `).toLowerCase()];

    console.log(`${perguntas}`);
    console.log("\n");

    /*contagens de sim foi feita através de uma função a qual executa um for que analisa cada índice e acrescenta mais um a uma constante caso a resposta seja sim. Em seguida é feita a verificação de quantos sim em uma estrutura de if para poder apresentar a resposta correta. */ 

    function contadora() {
        let contsim = 0;
        let numeroPergun = 5;

        for (let i = 0; i < perguntas.length; i++) {
            if (perguntas[i] === "sim") {
                contsim++;
            };
        };

        if (contsim === numeroPergun) {
            return "Dante triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.";
        } else if (contsim === numeroPergun - 1) {
            return "Depois de muito esforço Dante conquista seu objetivo, embora não de maneira perfeita.";
        } else if (contsim === numeroPergun - 2) {
            return "Dante chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.";
        } else if (contsim === numeroPergun - 3 || contsim === numeroPergun - 4) {
            return "Dante falha, mas ainda consegue fugir da situação";
        } else {
            return "Dante falha miseravelmente";
        };

    };
    console.log(contadora());
    console.log("\n");

    //Pergunta para o leitor se deseja jogar novamente, com limpeza de terminal após decisão.

    let novoJogo = prompt("Gostaria de jogar novamente? ").toLowerCase();
    if (novoJogo === "sim") {
        console.clear();
    } else {
        console.clear();
        break;
    };
};
