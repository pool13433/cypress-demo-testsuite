describe('ตัวอย่างโค๊ดการใช้ External libraries && plugins ทำงานร่วมกับ Cypress', () => {
    it('เขียน assertions ตรวจสอบ วันเดือนปีปัจจุบัน อดีต และ อนาคต', () => {
       expect('2020').to.have.equal(Cypress.moment().format('YYYY'));
       expect('2010').to.have.equal(Cypress.moment().subtract(10,'year').format('YYYY'));
       expect('2050').to.have.equal(Cypress.moment().add(30,'year').format('YYYY'));
    });
    
});