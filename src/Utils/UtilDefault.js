
const MESSAGE_ERROR_CREATE = "Ocorreu algum erro inesperado ao criar elemento.";
const MESSAGE_ERROR_DELETE = "Ocorreu algum erro inesperado ao excluir elemento.";
const MESSAGE_ERROR_SHOW_ALL = "Ocorreu algum erro inesperado ao listar todos elementos.";
const MESSAGE_ERROR_UPDATE = "Ocorreu algum erro inesperado ao atualizar elemento.";
const MESSAGE_ERROR_SHOW_ONE = "Elemento não encontrado.";

module.exports = {

    createSuccess(res, response) {
        return res.status(201).json(response);
    },

    errorCreate(res, erroReturn) {
        
        if(erroReturn.error) {
            return res.status(400).json({ error: erroReturn.error, message: erroReturn.message });
        }

        if (erroReturn) {
            return res.status(400).json({ error: erroReturn, message: MESSAGE_ERROR_CREATE });
        }

        return res.status(400).json({ error: MESSAGE_ERROR_CREATE });
    },

    errorDelete(res, erroReturn) {
        
        if (erroReturn) {
            if(erroReturn.parent.code == 23503) {
                return res.status(200).json({ error: erroReturn, message: 'Não é possivel excluir '+ erroReturn.table + 
                                                                          ', pois possui '+ erroReturn.parent.table + 
                                                                          ' cadastrado internamente.'});
            }
            else {
                return res.status(200).json({ error: erroReturn, message: MESSAGE_ERROR_DELETE });
            }
        }

        return res.status(400).json({ error: MESSAGE_ERROR_DELETE });
    },

    errorShowAll(res, erroReturn) {
        
        if (erroReturn) {
            return res.status(400).json({ error: erroReturn, message: MESSAGE_ERROR_SHOW_ALL});
        }

        return res.status(400).json({ error: MESSAGE_ERROR_SHOW_ALL });
    },

    errorRead(res, erroReturn) {
        
        if (erroReturn) {
            return res.status(400).json({ error: erroReturn, message: MESSAGE_ERROR_SHOW_ONE});
        }

        return res.status(400).json({ error: MESSAGE_ERROR_SHOW_ALL });
    },

    errorUpdate(res, erroReturn) {
        
        if (erroReturn) {
            return res.status(400).json({ error: erroReturn, message: MESSAGE_ERROR_UPDATE});
        }

        return res.status(400).json({ error: MESSAGE_ERROR_UPDATE });
    },
};