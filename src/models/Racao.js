const { Model, DataTypes } = require('sequelize');

class Racao extends Model {
  static init(sequelize) {
    super.init({
      tipo: DataTypes.STRING,
      data: DataTypes.DATEONLY,
      quantidade: DataTypes.INTEGER,
      valUnitario: DataTypes.DECIMAL(10, 2),
      valTotal: DataTypes.DECIMAL(10, 2)
    }, {
      sequelize,
      freezeTableName: true,
      tableName: 'Racao'
    })
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {foreignKey:  'idAgricultor', targetKey: 'id', as: 'agricultor'})
  }

}

module.exports = Racao;