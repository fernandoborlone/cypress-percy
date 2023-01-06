describe('Visual Regression testing', () => {
    it('Check for inicial state', () => {
        cy.once('uncaught:exception', () => false) // Serve para ignorar erros na aplicação que não estão relacionados ao cypress
        cy.visit('https://ronunes-proffyaglz.netlify.app/')
        cy.get('.hero-image', ).should('be.visible')
        cy.percySnapshot()       
    })
})