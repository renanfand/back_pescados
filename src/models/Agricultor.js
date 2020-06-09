const { Model, DataTypes } = require('sequelize');

class Agricultor extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      tpAgricultor: DataTypes.CHAR(1),
    }, {
      sequelize,
      freezeTableName: true,
      tableName: 'Agricultor'      
    })
  }
}

module.exports = Agricultor;