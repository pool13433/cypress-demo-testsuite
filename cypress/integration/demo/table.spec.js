describe('case command with elements', () => {
  it('visit', () => {
      cy.visit('/table.html')
  });
  it('should be country size in table', () => {
    cy.get('#covidState > tbody > tr').should('be.have.length',183)
  });
  it('should be have Thailand in list', () => {
    cy.get('#covidState').contains('Thailand')
  });
  it('should be have death case is one case in thailand', () => {
    cy.get('#covidState > tbody > tr').eq(36).as('thai')
      cy.get('@thai').contains('Thailand')
        .get('@thai').find('td').should(($tds)=>{                              
          //console.log('$tds ::==',$tds)
          let textCase = $tds.eq(2).text()
          let textTodayCase = $tds.eq(3).text()
          let textDeath = $tds.eq(4).text()
          let textTodayDeath = $tds.eq(5).text()
          let textRecovers = $tds.eq(6).text()
          let textActive = $tds.eq(7).text()
          let textCritical = $tds.eq(7).text()
          console.log('textCase ::=='+textCase)
          console.log('textDeath ::=='+textDeath)
          expect(textDeath).to.be.eq('1')          
        })
  });

  it('should be a country with more than 1 thousand deaths', () => {
    cy.get('#covidState > tbody > tr').filter((idx,$tr)=>{      
      const text = Cypress.$($tr).find('td:eq(4)').text()
      //console.log('text ::==',text)
      return text.length >=5 
    }).should('be.have.length',3)
  });
});