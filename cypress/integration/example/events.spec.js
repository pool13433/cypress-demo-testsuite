
describe('Catalog of Events', () => {
  it('uncaught:exception', () => {
    // this event will automatically be unbound when this
    // test ends because it's attached to 'cy'
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('something about the error')      
      return true
    })

    cy.on('log:added', (msg) => {
      //console.log('msg ::==' + JSON.stringify(msg))
    })

    cy.on('window:confirm', val => {
      console.log('val ::==', val)
    })
    cy.on('window:alert', val => {
      console.log('val ::==', val)
    })

    // assume this causes an error
    //cy.get('button').click()
    //cy.log('000001').log('000002')
    cy.visit('/window.html')
      .get('button:eq(0)').click()
      .get('button:eq(1)').click()
      .get('button:eq(2)').click()
  })
})

