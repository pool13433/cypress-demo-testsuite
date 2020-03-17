

// register
describe('enter register infomation', () => {
  it('visit demo website', () => {
    cy.visit('/register.html')
  })
  it('enter form data', () => {
    cy.get('#firstName').type('Poolsawat')
      .get('#lastName').type('Api')
      .get('#age').type(20)
      .get('#phone').type('0800000000')
      .get('#address').type('111/11 Ladpao Jatujuk BKK 10900')
      .get('#email').type('poolsawatapin@gmail.com')
      .get('#male').select(true)
      .get('#occupation').select(1)
  })
})