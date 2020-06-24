describe('ตัวอย่างโค๊ดการ Testscript การ Selector DOM Element ด้วยวิธีการต่าง ๆ', () => {
  it('selector by ID=>#', () => {
    cy.visit('/register.html')
    .get('#firstName').type('firstName')
    .get('#lastName').type('lastName')
  });
  it('selector by ClassName=>.cssClassName', () => {
    cy.visit('/register.html')
    .get('.firstName').type('firstName')
    .get('.lastName').type('lastName')
  });
  it('selector by Attribute=>[data-attr=""]', () => {
    cy.visit('/register.html')
    .get('[data-attr="firstName"]').type('firstName')
    .get('[data-attr="lastName"]').type('lastName')
    .log('[data-attr="firstName"]')
    .get('[name="firstName"]').clear().type('firstName')
    .get('[name="lastName"]').clear().type('lastName')
    .log('[data-attr="firstName"]')
  });
  it('selector by tag=>h1 ,p ,span', () => {
    cy.visit('/register.html')
    .get('input:eq(0)').type('firstName')
    .get('input:eq(1)').type('lastName')
  });
});