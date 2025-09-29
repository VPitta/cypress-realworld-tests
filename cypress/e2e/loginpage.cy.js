import loginPage from "../PagesObject/LoginPage"

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login com Sucesso", () => {
    cy.intercept("POST", "/login").as("loginRequest");

    loginPage.fillUsername("Vpitta");
    loginPage.fillPassword("123456");
    loginPage.submit();
    cy.wait("@loginRequest")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get('[data-test="nav-public-tab"]').contains("Everyone");
  });

  it("Login com Falha", () => {
    cy.intercept("POST", "/login").as("loginRequest");

    loginPage.fillUsername("Vpitta");
    loginPage.fillPassword("12346");
    loginPage.submit();

    cy.wait("@loginRequest")
      .its("response.statusCode")
      .should("eq", 401);

    loginPage.elements.errorMessage().contains("Username or password is invalid");
  });
});