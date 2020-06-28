/*
1. แก้ไข testscript 
2. สร้าง Custom commands ของคุณเอง
3. ตรวจสอบข้อความ “Course Cypress Automated Testing @PTT” ที่ต้องมีการตรวจสอบทุก ๆ ครั้งที่เข้าแต่ละเมนู
4. โดยสร้าง command ชื่อ shouldBeTitle ที่รับ args ที่ชื่อว่า title
*/

//เพิ่มโค๊ดของคุณที่นี่


Cypress.Commands.add('customMethod2', () => {
  cy.get(selector).contains(title)      
})

Cypress.Commands.add('customMethod2', () => {
  cy.get(selector).contains(title)      
})


describe('เขียน testscript ใช้งาน Custom command', () => {
  it('ตรวจสอบข้อความ สำคัญ "Course Cypress Automated Testing @PTT" ก่อนการตรวจสอบเคสถัดไป', () => {      
      cy.visit('/index.html').shouldBeTitle('h2','ourse Cypress Autom')      
      
      // ตรวจสอบหน้า /register.html
      //เพิ่มโค๊ดของคุณที่นี่
      cy.visit('/login.html').shouldBeTitle('h2','ourse Cypress Autom')      

      // ตรวจสอบหน้า /window.html
      //เพิ่มโค๊ดของคุณที่นี่
      
      // ตรวจสอบหน้า /login.html
      //เพิ่มโค๊ดของคุณที่นี่
  });
});