

Cypress.Commands.add('visitAndEnter', () => {
  cy.visit('/register.html')
  cy.get('#firstName').type('Poolsawat')
    .get('#lastName').type('Api')
    .get('#age').type(20)
    .get('#phone').type('0800000000')
    .get('#address').type('111/11 Ladpao Jatujuk BKK 10900')
    .get('#email').type('poolsawatapin@gmail.com')
    .get('#male').check()
    .get('#occupation').select('Driver')
})

// register
describe('enter register infomation case success', () => {

  it('visit demo website & enter register form', () => {
    cy.visitAndEnter()
  })

  it('click submit button', () => {
    cy.get('#register').click()
  })

})

describe('enter register infomation case reset form', () => {

  it('visit demo website & enter register form', () => {
    cy.visitAndEnter()
  })

  it('click clear button for reset form', () => {
    cy.get('#clear').click()
  })

})
