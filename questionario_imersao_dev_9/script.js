// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
        pergunta: "Qual é a principal função do JSON em um projeto de programação?",
        respostas: [
            { opcao: "a) Armazenar imagens", correto: false },
            { opcao: "b) Organizar e transmitir dados de forma organizada", correto: true },
            { opcao: "c) Criar estilos para a página da web", correto: false }
        ]
    },
    {
        pergunta: "No JavaScript, qual é a diferença entre let e const?",
        respostas: [
            { opcao: "a) let é usado para variáveis que não podem ser alteradas, enquanto const pode ser alterada", correto: false },
            { opcao: "b)let pode ser reatribuído, enquanto const não pode ser reatribuído", correto: true },
            { opcao: "c) Não há diferença, ambos são usados da mesma forma", correto: false }
        ]
    },
    {
        pergunta: "O que faz a função querySelector() no JavaScript?",
        respostas: [
            { opcao: "a) Cria um novo elemento HTML", correto: false },
            { opcao: "b) Seleciona o primeiro elemento que corresponde a um seletor CSS", correto: true },
            { opcao: "c) Remove um elemento do DOM", correto: false }
        ]
    }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector("span.pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

console.log("perguntaElemento: ", perguntaElemento)
console.log("respostasElemento: ", respostasElemento)
console.log("progressoElemento: ", progressoElemento)
console.log("textoFinal: ", textoFinal)
console.log("conteudo: ", conteudo)
console.log("conteudoFinal: ", conteudoFinal)

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        // Pega a resposta atual com base no índice 'i'
        const resposta = perguntaAtual.respostas[i];
        // Cria um novo elemento 'button' (botão)
        const botao = document.createElement("button");
        // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
        botao.classList.add("botao-resposta");
        // Define o texto do botão com a opção de resposta (resposta.opcao)
        botao.innerText = resposta.opcao;
        // Adiciona um evento de clique no botão
        botao.onclick = function () {
            // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
            if (resposta.correto) {
                acertos = acertos + 1;
                // acertos++; // Incrementa o contador de acertos
            }

            // Avança para a próxima pergunta
            indiceAtual++;

            // Se ainda houver perguntas, carrega a próxima pergunta
            if (indiceAtual < perguntas.length) {
                carregarPergunta(); // Carrega a próxima pergunta
            } else {
                // Se não houver mais perguntas, finaliza o jogo
                finalizarJogo();
            }
        };

        // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
        respostasElemento.appendChild(botao);
    }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();