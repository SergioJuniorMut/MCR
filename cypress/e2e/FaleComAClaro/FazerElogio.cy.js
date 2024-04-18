/// <reference types="Cypress" />
const el = require('/cypress/support/variables.js').ELEMENTS

describe('Fale com a Claro',()=>{
    beforeEach(()=>{
    cy.fetch()
    cy.visit("/")
    cy.loginPage(Cypress.env('user'), Cypress.env('password'))
    cy.FazerElogio()
 })

    it('Fale com a Claro - Fazer elogio',()=>{
        //Asseriva fraselogias
        cy.get(el.titulo)
          .should('contain', 'Ficamos felizes em ouvir você')
        cy.get(el.subTitulo)
          .should('contain' , 'Vamos ler seu elogio e enviar uma resposta para o e-mail')
        cy.get(el.alterarEmail)
          .should('contain' , 'Alterar e-mail de cadastro')  
        cy.get(el.nome)
          .should('contain' , 'CLARO S.A.')
        cy.get(el.cpfCnpj)
          .should('contain' , '40.432.544/0860-0')
        cy.get(el.mensagem)
           .should('contain','Mensagem')
        //Digitar Sua mensagem
        cy.get('#textarea').type('TESTES de Automação')
        //Clicar no botão Enviar
        cy.get(el.enviar)
          .should('be.visible')
          .click({timeout:10000})
        //if para validação de sucesso ou erro
        cy.wait(20000)
        cy.get(el.sucesso , { timeout: 30000 })
          .if()
          .then(() => {
           cy.contains(el.sucesso ,'Sua mensagem foi enviada com sucesso!')  
        })
          .else()
          .then(() => {
        cy.get(el.Ops)
          .should('contain', 'Oops! Não foi possível enviar sua mensagem.')
          .get(el.mensagemError)
          .should('contain', 'Você já enviou uma mensagem sobre este assunto, estamos analisando e logo retornaremos com uma resposta. Por favor, aguarde antes de enviar uma nova mensagem. Agradecemos sua compreensão.')    
        })
      })
})