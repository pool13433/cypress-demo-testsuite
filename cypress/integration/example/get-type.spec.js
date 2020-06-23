describe('ทดสอบการใช้งานร่วมกันของ command ต่าง ๆ', () => {
  it('ใส่คำอธิบายสั้น ๆ ของ testcase ที่ 1', () => {
    cy.visit('/register.html')   
    .get('#firstName').type('poolsawat')
    .get('#lastName').type('apin')
    .log('enter value in elemtn [firstName , lastName]')
    .get('[name="gender"]#male').check()    
    .get('#occupation').select('Cook')
    .get('#phone').type('0878356866')
    .get('#email').type('poon_mp@hotmail.com')
    .get('#birthDate').type('1990-04-13')
    .get('#age').type('30')    
    .get('#address').type('กทม')
  })
})