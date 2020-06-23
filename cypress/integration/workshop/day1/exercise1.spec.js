/*
1. ทำการ inspect element ช่วยหาวิธีการ selector ของหน้า login นี้ /login.html
2. เขียน testscript select input UserName ,Password ทำได้กี่แบบ ต้องเขียนอย่างไร
3. ใส่ value UserName = "Cypress" ,Password = "Automated"
*/

describe('ฝึกการใช้งาน Selector DOM Element บนหน้าจอ', () => {
  it('', () => {
    cy.visit('/login.html')
    // เพิ่มโค๊ดของคุณที่นี่ ช่อง UserName
    .get().type()
    // เพิ่มโค๊ดของคุณที่นี่ ช่อง Password
    .get().type()
  })
})