'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      pessoa_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'pessoas', key: 'id' }
    },
      status: {
        type: Sequelize.STRING
      },
      data_entrega: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};