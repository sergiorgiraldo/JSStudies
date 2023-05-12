describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('#t1')

    cy.get('[data-cy="main-button"]').click();

    cy.contains('DO IT').click();
  })
})