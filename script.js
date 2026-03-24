let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));
let cadastro = prompt("Possui cadastro? (S/N)").toUpperCase();
let autorizacao = prompt("Possui autorização especial? (S/N)").toUpperCase();
let acompanhado = prompt("Está acompanhado? (S/N)").toUpperCase();

alert("Verificando acesso...");

if (!(cadastro === "S")) {
  alert("Acesso negado: usuário não cadastrado.");
}

else if (cadastro === "S" && idade >= 18) {
  alert("Acesso liberado normalmente.");
}

else if (idade < 18 || autorizacao === "N") {

  if (acompanhado === "S") {
    alert("Entrada permitida com restrição (acompanhado por responsável).");
  } else {
    alert("Acesso negado: menor desacompanhado.");
  }

}

else {
  alert("Acesso liberado.");
}