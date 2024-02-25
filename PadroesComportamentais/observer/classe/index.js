class Observador {
    atualizar(mensagem) {}
}

class ObservadorConcreto extends Observador {
    atualizar(mensagem) {
        console.log(`ObservadorConcreto: ${mensagem}`);
    }
}

class Sujeito {
    constructor() {
        this.observadores = [];
    }

    registrar(observador) {
        this.observadores.push(observador);
    }

    notificar(mensagem) {
        for (const observador of this.observadores) {
            observador.atualizar(mensagem);
        }
    }
}

const sujeito = new Sujeito();
const observador = new ObservadorConcreto();
sujeito.registrar(observador);
sujeito.notificar("Olá!");  // Deve imprimir: "ObservadorConcreto: Olá!"
