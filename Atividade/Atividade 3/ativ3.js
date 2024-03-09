// Seu objetivo é implementar o código em JavaScript que modele essa situação utilizando classes e herança.

// 1 - Classes:
/* A classe 'Funcionario' deve ter os atributos: 'nome', 'idade' e 'cargo', além dos métodos 'seApresentar()' e 'trabalhar()'. */
class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }
  // seApresentar()
  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
  // trabalhar()
  trabalhar() {
    console.log(`Estou trabalhando como ${this.cargo}.`);
  }
}

/* A classe 'Gerente' deve herdar da classe 'Funcionario' e ter um atributo adicional 'departamento', além do método 'gerenciar()'. */
class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }
  // gerenciar()
  gerenciar() {
    console.log(`Como gerente do departamento de ${this.departamento}, estou coordenando a equipe.`);
  }
}

/* Já a classe 'Desenvolvedor' deve herdar da classe 'Funcionario' e ter um atributo adicional 'linguagem', além do método 'programar()'. */
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`Estou programando em ${this.linguagem}.`);
  }
}

function espacamento() {
  console.log(`\n-----------------------------------\n`);
}

// Crie instâncias de um gerente e de um desenvolvedor.
const gerente = new Gerente('João', 35, 'Gerente de Projetos', 'TI');
const desenvolvedor = new Desenvolvedor('Maria', 28, 'Desenvolvedora', 'JavaScript');

// Chamando métodos das instâncias
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();
espacamento();
desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
