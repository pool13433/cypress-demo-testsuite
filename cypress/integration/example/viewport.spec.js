describe('ตัวอย่างโค๊ดการ Viewport Resolution', () => {
  beforeEach(() => {
    cy.viewport('iphone-4')
  });
  it('แสดงผลด้วย Iphone', () => {      
      cy.visit('https://getbootstrap.com/')
  });
});