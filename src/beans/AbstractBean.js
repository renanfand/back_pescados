
class Fild {

    constructor(bean) {
        return this.validate(bean);
    }

    validate(bean) {
        let obj = [];

        bean.forEach(ele => {
            obj.push(this.validateItem(ele))
        });

        return this.retornaObjetoError(obj);
    }

    retornaObjetoError(obj) {
        let objAux = [];

        obj.forEach(ele => {
            if (ele.errorMessage) {
                objAux.push(ele);
            }
        });

        if (objAux.length > 0) {
            return { error: 'Valor obrigatório', message: objAux };
        }
    }

    validateItem(item) {
        //[label], [atributo], [valor], [obrigatorio]
        if (item[3] && (item[2] == null || item[2] == '' || item[2] == undefined)) {
            return { errorMessage: item[0] + ' é um valor obrigatório.' }
        }

        return { atributo: item[1], valor: item[2] }
    }
}

module.exports = Fild;