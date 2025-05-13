// Solicita ao usuário uma nota e converte para inteiro
let notas = parseInt(prompt("Digite uma nota."));

// Inicializa variáveis para soma, média e contador
let soma = 0;
let media = 0;
let i = 0;

// Enquanto a nota digitada for maior ou igual a 0, continua pedindo novas notas
while (notas >= 0) {
    i++; // Incrementa o contador de notas válidas

    soma += notas; // Soma a nota atual ao total

    // Solicita nova nota
    notas = parseInt(prompt("Digite uma nota."));
}

// Quando uma nota negativa for digitada, sai do loop
if (notas < 0) {
    media = soma / i; // Calcula a média das notas

    // Exibe a média usando template string
    alert(`Você teve uma média de ${media}`);
}
