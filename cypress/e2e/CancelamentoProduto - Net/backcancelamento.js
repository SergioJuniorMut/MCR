/// <reference types="Cypress" />

describe('Fale com a Claro', () => {
    beforeEach(() => {
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))
    })


    it.only('Fale com a Claro - Meu Plano - Cancelamentos de produtos', () => {
        //Entrar em Fale com a Claro - Meu Plano
        cy.MeuPlano()
        //Assertiva Cancelamento de produtos
        cy.get('.other-options-list-container > :nth-child(4)')
          .should('contain','Cancelamento de produtos')
        //Clicar em Cancelamento de proddutos
        cy.get('.other-options-list-container > :nth-child(4) > .mdn-Icon-direita')
          .click()
        //Assertiva página Cancelamento
        cy.url()
          .should('be.equal', 'https://minhaclaroresidencial3.claro.com.br/atendimento/cancelamento?op=VHVlIE5vdiAyMSAyMDIzIDE4OjU4OjE0IEdNVC0wMzAwIChIb3LDoXJpbyBQYWRyw6NvIGRlIEJyYXPDrWxpYSkwMDM=')
        
    })
    it('Fale com a Claro - Portabilidade - Fazer reclamação - Wifi Mesh', () => {
        //Entrar em Fale com a Claro - Meu Plano
        cy.MeuPlano()
        //Assertiva Fazer Reclamação
        cy.get('.other-options-list-container > :nth-child(3)').should('contain', 'Fazer reclamação');
        //Clicar em Fazer reclamação
        cy.get('.other-options-list-container > :nth-child(3)').click()
        //Assertiva Assunto
        cy.get('#select-input-subject > .title').should('contain', 'Assunto');
        //Selecionar opção Portabilidade
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field').select('Portabilidade');
        //Assertiva Produto
        cy.get('#select-input-product > .title').should('contain', 'Produto');
        //Selecionar e Assertiva Produto Wifi Mesh
        cy.get('#select-input-product > .mdn-Input > .mdn-Input-field').select('Wifi Mesh').should('contain', 'Wifi Mesh');
        //Assertiva mensagem
        cy.get('.textarea-input-container > .title').should('contain', 'Mensagem');
        //Digitar Sua Mensagem
        cy.get('#textarea').type('TESTE de Automação');
        //Clicar em Enviar
        cy.get('#btnSendForm').should('be.visible')
            .click({ timeout: 10000 })
        //Assertiva Sua mensagem foi enviada com sucesso!
        cy.get('.header-container').should('contain', 'Sua mensagem foi enviada com sucesso!');
        //Assertiva protocolo
        cy.get('.success-feedback-container > p.mdn-Heading').should('not.be.empty');
        //Assertiva data e hora
        cy.get('.success-feedback-container > :nth-child(5)').should('not.be.empty')
    })
    it('Fale com a Claro - Adesao de Produtos - Fazer solicitação - Wifi Mesh', () => {
        //Entrar em Fale com a Claro - Meu Plano
        cy.MeuPlano();
        //Assertiva Fazer solicitação
        cy.get(':nth-child(2) > .item-info > .title').should('contain', 'Fazer solicitação');
        //Clicar em Fazer solicitação
        cy.get('.other-options-list-container > :nth-child(2) > .mdn-Icon-direita').click()
        //Assertiva Assunto
        cy.get('#select-input-subject > .title').should('contain', 'Assunto');
        //Selecionar opção Adesão de Produtos
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field').select('Adesão de produtos');
        //Assertiva Produto
        cy.get('#select-input-product > .title').should('contain', 'Produto');
        //Selecionar e Assertiva Produto Wifi Mesh
        cy.get('#select-input-product > .mdn-Input > .mdn-Input-field').select('Wifi Mesh').should('contain', 'Wifi Mesh');
        //Assertiva mensagem
        cy.get('.textarea-input-container > .title').should('contain', 'Mensagem');
        //Digitar Sua Mensagem
        cy.get('#textarea').type('TESTE de Automação');
        //Clicar em Enviar
        cy.get('#btnSendForm').should('be.visible')
            .click({ timeout: 10000 })
        //Assertiva Sua mensagem foi enviada com sucesso!
        cy.get('.header-container').should('contain', 'Sua mensagem foi enviada com sucesso!');
        //Assertiva protocolo
        cy.get('.success-feedback-container > p.mdn-Heading').should('not.be.empty');
        //Assertiva data e hora
        cy.get('.success-feedback-container > :nth-child(5)').should('not.be.empty')
    })
    it('Fale com a Claro - Desistência de Cancelamento - Pedir informação', () => {
        //Entrar em Fale com a Claro - Meu Plano
        cy.MeuPlano();
        //Assertiva Pedir informação
        cy.get(':nth-child(1) > .item-info > .title').should('contain', 'Pedir informação');
        //Clicar em Pedir informação
        cy.get('.other-options-list-container > :nth-child(1) > .mdn-Icon-direita').click();
        //Assertiva O que você gostaria de saber?
        cy.get('.form-header > .mdn-Heading').should('contain', 'O que você gostaria de saber?');
        //Assertiva Assunto
        cy.get('#select-input-subject > .title').should('contain', 'Assunto');
        //Selecionar opção Desistência de Cancelamento
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field').select('Desistência de cancelamento');
        //Assertiva Produto
        cy.get('#select-input-product > .title').should('contain', 'Produto');
        //Selecionar e Assertiva Produto Wifi Mesh
        cy.get('#select-input-product > .mdn-Input > .mdn-Input-field').select('Wifi Mesh').should('contain', 'Wifi Mesh');
        //Assertiva mensagem
        cy.get('.textarea-input-container > .title').should('contain', 'Mensagem');
        //Digitar Sua Mensagem
        cy.get('#textarea').type('TESTE de Automação');
        //Clicar em Enviar
        cy.get('#btnSendForm').should('be.visible')
            .click({ timeout: 10000 })
        //Assertiva Sua mensagem foi enviada com sucesso!
        cy.get('.header-container').should('contain', 'Sua mensagem foi enviada com sucesso!');
        //Assertiva protocolo
        cy.get('.success-feedback-container > p.mdn-Heading').should('not.be.empty');
        //Assertiva data e hora
        cy.get('.success-feedback-container > :nth-child(5)').should('not.be.empty')
    })
    it('Fale com a Claro - Mudança de Pacote - Fazer reclamação - Wifi Mesh', () => {
        //Entrar em Fale com a Claro - Meu Plano
        cy.MeuPlano();
        //Assertiva Fazer Reclamação
        cy.get('.other-options-list-container > :nth-child(3)').should('contain', 'Fazer reclamação');
        //Clicar em Fazer reclamação
        cy.get('.other-options-list-container > :nth-child(3)').click()
        //Assertiva Assunto
        cy.get('#select-input-subject > .title').should('contain', 'Assunto');
        //Selecionar opção Mudança de Pacote
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field').select('Mudança de pacote');
        //Assertiva Produto
        cy.get('#select-input-product > .title').should('contain', 'Produto');
        //Selecionar e Assertiva Produto Wifi Mesh
        cy.get('#select-input-product > .mdn-Input > .mdn-Input-field').select('Wifi Mesh').should('contain', 'Wifi Mesh');
        //Assertiva mensagem
        cy.get('.textarea-input-container > .title').should('contain', 'Mensagem');
        //Digitar Sua Mensagem
        cy.get('#textarea').type('TESTE de Automação');
        //Clicar em Enviar
        cy.get('#btnSendForm').should('be.visible')
            .click({ timeout: 10000 })
        //Assertiva Sua mensagem foi enviada com sucesso!
        cy.get('.header-container').should('contain', 'Sua mensagem foi enviada com sucesso!');
        //Assertiva protocolo
        cy.get('.success-feedback-container > p.mdn-Heading').should('not.be.empty');
        //Assertiva data e hora
        cy.get('.success-feedback-container > :nth-child(5)').should('not.be.empty')
    })
    it('Fale com a Claro - Promoções - Fazer solicitação - Wifi Mesh', () => {
        //Entrar em Fale com a Claro - Meu Plano
        cy.MeuPlano();
        //Assertiva Fazer solicitação
        cy.get(':nth-child(2) > .item-info > .title').should('contain', 'Fazer solicitação');
        //Clicar em Fazer solicitação
        cy.get('.other-options-list-container > :nth-child(2) > .mdn-Icon-direita').click()
        //Assertiva Assunto
        cy.get('#select-input-subject > .title').should('contain', 'Assunto');
        //Selecionar opção Promoções
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field').select('Promoções');
        //Assertiva Produto
        cy.get('#select-input-product > .title').should('contain', 'Produto');
        //Selecionar e Assertiva Produto Wifi Mesh
        cy.get('#select-input-product > .mdn-Input > .mdn-Input-field').select('Wifi Mesh').should('contain', 'Wifi Mesh');
        //Assertiva mensagem
        cy.get('.textarea-input-container > .title').should('contain', 'Mensagem');
        //Digitar Sua Mensagem
        cy.get('#textarea').type('TESTE de Automação');
        //Clicar em Enviar
        cy.get('#btnSendForm').should('be.visible')
            .click({ timeout: 10000 })
        //Assertiva Sua mensagem foi enviada com sucesso!
        cy.get('.header-container').should('contain', 'Sua mensagem foi enviada com sucesso!');
        //Assertiva protocolo
        cy.get('.success-feedback-container > p.mdn-Heading').should('not.be.empty');
        //Assertiva data e hora
        cy.get('.success-feedback-container > :nth-child(5)').should('not.be.empty')
    })
    it('Fale com a Claro - Suspensão Temporária - Pedir informação - Wifi Mesh', () => {
        //Entrar em Fale com a Claro - Meu Plano
        cy.MeuPlano();
        //Assertiva Pedir informação
        cy.get(':nth-child(1) > .item-info > .title').should('contain', 'Pedir informação');
        //Clicar em Pedir informação
        cy.get('.other-options-list-container > :nth-child(1) > .mdn-Icon-direita').click();
        //Assertiva O que você gostaria de saber?
        cy.get('.form-header > .mdn-Heading').should('contain', 'O que você gostaria de saber?');
        //Assertiva Assunto
        cy.get('#select-input-subject > .title').should('contain', 'Assunto');
        //Selecionar opção Suspensão Temporária
        cy.get('#select-input-subject > .mdn-Input > .mdn-Input-field').select('Suspensão temporária');
        //Assertiva Produto
        cy.get('#select-input-product > .title').should('contain', 'Produto');
        //Selecionar e Assertiva Produto Wifi Mesh
        cy.get('#select-input-product > .mdn-Input > .mdn-Input-field').select('Wifi Mesh').should('contain', 'Wifi Mesh');
        //Assertiva mensagem
        cy.get('.textarea-input-container > .title').should('contain', 'Mensagem');
        //Digitar Sua Mensagem
        cy.get('#textarea').type('TESTE de Automação');
        //Clicar em Enviar
        cy.get('#btnSendForm').should('be.visible')
            .click({ timeout: 10000 })
        //Assertiva Sua mensagem foi enviada com sucesso!
        cy.get('.header-container').should('contain', 'Sua mensagem foi enviada com sucesso!');
        //Assertiva protocolo
        cy.get('.success-feedback-container > p.mdn-Heading').should('not.be.empty');
        //Assertiva data e hora
        cy.get('.success-feedback-container > :nth-child(5)').should('not.be.empty')
    })
})

