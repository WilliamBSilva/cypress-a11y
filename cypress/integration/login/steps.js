const page = require('../pages/login')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

Then(/^valido o nome do usuario na home "([^"]*)"$/, (nome) => {
	page.usuarioHome()
      .invoke('text') // retorna o valor de texto de um elemento
      .should('contains', nome)
});
