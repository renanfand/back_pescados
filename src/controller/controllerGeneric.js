const SequelizeGeneric = require('../sequelize/sequelizeGeneric');
const Util = require('../Util/UtilDefault');

module.exports = {

  async findAll(req, res, entity) {
    try {
      const response = await SequelizeGeneric.findAll(entity, req.params);

      if (!response) {
        return Util.returnErroShowAll(response);
      }

      return res.status(200).json(response);

    }
    catch (error) {
      return Util.returnErroShowAll(res, error);
    }
  },

  async findAgricultoresByTipo(req, res, entity) {
    return this.findAll(req, res, entity);
  },

  async findPeixeByAgricultor(req, res, entity) {
    try {
      const idAgricultor = req.params;
      const response = await SequelizeGeneric.findAllAssociate(entity, idAgricultor, 'tipoPeixe');

      if (!response) {
        return Util.returnErroShowAll(response);
      }

      return res.status(200).json(response);

    }
    catch (error) {
      return Util.returnErroShowAll(res, error);
    }
  },

  async findRacaoByAgricultor(req, res, entity) {
    return this.findAll(req, res, entity);
  },

};
