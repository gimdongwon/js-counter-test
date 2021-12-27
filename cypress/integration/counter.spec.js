describe('example counter app', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('displays item by default', () => {
    cy.get('#value').invoke('text').should('eq', 0);
  });
});
