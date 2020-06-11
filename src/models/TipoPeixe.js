const { Model, DataTypes } = require('sequelize');

class TipoPeixe extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize,
      freezeTableName: true,
      tableName: 'TipoPeixe'
    })
  }
}

module.exports = TipoPeixe;