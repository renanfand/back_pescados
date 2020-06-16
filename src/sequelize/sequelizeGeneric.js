
module.exports = {

  async findAll(entity, params) {
    if (!params) {
      return await entity.findAll();
    }
    
    return await entity.findAll({ where: params });
  },
};