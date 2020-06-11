'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Peixe', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      peso: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      valUnitario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      valTotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      idTipoPeixe: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        references: { model: 'TipoPeixe', key: 'id' },
        onUpdate: 'CASCADE',
        allowNull: true,
      },
      idAgricultor: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        references: { model: 'Agricultor', key: 'id' },
        onUpdate: 'CASCADE',
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Peixe');
  }
};
