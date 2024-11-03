# Front-end Web

O Agenda Fácil é uma plataforma pensada para ajudar empreendedores a gerenciarem seus compromissos de forma simples e prática. A ideia é facilitar tanto para quem oferece serviços quanto para quem precisa agendar, criando uma experiência fácil e organizada para ambos.
No desenvolvimento do site, escolhemos usar o React para o Front-End. O React é uma tecnologia que nos ajuda a criar interfaces que respondem rápido e se adaptam bem a qualquer dispositivo, seja no computador ou no celular. Assim, os usuários podem navegar pelo site de forma tranquila, com uma experiência visual moderna e um desempenho fluido, tornando todo o processo de agendamento mais agradável e eficiente.


## Tecnologias Utilizadas

Para a construção da aplicação web Agenda Fácil, utilizamos um conjunto de tecnologias que nos permitiu desenvolver uma plataforma robusta e eficiente. Abaixo estão as principais ferramentas e recursos usados no projeto:

* **React:** No Front-End da aplicação, optamos por utilizar o React, uma das principais bibliotecas JavaScript para criar interfaces dinâmicas e responsivas. Vale destacar, que o React deixa o site mais rápido e com uma experiência mais agradável para quem o utiliza. O React nos permite desenvolver componentes que podem ser reutilizados, nos desenvolvimento mobile.
* **Visual Studio Code:** Escolhemos o VS Code como nosso editor de código, o que torna o nosso processo de desenvolvimento mais rápido e organizado.
* **GitHub:** Para garantir que todas as versões do projeto fossem salvas e compartilhadas corretamente entre a equipe, usamos o GitHub. Ele nos permitiu acompanhar as mudanças no código, colaborar de forma organizada e garantir que todos os desenvolvedores pudessem contribuir sem confusão.


## Arquitetura

A aplicação Agenda Fácil é dividida em 03 (três) camadas principais: Front-End, Back-End e Banco de Dados. A escolha do React para o front-end visa proporcionar uma interface dinâmica e responsiva.

**Front-End** | Biblioteca: **REACT**

**Objetivo:** Criar uma interface de usuário moderna e de fácil interação, para agendamento de serviços.

**Componentes principais:**

* **Página de Login/Cadastro:** Autenticação de usuários.
* **Dashboard do Usuário:** Onde os prestador de serviços podem visualizar seus próximos compromissos.
* **Calendário Interativo:** Interface para visualização e agendamento de serviços, integrando com o back-end para exibir dados em tempo real.
* **Formulários dinâmicos:** Para agendamento dos horários, personalização de serviços e retirada do caixa (sangria caixa).

**Fluxo de Interação dos Componentes**
* Usuário acessa a aplicação e realiza o login pela interface React, enviando as credenciais para a API de autenticação no back-end.
* Front-End solicita dados (agendamentos, serviços) ao back-end através de chamadas à API, enviando o token JWT para garantir autorização.
* Back-End valida o login e retorna um JWT para que o front-end armazene no localStorage.


## Modelagem da Aplicação

As entidades:
* **Prestador de Serviços:** os usuários da aplicação.
* **Clientes:** aquele consume os serviços dos Prestadores de serviços do sistema.
* **Serviços:** atividade prestada pelo Prestador de serviços.
* **Agendamentos:** marcação de atendimentos no sistema, demonstrando assim, a sua descrição, data e horário.

![UserFlow](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/UserFlow.png)


## Projeto da Interface Web

A interface web da Agenda Fácil é projetada para proporcionar uma experiência intuitiva. O design visual reflete sofisticação e credibilidade, com o uso predominante de dois tons, um roxo (#7E5A9B) e um laranja (#F79824), além de uma estrutura responsiva e otimizada para diferentes dispositivos.

**Layout das páginas:** A interface será composta por várias páginas-chave, cada uma com um layout intuitivo e funcional.

* **Página de Login/Cadastro:** Os prestadores de serviços terão campos específicos para completar ou editar o seu perfil.
* **Dashboard do usuário:** Prestadores de serviços poderão visualizar os próximos agendamentos. Vale desacar, que eles poderão editar ou excluir os agendamentos.
* **Página de agendamento:** Um calendário que permite ao prestador de serviços selecionar datas e horários disponíveis para agendar os serviços disponíveis. Após escolher a data, o prestador de serviços poderá preencher um formulário com os detalhes como serviço, o cliente a ser atendido, tempo de duração e o valor. 
* **Página de perfil:** Inclui campos para editar nome, e-mail, telefone e descrição dos serviços.
* **Página de Serviços:** Lista de Serviços disponíveis, onde o prestador de serviços poderão gerenciar os serviços prestados, editando ou excluindo opções com descrição, tempo estimado e preço. 

**Interações do usuários:**
* **Feedback imediato:** O sistema fornecerá feedback visual imediato ao usuário para ações como salvar agendamentos, atualizar perfil, ou preencher formulários incorretamente.

**Aspectos adicionais:** 
* **Acessibilidade:** Foco em boas práticas de acessibilidade no uso da aplicação.
* **Responsividade:** Design totalmente responsivo, adaptado tanto para telas grandes quanto para dispositivos móveis.


### Wireframes

![Home](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Home.png)
![Página de Login](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Login.png)
![Cadastro do Prestador](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cadastro%20do%20Prestador%20(1).png)
![Página Inicial](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/P%C3%A1gina%20Inicial.png)
![Página Cadastro - Opções](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cadastro.png)
![Cadastro de Clientes](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cadastro%20-%20CLIENTES.png)
![Cadastro de Serviços](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cadastro%20-%20SERVI%C3%87OS.png)
![Calendário - Agendamento](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Agendamento%20-%20Usar%20API.png)
![Página de agendamento](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Agendamento%20-%20Usar%20API%20(1).png)
![Lista de agendamento](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Agendamento%20-%20Lista%20de%20agendamento.png)
![Relatórios](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Relat%C3%B3rios.png)
![Financeiro](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Financeito%20-%20Sangria%20do%20caixa.png)
![Financeiro - Adc retirada](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Financeito%20-%20Sangria%20do%20caixa%20-%20Adicionar.png)


### Design Visual

![Paleta de Cores](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Paleta%20de%20cores%20(3).png)
![Justificativa das Cores](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Cores%20(1).png)
![Botões e Campos de texto](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Tipografia%20-%2002%20(1).png)
![Ícones](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/Iconografia.png)


### Layout Responsivo
[Discuta como a interface será adaptada para diferentes tamanhos de tela e dispositivos.]


### Interações do Usuário
[Descreva as interações do usuário na interface, como animações, transições entre páginas e outras interações.]


## Fluxo de Dados

O fluxo de dados de uma aplicação web como o Agenda Fácil adota o modelo cliente-servidor.

**Front-end | Função:** O front-end é responsável pela interação com o usuário, manipulando dados de forma local e apresentando as informações de maneira visual e acessível.
* Possui foco na experiência do usuário, bem como na interação em tempo real. Diferente do back-end, onde possui foco na persistência de dados, segurança e validação.
* Envio e consulta de daos no back-end através da API.

**Cadastros:** Com o preenchimento dos formulários o usuário poderá inserir informações, dentre elas: dados de clientes e de serviços prestados. Esses dados vão ser inseridos no back-end.
**Agendamentos:** O usuário, ora Empreendedor, ao acessar a página de Agendamentos, ele selecionará a data e horário disponíveis em sua agenda. Com a data selecionada, posteriormente, o usuário preencherá as infromações do agendamento, inserindo o nome do cliente e selecionando o serviço e tempo de atendimento. Ao salvar, o status deste agendamento, será encaminhado ao back-end. Essa informação ficará gravada e disponível para consulta do usuário.
**Cadastros de Serviços:** Ao acessar a página de Serviços, o usuário poderá preencher um formulário informando a descrição do serviço, valor(preço do atendimento) e a duração. Ao salvar, o status deste agendamento, será encaminhado ao back-end. Estes dados, poderão inclusos durante o agendamento do Serviço.
**Relatórios:** Haverá uma consulta de dados no back-end. O usuário poderá verificar a quantia arrecadada em um determinado período, a partir do período selecionado, ele receberá a informação da quantia total, como também, os agendamentos que compõem aquela quantia apresentada.
**Financeiro:** O usuário poderá cadastrar as suas retiradas de dinheiro (sangria do caixa) no período selecionado. Ele terá a opção de criar, editar e excluir esta opção, esses dados serão encaminhados para back-end.

Exemplo | Fluxo em duas etapas (front-end e back-end), Agendamento de Serviço:

**Font-end:**
* O usuário seleciona uma data e um horário para o agendamento.
* A seleção atualiza o estado local da interface (calendário).
* Quando o usuário clica em "Salvar", o front-end envia os dados para o back-end via uma chamada API.


**Back-End:**
* O back-end recebe os dados do agendamento.
* Valida se o horário está disponível e se os dados do cliente são válidos.
* Salva o agendamento no banco de dados.
* Envia uma resposta para o front-end confirmando o sucesso ou reportando erros.


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

É essencial pensar e aplicar medidas de segurança, uma aplicação distribuída que lida com dados sensíveis, como a Agenda Fácil. Esses cuidados são fundamentais para proteger as informações dos usuários, garantir que tudo funcione corretamente e tornar a aplicação confiável. 

* **Autenticação com JWT:** O uso de JWT permite que a autenticação seja segura e escalável, pois não requer que o servidor mantenha sessões. Os tokens contêm informações sobre o usuário e são assinados digitalmente para garantir que não sejam alterados. 
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

CODE ZERO. Curso Completo de um Projeto Com Node.JS e  React.JS: Utilizando a famosa Stack MERN: MongoDB+Express+ReactJS+NodeJS. YouTube, 2020.
