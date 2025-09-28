📌 Cypress Real World App - Testes Automatizados

Este projeto contém uma suíte de testes automatizados para o Cypress Real World App (RWA)
.
O objetivo é demonstrar boas práticas de QA com Cypress, cobrindo E2E (frontend) e API (backend), seguindo um roadmap de evolução em fases.

🚀 Tecnologias

Node.js

Cypress

JavaScript

📂 Estrutura do Projeto

cypress-rwa-tests/
├── cypress/
│   ├── e2e/          # testes E2E (frontend)
│   │   ├── login.cy.js
│   │   ├── usuarios.cy.js
│   │   └── transacoes.cy.js
│   ├── fixtures/     # dados mockados
│   ├── support/      # comandos customizados
│   └── pages/        # Page Objects (a partir da semana 3)
├── cypress.config.js # configuração do Cypress
└── package.json

🛠️ Como executar

Clone este repositório:

git clone https://github.com/<seu-usuario>/cypress-rwa-tests.git
cd cypress-rwa-tests


Instale as dependências:

npm install


Inicie o RWA (em outro terminal, na pasta do app):

npm run dev


O frontend roda em http://localhost:3000 e a API em http://localhost:3001.

Execute os testes:

Modo interativo:

npx cypress open


Modo headless:

npx cypress run

📅 Roadmap de evolução
✅ Semana 1: Fundamentos

 ✅Configuração inicial do Cypress

 ✅Testes básicos de Login válido

 ✅Teste de Login inválido

 ✅Teste de Cadastro de usuário

✅ Semana 2: Cobertura de funcionalidades

 ✅Teste de criação de transação

 ✅Teste de listagem de transações no feed

 ✅Teste de adição de contato

 ✅Organização dos testes dentro de e2e/

 Uso de beforeEach() para preparar cenários (em andamento)

 Uso de cy.intercept() para validar requests (em andamento)

🔄 Semana 3: Page Object Model (POM)

Criar classes para telas (LoginPage, SignupPage, TransactionPage)

Refatorar testes para usar Page Objects

Criar cy.login() e cy.createTransaction() em commands.js

🔄 Semana 4: Testes de API

Escrever testes com cy.request() para Login, Signup, Usuários e Transações

Separar api/ e e2e/ no projeto

🔄 Semana 5: Integração & Documentação

Configurar CI/CD no GitHub Actions

Gerar relatórios (Mochawesome/Allure)

Adicionar badges de status no README

🔄 Semana 6: Extras

Testes visuais (Percy/Applitools)

Reset de banco automatizado antes dos testes

Integração com Docker

Criar vídeo curto mostrando os testes em execução

🎯 Objetivo

Este projeto tem como foco ser parte do meu portfólio em QA Automation, demonstrando:

Escrita de testes E2E e API

Organização com Page Objects

Boas práticas (fixtures, commands, intercepts)

Evolução contínua documentada
