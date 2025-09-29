# 📌 Cypress Real World App - Testes Automatizados

---

## 📝 Sobre o projeto
Este repositório contém uma suíte de testes automatizados desenvolvida em **Cypress** para a aplicação **Real World App (RWA)**.  
O objetivo é demonstrar práticas modernas de **QA Automation**, cobrindo testes **E2E (frontend)** e **API (backend)**.

---

## 🚀 Tecnologias
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) 
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
 

---

## 📂 Estrutura do Projeto
cypress-rwa-tests/
├── cypress/
│ ├── e2e/ # Testes E2E (frontend)  
│ │ ├── login.cy.js
│ │ ├── usuarios.cy.js
│ │ └── transacoes.cy.js
│ │
│ ├── fixtures/ # Dados mockados (JSON)  
│ │ └── users.json
│ │
│ ├── support/ # Comandos customizados e configs globais  
│ │ ├── commands.js
│ │ └── e2e.js
│ │
│ └── pages/ # Page Objects (POM)  
│ ├── LoginPage.js
│ └── TransactionPage.js
│
├── cypress.config.js # Configuração do Cypress  
└── package.json # Dependências e scripts do projeto  

---

## 🛠️ Como executar
1. Clone o repositório  
`git clone https://github.com/<seu-usuario>/cypress-rwa-tests.git`  
`cd cypress-rwa-tests`  

2. Instale as dependências  
`npm install`  

3. Inicie o **Real World App** (em outro terminal, dentro da pasta do app)  
`npm run dev`  

4. Execute os testes  
Modo interativo → `npx cypress open`  
Modo headless → `npx cypress run`  

---

## 📅 Roadmap de evolução

✅ Semana 1: Fundamentos  
Configuração inicial do Cypress  
Testes de login válido e inválido  
Teste de cadastro de usuário  

✅ Semana 2: Funcionalidades principais  
Criação de transação  
Listagem de transações no feed  
Adição de contato  
Uso de beforeEach()   
Uso de cy.intercept() 

✅ Semana 3: Page Objects  
Criar classes para telas  
Refatorar testes com POM  
Criar comandos customizados (cy.login, cy.createTransaction) (em andamento)

🔄 Semana 4: Testes de API  
Implementar testes com cy.request()  
Separar api/ e e2e/  

🔄 Semana 5: Integração & Relatórios  
Configuração CI/CD com GitHub Actions  
Relatórios (Mochawesome/Allure)  
Badges no README  

🔄 Semana 6: Extras  
Testes visuais (Percy/Applitools)  
Reset automático do banco antes dos testes  
Integração com Docker  
Demonstração em vídeo dos testes  

---

## 🎯 Objetivo
Este projeto é parte do meu **portfólio em QA Automation**, mostrando:  
Escrita de testes E2E e API  
Estrutura organizada e escalável  
Boas práticas (fixtures, intercepts, commands, Page Objects)  
Evolução contínua registrada em roadmap  
