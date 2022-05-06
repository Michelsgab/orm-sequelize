const database = require("../models");

class Service {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }
  async pegaTodosOsRegistros() {
    return database[this.nomeDoModelo].findAll();
  }
  async pegaUmRegistro(id) {
      //
  }
  async criaRegistro(dados) {
      //
  }
  async atualizaRegistro(dadosAtualizado, id) {
      //
  }
  async apagaRegistro(id) {

  }
}

module.exports = Service;
