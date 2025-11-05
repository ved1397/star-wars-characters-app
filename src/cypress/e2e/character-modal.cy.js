describe('Character Modal', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('input[type="email"]').type('luke@skywalker.com');
    cy.get('input[type="password"]').type('force123');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome, Luke Skywalker').should('be.visible');
  });

  it('opens modal with correct character details', () => {
    cy.contains('Luke Skywalker').click();

    cy.get('.fixed').within(() => {
      cy.contains('Luke Skywalker').should('be.visible');
      cy.contains('1.72 m').should('be.visible');
      cy.contains('77 kg').should('be.visible');
      cy.contains('19BBY').should('be.visible');
      cy.contains('5').should('be.visible'); // films
      cy.contains('Tatooine').should('be.visible');
    });
  });
});