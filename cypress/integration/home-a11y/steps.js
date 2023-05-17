Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

Then(/^valido se a Home esta de acordo com acessibilidade$/, () => {
	cy.injectAxe();
    cy.checkA11y();   
});

