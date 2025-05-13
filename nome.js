let primeiroNome = "";
let sobrenome = "";

// Pede o primeiro nome até ser preenchido
while (primeiroNome === "") {
  primeiroNome = prompt("Digite seu nome:");
}

// Pede o sobrenome até ser preenchido
while (sobrenome === "") {
  sobrenome = prompt("Agora digite seu sobrenome:");
}

// Mostra o nome completo
alert("Seu Nome completo: " + primeiroNome + " " + sobrenome);
