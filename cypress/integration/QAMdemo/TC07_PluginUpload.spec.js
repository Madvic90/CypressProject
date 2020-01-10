describe("Working with plugin", function(){
it('file upload', function(){
    cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')

    //upload a file
    const fileName = 'PSM1 Factuur.pdf';

    cy.fixture(fileName).then(fileContent => {
        cy.get('[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' });
    })
    cy.get('[type="submit"').click()

    cy.contains("You've uploaded a file. Your notes on the file were:")
    })
})
