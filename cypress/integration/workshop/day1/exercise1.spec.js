/*
1. ทำการ inspect element ช่วยหาวิธีการ selector ของหน้า login นี้ /login.html
2. เขียน testscript select input UserName ,Password ทำได้กี่แบบ ต้องเขียนอย่างไร
3. ใส่ value UserName = "Cypress" ,Password = "Automated"
*/

describe('ฝึกการใช้งาน Selector DOM Element บนหน้าจอ', () => {
  it('selector by id', () => {
    cy.visit('/login.html')
    // เพิ่มโค๊ดของคุณที่นี่ ช่อง UserName
    .get('#username').type('Cypress')
    // เพิ่มโค๊ดของคุณที่นี่ ช่อง Password
    .get('#password').type('Automated')
  })


  it('selector by name', () => {
    cy.visit('/login.html')
    // เพิ่มโค๊ดของคุณที่นี่ ช่อง UserName
    .get('[name="username"]').type('Cypress')
    // เพิ่มโค๊ดของคุณที่นี่ ช่อง Password
    .get('[name="password"]').type('Automated')
  })

  it('selector by tagName', () => {
    cy.visit('/login.html')
    // เพิ่มโค๊ดของคุณที่นี่ ช่อง UserName
    .get('input:eq(0)').type('Cypress')
    // เพิ่มโค๊ดของคุณที่นี่ ช่อง Password
    .get('input:eq(1)').type('Automated')
  })

  it('selector by attrs by type = text', () => {
    cy.visit('/login.html')
    // เพิ่มโค๊ดของคุณที่นี่ ช่อง UserName
    .get('[type="text"]:eq(0)').type('Cypress')
    // เพิ่มโค๊ดของคุณที่นี่ ช่อง Password
    .get('[type="text"]:eq(1)').type('Automated')
  })
})