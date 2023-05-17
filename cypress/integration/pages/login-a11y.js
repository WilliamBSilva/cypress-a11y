module.exports = {

  entidade: function () {
      return cy.get('#loginMain')
  },

  btnContinuar: function () {
    return cy.get('.flui-button')
  },

  usuario: function () {
    return cy.get('#loginUser')
  },

  senha: function () {
    return cy.contains('Senha')
  },
    
  usuarioHome: function () {
    return cy.get('.avatar-text-nome')
  },
}