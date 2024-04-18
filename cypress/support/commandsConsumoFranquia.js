import './commandsConsumoFranquia'

Cypress.Commands.add('ConsumoFranquia', () => {
    //Clicar menu Meu Plano
    cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click();
    //Clicar no menu Consumo de Franquia
    cy.get('#menu-item-serviços-consumo-de-franquia > .mdn-LinkList-anchor').click({ force: true });
    //Assertiva nome - Consumo de Franquia
    cy.get('.mcr-side > .mdn-Heading').should('contain', 'Consumo de Franquia');
    //Assertiva - Consulte o consumo de franquia mensal de sua internet.
    cy.get('.mcr-side > .mdn-Text--body').should('contain', 'Consulte o consumo de franquia mensal de sua internet.');
})