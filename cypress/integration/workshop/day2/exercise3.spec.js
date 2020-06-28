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
      const now = Cypress.moment().format('DD/MM/YYYY')
      cy.log('now ::==',now)
      // วันเดือนปี ปัจจุบัน
      //เพิ่มโค๊ดของคุณที่นี่
      expect(now).to.have.eq('28/06/2020')

      // วันเดือนปี ย้อนอดีต 15 ปี 
      const ago = Cypress.moment().subtract(15,'year').format('DD/MM/YYYY')
      cy.log('ago ::==',ago)
      //เพิ่มโค๊ดของคุณที่นี่
      expect(ago).to.have.eq('28/06/2005')

      //expect(now).to.have.eq('28/06/2005')

      
      
      //.get('#distanceYear').invoke('val',20).trigger('change')
      /*.then(()=>{
          const partDate = Cypress.$('#pastDate').text()
          const featureDate = Cypress.$('#futureDate').text()
          cy.log('partDate ::==',partDate)
          cy.log('featureDate ::==',featureDate)
          const _partDate = Cypress.moment(partDate,'DD/MM/YYYY HH:mm:ss')
          const _futureDate = Cypress.moment(featureDate,'DD/MM/YYYY HH:mm:ss')
          console.log('_partDate ::==',_partDate)
          console.log('_futureDate ::==',_futureDate)
          cy.log('diff ::==',_futureDate.diff(_partDate,'months'))
      })*/

      // วันเดือนปี อนาคต 20 ปี 
      const future = Cypress.moment().add(20,'year').format('DD/MM/YYYY')
      cy.log('future ::==',future)
      expect(future).to.contains('2040')
      //เพิ่มโค๊ดของคุณที่นี่
      
  });
});