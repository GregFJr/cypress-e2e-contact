describe('Testing user signup', () => {
    it('Sould sign a user up and create account', () => {
        cy.visit('/');
        cy.contains('Contact List App').should('be.visible');
    })
})