const Fild = require('./AbstractBean')

class AgricultorBean {

    constructor(request) {
        return this.bean(request.body);
    }

    bean(obj) {
        let { nome, tpAgricultor } = obj;

        return new Fild([
            ["Nome", "nome", nome, true],
            ["Tipo do agricultor", "tpAgricultor", tpAgricultor, true]
        ]);

    }
}

module.exports = AgricultorBean;