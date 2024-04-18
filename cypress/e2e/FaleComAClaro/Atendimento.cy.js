/// <reference types="Cypress" />
const el = require('/cypress/support/variables.js').ELEMENTS

describe('Fale com a Claro',()=>{
    beforeEach(()=>{
    cy.fetch()
    cy.visit("/")
    cy.loginPage(Cypress.env('user'), Cypress.env('password'))
    cy.Atendimento()
})

    it('Fale com a Claro - Atendimento - Dificuldade com Site/Aplicativo da Empresa',()=>{
        //Assertiva - Fraselogias
        cy.get(el.titulo)
          .should('contain', 'O que você gostaria de solicitar?')
        cy.get(el.subTitulo)
          .should('contain' , 'Vamos ler sua solicitação e te enviar uma resposta no e-mail')
        cy.get(el.alterarEmail)
          .should('contain' , 'Alterar e-mail de cadastro')  
        cy.get(el.nome)
          .should('contain' , 'CLARO S.A.')
        cy.get(el.cpfCnpj)
          .should('contain' , '40.432.544/0860-0')
        cy.get(el.assunto)
          .should('contain','Assunto')
        //Selecionar Dificuldade com Site/Aplicativo da Empresa
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Dificuldade com Site/Aplicativo da Empresa')
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

     it('Fale com a Claro - Atendimento - Indisponibilidade ou dificuldade com canal de atendimento',()=>{
        //Assertiva - Fraselogias
        cy.get(el.titulo)
          .should('contain', 'O que você gostaria de solicitar?')
        cy.get(el.subTitulo)
          .should('contain' , 'Vamos ler sua solicitação e te enviar uma resposta no e-mail')
        cy.get(el.alterarEmail)
          .should('contain' , 'Alterar e-mail de cadastro')  
        cy.get(el.nome)
          .should('contain' , 'CLARO S.A.')
        cy.get(el.cpfCnpj)
          .should('contain' , '40.432.544/0860-0')
        cy.get(el.assunto)
          .should('contain','Assunto')
        //Selecionar Indisponibilidade ou dificuldade com canal de atendimento
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Indisponibilidade ou dificuldade com canal de atendimento')
          .should('have.value', '2')
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

    it('Fale com a Claro - Atendimento - Não recebeu retorno do protocolo no prazo',()=>{
        //Assertiva - Fraselogias
        cy.get(el.titulo)
          .should('contain', 'O que você gostaria de solicitar?')
        cy.get(el.subTitulo)
          .should('contain' , 'Vamos ler sua solicitação e te enviar uma resposta no e-mail')
        cy.get(el.alterarEmail)
          .should('contain' , 'Alterar e-mail de cadastro')  
        cy.get(el.nome)
          .should('contain' , 'CLARO S.A.')
        cy.get(el.cpfCnpj)
          .should('contain' , '40.432.544/0860-0')
        cy.get(el.assunto)
          .should('contain','Assunto')
       //Selecionar Não recebeu retorno do protocolo no prazo
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Não recebeu retorno do protocolo no prazo')
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
        cy.get(el.enviar).should('be.visible')
          .click({ timeout: 10000 })
       //if para validação de sucesso ou erro
        cy.wait(20000)
        cy.get(el.sucesso , { timeout: 30000 })
          .if()
          .then(() => {
           cy.contains('.header-container','Sua mensagem foi enviada com sucesso!')  
        })
          .else()
          .then(() => {
        cy.get(el.Ops)
          .should('contain', 'Oops! Não foi possível enviar sua mensagem.')
          .get(el.mensagemError)
          .should('contain', 'Você já enviou uma mensagem sobre este assunto, estamos analisando e logo retornaremos com uma resposta. Por favor, aguarde antes de enviar uma nova mensagem. Agradecemos sua compreensão.')    
       })                                
    }) 

    it('Fale com a Claro - Atendimento - Problemas com recebimento de protocolo',()=>{
        //Assertiva - Fraselogias
        cy.get(el.titulo)
          .should('contain', 'O que você gostaria de solicitar?')
        cy.get(el.subTitulo)
          .should('contain' , 'Vamos ler sua solicitação e te enviar uma resposta no e-mail')
        cy.get(el.alterarEmail)
          .should('contain' , 'Alterar e-mail de cadastro')  
        cy.get(el.nome)
          .should('contain' , 'CLARO S.A.')
        cy.get(el.cpfCnpj)
          .should('contain' , '40.432.544/0860-0')
        cy.get(el.assunto)
          .should('contain','Assunto')
       //Selecionar Problemas com recebimento de protocolo
       cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
         .select('Problemas com recebimento de protocolo')
         .should('have.value', '4')
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

    it('Fale com a Claro - Atendimento - Suporte técnico',()=>{
       //Assertiva - Fraselogias
       cy.get(el.titulo)
         .should('contain', 'O que você gostaria de solicitar?')
       cy.get(el.subTitulo)
         .should('contain' , 'Vamos ler sua solicitação e te enviar uma resposta no e-mail')
       cy.get(el.alterarEmail)
         .should('contain' , 'Alterar e-mail de cadastro')  
       cy.get(el.nome)
         .should('contain' , 'CLARO S.A.')
       cy.get(el.cpfCnpj)
         .should('contain' , '40.432.544/0860-0')
       cy.get(el.assunto)
         .should('contain','Assunto')
       //Selecionar Suporte técnico
       cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
         .select('Suporte técnico')
         .should('have.value', '5')
       //Clicar no Solicitar  
       cy.get('#btnRequestForm')
         .should('contain' , 'Solicitar')
         .click()  
       //Validação da URL   
       cy.url()
         .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/?diagnostic=true&loginforce=true')       
    })             
})