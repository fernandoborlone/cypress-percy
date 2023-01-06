const firstName = 'Fernando'
const lastName = 'Borlone'
const email = {
  valido: 'fernandoborlone@gmail.com',
  invalido: 'joao-email.com'
}
describe('Ticket', () => {
  beforeEach(() => cy.visit('index.html'))
  it('Check for de initial state', () => {
    cy.percySnapshot()
  })

  it('Check for invalid email', () => {
    cy.get('#email').type(email.invalido)
    cy.percySnapshot()
  })

  it('Enables submission button after all mandatory fields are filled', () => {
    cy.filMandatoryFields(firstName, lastName, email.valido)
    cy.get('#agree').check()
    cy.percySnapshot()  
  })

  it('Updates agreement base on full name, tickets quantity and type', () => {
    cy.filMandatoryFields(firstName, lastName, email.valido)
    cy.get('#ticket-quantity').select('3')
    cy.get('#vip').check()
    cy.percySnapshot()
  })

  const succeesFullFormSubmition = 'Shows a sucsess message after form submission'
  it(succeesFullFormSubmition, () => {
    cy.filMandatoryFields(firstName, lastName, email.valido)
    cy.get('#agree').check()
    cy.get('.active').click()
    // Necessário para lidar com dados dinâmicos que geram falsos negativos nos testes
    cy.percySnapshot(
      succeesFullFormSubmition,
      {
        percyCSS: `.success span {display: none}`
      }
    ) 
  })
})