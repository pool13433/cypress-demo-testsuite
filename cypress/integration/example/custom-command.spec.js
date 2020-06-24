
Cypress.Commands.add('myCommand1',()=>{
    cy.log('command1')
})


Cypress.Commands.add('myCommand2',(arg1)=>{
    cy.log('command2 ::== arg1 ::=='+arg1)
})

Cypress.Commands.add('myCommand3',(arg1,arg2)=>{
    cy.log('command3 ::== arg1 ::=='+arg1+"  arg2 ::=="+arg2)
})


describe('ตัวอย่างโค๊ดการ การสร้าง Command ใช้เอง', () => {
    it('ทดสอบเรียกใช้งาน  custom command case ที่ 1', () => {
        cy.myCommand1()
        .myCommand2('Hello')
        .myCommand3('Hello','Cypress')
    });

    it('ทดสอบเรียกใช้งาน  custom command case ที่ 2', () => {
        cy.myCommand1()
        .myCommand2('Hello')
        .myCommand3('Hello','Cypress')
    });
});