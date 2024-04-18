import './commandsAtendimento'

Cypress.Commands.add('Atendimento', () => {
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
    //Clicar card Atendimento
    cy.get('i[data-v-b9c52aea].mdn-Icon--md.mdn-Icon-chat')
      .click()
})