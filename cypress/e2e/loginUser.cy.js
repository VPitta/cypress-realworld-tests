describe('template spec', () => {
  it('Primeiro Login', () => {
    cy.visit('/')
    cy.get('[name="username"]').type('VPitta')
    cy.get('[name="password"]').type('123456')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]').contains('Everyone')
    
  })

  it('Login Falhou', () =>{
    cy.visit('/')
    cy.get('[name="username"]').type('VPitta')
    cy.get('[name="password"]').type('1245')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="signin-error"]').contains('Username or password is invalid')

  })
})