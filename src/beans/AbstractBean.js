
class Fild {

    constructor(label, atributo, valor, obrigatorio) {
        this.validateItem(label, atributo, valor, obrigatorio);
    }

    validateItem(label, atributo, valor, obrigatorio) {
        console.log("LABEL = " + label +
                    "\nATRIBUTO = " + atributo +
                    "\nVALOR = " + valor +
                    "\nOBRIGATORIO = " + obrigatorio);
    }
}

module.exports = Fild;