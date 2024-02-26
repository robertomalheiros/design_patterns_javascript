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
Analogia - Pense em um presidente de um país. Em qualquer momento, um país tem apenas um presidente. Mesmo que muitas pessoas queiram se tornar presidente, apenas uma pessoa pode ocupar o cargo de cada vez. Quando falamos sobre o “presidente”, todos entendem que estamos nos referindo à mesma pessoa. Da mesma forma, com o padrão Singleton, não importa quantas vezes solicitamos a instância, sempre nos referimos ao mesmo objeto.

### Padrão Factory

O padrão Factory fornece uma maneira de encapsular as instâncias de tipos concretos em classes. O Factory pode ser útil quando um cliente não pode antecipar o tipo de objeto que precisa criar.
Analogia - Pense em uma pizzaria. Quando você pede uma pizza, você não precisa fornecer instruções detalhadas sobre como fazer a pizza. Você simplesmente diz se quer uma pizza de pepperoni, margherita, havaiana, etc., e a pizzaria sabe como fazer cada tipo de pizza. Nesse caso, a pizzaria está agindo como uma “fábrica” que sabe como criar diferentes tipos de pizzas com base no seu pedido.

### Padrão Prototype

O padrão Prototype é usado quando a criação de um novo objeto é cara e consome recursos. Ele fornece uma maneira de copiar um objeto original, o protótipo, e reutilizá-lo para criar novos objetos.
Analogia - Pense em como os animais se reproduzem na natureza. Por exemplo, quando uma ovelha tem um cordeiro, ela não está construindo o cordeiro do zero - ela está essencialmente fazendo uma cópia de si mesma, com algumas pequenas variações. Da mesma forma, o padrão Prototype envolve a criação de novos objetos fazendo uma cópia de um objeto existente, ou “protótipo”.

### Padrão Builder

O padrão Builder é usado para construir um objeto complexo passo a passo. Ele separa a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações.
Exemplo - Imagine que você está construindo uma casa. A construção de uma casa envolve muitos passos - construir a fundação, erguer as paredes, instalar o telhado, etc. Além disso, há muitas opções a serem consideradas em cada passo. Por exemplo, as paredes podem ser feitas de tijolo, madeira ou concreto, o telhado pode ser de telha ou de ardósia, e assim por diante.
Em vez de codificar todas essas opções e passos diretamente na classe Casa, você pode usar o padrão Builder. Você cria uma classe Builder separada que conhece todos os passos para construir uma casa, bem como todas as opções disponíveis em cada passo. Então, quando você quer construir uma casa, você cria uma nova instância do Builder, configura as opções desejadas e então chama um método como construir() para construir a casa. Isso mantém a lógica de construção separada da representação da casa.

### Padrão Abstract Factory

O padrão Abstract Factory fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. É útil quando um sistema deve ser independente de como seus produtos são criados, compostos e representados.
Analogia - Imagine que você está administrando uma cadeia de restaurantes. Cada restaurante serve dois tipos de comida: lanches e bebidas. No entanto, o menu varia dependendo da localização do restaurante. Por exemplo, um restaurante na Itália serve pizza e vinho, enquanto um restaurante no Japão serve sushi e saquê.
Aqui, cada restaurante pode ser visto como uma “fábrica concreta” que produz um conjunto de produtos relacionados (neste caso, lanches e bebidas). A “fábrica abstrata” seria a interface comum para todos esses restaurantes, permitindo que você peça lanches e bebidas sem se preocupar com os detalhes específicos de qual tipo de lanche ou bebida você receberá - isso depende de qual “fábrica concreta” (ou seja, restaurante) você está pedindo.

## Padrões Estruturais

### Padrão Adapter

O padrão Adapter converte a interface de uma classe em outra interface que os clientes esperam. O Adapter permite que classes trabalhem juntas, o que de outra forma não poderia devido a interfaces incompatíveis. No contexto da programação, o “adaptador” seria uma classe que implementa a interface esperada pelo cliente e encapsula a instância da classe que tem a interface incompatível. Quando o cliente chama um método na interface, o adaptador traduz essa chamada em uma ou mais chamadas para os métodos na interface encapsulada.
Analogia - Imagine que você é um turista brasileiro visitando o Japão, mas você não fala japonês. Para se comunicar efetivamente, você pode contratar um intérprete que entenda tanto o português quanto o japonês. O intérprete atua como um “adaptador”, permitindo que você converse com as pessoas locais, traduzindo suas palavras do português para o japonês e vice-versa.


### Padrão Bridge

O padrão Bridge desacopla uma abstração de sua implementação, para que as duas possam variar independentemente. No contexto da programação, o “Bridge” seria uma interface que atua como uma ponte entre a abstração e a implementação. A abstração contém uma referência para a implementação e os métodos da abstração delegam o trabalho para os métodos da implementação.
Analogia - Imagine que você está assistindo à televisão. Você tem um controle remoto (a abstração) que pode controlar diferentes marcas e modelos de televisões (a implementação). O mesmo controle remoto pode aumentar o volume em uma TV Samsung, mudar o canal em uma TV LG, ou desligar uma TV Sony. Aqui, o “controle remoto” é a abstração, e as “TVs” são a implementação. A “ponte” é a programação do controle remoto que permite controlar qualquer TV, independentemente da marca ou do modelo.

### Padrão Composite

O padrão Composite compõe objetos em estruturas de árvore para representar hierarquias parte-todo. O Composite permite que os clientes tratem objetos individuais e composições de objetos de maneira uniforme. No contexto da programação, o “Composite” seria uma classe que implementa a interface do componente e tem métodos para adicionar, remover ou obter componentes. O “componente” é uma interface (ou classe abstrata) que define o comportamento dos elementos na composição. A “folha” é uma classe que implementa a interface do componente, mas não tem nenhum componente filho.
Analogia - Imagine uma organização com vários departamentos. Cada departamento tem um gerente e vários funcionários. Além disso, um funcionário pode liderar uma equipe de outros funcionários. Aqui, tanto o gerente quanto o funcionário são “componentes”. Um “componente” pode ser um “composite” (como um gerente que tem uma equipe) ou uma “folha” (como um funcionário sem equipe). A “árvore” seria a estrutura organizacional completa, mostrando quem reporta a quem.

### Padrão Decorator

O padrão Decorator anexa responsabilidades adicionais a um objeto dinamicamente. Os decoradores fornecem uma alternativa flexível à subclasse para estender a funcionalidade.No contexto da programação, o “Decorator” seria uma classe que tem a mesma interface que o objeto que ele decora. O decorador recebe um objeto da mesma interface através do construtor, e delega todas as operações para esse objeto. No entanto, o decorador também pode adicionar algum comportamento antes ou depois de delegar a operação.
Analogia -  Imagine que você está pedindo uma pizza. Você começa com uma pizza básica, que pode ser considerada o objeto original. Agora, você quer adicionar algumas coberturas, como queijo extra, pepperoni, azeitonas, etc. Cada cobertura seria um “decorador” que adiciona um comportamento (neste caso, sabor) à pizza original.

### Padrão Façade

O padrão Façade fornece uma interface unificada para um conjunto de interfaces em um subsistema. A fachada define uma interface de nível superior que facilita o uso do subsistema.
Analogia - Imagine que você está hospedado em um hotel. Você não precisa saber todos os detalhes de como o hotel funciona para aproveitar sua estadia. Se você quiser um serviço de quarto, basta ligar para o concierge (a “fachada”), que cuidará de tudo para você. O concierge sabe quem chamar para limpar seu quarto, quem prepara a comida, quem a entrega, etc.

### Padrão Flyweight

O padrão Flyweight usa compartilhamento para suportar eficientemente grandes quantidades de objetos de granulação fina. Um objeto flyweight é um objeto compartilhado que pode ser usado em vários contextos simultaneamente. No contexto da programação, o “Flyweight” seria uma classe cujas instâncias são compartilhadas entre vários objetos. Cada objeto mantém uma referência para um flyweight, juntamente com os dados específicos do objeto que são independentes do flyweight (o “estado extrínseco”). O flyweight em si contém os dados que são compartilhados entre os objetos (o “estado intrínseco”).
Analogia - Imagine que você tem uma biblioteca com milhares de livros. Em vez de cada pessoa ter sua própria cópia de cada livro (o que seria muito caro e ocuparia muito espaço), as pessoas podem pegar livros emprestados da biblioteca quando precisam. Aqui, cada “livro” é um “flyweight” - um objeto compartilhado que pode ser usado em diferentes contextos.

### Padrão Proxy

O padrão Proxy fornece um substituto ou espaço reservado para outro objeto para controlar o acesso a ele. O uso do proxy pode ser simplesmente para encaminhamento para o objeto real, ou pode fornecer lógica adicional. No contexto da programação, o “Proxy” seria uma classe que tem a mesma interface que o objeto real. O proxy recebe uma referência para o objeto real e pode controlar o acesso a ele. Por exemplo, um proxy pode adiar a criação do objeto real até que seja realmente necessário, ou pode controlar o acesso ao objeto real com base em permissões de segurança.


## Padrões Comportamentais

### Padrão Chain of Responsibility

O padrão Chain of Responsibility evita o acoplamento do remetente de uma solicitação ao seu receptor, ao dar a mais de um objeto a oportunidade de tratar essa solicitação. Encadeia os objetos receptores, passando a solicitação ao longo da cadeia até que um objeto a trate.

Analogia - Imagine que você está ligando para o serviço de atendimento ao cliente de uma empresa. Primeiro, você fala com um atendente de nível 1. Se o atendente de nível 1 não puder resolver o seu problema, ele passa a sua chamada para um atendente de nível 2. Se o atendente de nível 2 também não puder resolver o problema, ele passa a chamada para um supervisor, e assim por diante. Aqui, cada “atendente” ou “supervisor” é um elo na “cadeia de responsabilidade”. Eles tentam tratar a solicitação (neste caso, resolver o problema) e, se não conseguirem, passam a solicitação para o próximo elo na cadeia.

### Padrão Command

O padrão Command encapsula uma solicitação como um objeto, permitindo que você parametrize clientes com filas, solicitações e operações. Ele também permite suportar operações que podem ser desfeitas. No contexto da programação, o “Command” seria uma interface (ou classe abstrata) com um método (geralmente chamado “execute”). Cada “pedido” é uma classe concreta que implementa a interface Command. O “cliente” cria uma instância de um Command concreto e passa para o “invocador”, que invoca o método “execute” no Command. O “receptor” é o objeto que sabe como realizar as operações associadas ao Command.
Analogia -  Imagine que você está em um restaurante. Você (o “cliente”) faz um pedido (o “comando”) para o garçom (o “invocador”). O garçom então entrega o pedido à cozinha (o “receptor”), que sabe como executá-lo. O pedido é um objeto que contém todas as informações necessárias para preparar a refeição.

### Padrão Interpreter

O padrão Interpreter fornece uma maneira de avaliar a gramática ou expressão de linguagem. Este tipo de padrão vem sob o padrão comportamental.

### Padrão Iterator

O padrão Iterator é muito comumente usado em um conjunto de dados. Este padrão é usado para obter uma maneira de acessar os elementos de uma coleção de objetos de maneira sequencial sem precisar expor sua representação subjacente.
Analogia -  Imagine que você tem um documento em inglês que precisa ser traduzido para o português. Você usaria um “interpretador” (neste caso, um tradutor humano ou um serviço de tradução automática) que entende a gramática do inglês e do português. O interpretador lê o documento em inglês, interpreta cada frase de acordo com as regras gramaticais do inglês, e então gera uma frase equivalente em português.

### Padrão Mediator

O padrão Mediator define um objeto que encapsula como um conjunto de objetos interage. Ele promove o acoplamento fraco ao evitar que os objetos se refiram uns aos outros explicitamente, permitindo que você varie suas interações independentemente.
Analogia -  Imagine um aeroporto, onde muitos aviões precisam decolar e pousar na mesma pista. Em vez de cada avião tentar coordenar suas ações com todos os outros, eles se comunicam com um controlador de tráfego aéreo centralizado (o “mediador”). O controlador de tráfego aéreo conhece o status de cada avião e pode coordenar suas ações para evitar colisões.

### Padrão Memento

O padrão Memento é usado quando queremos salvar o estado de um objeto para que possamos restaurá-lo mais tarde. O Memento é um objeto de valor que representa um instantâneo de um objeto.
Analogia -  Imagine um aeroporto, onde muitos aviões precisam decolar e pousar na mesma pista. Em vez de cada avião tentar coordenar suas ações com todos os outros, eles se comunicam com um controlador de tráfego aéreo centralizado (o “mediador”). O controlador de tráfego aéreo conhece o status de cada avião e pode coordenar suas ações para evitar colisões.

### Padrão Observer

O padrão Observer define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.
Analogia -  Imagine que você se inscreveu para receber atualizações de notícias de um site de notícias. Sempre que uma nova notícia é publicada, o site envia uma notificação para você e todos os outros assinantes. Aqui, o “site de notícias” é o “subject”, e você e os outros assinantes são os “observers”. O subject não precisa saber nada sobre os observers, exceto que eles estão interessados em receber atualizações.

### Padrão State

O padrão State permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado de classe.
Analogia - Imagine um semáforo. Ele tem três estados: vermelho, amarelo e verde. Em cada estado, o semáforo se comporta de maneira diferente. Quando está vermelho, os carros devem parar. Quando está amarelo, os carros devem se preparar para parar. Quando está verde, os carros podem avançar. O semáforo muda de estado em resposta a um temporizador.

### Padrão Strategy

O padrão Strategy define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis. A estratégia permite que o algoritmo varie independentemente dos clientes que o utilizam.
Analogia - Imagine um semáforo. Ele tem três estados: vermelho, amarelo e verde. Em cada estado, o semáforo se comporta de maneira diferente. Quando está vermelho, os carros devem parar. Quando está amarelo, os carros devem se preparar para parar. Quando está verde, os carros podem avançar. O semáforo muda de estado em resposta a um temporizador.

### Padrão Template Method

O padrão Template Method define o esqueleto de um algoritmo em uma operação, adiando alguns passos para as subclasses. O Template Method permite que subclasses redefinam certos passos de um algoritmo sem alterar a estrutura do algoritmo.
Analogia - Imagine que você está preparando uma refeição. Há certos passos que você segue, independentemente do que está cozinhando: reunir os ingredientes, preparar os ingredientes, cozinhar os ingredientes e servir a refeição. No entanto, os detalhes de cada passo dependem da refeição específica que você está preparando. Por exemplo, a preparação dos ingredientes seria diferente para fazer uma lasanha em comparação com fazer uma salada.

### Padrão Visitor

O padrão Visitor representa uma operação a ser executada nos elementos de uma estrutura de objeto. O Visitor permite que você defina uma nova operação sem alterar as classes dos elementos nos quais opera.
Analogia - Imagine um carteiro que entrega correspondências a várias casas em um bairro. Cada casa pode receber diferentes tipos de correspondências: cartas, pacotes, revistas, etc. O carteiro (o “visitante”) sabe como lidar com cada tipo de correspondência e pode entregar a correspondência correta para cada casa (o “elemento”) sem que a casa precise saber os detalhes de como lidar com cada tipo de correspondência.
