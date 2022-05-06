// const database = require("../models");
const Services = require("../services/Services");
const niveisServices = new Services("Niveis");

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await niveisServices.pegaTodosOsRegistros();
      return res.status(200).json(todosOsNiveis);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params;
    try {
      const umNivel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umNivel);
    } catch (error) {}
    return res.status(500).json(error.message);
  }

  static async criaNivel(req, res) {
    const novoNivel = req.body;
    try {
      const novoNivelCriada = await database.Niveis.create(novoNivel);
      return res.status(200).json(novoNivelCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Niveis.update(novasInfos, { where: { id: Number(id) } });
      const nivelAtualizada = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(nivelAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ mensagem: `id ${id} deletado do banco de dados` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraNivel(req, res) {
    const { id } = res.params;
    try {
      await database.Niveis.restore({where: {id: Number(id)}})
      return res.status(200).json({mensagem: `id ${id} restaurado com sucesso`})
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;
