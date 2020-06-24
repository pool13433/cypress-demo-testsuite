describe('ตัวอย่างโค๊ดการ เรียกใช้งาน spy - stub', () => {
    it('ทดสอบการดักจับ call functions ในหน้าเว็บ', () => {
        let countAlert = 0        
        cy.visit('/window.html',{
            onBeforeLoad(win){
                //cy.stub(win, 'prompt').returns('my custom message')
                cy.stub(win,'prompt',()=>{
                    return 'my custom message'
                }).as('stubPrompt')
                cy.spy(win,'alert',()=>{
                    countAlert++
                }).as('stubAlert')                
            },
            onLoad(win){
                cy.stub(win,'confirmFunction',()=>{
                    cy.log('called custom function confirmFunction')
                })
            }
        })

        

        cy.get('#btnPromt').click()
        cy.get('#btnAlert').click()
        .then(()=>{
            cy.log('countAlert ::==',countAlert)
        })
        .get('@stubPrompt').should('is.called')
        .get('@stubPrompt').should('have.returned','my custom message')
        .get('@stubAlert').should('have.callCount',1)
        .get('@stubAlert').should('be.calledOnce')
    });
});

//https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions