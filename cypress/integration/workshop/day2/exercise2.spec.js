/*
1. แก้ไข testscript ให้ทำงานได้ตามที่โจทย์กำหนด
2. เขียน testscript เมื่อกดปุ่ม Login และแสดง alert “Login Successfully.” โดยไม่ต้องกรอก username และ password (ไม่ต้องกรอกค่าก็ Login ผ่าน)
*/

describe('เขียน testscript จำลองการใช้งาน Spy & Stub', () => {
  it('เพิ่ม stub เพื่อทำให้การทำงาน ผ่าน แสดง "Login Successfully."', () => {
      cy.visit('/login.html',{
          onLoad(win){
            //เพิ่มโค๊ดของคุณที่นี่
          }
      })
      cy.on('window:alert', (str) => {
        expect(str).to.equal(`Login Successfully.`)
      })
      cy.get('#login').submit()
  });
});