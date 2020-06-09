const CRUD = require('../controller/crudDefault');
const Util = require('../Util/UtilDefault');

module.exports = {

  async create(req, res, entity) {
    try {
      
      const objCriacao = req.body;
      let response = await CRUD.create(objCriacao, entity);

      if (!response) {
        return Util.returnErroCreate(response);
      }

      return res.status(201).json(response);
    
    } 
    catch (error) {
      return Util.returnErroCreate(res, error);
    }
  },

  async findAll(req, res, entity) {
    try {
      
      const response = await CRUD.findAll(entity);

      if (!response) {
        return Util.returnErroShowAll(response);
      }

      return res.status(200).json(response);
    
    } 
    catch (error) {
      return Util.returnErroShowAll(res, error);
    }
  },

  async read(req, res, entity) {
    try {
      let {id} = req.params;
      const response = await CRUD.read(id, entity);

      if (!response) {
        return Util.returnErroShowOne(response);
      }

      return res.status(200).json(response);
    
    } 
    catch (error) {
      return Util.returnErroShowOne(res, error);
    }
  },
  
  async update(req, res, entity) {
    try {
      let {id} = req.params;
      const objEdicao = req.body;

      const response = await CRUD.update(objEdicao, id, entity);

      if (!response) {
        return Util.returnErroUpdate(response);
      }

      return res.status(200).json(response);
    
    } 
    catch (error) {
      return Util.returnErroUpdate(res, error);
    }
  },

  async delete(req, res, entity) {
    try {
      let {id} = req.params;
      const response = await CRUD.delete(id, entity);

      if (!response) {
        return Util.returnErroDelete(response);
      }

      return res.status(200).json(response);
    
    } 
    catch (error) {
      return Util.returnErroDelete(res, error);
    }
  },
};
