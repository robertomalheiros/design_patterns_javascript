class Estrategia {
    constructor() {
        this.estrategia = null;
    }

    executarEstrategia = (a, b) => {
        return this.estrategia(a, b);
    }
}

const adicao = (a, b) => a + b;

const subtracao = (a, b) => a - b;

const estrategia = new Estrategia();

estrategia.estrategia = adicao;
console.log(estrategia.executarEstrategia(3, 4));  // Deve imprimir: 7

estrategia.estrategia = subtracao;
console.log(estrategia.executarEstrategia(3, 4));  // Deve imprimir: -1