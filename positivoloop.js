// Solicita ao usuário que digite um número positivo
let numero = parseInt(prompt(`Escreva um número positivo.`));

// Enquanto o número for menor ou igual a zero ou não for um número válido (NaN), repete
while (numero <= 0 || isNaN(numero)) {
    alert(`Esse número não é válido.`); // Alerta de número inválido

    // Solicita novamente um número positivo
    numero = parseInt(prompt(`Escreva um número positivo`));
}

// Quando o número digitado for válido e positivo, exibe mensagem
alert(`Esse número é positivo.`);
