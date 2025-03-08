describe('Create a Project', () => {
    beforeEach(() => {
      cy.login()
    })  
    it('successfully', () => {
      cy.createaproject()

      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/root/emily07`)
      cy.get('div[class="flash-notice mb-2"]')
        .contains("Project 'emily07' was successfully created.")
        .should('be.visible')
    })
  })