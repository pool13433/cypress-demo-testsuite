
describe('ตัวอย่างโค๊ดการ Catalog of Events', () => {
  it('การใช้งาน events ', () => {
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
  it('ค้นหา ตรวจสอบเคส จำนวนการ click alert จากหน้าจอ', () => {
    let countAlert = 0
    cy.visit('/window.html')
    // เพิ่มโค๊ดของคุณที่นี่
    cy.on('window:alert', () => {
      countAlert++;
      //cy.log('countAlert ::==',countAlert)
    })
    cy.get('#btnAlert').as('btnClick')
      for(let i = 0 ; i < 5 ; i++){
        cy.get('@btnClick').click()  
      }
      cy.then(() => {
        expect(countAlert).to.have.eq(5)
      })
  });
})

