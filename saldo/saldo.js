let saldo = 1000; // Saldo inicial

// Enquanto ainda houver saldo, o loop continua
while (saldo > 0) {

    // Solicita ao usuário quanto deseja sacar
    let saque = prompt(`Seu saldo é R$ ${saldo} . Quanto deseja sacar?`);

    // Converte a entrada do usuário para número (com casas decimais se houver)
    saque = parseFloat(saque);

    // Verifica se o valor é inválido (não numérico ou menor/igual a 0)
    if (isNaN(saque) || saque <= 0) {
        alert("Digite um valor válido maior que 0.");
    }

    // Verifica se o valor do saque é maior que o saldo disponível
    else if (saque > saldo) {
        alert("Saldo insuficiente. Tente um valor menor.");
    }

    // Se o valor do saque for válido e menor ou igual ao saldo
    else {
        saldo -= saque; // Subtrai o valor do saque do saldo
        alert(`Saque realizado. Saldo restante: R$ ${saldo}`);
    }
}

// Quando o saldo for 0 ou menor, exibe mensagem de fim
alert("Infelizmente seu saldo ACABOU.");
