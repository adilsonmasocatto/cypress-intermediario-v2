describe("Teste de API", () => {    
    it ('Testar GET',() =>{
        cy.request({
            method:'GET',
            url: 'https://gorest.co.in/public/v2/users',
            failOnStatusCode: false
        }).as('response')
        cy.get('@response').should((response) => {
            expect(response.status).to.equal(200)
        })    
    })
})