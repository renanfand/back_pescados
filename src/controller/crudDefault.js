
module.exports = {
  async create(objCriacao, entity) {
    return await entity.create(objCriacao);
  },

  async findAll(entity) {
    return await entity.findAll();
  },

  async read(id, entity) {
    return await entity.findByPk(id);
  },

  async update(objEdicao, id, entity) {
    return await entity.update(
      objEdicao,
      { where: { id } }
    );
  },

  async delete(id, entity) {
    return await entity.destroy({ where: { id } });
  },

};