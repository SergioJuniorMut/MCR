/// <reference types="Cypress" />
const el = require('/cypress/support/variables.js').ELEMENTS

describe('Fale com a Claro', () => {
    beforeEach(() => {
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))
        cy.Faturas()
    })

    it('Fale com a Claro - Faturas - Segunda via', () => {
         //Assertiva Segunda via de fatura
         cy.get('.subcategory-list-container > :nth-child(1) > .item-info > h3')
           .should('contain', '2ª via de fatura')
           .and('be.visible')
         //Clicar na opção segunda via de fatura
         cy.get('.subcategory-list-container > :nth-child(1) > .mdn-Icon-direita')
           .click()
         //Validação da URL   
         cy.url()
           .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/financeiro/fatura-interativa') 
    })

    it('Fale com a Claro - Faturas - Alterar forma de recebimento', () => {
         //Assertiva Alterar forma de recebimento
         cy.get('.subcategory-list-container > :nth-child(2) > .item-info > h3')
           .should('contain', 'Alterar forma de recebimento')
         //Clicar em Alterar forma de recebimento
         cy.get('.subcategory-list-container > :nth-child(2) > .mdn-Icon-direita')
           .click()
         //Validação da URL   
         cy.url()
           .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/financeiro/fatura-digital') 
    })

    it('Fale com a Claro - Faturas - Alterar data de vencimento', () => {
         //Assertiva Faturas - Alterar data de vencimento
         cy.get('.subcategory-list-container > :nth-child(3) > .item-info > h3')
           .should('contain', 'Alterar data de vencimento')
         //Clicar em Alterar data de vencimento
         cy.get('.subcategory-list-container > :nth-child(3) > .mdn-Icon-direita')
           .click()
         //Validação da URL   
         cy.url()
           .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/financeiro/data-de-vencimento') 
    })

    it('Fale com a Claro - Faturas - Alterar forma de pagamento', () => {
         //Assertiva Alterar forma de pagamento
         cy.get(':nth-child(4) > .item-info > h3')
           .should('contain', 'Alterar forma de pagamento')
         //Clicar em Alterar forma de pagamento
         cy.get(':nth-child(4) > .mdn-Icon-direita')
           .click()
         //Validação da URL   
         cy.url()
           .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/financeiro/forma-de-pagamento') 
    })

    it('Fale com a Claro - Faturas - Promessa de pagamento ', () => {
         //Assertiva Promessa de pagamento
         cy.get(':nth-child(5) > .item-info > h3')
           .should('contain', 'Promessa de pagamento')
         //Clicar em Promessa de Pagamento
         cy.get(':nth-child(5) > .mdn-Icon-direita')
           .click()
         //Validação da URL   
         cy.url()
           .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/financeiro/promessa-pagamento') 
    })

    it('Fale com a Claro - Renegocie sua fatura', () => {
         //Assertiva Renegocie sua fatura
         cy.get(':nth-child(6) > .item-info > h3')
           .should('contain', 'Renegocie sua fatura')
         //Clicar em Renegocie sua fatura
         cy.get(':nth-child(6) > .mdn-Icon-direita')
           .click()
         //Validação da URL   
         cy.url()
           .should('be.equal', 'https://netcombo.negociafacil.com.br/') 
    })

    it('Pedir informação', () => {
        //Assertiva Pedir informação
        cy.get(':nth-child(1) > .item-info > .title')
          .should('contain', 'Pedir informação')
        //Clicar em Pedir informação
        cy.get('.other-options-list-container > :nth-child(1) > .mdn-Icon-direita')
          .click()
        //Assertiva O que você gostaria de saber?
        cy.get('.form-header > .mdn-Heading')
          .should('contain', 'O que você gostaria de saber?')
        //Assertiva Assunto
        cy.get('#select-input-subject > .title')
          .should('contain', 'Assunto')
        //Selecionar Forma de pagamento
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Forma de pagamento')
          .should('have.value', '3')          
        //Selecionar opção TV
        cy.get('#select-input-product > div > select')
          .select('TV')
          .should('have.value', '55')
        //Assertiva mensagem
        cy.get('.textarea-input-container > .title')
          .should('contain', 'Mensagem')
        //Digitar Sua Mensagem
        cy.get('#textarea')
          .type('TESTE de Automação')
        //Clicar em Enviar
        cy.get('#btnSendForm').should('be.visible')
          .click({ timeout: 10000 })
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

    it('Fazer Solicitação', () => {
        //Assertiva Fazer solicitação
        cy.get(':nth-child(2) > .item-info > .title')
          .should('contain', 'Fazer solicitação')
        //Clicar em Fazer solicitação
        cy.get('.other-options-list-container > :nth-child(2) > .mdn-Icon-direita')
          .click()
        //Assertiva Assunto
        cy.get('#select-input-subject > .title')
          .should('contain', 'Assunto')
        //Selecionar opção Atendimento
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Informar pagamento')
          .should('have.value', '4')
        //Assertiva Deseja informar pagamento para normalizar um serviço que está reduzido ou que foi desabilitado?
        cy.get('body > main > section > div > div > div.mdn-Col-xs-12.mdn-Col-md-9.divider-left-space > div.form-step-container > div > form > div.form-container > div > p')
          .should('contain', 'Deseja informar pagamento para normalizar um serviço que está reduzido ou que foi desabilitado?')
        //Assertiva Sim, preciso normalizar meus serviços
        cy.get('body > main > section > div > div > div.mdn-Col-xs-12.mdn-Col-md-9.divider-left-space > div.form-step-container > div > form > div.form-container > div > div.margin-spacing-radio > div > div')
          .should('contain', 'Sim, preciso normalizar meus serviços') 
        //Assertiva Não, apenas informar pagamento de uma fatura
        cy.get('body > main > section > div > div > div.mdn-Col-xs-12.mdn-Col-md-9.divider-left-space > div.form-step-container > div > form > div.form-container > div > div.margin-spacing-radio-second > div > div')
          .should('contain', 'Não, apenas informar pagamento de uma fatura')                
        //Clicar em Solicitar
        cy.get('#btnRequestForm')
          .should('contain', 'Solicitar')
          .click()     
        //Validação da URL   
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/financeiro/promessa-pagamento')    
    })

    it('Fazer reclamação',()=>{
        //Assertiva Fazer Reclamação
        cy.get('.other-options-list-container > :nth-child(3)')
          .should('contain', 'Fazer reclamação')
        //Clicar em Fazer reclamação
        cy.get('.other-options-list-container > :nth-child(3) > .mdn-Icon-direita')
          .click()
        //Assertiva Assunto
        cy.get('#select-input-subject > .title')
          .should('contain', 'Assunto')
        //Selecionar opção Atendimento
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Promessa de pagamento')
          .should('have.value', '6')
        //Assertiva Deseja fazer promessa de pagamento para normalizar um serviço que está reduzido ou que foi desabilitado?
        cy.get('body > main > section > div > div > div.mdn-Col-xs-12.mdn-Col-md-9.divider-left-space > div.form-step-container > div > form > div.form-container > div > p')
          .should('contain', 'Deseja fazer promessa de pagamento para normalizar um serviço que está reduzido ou que foi desabilitado?')
        //Assertiva Sim, preciso normalizar meus serviços
        cy.get('body > main > section > div > div > div.mdn-Col-xs-12.mdn-Col-md-9.divider-left-space > div.form-step-container > div > form > div.form-container > div > div.margin-spacing-radio > div > div')
          .should('contain', 'Sim, preciso normalizar meus serviços') 
        //Assertiva Não, mas quero falar sobre promessa de pagamento
        cy.get('body > main > section > div > div > div.mdn-Col-xs-12.mdn-Col-md-9.divider-left-space > div.form-step-container > div > form > div.form-container > div > div.margin-spacing-radio-second > div > div')
          .should('contain' , 'Não, mas quero falar sobre promessa de pagamento')
        //Click no checkbox
        cy.get('body > main > section > div > div > div.mdn-Col-xs-12.mdn-Col-md-9.divider-left-space > div.form-step-container > div > form > div.form-container > div > div.margin-spacing-radio-second > div > label')
          .click()
        //Assertiva Produto
        cy.get('#select-input-product> p')
          .should('contain', 'Produto')
        //Selecionar opção TV
        cy.get('#select-input-product > div > select')
          .select('TV')
          .should('have.value', '55')
        //Assertiva mensagem
        cy.get('.textarea-input-container > .title')
          .should('contain', 'Mensagem')
        //Digitar Sua Mensagem
        cy.get('#textarea')
          .type('TESTE de Automação')
        //Clicar em Enviar
        cy.get(el.enviar).should('be.visible')
          .click({ timeout: 10000 })                  
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