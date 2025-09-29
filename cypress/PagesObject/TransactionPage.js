// cypress/pages/TransactionPage.js
class TransactionPage {
  elements = {
    newTransactionButton: () => cy.get('[data-test="nav-top-new-transaction"]'),
    userSearchInput: () => cy.get('[data-test="user-list-item-_XblMqbuoP"]'), // seletor estável do input
    amountInput: () => cy.get('[name="amount"]'),
    descriptionInput: () => cy.get('.MuiInputBase-root > [name="description"]'),
    paymentButton: () => cy.get('[data-test="transaction-create-submit-payment"]'),
    requestButton: () => cy.get('[data-test="transaction-create-submit-request"]'),
    historyButton: () => cy.get('[data-test="nav-personal-tab"]'),
    successMessage: () => cy.contains("Transaction Submitted!"),
  };

  startNewTransaction() {
    this.elements.newTransactionButton().click();
  }

  /**
   * Seleciona um usuário da lista
   * @param {string} user - nome do usuário
   */
  searchUser(user) {
    this.elements.userSearchInput().click();

    // Aguarda até que o usuário apareça, rola para ele e clica
    if (user) {
      cy.contains(user, { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true }); // força caso ainda esteja parcialmente coberto
    }
  }

  fillTransaction(amount, description) {
    this.elements.amountInput().type(amount);
    this.elements.descriptionInput().type(description);
  }

  submitPayment() {
    this.elements.paymentButton().click();
  }

  submitRequest() {
    this.elements.requestButton().click();
  }

  history() {
    this.elements.historyButton().click();
  }
}

export default new TransactionPage();
