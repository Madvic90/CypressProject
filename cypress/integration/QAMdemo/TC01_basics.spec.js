describe("Login", function(){
    it('sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('imadessadeq1@hotmail.com')
        cy.get('input[type="password"]').type('Herfst2019!')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })

})

