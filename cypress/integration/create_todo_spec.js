describe('My First Test', function() {
  it(
    'Visits todo on localhost', 
    function() {
      cy.visit('http://localhost:3000/')

      cy.get('#root > div > div > form > input')
      .type('one')
      .should('have.value', 'one')

      cy.get('#root > div > div > form > button')
      .click()
  })
})