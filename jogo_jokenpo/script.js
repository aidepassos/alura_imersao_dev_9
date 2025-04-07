function jogar() {
    idade = prompt("Qual a sua idade?")
    if (idade < 18) {
      alert("Você NÃO pode jogar jokenpo")
    }
  
    if (idade >= 18) {
      escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura")
      escolhaComputador = Math.floor(Math.random() * 3) + 1;
    }
        // Jogador: Pedra, Computador: Pedra;
        // Jogador: Papel, Computador: Papel;
        //Jogador: Tesoura, Computador: Tesoura = todos empatam.
    if (escolhaJogador == escolhaComputador) {
      alert("Empate!")
    }
      
    if (escolhaJogador == 1) {
      if(escolhaComputador == 2) {
        // Jogador: Pedra, Computador: Papel = PC vence.
        alert("Computador escolheu papel, portanto você perdeu.")
      }
      if (escolhaComputador == 3) {
        // Jogador: Pedra, Computador: Tesoura = jog vence.
        alert("Computador escolheu Tesoura, você venceu!!")
      }
    }
    if (escolhaJogador == 2) {
      if (escolhaComputador == 1) {
        //Jogador: Papel, Computador: Pedra = jog vence.
        alert("Computador escolheu pedra, você venceu!!")
      }
      if (escolhaComputador == 3) {
        // Jogador: Papel, Computador: Tesoura = PC vence.
        alert("Computador escolheu tesoura, você perdeu.")
      }
    }
    if (escolhaJogador == 3) {
      if (escolhaComputador == 1) {
        // Jogador: Tesoura, Computador: Papel = jog vence.
        alert("Computador escolheu papel, portanto você venceu!")
      }
      if (escolhaComputador == 2) {
        // Jogador: Tesoura, Computador: Pedra = PC vence.
        alert("Computador escolheu pedra, você perdeu.")
      }
    }
    
    alert("Escolha do pc foi " + escolhaComputador)
  }