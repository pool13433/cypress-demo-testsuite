describe('ตัวอย่างโค๊ดการ ทดลองการใช้งาน Command Should', () => {
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
      .get('@trThailand').find('td:nth-child(1)').next().should('have.text', 'Thailand')
      .get('@trThailand').find('td:eq(7)').should('have.text', '75')
  })
  it('ค้นหา ตรวจสอบเคส ตามที่คาดหวัง', () => {
    cy.visit('/table.html')
    // ตรวจสอบข้อความ "World" ในหน้าเว็บ
    cy.get('#covidState').contains('World')
    // ค้นหา Element ของ "Thailand" หาอันดับของ Thailand
    cy.get('#covidState').contains('Thailand').prev()
      .should('have.text', '93')
    // ค้นหา จำนวนประเทศทั้งหมดที่ติดเชื้อ Covid
    cy.get('#covidState>tbody>tr').not('tr:eq(0)').should('have.length', 215)
  });
})