class Estrategia {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }

    executarEstrategia(a, b) {
        return this.estrategia.executar(a, b);
    }
}

class Adicao {
    executar(a, b) {
        return a + b;
    }
}

class Subtracao {
    executar(a, b) {
        return a - b;
    }
}

let estrategia = new Estrategia(new Adicao());
console.log(estrategia.executarEstrategia(3, 4));  // Deve imprimir: 7

estrategia = new Estrategia(new Subtracao());
console.log(estrategia.executarEstrategia(3, 4));  // Deve imprimir: -1
