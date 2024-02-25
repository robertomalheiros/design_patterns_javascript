var Singleton = (function () {
    var instancia;

    function criarInstancia() {
        var objeto = new Object("Eu sou a instância");
        return objeto;
    }

    return {
        getInstancia: function () {
            if (!instancia) {
                instancia = criarInstancia();
            }
            return instancia;
        }
    };
})();

var inst1 = Singleton.getInstancia();
var inst2 = Singleton.getInstancia();

console.log(inst1 === inst2);  // Deve imprimir: true
