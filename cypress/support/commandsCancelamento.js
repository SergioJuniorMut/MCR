import './commandsCancelamento'

Cypress.Commands.add('Cancelamento', () => {
    //Clicar menu Atendimento
    cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event')
       .click()
    //Clicar no menu Fale com a Claro
    cy.get('#menu-item-canais-de-atendimento-fale-com-a-claro > .mdn-LinkList-anchor')
       .click({ force: true })
    //Clicar card Meu Plano
    cy.get('#category-card-4297f998-506d-47d5-9c9c-dbf5db06aa0d')
      .click()
    //Assertiva Cancelamento de produtos
    cy.get(':nth-child(4) > .item-info > .title')
      .should('contain', 'Cancelamento de produtos')
    //Clicar em Cancelamento de proddutos
    cy.get('.other-options-list-container > :nth-child(4)')
      .click()
    //Assertiva página Cancelamento
    cy.get('.mcr-side > .mdn-Heading')
      .should('contain', 'Cancelamento')
    //Clicar card solicitar cancelamento de produtos Claro
    cy.get('.mdn-Button.mdn-Button--primary.mdn-Button--sm.card-option__cta.cancelProducts')
      .should('exist')
      .click()
})