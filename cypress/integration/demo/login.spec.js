describe('test login', () => {
  it('visit and enter login data', () => {
      cy
        .viewport(500,500)
        .visit('/login.html')
        .get('#username').type('admin').blur({ force: true })
        .get('#password').type('1234').focus().blur()  
  });
  it('should be submit form', () => {
      //cy.get('#login').submit()
  });
});