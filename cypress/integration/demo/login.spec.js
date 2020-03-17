


describe('test login', () => {
  it('visit and enter login data', () => {
      cy.visit('/login.html')
        .get('#username').type('admin')
        .get('#password').type('1234')
  });
  it('', () => {
    
  });
});