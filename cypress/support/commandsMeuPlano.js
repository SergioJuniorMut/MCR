import './commandsMeuPlano'

Cypress.Commands.add('MeuPlano', () => {
    //Clicar menu Atendimento
    cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event')
      .click()
    //Clicar no menu Fale com a Claro
    cy.get('#menu-item-canais-de-atendimento-fale-com-a-claro > .mdn-LinkList-anchor')
      .click({ force: true })
    //Assertiva nome - Fale com a Claro
    cy.get('.mdn-Col-md-3 > div > .mdn-Heading')
      .should('contain', 'Fale com a Claro')
    //Assertiva frase - Por aqui, você consegue solicitar serviços, esclarecer dúvidas, enviar elogios ou sugestões.
    cy.get('.mdn-Col-md-3 > div > .mdn-Text')
      .should('contain', 'Por aqui, você consegue solicitar serviços, esclarecer dúvidas, enviar elogios ou sugestões.')
    //Clicar card Meu Plano
    cy.get('#category-card-4297f998-506d-47d5-9c9c-dbf5db06aa0d')
      .click()
    //Assetiva Meu Plano
    cy.get('[data-v-3bbb5356=""][data-v-5cf71bee=""] > :nth-child(1) > .mdn-Heading')
      .should('contain', 'Meu plano')
})