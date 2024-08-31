# Introdução

Texto descritivo com a visão geral do projeto abordado. Inclui o contexto, o problema, os objetivos, a justificativa e o público-alvo do projeto.

## Problema
Nesse momento você deve apresentar o problema que a sua aplicação deve  resolver. No entanto, não é a hora de comentar sobre a aplicação.

Descreva também o contexto em que essa aplicação será usada, se  houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de  fato existir, pois ainda não é a hora de apresentar requisitos  detalhados ou projetos.

Nesse momento, o grupo pode optar por fazer uso  de ferramentas como Design Thinking, que permite um olhar de ponta a ponta para o problema.

> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

Aqui você deve descrever os objetivos do trabalho indicando que o objetivo geral é desenvolver um software para solucionar o problema apresentado acima. 

Apresente também alguns (pelo menos 2) objetivos específicos dependendo de onde você vai querer concentrar a sua prática investigativa, ou como você vai aprofundar no seu trabalho.
 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

Descreva a importância ou a motivação para trabalhar com esta aplicação que você escolheu. Indique as razões pelas quais você escolheu seus objetivos específicos ou as razões para aprofundar em certos aspectos do software.

O grupo de trabalho pode fazer uso de questionários, entrevistas e dados estatísticos, que podem ser apresentados, com o objetivo de esclarecer detalhes do problema que será abordado pelo grupo.

> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

Descreva quem serão as pessoas que usarão a sua aplicação indicando os diferentes perfis. O objetivo aqui não é definir quem serão os clientes ou quais serão os papéis dos usuários na aplicação. A ideia é, dentro do possível, conhecer um pouco mais sobre o perfil dos usuários: conhecimentos prévios, relação com a tecnologia, relações
hierárquicas, etc.

Adicione informações sobre o público-alvo por meio de uma descrição textual, diagramas de personas e mapa de stakeholders.

> **Links Úteis**:
> - [Público-alvo](https://blog.hotmart.com/pt-br/publico-alvo/)
> - [Como definir o público alvo](https://exame.com/pme/5-dicas-essenciais-para-definir-o-publico-alvo-do-seu-negocio/)
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)

# Especificações do Projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve se conectar à API da Meta para buscar dados sobre seguidores, interações, alcance, impressões e outras métricas relevantes.| ALTA | 
|RF-002| O aplicativo deve exibir um painel/dashboard/tabela onde os usuários possam visualizar todas as métricas disponíveis. | ALTA | 
|RF-003| O aplicativo deve permitir a exportação dos dados em formatos como CSV ou PDF, para que os usuários possam analisar os dados fora do aplicativo. | MÉDIA |
|RF-004| O aplicativo deve enviar notificações push para alertar os usuários sobre mudanças significativas nas métricas. | ALTA | 
|RF-005| Deve permitir o gerenciamento de diferentes perfis de usuários, com diferentes níveis de acesso, como administradores e visualizadores.| MÉDIA |
|RF-006| O aplicativo deve oferecer uma seção dedicada ao gerenciamento de campanhas de marketing. | MÉDIA |
|RF-007| Analise quais tipos de conteúdo têm o melhor desempenho em termos de engajamento, ajudando os usuários a ajustar suas estratégias de conteúdo. | ALTA | 
|RF-008| O aplicativo deve calcular e fornecer relatórios sobre o retorno sobre investimento (ROI) de campanhas publicitárias. | ALTA | 
|RF-009| O aplicativo deve ter uma sessão para gerenciamento(aprovação, feedbacks, mudanças) de criativos | ALTA | 



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| As comunicações com a API da Meta devem ser criptografados usando HTTPS. | ALTA | 
|RNF-004| O aplicativo deve implementar medidas de proteção contra ataques de segurança, como injeção de SQL e ataques de força bruta.  |  ALTA | 
|RNF-005| O aplicativo deve ser capaz de lidar com um grande número de usuários simultâneos sem degradação significativa de desempenho. | ALTA | 
|RNF-006| O sistema deve incluir mecanismos de fallback caso a API da Meta esteja temporariamente indisponível.  |  MÉDIA | 
|RNF-007| A interface do usuário deve ser intuitiva, permitindo que os usuários naveguem facilmente entre as diferentes seções. | MÉDIA | 
|RNF-008| O design deve ser responsivo, garantindo uma boa experiência de usuário em diferentes tamanhos de tela. |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

# Catálogo de Serviços

Descreva aqui todos os serviços que serão disponibilizados pelo seu projeto, detalhando suas características e funcionalidades.

# Arquitetura da Solução

O sistema proposto é uma solução integrada, desenvolvida para gerenciar campanhas e publicações no Instagram, além de monitorar e analisar o impacto dessas ações na rede social. Ele é composto por duas aplicações principais que compartilham o mesmo backend e banco de dados: uma aplicação web voltada para o uso interno da equipe, focada no gerenciamento e monitoramento das campanhas, e uma aplicação mobile, direcionada aos clientes, que permite acompanhar os resultados e impactos das suas campanhas.

A aplicação web, desenvolvida em React, oferece uma interface intuitiva para que a equipe possa criar, validar e monitorar campanhas, bem como analisar o impacto no perfil do cliente no Instagram. A comunicação com o backend ocorre por meio de requisições HTTP, utilizando a biblioteca Axios para consumir os endpoints da API construída com Node.js e Express. O sistema de autenticação utiliza tokens JWT, garantindo acesso seguro e restrito às funcionalidades da aplicação. Uma vez autenticado, o usuário pode criar campanhas, validar processos e acessar relatórios detalhados sobre o desempenho das campanhas.

O backend é responsável por coletar dados diretamente da API do Instagram, extraindo métricas como curtidas, comentários, compartilhamentos e alcance das publicações. Esses dados são processados e organizados, possibilitando o monitoramento em tempo real do impacto da marca do cliente. A aplicação web exibe essas informações em dashboards interativos, com gráficos e análises que auxiliam a equipe a compreender o desempenho do perfil e ajustar as estratégias conforme necessário.

Por outro lado, a aplicação mobile, desenvolvida em React Native, é voltada para os clientes, oferecendo-lhes acesso em tempo real aos dados de desempenho de suas campanhas no Instagram. A aplicação permite monitorar métricas como número de interações, crescimento de seguidores e impacto geral das publicações. Assim como na aplicação web, a comunicação com o backend ocorre via chamadas RESTful protegidas por tokens JWT. O Firebase é utilizado para garantir a sincronização em tempo real dos dados, permitindo que os clientes acessem informações atualizadas sem a necessidade de recarregar a aplicação.

O backend, desenvolvido com Node.js e Express, é o núcleo central da solução. Ele expõe uma série de endpoints RESTful que permitem a execução de operações CRUD para o gerenciamento das campanhas e processamento dos dados do Instagram. A autenticação de usuários é realizada via tokens JWT, garantindo operações seguras após a validação do acesso. Além disso, o backend comunica-se com o Firebase para armazenar e sincronizar as informações das campanhas. Cada vez que uma campanha é atualizada no Instagram, o backend processa as novas métricas e atualiza os dados nas aplicações web e mobile, garantindo que os relatórios sejam sempre precisos.

O sistema de banco de dados utiliza o Firebase, que armazena todas as informações relacionadas às campanhas, usuários e resultados de impacto. O Firebase Authentication gerencia o login dos usuários, tanto para a equipe quanto para os clientes. Além disso, o Firebase assegura a sincronização dos dados entre as aplicações, permitindo que todos tenham acesso às informações mais recentes sobre o desempenho das campanhas.

A integração com a API do Instagram é fundamental para o funcionamento do sistema, permitindo a coleta automatizada de dados sobre as publicações, como curtidas, comentários e alcance. Esses dados são processados pelo backend e exibidos de maneira clara e organizada nas interfaces web e mobile, possibilitando que tanto a equipe quanto os clientes acompanhem o impacto do perfil no Instagram e tomem decisões estratégicas baseadas nos resultados.

Essa arquitetura robusta e escalável assegura uma comunicação eficiente entre todas as partes do sistema, oferecendo uma solução completa para a gestão das campanhas. A combinação das tecnologias escolhidas proporciona à equipe e aos seus clientes um acompanhamento preciso das métricas e a possibilidade de ajustes contínuos nas estratégias.

![Fluxograma da Arquitetura](/docs/img/flowchart-architecture.jpg "Fluxograma da Arquitetura")


## Tecnologias Utilizadas

A arquitetura do sistema utiliza um conjunto de tecnologias, tanto no **frontend** quanto no **backend**, com foco na escalabilidade, desempenho e integração de dados. A seguir, estão as principais tecnologias empregadas.

### 1. **Frontend:**
- **React (Web)**: 
  - É uma biblioteca JavaScript utilizada para a construção de interfaces de usuário dinâmicas e responsivas. Na aplicação web, React é utilizado para construir a interface de gerenciamento de campanhas. Ele oferece uma abordagem baseada em componentes, o que facilita a manutenção, reutilização de código e a criação de interfaces, como dashboards e gráficos, e o **React Hooks** usado para gerenciar o estado global da aplicação.
  
- **React Native (Mobile)**:
  - Permite o desenvolvimento de aplicações móveis nativas para iOS e Android, utilizando a mesma base de código JavaScript do React. React Native é utilizado para criar a aplicação mobile, permitindo que os clientes da empresa acompanhem campanhas. Ele compartilha lógica de negócios com a aplicação web, mas fornece uma experiência nativa e otimizada para dispositivos móveis, com suporte a notificações push e integração direta com APIs nativas de sistema operacional.

### 2. **Backend: Node.js com Express**
- **Node.js**:
  - É uma plataforma de execução JavaScript que permite rodar código no lado do servidor. No sistema, Node.js é responsável por toda a lógica de backend, lidando com requisições HTTP das aplicações frontend, processando dados e se comunicando com serviços externos, como o Firebase e a API do Instagram. Sua arquitetura (event-driven) permite o gerenciamento eficiente de múltiplas conexões simultâneas, ideal para escalabilidade.

- **Express**:
  - É um framework web minimalista para Node.js que facilita a construção de APIs RESTful. Express é utilizado para estruturar as rotas da API e lidar com todas as operações CRUD do sistema, como o gerenciamento de campanhas e a coleta de dados de impacto do Instagram. Ele também é responsável pela implementação de middlewares de autenticação com JWT, garantindo a segurança das requisições.

### 3. **Banco de Dados: Firebase**
- **Firebase**:
  - É uma plataforma desenvolvida pelo Google que oferece um conjunto de ferramentas e serviços voltados para o desenvolvimento de aplicações web e mobile. Ele é utilizado por desenvolvedores para criar aplicações escaláveis e seguras, sem a necessidade de gerenciar toda a infraestrutura de servidores ou bancos de dados.
  - **Firebase Authentication**:
  Um serviço do Firebase que oferece autenticação baseada em email/senha, provedores de login social (Google, Facebook) e autenticação personalizada via tokens JWT. O Firebase Authentication é usado para garantir a segurança do sistema, gerenciando o acesso de usuários. Ele integra-se facilmente ao frontend e backend, permitindo autenticação fluida tanto nas aplicações web quanto mobile.
  - **Firebase Realtime Database ou Firestore**:
  O Firebase oferece dois tipos principais de banco de dados: Realtime Database, que armazena dados em uma estrutura JSON e permite sincronização em tempo real; e Firestore, que oferece um banco de dados NoSQL mais estruturado e flexível. O Firebase armazena todas as informações relacionadas às campanhas e seus resultados. 

### 4. **APIs Externas:**
- **API do Instagram**:
  -  A API do Instagram permite que aplicações interajam com os dados do Instagram, obtendo informações como postagens, curtidas, comentários e outras interações. O backend do sistema, construído em Node.js, utiliza módulo **Axios** para realizar requisições HTTP à API do Instagram. Essas requisições recuperam dados sobre o impacto das campanhas de marketing da empresa, como curtidas, comentários e seguidores ganhos, que são posteriormente processados, armazenados no Firebase e exibidos nas interfaces de usuário.

### 5. **Comunicação e Gerenciamento de Estado**
- **Axios**:
  - Bibliotecas JavaScript para realizar requisições HTTP. Tanto no React quanto no React Native, Axios é utilizado para fazer requisições à API backend, enviando dados, recebendo respostas e lidando com erros. Ele é essencial para a comunicação entre o frontend e o backend.

- **JWT (JSON Web Tokens)**:
  - JWT é um padrão aberto para autenticação que permite que as partes compartilhem informações com segurança. JWT é utilizado para autenticar e autorizar usuários no sistema. Ele garante que apenas usuários autenticados possam acessar os recursos sensíveis, tanto no backend quanto nas interfaces web e mobile.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
