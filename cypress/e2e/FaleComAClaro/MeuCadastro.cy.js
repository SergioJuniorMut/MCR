/// <reference types="Cypress" />
const el = require('/cypress/support/variables.js').ELEMENTS

describe('Fale com a Claro',()=>{
    beforeEach(()=>{
    cy.fetch()
    cy.visit("/")
    cy.loginPage(Cypress.env('user'), Cypress.env('password'))
    cy.MeuCadastro()
  })

    it('Fale com a Claro - Meu cadastro - Atualização cadastral 1/4',()=>{
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
        //Selecionar Atualização cadastral
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Atualização cadastral')
          .should('have.value', '1')
        //Assertiva Escolha uma das opções de atualização:    
        cy.get(el.opcoesAtualizacao)
           .should('contain' , 'Escolha uma das opções de atualização:')  
        //Assertiva Data de vencimento 
        cy.get(el.dataVencimento)
          .should('contain' , 'Data de vencimento')
          .click()
        //Validação da URL     
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/financeiro/data-de-vencimento')      
    })

    it('Fale com a Claro - Meu cadastro - Atualização cadastral 2/4',()=>{
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
      //Selecionar Atualização cadastral
      cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
        .select('Atualização cadastral')
        .should('have.value', '1')
      //Assertiva Escolha uma das opções de atualização:  
      cy.get(el.opcoesAtualizacao)
         .should('contain' , 'Escolha uma das opções de atualização:')  
      //Assertiva Forma de pagamento
      cy.get(el.formaPag)
        .should('contain' , 'Forma de pagamento')
        .click()
      //Validação da URL     
      cy.url()
        .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/financeiro/forma-de-pagamento')      
    })   
 
    it('Fale com a Claro - Meu cadastro - Atualização cadastral 3/4',()=>{
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
        //Selecionar Atualização cadastral
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Atualização cadastral')
          .should('have.value', '1')
        //Assertiva Escolha uma das opções de atualização:
        cy.get(el.opcoesAtualizacao)
          .should('contain' , 'Escolha uma das opções de atualização:')  
        //Assertiva Forma de recebimento
        cy.get(el.formaRec)
          .should('contain' , 'Forma de recebimento')
          .click()
        //Validação da URL
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/financeiro/fatura-digital') 
    })  

    it('Fale com a Claro - Meu cadastro - Atualização cadastral 4/4',()=>{
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
        //Selecionar Atualização cadastral
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Atualização cadastral')
          .should('have.value', '1')
        //Assertiva Escolha uma das opções de atualização:
        cy.get(el.opcoesAtualizacao)
          .should('contain' , 'Escolha uma das opções de atualização:')  
        //Assertiva Nennuma das opções acima
        cy.get(el.nenhumaOpcao)
          .should('contain' , 'Nenhuma das opções acima')
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
          .should('contain', 'Mensagem');
        //Digitar Sua Mensagem
        cy.get('#textarea')
          .type('TESTE de Automação')
        //Clicar em Enviar
        cy.get('#btnSendForm').should('be.visible')
          .click({ timeout: 10000 })
        //if para validação de sucesso ou erro
        cy.wait(20000)
        cy.get(el.sucesso, { timeout: 30000 })
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

    it('Fale com a Claro - Meu cadastro - Mudança de Endereço',()=>{
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
        //Selecionar Mudança de Endereço
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Mudança de Endereço')
          .should('have.value', '2')
        //Clicar no Alterar  
        cy.get('#btnSendForm')
          .should('contain' , 'Alterar')
          .click()  
        //Validação da URL   
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/atendimento/mudanca-de-endereco') 
    })    

    it('Fale com a Claro - Meu cadastro - Transferência de Titularidade',()=>{
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
        //Selecionar Transferência de Titularidade
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Transferência de Titularidade')
          .should('have.value', '3')
        //Clicar no Iniciar
        cy.get('#btnSendForm')
          .should('contain' , 'Iniciar')
          .click()  
        //Validação da URL   
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/atendimento/troca-de-titularidade') 
    })                      
})