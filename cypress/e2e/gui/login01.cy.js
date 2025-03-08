describe('Login', () => {
  it('passes', () => {
    cy.visit('/users/sign_in')
    cy.get('input[id="user_login"]')
      .type('root')
    cy.get('input[id="user_password"]')
      .type('emily123', { log: false })
    cy.get('input[value="Sign in"]')
      .click()
    cy.get('H2[data-qa-selector="welcome_title_content"]')
      .contains('Welcome to GitLab') 
  })
})