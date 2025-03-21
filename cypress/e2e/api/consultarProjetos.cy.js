const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

describe('Consulta Projetos com sucesso!', () => {
        it('successfully', () => {
            cy.request({
                method: 'GET',
                url: '/api/v4/projects/',
                headers: { Authorization: accessToken },
              })
              .then(response => {
                expect(response.status).to.equal(200)
        })
    })
})  