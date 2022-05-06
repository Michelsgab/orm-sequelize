"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
        scope: { status: "confirmado" },
        as: "aulasMatriculadas"
      });
    }
  }
  Pessoas.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          funcaoValidadora: function (dado) {
            if (dado.length < 3)
              throw new Error("Nome deve ter mais que três caracteres");
          },
        },
      },
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "e-mail inválido",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      paranoid: true,
      sequelize,
      modelName: "Pessoas",
      defaultScope: {
        where: { ativo: true },
      },
      scopes: {
        todos: { where: {} },
      },
    }
  );
  return Pessoas;
};
