# Padrões de Design em Javascript

Este repositório contém exemplos de implementação de vários padrões de design em Python.

## Índice

### Padrões de Criação
1. Padrão Singleton
2. Padrão Factory
3. Padrão Prototype
4. Padrão Builder
5. Padrão Abstract Factory

### Padrões Estruturais
6. Padrão Adapter
7. Padrão Bridge
8. Padrão Composite
9. Padrão Decorator
10. Padrão Facade
11. Padrão Flyweight
12. Padrão Proxy

### Padrões Comportamentais
13. Padrão Chain of Responsibility
14. Padrão Command
15. Padrão Interpreter
16. Padrão Iterator
17. Padrão Mediator
18. Padrão Memento
19. Padrão Observer
20. Padrão State
21. Padrão Strategy
22. Padrão Template Method
23. Padrão Visitor

## Padrões de Criação

### Padrão Singleton

O padrão Singleton garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela. É útil quando exatamente um objeto é necessário para coordenar ações no sistema.

### Padrão Factory

O padrão Factory fornece uma maneira de encapsular as instâncias de tipos concretos em classes. O Factory pode ser útil quando um cliente não pode antecipar o tipo de objeto que precisa criar.

### Padrão Prototype

O padrão Prototype é usado quando a criação de um novo objeto é cara e consome recursos. Ele fornece uma maneira de copiar um objeto original, o protótipo, e reutilizá-lo para criar novos objetos.

### Padrão Builder

O padrão Builder é usado para construir um objeto complexo passo a passo. Ele separa a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações.

### Padrão Abstract Factory

O padrão Abstract Factory fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. É útil quando um sistema deve ser independente de como seus produtos são criados, compostos e representados.


### Padrões Estruturais

### Padrão Adapter

O padrão Adapter converte a interface de uma classe em outra interface que os clientes esperam. O Adapter permite que classes trabalhem juntas, o que de outra forma não poderia devido a interfaces incompatíveis.

### Padrão Bridge

O padrão Bridge desacopla uma abstração de sua implementação, para que as duas possam variar independentemente.

### Padrão Composite

O padrão Composite compõe objetos em estruturas de árvore para representar hierarquias parte-todo. O Composite permite que os clientes tratem objetos individuais e composições de objetos de maneira uniforme.

### Padrão Decorator

O padrão Decorator anexa responsabilidades adicionais a um objeto dinamicamente. Os decoradores fornecem uma alternativa flexível à subclasse para estender a funcionalidade.

### Padrão Facade

O padrão Facade fornece uma interface unificada para um conjunto de interfaces em um subsistema. A fachada define uma interface de nível superior que facilita o uso do subsistema.

### Padrão Flyweight

O padrão Flyweight usa compartilhamento para suportar eficientemente grandes quantidades de objetos de granulação fina. Um objeto flyweight é um objeto compartilhado que pode ser usado em vários contextos simultaneamente.

### Padrão Proxy

O padrão Proxy fornece um substituto ou espaço reservado para outro objeto para controlar o acesso a ele. O uso do proxy pode ser simplesmente para encaminhamento para o objeto real, ou pode fornecer lógica adicional.


## Padrões Comportamentais

### Padrão Chain of Responsibility

O padrão Chain of Responsibility evita o acoplamento do remetente de uma solicitação ao seu receptor, ao dar a mais de um objeto a oportunidade de tratar essa solicitação. Encadeia os objetos receptores, passando a solicitação ao longo da cadeia até que um objeto a trate.

Analogia - Sistema de triagem, onde uma tarefa é passada de uma estação para a próxima até que seja tratada.

### Padrão Command

O padrão Command encapsula uma solicitação como um objeto, permitindo que você parametrize clientes com filas, solicitações e operações. Ele também permite suportar operações que podem ser desfeitas.

### Padrão Interpreter

O padrão Interpreter fornece uma maneira de avaliar a gramática ou expressão de linguagem. Este tipo de padrão vem sob o padrão comportamental.

### Padrão Iterator

O padrão Iterator é muito comumente usado em um conjunto de dados. Este padrão é usado para obter uma maneira de acessar os elementos de uma coleção de objetos de maneira sequencial sem precisar expor sua representação subjacente.

### Padrão Mediator

O padrão Mediator define um objeto que encapsula como um conjunto de objetos interage. Ele promove o acoplamento fraco ao evitar que os objetos se refiram uns aos outros explicitamente, permitindo que você varie suas interações independentemente.

### Padrão Memento

O padrão Memento é usado quando queremos salvar o estado de um objeto para que possamos restaurá-lo mais tarde. O Memento é um objeto de valor que representa um instantâneo de um objeto.

### Padrão Observer

O padrão Observer define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

### Padrão State

O padrão State permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado de classe.

### Padrão Strategy

O padrão Strategy define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis. A estratégia permite que o algoritmo varie independentemente dos clientes que o utilizam.

### Padrão Template Method

O padrão Template Method define o esqueleto de um algoritmo em uma operação, adiando alguns passos para as subclasses. O Template Method permite que subclasses redefinam certos passos de um algoritmo sem alterar a estrutura do algoritmo.

### Padrão Visitor

O padrão Visitor representa uma operação a ser executada nos elementos de uma estrutura de objeto. O Visitor permite que você defina uma nova operação sem alterar as classes dos elementos nos quais opera.
