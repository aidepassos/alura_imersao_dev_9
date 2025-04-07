function jogar() {
    // preciso criar uma lista de ate 5 jogadores
    let personagens = ["A", "B", "C"];
    let viloes = ["", "", ""];
    let forcaPersonagem = 0;
    let forcaViloes = 0;
  
    alert("O array personagem contém: " + personagens);

    for (let i = 0; i < personagens.length; i++) {
      let escolhaPersonagem = prompt("Digite o seu personagem " + (i + 1));
      personagens[i] = escolhaPersonagem;
  
      // calcular a força de cada jogador e somar para saber a força do time
      forcaPersonagem += Math.floor(Math.random() * 10) + 1; // maneira mais avançada de fazer a mesma coisa
    }

    console.log("Agora o array personagem contém: " + personagens);
    console.log("Início vilões: " + viloes);
  
    for (let i = 0; i < personagens.length; i++) {
      let indiceAleatorio = Math.floor(Math.random() * 5);

      // criando lista aleatória de viloes
      let viloesPossiveis = ["Úrsula", "Malévola", "Scar", "Izma", "Jafar"];
      viloes[i] = viloesPossiveis[indiceAleatorio];
  
      // calcular a força de cada jogador do pc
      forcaViloes += Math.floor(Math.random() * 10) + 1;
    }

    alert("Vilões selecionados para a disputa: " + viloes);
    console.log("Final vilões: " + viloes);
  
    // comparar os dois times pra saber quem venceu
    if (forcaPersonagem > forcaViloes) {
      alert("Você ganhou a disputa de cabo de guerra! Sua Força foi: " + forcaPersonagem);
      alert("Força dos vilões foi: " + forcaViloes);

      document.getElementById("informacoesJogador").textContent = forcaPersonagem;
      document.getElementById("informacoesComputador").textContent = forcaViloes;
    } else {
      if (forcaPersonagem < forcaViloes) {
        alert("Seu time foi fraco, o pc ganhou com uma força de: " + forcaViloes);
        alert("Sua Força foi: " + forcaPersonagem);

        document.getElementById("informacoesJogador").textContent = forcaPersonagem;
        document.getElementById("informacoesComputador").textContent = forcaViloes;
      } else {
        alert("Os dois times têm a mesma força, houve empate!");

        document.getElementById("informacoesJogador").textContent = forcaPersonagem;
        document.getElementById("informacoesComputador").textContent = forcaViloes;
      }
    }

    document.getElementById("resultadoFinal").style.display = "block";
  }