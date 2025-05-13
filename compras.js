let total = 0; // Inicializa a variável que armazenará o total das compras
let valor; // Declara a variável que armazenará o valor digitado pelo usuário

do {
    // Solicita ao usuário o valor da compra e converte para número decimal
    valor = parseFloat(prompt("Digite o valor da sua compra (pressione 0 para finalizar):"));

    // Verifica se o valor é um número válido e maior que zero
    if (!isNaN(valor) || valor > 0) {
        total += valor; // Adiciona o valor ao total
    }
} while (valor !== 0); // Continua o loop até o usuário digitar 0

// Exibe o total da compra
alert(`Total da compra: R$ ${saldo}`);
