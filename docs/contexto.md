# Introdução

Este trabalho objetiva a criação de um sistema distribuído, que permite o prestador de serviços gerenciar sua agenda de clientes, como também suas finanças, para a disciplina de Projeto: Arquitetura de Sistemas Distribuídos.
No cotidiano os prestadores de serviços enfrentam problemas para gerenciar os agendamentos, o que ocasiona maior tempo de resposta aos clientes. Ainda, há o risco de perda das anotações físicas. 
A Agenda Fácil pretende solucionar esses problemas substituindo as agendas físicas por uma alternativa online, onde os prestadores poderão gerir os atendimentos e as receitas obtidas nos atendimentos. A aplicação pretende facilitar as relações entre os clientes e os prestadores de serviços.


## Problema

Prestadores de serviços frequentemente enfrentam dificuldades na gestão eficiente de suas agendas e finanças, o que pode levar a problemas como a sobrecarga de compromissos, dificuldades no acompanhamento dos pagamentos, e falta de controle sobre despesas adicionais. A ausência de uma solução integrada que combine funcionalidades de agendamento com controle financeiro resulta em uma administração fragmentada e ineficaz. Sem um sistema centralizado, esses profissionais tendem a usar métodos manuais e desconexos, como planilhas e anotações físicas, o que pode resultar em erros, falta de precisão e perda de tempo. A necessidade de um software que ofereça uma abordagem integrada para o gerenciamento de compromissos e finanças é evidente para melhorar a eficiência operacional e o controle financeiro desses prestadores.


## Objetivos

**Objetivo Geral**

Desenvolver um software de gestão integrada que permita aos prestadores de serviços gerenciarem eficientemente sua agenda e suas finanças, centralizando o controle de compromissos e transações financeiras em uma única plataforma para melhorar a organização e a administração de suas atividades profissionais.

**Objetivos Específicos**

* **Criar um módulo de agendamento de compromissos:**
Desenvolver uma funcionalidade que permita aos usuários registrem, visualizem e gerenciem compromissos futuros.
* **Implementar um Módulo de Controle Financeiro:**
Criar funcionalidades que possibilitem o registro e acompanhamento de receitas e despesas relacionadas aos serviços prestados.
* **Desenvolver Ferramentas de Relatórios Financeiros:**
Implementar recursos que gerem relatórios e gráficos sobre a situação financeira, ajudando os usuários a visualizarem e analisarem suas finanças e o desempenho dos serviços prestados.

## Justificativa

O mercado nacional oferece diversas soluções em matéria de sistemas de gestão empresarial, conhecidos como ERP (Enterprise Resource Planning). Segundo o site da Mobills (2024), podemos apresentar, como exemplo, o TOTVS Protheus e o Conta Azul, entre outros. Em comum, todos estes sistemas estão voltados para pequenos, médios e grandes negócios.

Observando-se este cenário, foi possível identificar a ausência de software voltado para o trabalhador autônomo, que carece de ferramenta de apresentação mais simplificada com leque de funcionalidades mais reduzidos, quando comparados às alternativas mencionadas anteriormente, mas que forneça funcionalidades que estejam na medida de suas necessidades operacionais.


## Público-Alvo

Profissionais de natureza autônoma, com nível educacional variado, que não desejam investir em software sofisticado para gestão de agendamentos e para gestão financeira de seus serviços e que, portanto, buscam solução simplificada que permita, via web ou mobile, acompanhar os gastos com insumos, os valores recebidos e a receber, os compromissos com clientes, e gerar relatórios com dados de interesse para seu negócio.


# Especificações do Projeto

## Requisitos

### Requisitos Funcionais

| ID    | Descrição do Requisito                                        | Prioridade |
|-------|---------------------------------------------------------------|------------|
| RF-001 | Permitir que o prestador se cadastre no sistema | ALTA       |
| RF-002 | Permitir o gerenciamento de clientes | ALTA |
| RF-003 | Permitir o gerenciamento de serviços | MÉDIA |
| RF-004 | Permitir o gerenciamento dos agendamentos dos prestadores | MÉDIA |
| RF-005 |Permitir gerenciamento das transações financeiras (receitas e despesas) | ALTA |
| RF-006 | Permitir que os usuários possam emitir relatórios | ALTA       |


### Requisitos não Funcionais

| ID    | Descrição do Requisito                                      | Prioridade |
|-------|-------------------------------------------------------------|------------|
| RNF-001 | Permitir a autenticação dos usuários (login e senha) | ALTA  |
| RNF-002 | Oferecer uma interface intuitiva | MÉDIA |
| RNF-003 | Desenvolver um sistema responsivo para acesso em dispositivos móveis | ALTA |
| RNF-004 | Preparar o sistema para suportar aumento no número de clientes, agendamentos e transações | ALTA |
| RNF-005 | Adequar a aplicação perante as normas de proteção de dados | ALTA |
| RNF-006 | Garantir a segurança dos dados pessoais e financeiros | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Limitação de tempo: o sistema possui um prazo determinado para cada entrega |
|02| Limitação orçamentária: restringindo a escolha de tecnologias por se tratar de projeto acadêmico |


# Catálogo de Serviços

•	**Gerenciar os clientes:** o módulo de gerenciamento de clientes oferece uma solução para a administração dos dados dos clientes/usuários. Com ele, é possível realizar o cadastro, fazer edições nas informações existentes e inativar registros quando necessário. Isso garante que todos os dados estejam sempre atualizados e organizados, facilitando a comunicação e o atendimento personalizado.

•	**Gerenciar dos serviços prestados:** permite o gerenciamento eficiente dos serviços oferecidos pela empresa. É possível cadastrar novos serviços, editar informações de serviços existentes e inativar aqueles que não estão mais disponíveis. Além disso, o sistema permite o registro dos valores cobrados por cada serviço, proporcionando um controle das finanças.

•	**Gerenciar os agendamentos:** a funcionalidade de gerenciamento de agendamentos assegura que todos os serviços sejam programados e administrados de maneira eficaz. Os usuários podem incluir novos agendamentos, editar os existentes e cancelar aqueles que não são mais necessários. Isso ajuda a manter a agenda dos prestadores de serviços organizada e evita conflitos ou sobreposições de horários.

•	**Gestão financeira:** oferece uma maneira prática para registrar e acompanhar as despesas fixas e variáveis. Os usuários e prestadores de serviços podem registrar todas as suas despesas, o que facilita o controle financeiro e a análise dos custos operacionais. 

•	**Emissão de relatórios:** a funcionalidade de emissão de relatórios detalhados com base em períodos específicos, como diários, mensais ou anuais. Os usuários podem criar relatórios financeiros para acompanhar o desempenho econômico da empresa e relatórios de lucro presumido para entender melhor a rentabilidade dos serviços prestados.


# Arquitetura da Solução

![Arquitetura da Solução - Agenda Fácil](img/arquitetura-sistema)


## Tecnologias Utilizadas

* **Back-End:** utilizaremos JavaScript com Node.js e o framework Express, que oferecem um ambiente de execução leve e escalável para construir APIs e gerenciar a lógica do servidor. 
* **Front-End:** optamos por React, uma biblioteca JavaScript que permite criar interfaces de usuário dinâmicas e responsivas com eficiência. 
* **Aplicações móveis:** empregamos React Native junto com a biblioteca Expo, que simplifica a criação e o teste de aplicativos para iOS e Android, promovendo uma experiência de desenvolvimento ágil e integrada.

## Hospedagem

A hospedagem e o lançamento da plataforma serão realizados na Azure, utilizando os serviços oferecidos pela Microsoft para garantir escalabilidade, segurança e disponibilidade.

Etapas do processo:

**Preparação do Ambiente:**
* Criaremos uma conta (estudante) na Azure e configuraremos os recursos necessários, como máquinas virtuais, banco de dados e redes virtuais.
* Configuraremos a segurança do ambiente.

**Configuração do Aplicativo:**
* Implementaremos o código da plataforma usando o Azure DevOps para o controle de versões e pipelines de CI/CD (Integração Contínua/Entrega Contínua).
* Configuraremos os serviços de Aplicações Web no Azure (Azure App Services) para hospedar a aplicação, garantindo que ela esteja pronta para escalar conforme a demanda.

**Banco de Dados:**
* Utilizaremos o banco de dados MongoDB para armazenar os dados, garantindo backups automáticos, alta disponibilidade e recuperação em caso de falhas.
* Otimizamos o desempenho do banco de dados com base nos requisitos da aplicação.

**Lançamento:**
* Realizaremos testes finais no ambiente de staging antes de mover para produção.
* Executamos o lançamento da plataforma de forma controlada.
