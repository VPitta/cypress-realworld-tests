class UsersPage {
  elements = {
    createButton: () => cy.get('[data-test="signup"]'),
    firstNameInput: () => cy.get('[name="firstName"]'),
    lastNameInput: () => cy.get('[name="lastName"]'),
    usernameInput: () => cy.get('[name="username"]'),
    passwordInput: () => cy.get('[name="password"]'),
    confirmPasswordInput: () => cy.get('[name="confirmPassword"]'),
    submitButton: () => cy.get('[data-test="signup-submit"]'),
    errorMessagePassword: () => cy.get('#password-helper-text')
  }


  createButton (){
    this.elements.createButton().click();
}
  firstNameInputField(value) {
    this.elements.firstNameInput().type(value);
  }

  lastNameInputField(value) {
    this.elements.lastNameInput().type(value);
  }

  usernameInputField(value) {
    this.elements.usernameInput().type(value);
  }

  passwordInputField(value) {
    this.elements.passwordInput().type(value);
  }

  confirmPasswordInputField(value) {
    this.elements.confirmPasswordInput().type(value);
  }

  submitForm() {
    this.elements.submitButton().click();
  }
}

export default new UsersPage();