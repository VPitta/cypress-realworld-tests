import transactionPage from "../PagesObject/TransactionPage";
import loginPage from "../PagesObject/LoginPage";

describe("Transações", () => {
  beforeEach(() => {
    cy.visit("/");

    loginPage.fillUsername("Vpitta");
    loginPage.fillPassword("123456");
    loginPage.submit();

    cy.get('[data-test="nav-public-tab"]').contains("Everyone");
    
  });

  it("Transação (Pagamento)", () => {
    transactionPage.startNewTransaction();
    transactionPage.searchUser("Darrel Ortiz");
    transactionPage.fillTransaction("100", "Salario");
    transactionPage.submitPayment();

    transactionPage.elements.successMessage().should("be.visible");
  });

  it("Transação (Requerente)", () => {

    transactionPage.startNewTransaction();
    transactionPage.searchUser();
    transactionPage.fillTransaction("100", "Salario");
    transactionPage.submitRequest();

    transactionPage.elements.successMessage().should("be.visible");
  });

  it("Transação (Histórico)", () => {

    transactionPage.history();
 
  });
});