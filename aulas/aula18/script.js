//forma normal pra criar objeto
/*
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    anoatual: new Date().getFullYear(),
    fala() {
      console.log(
        `Oi! me chamo ${this.nome} e minha idade em ${this.anoatual} é ${this.idade} anos. `,
      );
    },
    passaAno() {
      this.anotual++, this.idade++;
    },
  };
}

*/
// forma simplificada
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
    anoatual: new Date().getFullYear(),
    fala() {
      console.log(
        `Oi! me chamo ${this.nome} e minha idade em ${this.anoatual} é ${this.idade} anos. `,
      );
    },
    passaAno() {
      this.anoatual++, this.idade++;
    },
  };
}

const pessoa1 = criaPessoa("Felipe", "Cabral", 41);
const pessoa2 = criaPessoa("João", "Braga", 20);

pessoa1.fala();
pessoa1.passaAno();
pessoa1.fala();
