/// <reference types="Cypress" />

describe('Atendimento Acessivel',()=>{
    beforeEach(() => {
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))
    });

    it('Atendimento Acessivel - Chat',()=> {
        //Clique no menu Atendimento
        cy.get('#menu-item-atendimento > div.mdn-Menu-list-item-link > a > span').click()
        //Clique no sub menu Atendimento acessivél
        cy.get('#menu-item-canais-de-atendimento-atendimento-acessível > a').click({ force: true })
        //Assertiva na frase Atendimento exclusivo para pessoas com necessidades Auditivas Especiais
        cy.get('.mcr-side > .mdn-Heading').should('contain', 'Atendimento exclusivo para pessoas com necessidades Auditivas Especiais')
        //Assertiva nome Chat
        cy.get('.mdn-Row > :nth-child(1) > .mdn-CardInstitutional > .mdn-CardInstitutional-content > .mdn-Heading').should('contain', 'Chat')
        //Assertiva frase SAC por mensagens de texto para surdos ou pessoas com deficiência auditiva ou de fala.
        cy.get('.mdn-Row > :nth-child(1) > .mdn-CardInstitutional > .mdn-CardInstitutional-content > .mdn-Text').should('contain','SAC por mensagens de texto para surdos ou pessoas com deficiência auditiva ou de fala.');
        //Assertiva botão acessar
        cy.get('.mdn-Row > :nth-child(1) > .mdn-CardInstitutional > .mdn-CardInstitutional-content > .mdn-Button').should('be.visible')
        .and('be.enabled')
        .click();
        //Abrir modal e validar o botão de redirect
        cy.get('body > main > section > div > div > div.mdn-Modal-header > h1').should('contain', 'Atendimento Acessível')
        cy.get('body > main > section > div > div > div.mdn-Modal-footer > div > button.btn-size.btn-margin.mdn-Button.mdn-Button--primary.gtm-element-event').should('contain', 'Confirmar')
    })

    it('Atendimento Acessivel - SAC videochamada',()=>{
        //Clique no menu Atendimento
        cy.get('#menu-item-atendimento > div.mdn-Menu-list-item-link > a > span').click()
        //Clique no sub menu Atendimento acessivél
        cy.get('#menu-item-canais-de-atendimento-atendimento-acessível > a').click({ force: true })
        //Assertiva nome SAC videochamada
        cy.get(':nth-child(2) > .mdn-CardInstitutional > .mdn-CardInstitutional-content > .mdn-Heading').should('contain', 'SAC videochamada');
        //Assertiva frase Atendimento em LIBRAS para tratar sobre produtos e serviços Claro.
        cy.get(':nth-child(2) > .mdn-CardInstitutional > .mdn-CardInstitutional-content > .mdn-Text--body').should('contain','Atendimento em LIBRAS para tratar sobre produtos e serviços Claro.');
        //Assertiva botão acessar
        cy.get(':nth-child(2) > .mdn-CardInstitutional > .mdn-CardInstitutional-content > .mdn-Button').should('be.visible')
        .and('be.enabled')
        .click();
        //Abrir modal e validar o botão de redirect
        cy.get('body > main > section > div > div > div.mdn-Modal-header > h1').should('contain', 'Atendimento Acessível')
        cy.get('body > main > section > div > div > div.mdn-Modal-footer > div > button.btn-size.btn-margin.mdn-Button.mdn-Button--primary.gtm-element-event').should('contain', 'Confirmar')
    })

    it('Atendimento Acessivel - Central de Intermediação de Comunicação - CIC',()=> {
        //Clique no menu Atendimento
        cy.get('#menu-item-atendimento > div.mdn-Menu-list-item-link > a > span').click()
        //Clique no sub menu Atendimento acessivél
        cy.get('#menu-item-canais-de-atendimento-atendimento-acessível > a').click({ force: true })
        //Assertiva nome Central de Intermediação de Comunicação - CIC
        cy.get('.mdn-u-marginTop--xs > .mdn-CardInstitutional-content > .mdn-Heading').should('contain', 'Central de Intermediação de Comunicação - CIC')
        //Assertiva frase Serviço de intermediação e comunicação para surdos ou pessoas com deficiência auditiva ou de fala.
        cy.get('.mdn-u-marginTop--xs > .mdn-CardInstitutional-content > .mdn-Text--body').should('contain', 'Serviço de intermediação de urgência ou assuntos recorrentes para surdos, pessoas com deficiência auditiva ou de fala.');
        //Assertiva botão acessar
        cy.get('.mdn-u-marginTop--xs > .mdn-CardInstitutional-content > .mdn-Button').should('be.visible')
        .and('be.enabled')
        .click();
        //Abrir modal e validar o botão de redirect -  Preciso de urgência
        cy.get('body > main > section > div > div > div.mdn-Modal-header > h1').should('contain', 'Atendimento Acessível')
        cy.get('body > main > section > div > div > div.mdn-Modal-footer > div > button.btn-size.mdn-Button.mdn-Button--secondary.mdn-u-marginRight--xxs.gtm-element-event').should('contain', 'Preciso de urgência')
        //Abrir modal e validar o botão de redirect - assuntos
        cy.get('body > main > section > div > div > div.mdn-Modal-footer > div > button.btn-size.btn-margin.mdn-Button.mdn-Button--primary.gtm-element-event').should('contain', 'Outros assuntos')
    })
})