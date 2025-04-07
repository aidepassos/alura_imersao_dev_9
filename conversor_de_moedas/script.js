function conversor() {
    let valorreais = prompt("Digite um valor em reais");
    let umeuro = 6.21;
    let valorEmEuros = valorreais / umeuro;
  
    // Formata o valor em euros
    let valorFormatado = valorEmEuros.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' });
  
    alert(valorFormatado);
  }