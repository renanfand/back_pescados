const CRUD = require('../sequelizes/sequelizeCRUD');
const Util = require('../Utils/UtilDefault');

module.exports = {

  async create(req, res, bean, entity) {
    try {
      
      validation(bean, res);
      
      const response = await CRUD.create(req.body, entity);

      if (!response) {
        return Util.errorCreate(response);
      }

      return Util.createSuccess(res, response);
    }

    catch (error) {
      return Util.errorCreate(res, error);
    }
  },

  async read(req, res, entity) {
    try {
      const { id } = req.params;
      const response = await CRUD.read(id, entity);

      if (!response) {
        return Util.errorRead(response);
      }

      return res.status(200).json(response);

    }
    catch (error) {
      return Util.errorRead(res, error);
    }
  },

  async update(req, res, bean, entity) {
    try {
      validation(bean, res);
      
      const { id } = req.params;
      const response = await CRUD.update(req.body, id, entity);

      if (!response) {
        return Util.errorUpdate(response);
      }

      return res.status(200).json(response);

    }
    catch (error) {
      return Util.errorUpdate(res, error);
    }
  },

  async delete(req, res, entity) {
    try {
      const { id } = req.params;
      const response = await CRUD.delete(id, entity);

      if (!response) {
        return Util.errorDelete(response);
      }

      return res.status(200).json(response);

    }
    catch (error) {
      return Util.errorDelete(res, error);
    }
  },

};

function validation(bean, res) {
  
  if (bean.error) {
    Util.errorCreate(res, bean);
  }

}

