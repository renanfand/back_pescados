const Fild = require('./AbstractBean')

class AgricultorBean {

    constructor(request) {
        this.validate(request.body)
    }

    validate(obj) {
        return [
            new Fild("Nome", "nome", obj.nome, true),
            new Fild("Tipo do agricultor", "tpAgricultor", obj.tpAgricultor, true)
        ]
    }
}

module.exports = AgricultorBean;