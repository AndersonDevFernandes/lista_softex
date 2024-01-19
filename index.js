// Definindo o objeto material Carro
class Carro {
  constructor(marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.velocidade = 0;
  }

  acelerar(velocidade) {
    this.velocidade += velocidade;
    console.log(`${this.marca} ${this.modelo} acelerando para ${this.velocidade} km/h`);
  }

  frear() {
    this.velocidade = 0;
    console.log(`${this.marca} ${this.modelo} freando`);
  }

  buzinar() {
    console.log(`${this.marca} ${this.modelo} buzinando`);
  }
}

// Definindo o objeto material Livro
class Livro {
  constructor(titulo, autor, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.paginasLidas = 0;
  }

  ler(paginas) {
    this.paginasLidas += paginas;
    console.log(`Lendo ${paginas} páginas do livro ${this.titulo}`);
  }

  fechar() {
    console.log(`Fechando o livro ${this.titulo}`);
  }

  marcarComoLido() {
    console.log(`Marcando o livro ${this.titulo} como lido`);
  }
}

// Definindo o objeto abstrato Conta Bancária
class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depositando R$${valor} na conta de ${this.titular}. Saldo atual: R$${this.saldo}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Sacando R$${valor} da conta de ${this.titular}. Saldo atual: R$${this.saldo}`);
    } else {
      console.log(`Saldo insuficiente para realizar o saque`);
    }
  }

  consultarSaldo() {
    console.log(`Saldo atual na conta de ${this.titular}: R$${this.saldo}`);
  }
}

// Definindo o objeto abstrato Rede Social
class RedeSocial {
  constructor(nome, usuarios) {
    this.nome = nome;
    this.usuarios = usuarios || [];
  }

  adicionarUsuario(usuario) {
    this.usuarios.push(usuario);
    console.log(`Novo usuário ${usuario} cadastrado na rede social ${this.nome}`);
  }

  fazerPost(usuario, mensagem) {
    console.log(`${usuario} postou na rede social ${this.nome}: ${mensagem}`);
  }

  listarUsuarios() {
    console.log(`Usuários na rede social ${this.nome}: ${this.usuarios.join(', ')}`);
  }
}

// Exemplo de uso dos objetos
const meuCarro = new Carro("Toyota", "Corolla", "Prata");
meuCarro.acelerar(50);
meuCarro.buzinar();

const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");
meuLivro.ler(20);
meuLivro.marcarComoLido();

const minhaConta = new ContaBancaria("João", 1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.consultarSaldo();

const minhaRedeSocial = new RedeSocial("BookFace");
minhaRedeSocial.adicionarUsuario("Alice");
minhaRedeSocial.fazerPost("Alice", "Olá, mundo!");
minhaRedeSocial.listarUsuarios();
