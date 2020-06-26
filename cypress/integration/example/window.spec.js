describe('ตัวอย่างโค๊ดการ การ ตรวจสอบ WIndow Object', () => {
    it('ทดสอบเปิด และ ปิด Window Print', () => {
        /*cy.on('window;print',()=>{
            console.log('window;print')
        })*/
        cy.visit('/window.html', {
            onLoad(win) {
                cy.stub(win, 'print', (win) => {
                }).as('stubPrinter')         
            }
        })
            .get('#btnPrint').click()
            .get('@stubPrinter').should('have.callCount',1)
    });
});