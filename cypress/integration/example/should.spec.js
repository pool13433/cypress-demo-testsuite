describe('ทดลองการใช้งาน Command Should', () => {
  it('should be World word is Visibile', () => {
    cy.visit('/table.html')
      .get('#covidState').as('tableCovid')
      .get('@tableCovid').should('be.visible')
  })
  it('should be contains Expect Words', () => {
    cy.visit('/table.html')
      .get('#covidState').as('tableCovid')
      .get('@tableCovid').should($covid => {
        expect($covid).to.contain('USA')
        expect($covid).to.contain('Thailand')
      })
      .get('@tableCovid').find('tr:nth-child(92)').as('trThailand')
      .get('@trThailand').find('td:nth-child(1)').next().should('have.text','Thailand')
      .get('@trThailand').find('td:eq(7)').should('have.text','75')
  })
})