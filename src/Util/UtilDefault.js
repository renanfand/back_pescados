
const MESSAGE_ERROR_CREATE = "Ocorreu algum erro inesperado ao criar elemento.";
const MESSAGE_ERROR_DELETE = "Ocorreu algum erro inesperado ao excluir elemento.";
const MESSAGE_ERROR_SHOW_ALL = "Ocorreu algum erro inesperado ao listar todos elementos.";
const MESSAGE_ERROR_UPDATE = "Ocorreu algum erro inesperado ao atualizar elemento.";
const MESSAGE_ERROR_SHOW_ONE = "Elemento não encontrado.";

module.exports = {
    returnErroCreate(res, erroReturn) {
        
        if (erroReturn) {
            return res.status(400).json({ error: erroReturn, message: MESSAGE_ERROR_CREATE });
        }

        return res.status(400).json({ error: MESSAGE_ERROR_CREATE });
    },

    returnErroDelete(res, erroReturn) {
        
        if (erroReturn) {
            return res.status(400).json({ error: erroReturn, message: MESSAGE_ERROR_DELETE });
        }

        return res.status(400).json({ error: MESSAGE_ERROR_DELETE });
    },

    returnErroShowAll(res, erroReturn) {
        
        if (erroReturn) {
            return res.status(400).json({ error: erroReturn, message: MESSAGE_ERROR_SHOW_ALL});
        }

        return res.status(400).json({ error: MESSAGE_ERROR_SHOW_ALL });
    },

    returnErroShowOne(res, erroReturn) {
        
        if (erroReturn) {
            return res.status(400).json({ error: erroReturn, message: MESSAGE_ERROR_SHOW_ONE});
        }

        return res.status(400).json({ error: MESSAGE_ERROR_SHOW_ALL });
    },

    returnErroUpdate(res, erroReturn) {
        
        if (erroReturn) {
            return res.status(400).json({ error: erroReturn, message: MESSAGE_ERROR_UPDATE});
        }

        return res.status(400).json({ error: MESSAGE_ERROR_UPDATE });
    },
};