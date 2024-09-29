# APIs e Web Services

O planejamento de uma aplicação de APIS Web é uma etapa fundamental para o sucesso do projeto. Ao planejar adequadamente, você pode evitar muitos problemas e garantir que a sua API seja segura, escalável e eficiente.

Aqui estão algumas etapas importantes que devem ser consideradas no planejamento de uma aplicação de APIS Web.

[Inclua uma breve descrição do projeto.]

## Objetivos da API

O primeiro passo é definir os objetivos da sua API. O que você espera alcançar com ela? Você quer que ela seja usada por clientes externos ou apenas por aplicações internas? Quais são os recursos que a API deve fornecer?

[Inclua os objetivos da sua api.]


## Arquitetura

[Descrição da arquitetura das APIs, incluindo os componentes e suas interações.]

## Modelagem da Aplicação

As entidades:

* Prestador de Serviços: os usuários da aplicação.
* Clientes: aquele consume os serviços dos Prestadores de serviços do sistema.
* Serviços: atividade prestada pelo Prestador de serviços.
* Agendamentos: marcação de atendimentos no sistema, demonstrando assim, a sua descrição, data e horário.
  

## Fluxo de Dados

O fluxo de dados da aplicação adota o modelo cliente-servidor, conforme demonstrado no diagrama a seguir:

![diagrama](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe6-t2-g10-gestao-de-agenda-e-financas/blob/main/docs/img/diagramaagendaf%C3%A1cil.png)


## Requisitos Funcionais

[Liste os principais requisitos funcionais da aplicação.]

## Requisitos Não Funcionais

[Liste os principais requisitos não funcionais da aplicação, como desempenho, segurança, escalabilidade, etc.]

## Tecnologias Utilizadas

* JavaScript com Node.js e o framework Express utilizados para o desenvolvimento da API;
* Visual Studio Code: IDE utilizada em conjunto com JavaScript.
* Github: plataforma de versionamento;
* Banco de dados: MongoDB


## API Endpoints

[Liste os principais endpoints da API, incluindo as operações disponíveis, os parâmetros esperados e as respostas retornadas.]

### Endpoint 1
- Método: GET
- URL: http://localhost:3000/prestador/
- Parâmetros:
- Resposta:
  
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 720
ETag: W/"2d0-DcPcHEZAWaI3OpvRTXSG/o53f2U"
Date: Sun, 29 Sep 2024 17:36:12 GMT
Connection: keep-alive
keep-alive: timeout=5

[
  {
    "_id": "66f9791b3ee201353402f7dc",
    "nome": "Higor",
    "cnpj": "12",
    "telefone": "31999998888",
    "__v": 0
  },
  {
    "_id": "66f97a49846df65419cbd9e4",
    "nome": "Thalita Farias",
    "cnpj": "12345678910",
    "telefone": "31999998888",
    "__v": 0
  }]

### Endpoint 2
- Método: POST
- URL: http://localhost:3000/prestador/
- Parâmetros:
  
  {
    "nome": "Thalita Teste 2",
    "cnpj": "12345678910",
    "telefone": "31999998888",
    "endereco": "Rua A, Bairro B, Cidade C",
    "password": "123456"

}

- Resposta:
  
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 172
ETag: W/"ac-kOtJ3OOL6z+zJwvDRTsVg0xkgcM"
Date: Sun, 29 Sep 2024 17:39:34 GMT
Connection: keep-alive
keep-alive: timeout=5

{
  "nome": "Thalita Teste 2",
  "cnpj": "12345678910",
  "telefone": "31999998888",
  "endereco": "Rua A, Bairro B, Cidade C",
  "password": "123456",
  "_id": "66f990d61b01779c3467415b",
  "__v": 0
}

### Endpoint 3
- Método: PUT
- URL: http://localhost:3000/prestador/66f97a49846df65419cbd9e4
- Parâmetros:
  
 {
    "nome": "Thalita Oliveira",
    "cnpj": "000000000000",
    "telefone": "31999999999",
    "endereco": "Rua A, Bairro B, Cidade C",
    "password": "123456"

}

- Resposta:
- 
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 174
ETag: W/"ae-T6fia17vhBy4+XUSzXIyoOqKzKo"
Date: Sun, 29 Sep 2024 17:47:31 GMT
Connection: keep-alive
keep-alive: timeout=5

{
  "_id": "66f97a49846df65419cbd9e4",
  "nome": "Thalita Oliveira",
  "cnpj": "000000000000",
  "telefone": "31999999999",
  "__v": 0,
  "endereco": "Rua A, Bairro B, Cidade C",
  "password": "123456"
}

### Endpoint 4
- Método: DELETE
- URL: http://localhost:3000/prestador/66f97e2b916c1a3632f224ed
- Parâmetros:
- Resposta:
  
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: *
Date: Sun, 29 Sep 2024 17:52:02 GMT
Connection: keep-alive
keep-alive: timeout=5



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

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
