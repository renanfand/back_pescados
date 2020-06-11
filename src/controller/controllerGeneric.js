const Controller = require('../sequelize/sequelizeGeneric');
const Util = require('../Util/UtilDefault');

module.exports = {

  async findAll(req, res, entity) {
    try {
      
      const response = await Controller.findAll(entity);

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
