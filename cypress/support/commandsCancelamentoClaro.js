import './commandsCancelamentoClaro'

Cypress.Commands.add('CancelamentoClaro', () => {
    //Clicar menu Atendimento
    cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click();
    //Clicar no menu Fale com a Claro
    cy.get('#menu-item-canais-de-atendimento-fale-claro > .mdn-LinkList-anchor').click({ force: true }); 
    //Clicar card Meu Plano
    cy.get('#category-card-4297f998-506d-47d5-9c9c-dbf5db06aa0d').click();
    //Assertiva Cancelamento de produtos
    cy.get(':nth-child(4) > .item-info > .title').should('contain', 'Cancelamento de produtos');
    //Clicar em Cancelamento de proddutos
    cy.get('.other-options-list-container > :nth-child(4)').click();
    //Tentar Clicar no botão tentar novamente quando estoura erro na tela.
    //try{cy.get('.mdn-Button').click();}catch{}
    //Assertiva página Cancelamento
    cy.get('.mcr-side > .mdn-Heading').should('contain', 'Cancelamento');
    //Clicar card solicitar cancelamento de produtos Claro
    cy.wait(10000);
    cy.get('.mdn-Button.mdn-Button--primary.mdn-Button--sm.card-option__cta.cancelProducts').click({ force: true })
    
})