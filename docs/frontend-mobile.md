# Front-end Móvel

A Agenda Fácil é um aplicativo móvel projetado para ajudar empreendedores a gerenciar seus compromissos de forma simples e prática. O aplicativo objetiva facilitar as atividades diárias dos empreendedores, proporcionando uma experiência organizada e intuitiva para todos os usuários.
Optamos por desenvolver a Agenda Fácil utilizando React Native com a biblioteca Expo. Essa combinação nos permitiu criar um aplicativo multiplataforma (iOS e Android) de forma eficiente, reduzindo o tempo de desenvolvimento e os custos. Além disso, o React Native e o Expo nos garantem interfaces rápidas, dinâmicas e responsivas, adaptando-se perfeitamente a diferentes tamanhos de tela e dispositivos, assegurando uma navegação fluida e sem interrupções para nossos usuários.
O resultado é um aplicativo com desempenho otimizado, visual moderno e uma experiência de agendamento ágil e agradável. A Agenda Fácil será uma ferramenta valiosa tanto para empreendedores que precisam gerenciar seus compromissos de forma eficiente, quanto para seus clientes, que se beneficiarão de um processo de agendamento mais simples e organizado.


## Tecnologias Utilizadas

Para a construção da aplicação mobile Agenda Fácil, utilizamos um conjunto de tecnologias que nos permitiu desenvolver uma plataforma robusta e eficiente. Abaixo estão as principais ferramentas e recursos usados no projeto:

* **React Native:** No Front-End da aplicação mobile, optamos por utilizar o React Native junto com a biblioteca Expo, que simplifica a criação e o teste de aplicativos para iOS e Android, promovendo uma experiência de desenvolvimento ágil e integrada. 
* **JavaScript:** para criar interfaces dinâmicas e responsivas.
* **Visual Studio Code:** Escolhemos o VS Code como nosso editor de código, o que torna o nosso processo de desenvolvimento mais rápido e organizado.
* **GitHub:** Para garantir que todas as versões do projeto fossem salvas e compartilhadas corretamente entre a equipe, usamos o GitHub. Ele nos permitiu acompanhar as mudanças no código, colaborar de forma organizada e garantir que todos os desenvolvedores pudessem contribuir sem confusão.


## Arquitetura

A aplicação Agenda Fácil é dividida em 03 (três) camadas principais: Front-End, Back-End e Banco de Dados. 
A escolha do React Native para o front-end visa proporcionar uma interface dinâmica e responsiva.

**Front-End | Biblioteca: REACT Native**

**Objetivo:** Criar uma interface de usuário moderna e de fácil interação, para agendamento de serviços.

**Componentes principais:**
* **Página de Login/Cadastro:** Autenticação de usuários.
* **Dashboard do Usuário:** Onde os prestadores de serviços podem visualizar seus próximos compromissos.
* **Calendário Interativo:** Interface para visualização e agendamento de serviços, integrando com o back-end para exibir dados em tempo real.
* **Formulários dinâmicos:** Para agendamento dos horários, personalização de serviços e retirada do caixa (sangria caixa).

**Fluxo de Interação dos Componentes**
* Usuário acessa a aplicação e realiza o login pela interface React Native, enviando as credenciais para a API de autenticação no back-end.
* Front-End solicita dados (agendamentos, cadastros e serviços) ao back-end através de chamadas à API, para garantir autorização.


## Modelagem da Aplicação

[Descreva a modelagem da aplicação, incluindo a estrutura de dados, diagramas de classes ou entidades, e outras representações visuais relevantes.]


## Projeto da Interface

A interface web da Agenda Fácil é projetada para proporcionar uma experiência intuitiva e um design visual confiável. Bem como, uma estrutura responsiva e otimizada para os dispositivos móveis.

**Layout das páginas:** A interface será composta por várias páginas-chave, cada uma com um layout intuitivo e funcional.
* **Página de Login/Cadastro:** Os prestadores de serviços terão campos específicos para completar ou editar o seu perfil.
* **Dashboard do usuário:** Prestadores de serviços poderão visualizar os próximos agendamentos. Vale destacar, que eles poderão editar ou excluir os agendamentos.
* **Página de agendamento:** Um calendário que permite ao prestador de serviços selecionar datas e horários disponíveis para agendar os serviços cadastrados. Após escolher a data, o prestador de serviços poderá preencher um formulário com os detalhes como serviço, o cliente a ser atendido, tempo de duração e o valor. 
* **Página de perfil:** Inclui campos para editar nome, e-mail, telefone e descrição dos serviços.
* **Página de Serviços:** Lista de Serviços disponíveis, onde o prestador de serviços poderão gerenciar os serviços prestados, editando ou excluindo opções com descrição, tempo estimado e preço. 

**Interações do usuários:**
* **Feedback imediato:** O sistema fornecerá feedback visual imediato ao usuário para ações como salvar agendamentos, atualizar perfil, ou preencher formulários incorretamente.

**Aspectos adicionais:** 
* **Acessibilidade:** Foco em boas práticas de acessibilidade no uso da aplicação.
* **Responsividade:** Design totalmente responsivo, adaptado tanto para telas grandes quanto para dispositivos móveis.


### Wireframes
[Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.]


### Design Visual

![Paleta de Cores](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Paleta%20de%20cores%20(3).png)
![Justificativa das Cores](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cores%20(1).png)
![Botões e Campos de texto](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Tipografia%20-%2002%20(1).png)
![Ícones](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Iconografia.png)


### Layout Responsivo

A interface responsiva será essencial para garantir que a experiência do usuário seja intuitiva e agradável. 
A seguir estão algumas abordagens e melhores práticas que serão implementadas para otimizar a interface em várias resoluções.

* **Design Responsivo:** O design do site será adaptado para redimensionar, esconder, ajustar e reorganizar elementos com base no tamanho da tela do dispositivo. Com o foco na navegação simplificada e um menu dobrável (menu hamburger) para apresentar as informações em todos tipos de dispositivos.
* **Imagens e Ícones Escaláveis:** Utilizaremos imagens e ícones vetoriais, mantendo assim, a qualidade visual independentemente do tamanho.
* **Tipografia e Espaçamento Ajustáveis:** As fontes e o espaçamento serão escaláveis para garantir que o texto seja legível em todos os tipos de dispositivos.
* **Componentes Interativos e Funcionalidades:** As áreas de cadastros do prestador e dos clientes serão ajustados para manter esta funcionalidade em telas/dispositivos menores.


### Interações do Usuário

As animações e interações serão desenhadas para garantir uma experiência intuitiva, de forma a guiar e melhor a navegação do usuário.

* **Campos de formulário:** Os placeholders se movem acima dos campos quando o usuário começa a digitar, mantendo clareza.
* **Fluxo de agendamento em etapas:** O processo será dividido em passos, com transições suaves para indicar o progresso no preenchimento das informações;
* **Transições suaves:** Troca de páginas suaves, dando continuidade à navegação do usuário.


## Fluxo de Dados

O fluxo de dados de uma aplicação mobile como o Agenda Fácil adota o modelo cliente-servidor.

**Front-end | Função:** O front-end é responsável pela interação com o usuário, manipulando dados de forma local e apresentando as informações de maneira visual e acessível.
Possui foco na experiência do usuário, bem como na interação em tempo real. Diferente do back-end, onde possui foco na persistência de dados, segurança e validação. Bem como, envia a consulta de dados no back-end através da API.

* **Cadastros:** Com o preenchimento dos formulários o usuário poderá inserir informações, dentre elas: dados do prestador de serviços (usuário), dados de clientes e de serviços prestados. Esses dados vão ser inseridos no back-end.
* **Agendamentos:** O usuário, ora prestador de serviços, ao acessar a página de Agendamentos, ele selecionará a data e horário disponíveis em sua agenda. Com a data selecionada, posteriormente, o usuário preencherá as infromações do agendamento, inserindo o nome do cliente e selecionando o serviço e tempo de atendimento. Ao salvar, o status deste agendamento, será encaminhado ao back-end. Essa informação ficará gravada e disponível para consulta do usuário.
* **Relatórios:** Haverá uma consulta de dados no back-end, na qual, o usuário poderá verificar a quantia arrecadada em um determinado período, a partir do período selecionado.
* **Financeiro:** O usuário poderá cadastrar as suas retiradas de dinheiro (sangria do caixa) e estes dados serão encaminhados para o back-end. 

Exemplo | Fluxo em duas etapas (front-end e back-end), CADASTRO DE CLIENTE:

**Font-end:**
* O usuário, prestador de serviços, irá acessar a página de Cadastro de Clientes e inserir os dados necessários.
* Os dados inseridos atualiza o estado local da interface (calendário).
* Quando o usuário clica em "Salvar", o front-end envia os dados para o back-end, via uma chamada API.

**Back-End:**
* O back-end recebe os dados do Cliente cadastrado.
* Valida se todos os dados do Cliente são válidos. Logo após, o cadastro é efetivado e salvo no banco de dados.
* O back-end envia uma resposta para o front-end confirmando o sucesso ou reportando erros.


## Requisitos Funcionais

| ID    | Descrição do Requisito                                        | Prioridade |
|-------|---------------------------------------------------------------|------------|
| RF-001 | Permitir que o prestador se cadastre no sistema | ALTA       |
| RF-002 | Permitir o gerenciamento de clientes | ALTA |
| RF-003 | Permitir o gerenciamento de serviços | MÉDIA |
| RF-004 | Permitir o gerenciamento dos agendamentos dos prestadores | MÉDIA |
| RF-005 |Permitir gerenciamento das transações financeiras (receitas e despesas) | ALTA |
| RF-006 | Permitir que os usuários possam emitir relatórios | ALTA       |


## Requisitos Não Funcionais

| ID    | Descrição do Requisito                                      | Prioridade |
|-------|-------------------------------------------------------------|------------|
| RNF-001 | Permitir a autenticação dos usuários (login e senha) | ALTA  |
| RNF-002 | Oferecer uma interface intuitiva | MÉDIA |
| RNF-003 | Desenvolver um sistema responsivo para acesso em dispositivos móveis | ALTA |
| RNF-004 | Preparar o sistema para suportar aumento no número de clientes, agendamentos e transações | ALTA |
| RNF-005 | Adequar a aplicação perante as normas de proteção de dados | ALTA |
| RNF-006 | Garantir a segurança dos dados pessoais e financeiros | ALTA |


## Considerações de Segurança

Tendo em vista, que a aplicação com dados sensíveis, é necessários priorizar preoteção das informações dos usuários, garantindo assim, que tudo funcione corretamente.

* **Autenticação:** O uso de JWT permite que a autenticação seja segura e escalável, pois não requer que o servidor mantenha sessões.
* **Validação de Dados:** A validação no front-end melhora a experiência do usuário, mas a validação no back-end é crucial para evitar ataques. 
* **Comunicação Segura:** Uso do protocolo HTTPS para proteger a comunicação entre o cliente e o servidor. Isso garante que os dados, como senhas e informações pessoais, sejam transmitidos de forma segura e não possam ser interceptados.


## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.


## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.


# Referências

* Curso React Native (aprendiz). Curso completo free de React Native para você aprender o essencial sobre desenvolvimento mobile com JavaScript através de projetos práticos. YouTube, 2021.
* Microfundamento: Desenvolvimento de Aplicações Móveis.
