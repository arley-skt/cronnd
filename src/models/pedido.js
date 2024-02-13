'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.belongsTo(models.Pessoa, {
        foreignKey: 'pedido_id'
      });
    }
  }
  Pedido.init({
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    data_entrega: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName:'pedidos',
  });
  return Pedido;
};