describe('visit the website ', () => {
  it('passes', () => {
    cy.visit('/fundamentals')
    cy.get('h1').contains('Fundamentals')
    cy.get('[data-test="fundamentals-header"]').should('contain.text','Testing Fundamentals')
  })
  it('Accordion works correctly',()=>{
    cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
     cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
     cy.contains(/Your tests will exist in a describe block/i).should(
       "not.be.visible"
     );
  })
})
