const page = require('../pages/login-a11y')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

Then(/^valido se a tela esta de acordo com acessibilidade$/, () => {
    cy.wait(5000)
	cy.injectAxe();
    cy.checkA11y(null, {includedImpacts: ['critical', 'serious']});   
});

