import './commandsMudancaEndereco'

Cypress.Commands.add('MudancaEndereco', () => {
    //Clicar menu Atendimento
    cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event')
      .click()
    //Selecionar Mudança de endereço
    cy.get('#menu-item-serviços-mudança-de-endereço > .mdn-LinkList-anchor')
      .click({force:true})
    //Assertiva nome da página - Mudança de Endereço
    cy.get('.mcr-Header > .mdn-Heading')
      .should('contain','Mudança de Endereço')
    //Assertiva - Mudou de residência? Não tem problema! Nesta página, você pode solicitar a instalação de seus produtos Claro no novo endereço.
    cy.get('.mcr-Header > .mdn-Text')
      .should('contain', 'Mudou de residência? Não tem problema! Nesta página, você pode solicitar a instalação de seus produtos Claro no novo endereço.')
})