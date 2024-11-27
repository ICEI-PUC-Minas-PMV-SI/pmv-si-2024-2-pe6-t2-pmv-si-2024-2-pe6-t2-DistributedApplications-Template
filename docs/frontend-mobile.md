# Front-end Móvel

A Agenda Fácil é um aplicativo móvel projetado para ajudar empreendedores a gerenciar seus compromissos de forma simples e prática. O aplicativo objetiva facilitar as atividades diárias dos empreendedores, proporcionando uma experiência organizada e intuitiva para todos os usuários.
Para o desenvolvimento do app, utilizamos React Native junto com a biblioteca Expo, que simplifica a criação e o teste de aplicativos para iOS e Android. Essa combinação de tecnologias permite criar interfaces rápidas, dinâmicas e altamente adaptáveis a diferentes dispositivos móveis, garantindo que os usuários possam navegar de forma fluida e sem interrupções. Com um desempenho otimizado e uma experiência visual moderna, o Agenda Fácil torna o processo de agendamento mais ágil e agradável, oferecendo uma solução eficiente tanto para empreendedores quanto para seus clientes.


## Tecnologias Utilizadas

Para a construção da aplicação mobile Agenda Fácil, utilizamos um conjunto de tecnologias que nos permitiu desenvolver uma plataforma robusta e eficiente. Abaixo estão as principais ferramentas e recursos usados no projeto:

* **React Native:** No Front-End da aplicação mobile, optamos por utilizar o React Native junto com a biblioteca Expo, que simplifica a criação e o teste de aplicativos para iOS e Android, promovendo uma experiência de desenvolvimento ágil e integrada. 
* **JavaScript:** para criar interfaces dinâmicas e responsivas.
* **Visual Studio Code:** Escolhemos o VS Code como nosso editor de código, o que torna o nosso processo de desenvolvimento mais rápido e organizado.
* **GitHub:** Para garantir que todas as versões do projeto fossem salvas e compartilhadas corretamente entre a equipe, usamos o GitHub. Ele nos permitiu acompanhar as mudanças no código, colaborar de forma organizada e garantir que todos os desenvolvedores pudessem contribuir sem confusão.


## Arquitetura

A aplicação Agenda Fácil é dividida em 03 (três) camadas principais: Front-End, Back-End e Banco de Dados. A escolha do React Native para o front-end visa proporcionar uma interface dinâmica e responsiva.

**Front-End | Biblioteca: REACT Native**

**Objetivo:** Criar uma interface de usuário moderna e de fácil interação, para agendamento de serviços.

**Componentes principais:**

* **Página de Login/Cadastro:** Autenticação de usuários.
* **Dashboard do Usuário:** Onde os prestadores de serviços podem visualizar seus próximos compromissos.
* **Calendário Interativo:** Interface para visualização e agendamento de serviços, integrando com o back-end para exibir dados em tempo real.
* **Formulários dinâmicos:** Para agendamento dos horários, personalização de serviços e retirada do caixa (sangria caixa).

**Fluxo de Interação dos Componentes**
* Usuário acessa a aplicação e realiza o login pela interface React Native, enviando as credenciais para a API de autenticação no back-end.
* Front-End solicita dados (agendamentos, serviços) ao back-end através de chamadas à API, enviando o token JWT para garantir autorização.
* Back-End valida o login e retorna um JWT para que o front-end armazene no localStorage.


## Modelagem da Aplicação
[Descreva a modelagem da aplicação, incluindo a estrutura de dados, diagramas de classes ou entidades, e outras representações visuais relevantes.]

## Projeto da Interface
[Descreva o projeto da interface móvel da aplicação, incluindo o design visual, layout das páginas, interações do usuário e outros aspectos relevantes.]

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

* **Design Responsivo:** O design do site será adaptado para redimensionar, esconder, ajustar e reorganizar elementos com base no tamanho da tela do dispositivo.
Celulares: Foco na navegação simplificada e principal, eliminando elementos secundários, e com botões maiores para facilitar o uso com o toque. | Tablet: Manterá um layout mais compacto, geralmente com menus em forma de ícones ou um menu dobrável (menu hamburger) para liberar espaço.
* **Imagens e Ícones Escaláveis:** Utilizaremos imagens e ícones vetoriais, mantendo assim, a qualidade visual independentemente do tamanho.
* **Tipografia e Espaçamento Ajustáveis:** As fontes e o espaçamento serão escaláveis para garantir que o texto seja legível em todas as telas.
* **Componentes Interativos e Funcionalidades:** Componentes como agendamentos, formulários de contato, e a área do cliente serão ajustados para manter a funcionalidade principal em telas menores.


### Interações do Usuário
[Descreva as interações do usuário na interface, como animações, transições entre páginas e outras interações.]

## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]

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

[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]

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

Curso React Native (aprendiz). Curso completo free de React Native para você aprender o essencial sobre desenvolvimento mobile com JavaScript através de projetos práticos. YouTube, 2021.
Microfundamento: Desenvolvimento de Aplicações Móveis.
