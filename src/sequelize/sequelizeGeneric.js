
module.exports = {

  async findAll(entity, params) {
    return await entity.findAll({ where: params });
  },

  async findAllAssociate(entity, params, associate) {
    return await entity.findAll({
      where: params,
      include: { association: associate }
    });
  },
};