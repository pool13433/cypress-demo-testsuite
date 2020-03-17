
describe.skip('case succesfully', () => {
  it('visit and enter change pass data', () => {
    cy.visit('/change-password.html')
  })
  it('enter new pass data', () => {
    cy.get('#username').type('admin')
      .get('#newPassword').type('newPassword')
      .get('#confNewPassword').type('confNewPassword')
  })
  it('click change password', () => {
    cy.get('#login').submit()
  })
})



describe('case form empty', () => {

  it('visit and enter change pass data', () => {        
    cy.visit('/change-password.html')
  })
  it('should be alert form is empty', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`กรุณากรอก username หรือ password`)
    })
    .get('#login').submit()
  })

  it('should be alert lessthan 4 charater', () => {    
    cy.get('#username').type('admin')
      .get('#newPassword').type('123')
      .get('#confNewPassword').type('123')

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`กรุณากรอก password มากกว่า 4 ตัวอักษร`)
    }).get('#login').submit()
  })

  it('should be new password field same confirm new password field', () => {    
    cy.get('#username').type('admin')
      .get('#newPassword').type('1234')
      .get('#confNewPassword').type('12345')

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`กรุณากรอก New Password เป็นค่าเดียวกับ Confirm New Password`)
    }).get('#login').submit()
  })

})