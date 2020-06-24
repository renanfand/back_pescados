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
  static associate(models) {
    this.hasOne(models.Peixe, {foreignKey:  'idTipoPeixe', targetKey: 'id', as: 'tipoPeixe'})
  }
}

module.exports = TipoPeixe;