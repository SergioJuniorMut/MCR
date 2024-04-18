/// <reference types="Cypress" />
const el = require('/cypress/support/variables.js').ELEMENTS

describe('Fale com a Claro', () => {
    beforeEach(() => {
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))
        cy.MeuPlano()
    })

    it('Fale com a Claro - Meu Plano - Alterar dados cadastrais', () => {
        //Assertiva Alterar dados cadastrais
        cy.get('.subcategory-list-container > :nth-child(1) > .item-info > h3')
          .should('contain', 'Alterar dados cadastrais')
        //Clicar Alterar dados cadastrais
        cy.get('.subcategory-list-container > :nth-child(1) > .mdn-Icon-direita')
          .click()
        //Assertiva página Meus Dados
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/dados/meus-dados')
    })

    it('Fale com a Claro - Meu Plano - Mudança de Endereço', () => {
        //Assertiva Mudança de Endereço
        cy.get('.subcategory-list-container > :nth-child(2) > .item-info > h3')
          .should('contain', 'Mudança de Endereço')
        //Clicar em Mudança de Endereço
        cy.get('.subcategory-list-container > :nth-child(2) > .mdn-Icon-direita')
          .click()
        //Assertiva página Mudança de Endereço
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/atendimento/mudanca-de-endereco')
    })

    it('Fale com a Claro - Meu Plano - Mude seu plano', () => {
        //Assertiva Mude seu plano
        cy.get('.subcategory-list-container > :nth-child(3) > .item-info > h3')
           .should('contain', 'Mude seu plano')
        //Clicar em Mude seu plano
        cy.get('.subcategory-list-container > :nth-child(3) > .mdn-Icon-direita')
          .click()
        //Asertiva página contrato
        cy.url()
          .should('be.equal', 'https://auth.claro.com.br/authorize?client_id=MUDE_SEU_PLANO&redirect_uri=https://minhaclaroresidencial.claro.com.br/mude-seu-plano/&response_type=code&scope=openid+minha_net+net_mude_plano&authMs=UP,EP,DOCP')
    })

    it('Fale com a Claro - Meu Plano - Grade de programação', () => {
        //Assertiva Grade de programação
        cy.get('.subcategory-list-container > :nth-child(4) > .item-info > h3')
          .should('contain', 'Grade de programação')
        //Clicar Grade de programação
        cy.get('.subcategory-list-container > :nth-child(4) > .mdn-Icon-direita')
          .click()
        //Assertiva página Grade de Programação
        cy.url()
          .should('be.equal', 'https://www.claro.com.br/tv-por-assinatura/programacao/grade')
    })

    it('Fale com a Claro - Meu Plano - Pedir informação', () => {
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
        //Selecionar Promoções
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Promoções')
          .should('have.value', '8')
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

    it('Fale com a Claro - Meu Plano - Fazer solicitação', () => {
        //Assertiva Fazer solicitação
        cy.get(':nth-child(2) > .item-info > .title')
          .should('contain', 'Fazer solicitação')
        //Clicar em Fazer solicitação
        cy.get('.other-options-list-container > :nth-child(2) > .mdn-Icon-direita')
          .click()
        //Assertiva Assunto
        cy.get(el.assunto)
          .should('contain', 'Assunto')
        //Selecionar Portabilidade
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Portabilidade')
          .should('have.value', '7')
        //Assertiva Produto
        cy.get('#select-input-product> p')
          .should('contain', 'Produto')
        //Selecionar Produto
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
        cy.get('.header-container' , { timeout: 30000 })
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

    it('Fale com a Claro - Meu Plano - Fazer reclamação', () => {
        //Assertiva Fazer Reclamação
        cy.get('.other-options-list-container > :nth-child(3)')
          .should('contain', 'Fazer reclamação')
        //Clicar em Fazer reclamação
        cy.get('.other-options-list-container > :nth-child(3)')
          .click()
        //Assertiva Assunto  
        cy.get(el.assunto)
          .should('contain', 'Assunto')
       //Selecionar Mudança de pacote
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
          .select('Mudança de Pacote')
          .should('have.value', '5')
        //Assertiva Produto
        cy.get('#select-input-product> p')
          .should('contain', 'Produto')
        //Selecionar Produto
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

    it('Fale com a Claro - Meu Plano - Cancelamentos de produtos', () => {
        //Assertiva Cancelamento de produtos
        cy.get('.other-options-list-container > :nth-child(4)')
          .should('contain','Cancelamento de produtos')
        //Clicar em Cancelamento de proddutos
        cy.get('.other-options-list-container > :nth-child(4) > .mdn-Icon-direita')
          .click()
        //Assertiva página Cancelamento
        cy.get('body > main > section > article > div > div.mcr-sideColumn.mdn-Col-xs-12.mdn-Col-lg > div > h1')
          .should('contain','Cancelamento')
        //Assertiva descrição da página de Cancelamento
        cy.get('body > main > section > article > div > div.mcr-sideColumn.mdn-Col-xs-12.mdn-Col-lg > div > p')
          .should('contain','Solicite o cancelamento de canais adicionais ou de seus produtos Claro.')
        //Assertiva do texto O que você gostaria de fazer?
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > div > div > div:nth-child(1) > div > h1')
          .should('contain','O que você gostaria de fazer?')
    })

    it('Fale com a Claro - Meu Plano - Desistência de cancelamento', () => {
       //Assertiva Desistência de cancelamento
       cy.get('.other-options-list-container > :nth-child(5)')
         .should('contain', 'Desistência de cancelamento')
       //Clicar em Desistência de cancelamento
       cy.get('.other-options-list-container > :nth-child(5) > .mdn-Icon-direita')
         .click()
       //Assertiva Assunto
       cy.get(el.assunto)
         .should('contain' , 'Assunto' , { timeout: 10000 })
       //Selecionar Desistência de cancelamento
       cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field')
         .select('Desistência de cancelamento')
         .should('have.value', '4')
       //Assertiva Produto
       cy.get('#select-input-product> p')
         .should('contain', 'Produto')
       //Selecionar Produto
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
        cy.get(el.ops)
          .should('contain', 'Oops! Não foi possível enviar sua mensagem.')
          .get(el.mensagemError)
          .should('contain', 'Você já enviou uma mensagem sobre este assunto, estamos analisando e logo retornaremos com uma resposta. Por favor, aguarde antes de enviar uma nova mensagem. Agradecemos sua compreensão.')    
        })      
    })
})








