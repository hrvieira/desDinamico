// Classes
class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }

  trabalhar() {
    return `Estou trabalhando como ${this.cargo}.`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    return `Coordeno a equipe do departamento de ${this.departamento}.`;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    return `Estou programando em ${this.linguagem}.`;
  }
}

// Event listener para o formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    try {
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const cargo = document.getElementById('cargo').value;
        let departamento = document.getElementById('departamento').value;
        let linguagem = document.getElementById('linguagem').value;

        if (cargo === 'gerente') {
          departamento = document.getElementById('departamento').value;
        } else {
            linguagem = document.getElementById('linguagem').value;
        }

        let funcionario;

        if (cargo === 'gerente') {
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else {
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        }

        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = `
            <p>Nome: ${funcionario.nome}</p>
            <p>Idade: ${funcionario.idade}</p>
            <p>Cargo: ${cargo}</p>
            ${cargo === 'gerente' ? `<p>Departamento: ${funcionario.departamento}</p>` : `<p>Linguagem: ${funcionario.linguagem}</p>`}
            <p>Apresentação: ${funcionario.seApresentar()}</p>
            <p>Trabalho: ${funcionario.trabalhar()}</p>
        `;
        if (cargo === 'gerente') {
          resultadoElement.innerHTML += `<p>O que faço? ${funcionario.gerenciar()}</p>`;
        } else {
          resultadoElement.innerHTML += `<p>O que faço? ${funcionario.programar()}</p>`;
        }
    } catch (error) {
        exibirErro(error.message);
    }
});

function exibirErro(mensagem) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}
