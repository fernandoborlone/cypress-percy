Cypress.Commands.add('filMandatoryFields', (firstName, lastName, email) => {
    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#email').type(email)
})