describe('Jquery ', () => {
  it('Modified DOM', () => {
      cy.visit('/elements.html')
      .get('#text-disabled').then(($input)=>{
        $input.removeAttr('disabled')
      })
      .then(()=>{
        cy.get('#text-disabled').type('xxxxxxxxx')
      })
      .get('#email-readonly').then(($input)=>{
        $input.removeAttr('readonly')
      }).then(()=>{
        cy.get('#email-readonly').type('yyyyyyyy')
      })
      .get('#hidden').then(($input)=>{
        $input.attr('type','text')
      })
  });
});