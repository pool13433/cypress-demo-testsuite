describe('ตัวอย่างโค๊ดการ Viewport Resolution', () => {
  /*beforeEach(() => {
    cy.viewport('iphone-4')
  });*/
  it('แสดงผลด้วย Iphone 4', () => {
    cy.viewport('iphone-4')
    cy.visit('https://getbootstrap.com/')
  })

  it('แสดงผลด้วย Iphone 5', () => {
    cy.viewport('iphone-5')
    cy.visit('https://getbootstrap.com/')
  })

  it('แสดงผลด้วย macbook 11', () => {
    cy.viewport('macbook-11')
    cy.visit('https://getbootstrap.com/')
  })
  it('แสดงผลด้วย samsung-note9', () => {
    cy.viewport('samsung-note9')
    cy.visit('https://getbootstrap.com/')
  })
  
})
