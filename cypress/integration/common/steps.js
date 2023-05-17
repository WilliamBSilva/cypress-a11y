const page = require('../pages/login')

Given(/^que estou na tela do site Cielo$/, () => {
	cy.visit('/')
});

Then(/^realizo o login "([^"]*)", "([^"]*)" e "([^"]*)"$/, (ec, usuario, senha) => {
	page.entidade().type(ec)   
    page.btnContinuar().click()
    page.usuario().type(usuario)   
    page.senha().type(senha)
    page.btnContinuar().click()
    cy.wait(10000)
});

When(/^sou direcionado para home do site cielo$/, () => {
	return true;
});