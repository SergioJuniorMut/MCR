/// <reference types="Cypress" />
const el = require('/cypress/support/variables.js').ELEMENTS

describe('Fale com a Claro', () => {
    beforeEach(() => {
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))
        cy.SuporteTecnico()
    })

    it('Fale com a Claro - Suporte técnico - Preciso de ajuda', () => {
        //Asseertiva Preciso de ajuda
        cy.get('.subcategory-list-container > :nth-child(1) > .item-info > h3')
          .should('contain', 'Preciso de ajuda')
        //Clicar em Preciso de ajuda
        cy.get('.subcategory-list-container > :nth-child(1) > .mdn-Icon-direita')
          .click()
        //Validação da URL
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/?diagnostic=true')  
    })

    it('Fale com a Claro - Suporte técnico - Configurações Wi-Fi', () => {
        //Assertiva Configurações Wi-Fi
        cy.get('.subcategory-list-container > :nth-child(2) > .item-info > h3')
          .should('contain','Configurações Wi-Fi')
        //Clicar em Configurações Wi-Fi
        cy.get('.subcategory-list-container > :nth-child(2) > .mdn-Icon-direita')
          .click()
        //Validação da URL
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/suporte/senha-wifi-casa')  
    })

    it('Fale com a Claro - Suporte técnico - Histórico de visitas técnicas',()=>{
        //Assertiva Histórico de visitas técnicas
        cy.get('.subcategory-list-container > :nth-child(3) > .item-info > h3')
          .should('contain','Histórico de visitas técnicas')
        // Clicar Histórico de visitas técnicas
        cy.get('.subcategory-list-container > :nth-child(3) > .mdn-Icon-direita')
          .click()
        //Validação da URL
        cy.url()
         .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/suporte/visita-tecnica')  
    })

    it('Fale com a Claro - Suporte técnico - Pedir informação',()=>{
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
        cy.get(el.assunto)
          .should('contain', 'Assunto')
        //Selecionar Rede e Cobertura
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Rede e Cobertura')
          .should('have.value', '1')
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
        cy.get(el.enviar)
          .should('be.visible')
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

    it('Fale com a Claro - Suporte técnico - Fazer solicitação',()=>{
        //Assertiva Fazer solicitação
        cy.get(':nth-child(2) > .item-info > .title')
          .should('contain', 'Fazer solicitação')
        //Clicar em Fazer solicitação
        cy.get('.other-options-list-container > :nth-child(2) > .mdn-Icon-direita')
          .click()
        //Assertiva O que você gostaria de saber?
        cy.get('.form-header > .mdn-Heading')
          .should('contain', 'O que você gostaria de solicitar?')
        //Assertiva Assunto
        cy.get(el.assunto)
          .should('contain', 'Assunto')
        //Selecionar Visita Técnica
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Visita Técnica')
          .should('have.value', '3')
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
        cy.get(el.enviar)
          .should('be.visible')
          .click({ timeout: 10000 })
        //if para validação de sucesso ou erro
        cy.wait(20000)
        cy.get(el.sucesso , { timeout: 30000 })
          .if()
          .then(() => {
           cy.contains(el.sucesso , 'Sua mensagem foi enviada com sucesso!')  
        })
          .else()
          .then(() => {
        cy.get(el.Ops)
          .should('contain', 'Oops! Não foi possível enviar sua mensagem.')
          .get(el.mensagemError)
          .should('contain', 'Você já enviou uma mensagem sobre este assunto, estamos analisando e logo retornaremos com uma resposta. Por favor, aguarde antes de enviar uma nova mensagem. Agradecemos sua compreensão.')    
        })            
    })

    it('Fale com a Claro - Suporte técnico - Fazer reclamação',()=>{
        //Assertiva Fazer Reclamação
        cy.get(':nth-child(3) > .item-info > .title')
          .should('contain', 'Fazer reclamação');
        //Clicar em Fazer reclamação
        cy.get('.other-options-list-container > :nth-child(3) > .mdn-Icon-direita')
          .click()
        //Assertiva Assunto
        cy.get(el.assunto)
          .should('contain', 'Assunto')
        //Selecionar Suporte técnico
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Suporte técnico')
          .should('have.value', '2')
        //Clicar no Solicitar  
        cy.get('#btnRequestForm')
          .should('contain' , 'Solicitar')
          .click()  
        //Validação da URL   
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/?diagnostic=true&loginforce=true')       
    })
})