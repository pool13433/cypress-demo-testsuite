describe('ตัวอย่างโค๊ดการ screencapture ui screen', () => {
    it.skip('screencapture page /index.html', () => {
        cy
            .visit('/register.html').screenshot('screenshot-register',{ x: 20, y: 20, width: 400, height: 300 })
            .visit('/window.html')
            .get('#btnAlert').first().screenshot('screenshot-window')
            .visit('/login.html').screenshot('screenshot-login')
            .visit('/change-password.html').screenshot('screenshot-change-password')
            .visit('/table.html').screenshot('screenshot-table')

    });
    it('screen capture page window.html ของปุ่มที่ต้องการเท่านั้น', () => {
        cy.visit('/window.html')
        .get('[data-tab="first"]',{timeout : 2000}).should('be.visible')
        .get('.segment.active')
        .screenshot('window-buttons-screencature',{
            onBeforeScreenshot ($el){
                $el.find('#btnPromt').hide()
            }
        })
    });
});