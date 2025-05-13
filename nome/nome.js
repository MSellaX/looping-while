let primeiroNome = "";
let sobrenome = "";

// Pede o primeiro nome até ser válido (não vazio e não número)
do {
  primeiroNome = prompt("Digite seu nome (você não pode se chamar números):");
} while (primeiroNome === "" || !isNaN(primeiroNome));

// Pede o sobrenome até ser válido (não vazio e não número)
do {
  sobrenome = prompt("Agora digite seu sobrenome (você não pode se chamar números):");
} while (sobrenome === "" || !isNaN(sobrenome));

// Mostra o nome completo
alert("Seu Nome completo: " + primeiroNome + " " + sobrenome);
