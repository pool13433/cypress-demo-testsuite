

  describe('enter register infomation case reset form', () => {

    it('Check Alert', () => {
        cy.visit('/window.html')
        cy.get('button.ui:nth-child(1)').click();
        cy.on('window:alert', (str) => {
            expect(str.trim()).to.equal('Alert!!')
        })
        cy.get('#TextOut').contains('Alert Click!!')
    })

    it('Check Prompt', () => {
        cy.visit('/window.html')
        cy.window().then(win => {
            /* In case of writing something in prompt, use stub and then click on button on which prompt opens */
            cy.stub(win, 'prompt').returns('Prompt Click!!!');
            cy.get('button.ui:nth-child(2)').click();
        });
        cy.get('#TextOut').contains('Prompt Click!!!')
    });

    it('Check Confirm True', () => {
        cy.visit('/window.html')
        cy.get('button.ui:nth-child(3)').click();
        cy.on('window:confirm', (str) => {
          return true;
        })
        cy.get('#TextOut').contains('Confirm')
    })

    it('Check Confirm False', () => {
      cy.visit('/window.html')
      cy.get('button.ui:nth-child(3)').click();
      cy.on('window:confirm', (str) => {
        return false
      })
      cy.get('#TextOut').contains('No')
  })


  

  
  })