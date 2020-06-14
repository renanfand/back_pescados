const { Model, DataTypes } = require('sequelize');

class Peixe extends Model {
  static init(sequelize) {
    super.init({
      data: DataTypes.DATEONLY,
      peso: DataTypes.DECIMAL(10, 2),
      valUnitario: DataTypes.DECIMAL(10, 2),
      valTotal: DataTypes.DECIMAL(10, 2)
    }, {
      sequelize,
      freezeTableName: true,
      tableName: 'Peixe'
    })
  }

  static associate(models) {
    this.belongsTo(models.TipoPeixe, {foreignKey:  'idTipoPeixe', targetKey: 'id', as: 'tipoPeixe'})
    this.belongsTo(models.Agricultor, {foreignKey:  'idAgricultor', targetKey: 'id', as: 'agricultor'})
  }

}

module.exports = Peixe;