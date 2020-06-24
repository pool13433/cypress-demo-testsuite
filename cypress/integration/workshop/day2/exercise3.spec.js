/*
1. แก้ไข testscript ให้ทำงานได้ตามที่โจทย์กำหนด
2. เขียน assertions ตรวจสอบ เงื่อนไขเหล่านี้ /index.html
3. วันเดือนปี อดีต 15 ปี 
4. วันเดือนปี ปัจจุบัน 
5. วันเดือนปี อนาคต 20 ปี
*** 
    invoke : command ใช้สำหรับ call function ก่อนหน้าของ Selector นั้น (call function ่jQuery)
    trigger : command ใช้สำหรับ call javascript event ต่าง ๆ เช่น change ,click ,select ,...

*/
describe('เขียน testscript ใช้งาน MomentJs', () => {
  it('เขียน assertions ตรวจสอบ เงื่อนไข อดีต (15) ,ปัจจุบัน และ อนาคต (20)', () => {      
      cy.visit('/index.html')
      // วันเดือนปี ปัจจุบัน
      //เพิ่มโค๊ดของคุณที่นี่

      // วันเดือนปี ย้อนอดีต 15 ปี 
      //เพิ่มโค๊ดของคุณที่นี่

      // วันเดือนปี อนาคต 20 ปี 
      //เพิ่มโค๊ดของคุณที่นี่
      
  });
});