/*
1. แก้ไขไฟล์ exercise2.spec.js ให้ทำงานสมบูรณ์
2. เขียน testscript ใช้คำสั่ง .get() .type() เพิ่มค่าลงใน form ให้ครบถ้วน
3. ใช้ commands (as ,check ,click ,contains ,get ,log ,not) มาประยุกต์เพิ่มเติมการทำงานของเคสข้างล่างนี้
    (เพิ่มเติมหากมีเวลาเหลือ)
*/

describe('ทดสอบการใช้งานร่วมกันของ command ต่าง ๆ', () => {
  it('เขียน testscript ใช้คำสั่ง .get() .type() เพิ่มค่าลงใน form ให้ครบถ้วน', () => {
    cy.visit('/register.html')   
    .get('#firstName').type('poolsawat')
    // เพิ่มโค๊ดของคุณที่นี่
    //.get()
  })
})