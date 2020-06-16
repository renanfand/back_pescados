const SequelizeGeneric = require('../sequelize/sequelizeGeneric');
const Util = require('../Util/UtilDefault');

module.exports = {

  async findAll(req, res, entity) {
    try {
      const response = await SequelizeGeneric.findAll(entity);

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
    try {
      const tpAgricultor = req.params;
      const response = await SequelizeGeneric.findAll(entity, tpAgricultor);

      if (!response) {
        return Util.returnErroShowAll(response);
      }

      return res.status(200).json(response);

    }
    catch (error) {
      return Util.returnErroShowAll(res, error);
    }
  },

  async findPeixeByAgricultor(req, res, entity) {
    try {
      const idAgricultor = req.params;
      const response = await SequelizeGeneric.findAll(entity, idAgricultor);

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
    try {
      const idAgricultor = req.params;
      const response = await SequelizeGeneric.findAll(entity, idAgricultor);

      if (!response) {
        return Util.returnErroShowAll(response);
      }

      return res.status(200).json(response);

    }
    catch (error) {
      return Util.returnErroShowAll(res, error);
    }
  },
  
};
