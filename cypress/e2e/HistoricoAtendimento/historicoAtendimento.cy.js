/// <reference types="Cypress" />

describe('Histórico de Atendimento',()=>{
    beforeEach(()=>{
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password')) 
    })

    it('Validar Filtrar por período as opções De e Até em Portugues',()=>{
        //Clicar no menu Atendimento
        cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clicar no menu Histórico de Atendimento
        cy.get('#menu-item-canais-de-atendimento-histórico-de-atendimento > .mdn-LinkList-anchor').click({force:true})
        //Validar nome da Página Histórico de Atendimento
        cy.get('.mcr-sideColumn > :nth-child(1) > :nth-child(1) > .mdn-Heading').should('contain','Histórico de atendimentos')
        //Validar frase histórico
        cy.get('.mcr-sideColumn > :nth-child(1) > :nth-child(1) > .mdn-Text').should('contain','Verifique aqui seus protocolos, histórico de atendimentos e status de cada solicitação.');
        //Validar nome Filtrar por período
        cy.get('#dateInputInitialDate > .mdn-Text').should('contain','Filtrar por período')
        //Assertiva De em Portugês
        cy.get('#dateInputInitialDate > .mdn-Input > .notranslate').should('contain','De')
        //Assertiva Até em Português
        cy.get(':nth-child(2) > .container-field-date > .mdn-Input > .notranslate').should('contain','Até')
    })
})