class LoginPage {
  elements = {
    usernameInput: () => cy.get('[name="username"]'),
    passwordInput: () => cy.get('[name="password"]'),
    loginButton: () => cy.get('[data-test="signin-submit"]'),
    errorMessage: () => cy.get('[data-test="signin-error"]'),
  };

  fillUsername(username) {
    this.elements.usernameInput().type(username);
  }

  fillPassword(password) {
    this.elements.passwordInput().type(password);
  }

  submit() {
 this.elements.loginButton().click();
 }
}

export default new LoginPage();