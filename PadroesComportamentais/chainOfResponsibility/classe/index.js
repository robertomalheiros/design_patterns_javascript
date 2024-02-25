class Manipulador {
    setProximo(manipulador) {
        this.proximo = manipulador;
        return manipulador;
    }

    manipular(requisicao) {
        if (this.proximo) {
            return this.proximo.manipular(requisicao);
        }
    }
}

class ManipuladorConcreto1 extends Manipulador {
    manipular(requisicao) {
        if (requisicao === 1) {
            return "Um";
        } else {
            return super.manipular(requisicao);
        }
    }
}

class ManipuladorConcreto2 extends Manipulador {
    manipular(requisicao) {
        if (requisicao === 2) {
            return "Dois";
        } else {
            return super.manipular(requisicao);
        }
    }
}

const manipulador = new ManipuladorConcreto1();
manipulador.setProximo(new ManipuladorConcreto2());

console.log(manipulador.manipular(1));  // Deve imprimir: "Um"
console.log(manipulador.manipular(2));  // Deve imprimir: "Dois"
console.log(manipulador.manipular(3));  // Deve imprimir: undefined
