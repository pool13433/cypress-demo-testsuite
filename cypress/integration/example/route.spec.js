const api = 'https://coronavirus-19-api.herokuapp.com/countries'

describe('ตัวอย่างโค๊ดการใช้ Route', () => {
  it('ตัวอย่าง Route', () => {
    cy.server()
    cy.route(api, [{ item: 'Book 1' }, { item: 'Book 2' }]).as('getCovid')
    
    cy.visit('/table.html')
    
    cy.wait('@getCovid',{timeout : 10000})
      .its('url').should('include', '/search?query=Book')

    cy.get('#results')
      .should('contain', 'Book 1')
      .and('contain', 'Book 2')
  })
});