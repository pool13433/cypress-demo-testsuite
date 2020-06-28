describe('ทดสอบจองตั๋วหนัง Major', () => {
  it('จอง ตั๋ว Major', () => {
      cy.visit('https://www.majorcineplex.com/th/main')
      .get('a').contains('Achoura')
      
      .closest('.interfacemovie').find('.blog-btnbuynow')
      .click()
  });
});

