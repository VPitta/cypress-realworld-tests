# 📌 Cypress Real World App - Testes Automatizados

---

## 📝 Sobre o projeto
Este repositório contém uma suíte de testes automatizados desenvolvida em **Cypress** para a aplicação **Real World App (RWA)**.  
O objetivo é demonstrar práticas modernas de **QA Automation**, cobrindo testes **E2E (frontend)** e **API (backend)**.  

🔗 **Projeto original [Real World App](https://github.com/gothinkster/realworld)!**  
📊 **Status do CI:** ![GitHub Actions](https://img.shields.io/github/workflow/status/seu-usuario/cypress-rwa-tests/Cypress%20Tests?style=for-the-badge)  
☁️ **Cypress Cloud:** ![Cypress Cloud](https://img.shields.io/badge/Cypress%20Cloud-Record-blue?style=for-the-badge)

---

## 🚀 Tecnologias
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) 
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📂 Estrutura do Projeto

cypress-rwa-tests/  
├── cypress/  
│   ├── e2e/                  # Testes E2E (frontend)  
│   │   ├── loginpage.cy.js  
│   │   ├── createUser.cy.js  
│   │   └── transaction.cy.js  
│   │  
│   ├── fixtures/             # Dados mockados (JSON)  
│   │   └── users.json  
│   │  
│   ├── support/              # Comandos customizados e configs globais  
│   │   ├── commands.js  
│   │   └── e2e.js  
│   │  
│   └── pages/                # Page Objects (POM)  
│       ├── LoginPage.js  
│       ├── TransactionPage.js  
│       └── UsersPage.js  
│  
├── cypress.config.js         # Configuração do Cypress  
└── package.json              # Dependências e scripts do projeto 

---

## 🛠️ Como executar localmente

Clone este repositório e entre nele:  
git clone https://github.com/<seu-usuario>/cypress-rwa-tests.git  
cd cypress-rwa-tests

Clone o repositório da aplicação RealWorld dentro da pasta app:  
git clone https://github.com/gothinkster/realworld.git app

Instale as dependências do projeto:  
yarn install  
cd app  
yarn install

Inicie a aplicação:  
yarn dev

A aplicação ficará disponível em http://localhost:3000

Em outro terminal, rode os testes Cypress:  
npx cypress open  
ou  
npx cypress run --browser chrome

---

## ⚙️ Workflow no GitHub Actions

O workflow está configurado em `.github/workflows/cypress.yml` e realiza os seguintes passos:

1. Checkout do repositório de testes  
2. Configuração do Node.js 20  
3. Instalação das dependências do projeto  
4. Clone do repositório da aplicação RealWorld  
5. Build e start da aplicação em background (`yarn dev`)  
6. Espera o servidor subir (`wait-on http://localhost:3000`)  
7. Roda os testes Cypress no **Cypress Cloud** com `--record`

### Secrets necessários

CYPRESS_RECORD_KEY → chave do Cypress Cloud  
GITHUB_TOKEN → token de acesso (padrão do Actions)

---

## 🌐 Cypress Cloud

- Os testes são registrados no Cypress Cloud.  
- Você pode visualizar execução, histórico e relatórios detalhados.  
- Dashboard: [Cypress Cloud Dashboard](https://www.cypress.io/dashboard/)

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
- Escrita de testes E2E e API  
- Estrutura organizada e escalável  
- Boas práticas (fixtures, intercepts, commands, Page Objects)  
- Evolução contínua registrada em roadmap

---

## ✅ Entrega

- Repositório: `https://github.com/seu-usuario/cypress-rwa-tests`  
- Workflow `.yml` incluído  
- Cypress Cloud configurado com RECORD KEY  
- README atualizado com explicações de execução local, CI e badges
