const Service = require("./Services");
const database = require("../models");

class PessoasServices extends Service {
  constructor() {
    super("Pessoas");
  }

  async pegaRegistrosAtivos(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...wherel } });
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeDoModelo]
      .scope("todos")
      .findAll({ where: { ...wherel } });
  }
}

module.exports = PessoasServices;
