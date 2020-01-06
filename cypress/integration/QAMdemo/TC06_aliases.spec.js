describe('Create and mark-unmark as favorite', function(){ 
    
    Cypress.config('pageLoadTimeout', 100000)
    
    before(function () {
       cy.SignIn()
    })  

    it('Create a post', function(){
        //cy.contains('New Post').click()
        cy.get('ul.navbar-nav').children().contains('New Post').click();
        cy.hash().should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test1')
            cy.get('textarea').last().type('Test2')
            cy.contains('Publish Article').should('be.visible').click()
    })
        cy.url().should('include','article')

    })
    it('Mark-unmark as favorite', function(){
        cy.get('.navbar-nav').contains('Maddox').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.btn-primary').first().then(($fav) => {
            const favCount = $fav.text()
            expect(parseInt(favCount)).to.eq(1)
        })
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')

    })

})