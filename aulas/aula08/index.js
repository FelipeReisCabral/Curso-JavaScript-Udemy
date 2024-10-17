const nome = "Felipe";
const sobrenome = "Reis Cabral";
const idade = 41;
const altura = 1.89;
const peso = 110;
let imc = peso / altura ** 2;
let dataAtual = new Date().getFullYear();
let anoNascimento = dataAtual - idade;
console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`,
);
console.log(`${nome} nasceu em ${anoNascimento}`);
