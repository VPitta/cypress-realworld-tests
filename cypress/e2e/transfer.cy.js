describe('template spec', () => {

  it('Primeira Trasação (Pagamento)', () => {
    cy.visit('/')
    cy.get('[name="username"]').type('VPitta')
    cy.get('[name="password"]').type('123456')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]').contains('Everyone')
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"]').click()
    cy.get('[name="amount"]').type('100')
    cy.get('.MuiInputBase-root > [name="description"]').type('Salário')
    cy.get('[data-test="transaction-create-submit-payment"]').click()

  })

    it('Primeira Trasação (Cobrando)', () => {
    cy.visit('/')
    cy.get('[name="username"]').type('VPitta')
    cy.get('[name="password"]').type('123456')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]').contains('Everyone')
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"]').click()
    cy.get('[name="amount"]').type('100')
    cy.get('.MuiInputBase-root > [name="description"]').type('Salário')
    cy.get('[data-test="transaction-create-submit-request"]').click()

  })

    it('Primeira Trasação (Saldo Negativo)', () => {
    cy.visit('/')
    cy.get('[name="username"]').type('VPitta')
    cy.get('[name="password"]').type('123456')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]').contains('Everyone')
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"]').click()
    cy.get('[name="amount"]').type('0')
    cy.get('.MuiInputBase-root > [name="description"]').type('Salário')
    cy.get('[data-test="transaction-create-submit-payment"]').click()

  })

    it('Primeira Trasação (Historico de Transações)', () => {
    cy.visit('/')
    cy.get('[name="username"]').type('VPitta')
    cy.get('[name="password"]').type('123456')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]').contains('Everyone')
    cy.get('[data-test="nav-personal-tab"]').click()

  })

})