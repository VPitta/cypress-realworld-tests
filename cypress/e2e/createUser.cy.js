import usersPage from "../PagesObject/UsersPage";

describe('Criação de Usuários', () => {
  beforeEach(() => {
    cy.visit("/");
    

  });

  it('Criação de um novo usuário', () => {
    usersPage.createButton();
    usersPage.firstNameInputField("Vinicius");
    usersPage.lastNameInputField("Pita");
    usersPage.usernameInputField("Vpitta");
    usersPage.passwordInputField("123456");
    usersPage.confirmPasswordInputField("123456");
    usersPage.submitForm();
  });

  it('Criação de um novo usuário (Senha Fraca)', () => {
    usersPage.createButton();
    usersPage.firstNameInputField("Vinicius");
    usersPage.lastNameInputField("Pita");
    usersPage.usernameInputField("Vpitta");
    usersPage.passwordInputField("1");
    usersPage.confirmPasswordInputField("1");
    

    usersPage.elements.errorMessagePassword().contains("Password must contain at least 4 characters");
  });

//   it('Criação de um novo usuário (Primeiro nome obrigatório)', () => {
//     usersPage.createButton();
//     usersPage.firstNameInputField(" ");
//     usersPage.lastNameInputField("Pita");
//     usersPage.usernameInputField("Vpitta");
//     usersPage.passwordInputField("123456");
//     usersPage.confirmPasswordInputField("123456");
//     usersPage.submitForm();

//     usersPage.elements.errorMessagePassword().contains("First Name is required");
//   });
});