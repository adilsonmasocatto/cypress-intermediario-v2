//describe('Login', () => {
//  it('successfully', () => {
//    cy.login()
//
//    cy.get('.qa-user-avatar').should('be.visible')
//  })
//})

describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})