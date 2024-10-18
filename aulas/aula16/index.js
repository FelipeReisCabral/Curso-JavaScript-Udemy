let num = Number(prompt("Digite um número:"));
const numero = document.querySelector("span#numero");
const texto = document.querySelector("div#texto");

numero.innerHTML = num;
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(num)}</p>`;
texto.innerHTML += `<p>${num} é um numero inteiro? ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>${num} é um NaN? ${Number.isNaN(num)} </p>`;
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(num)} </p>`;
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(num)} </p>`;
texto.innerHTML += `<p>Com duas casa decimais ${num.toFixed(2)} </p>`;
