
import './commandsLoginClaroBcc'

Cypress.Commands.add('loginClaroBcc', (user, password, contract) => {
    //Clicar no botão de entrar na area não logada
    cy.get('.mdn-Menu-list-item-link > .mdn-Button')
      .click({force:true})
    //Clicar no campo login
    cy.get('#mdn-MainContent')
      .click({force:true})
    //Preencher o login
    cy.get('#mdn-MainContent')
      .type("claro_bcc {enter}", {log: false})
    //Preencher a senha
    cy.get('#password')
      .type("Teste@01", {log:false}, { timeout: 15000})
    //Clicar no botao acessar
    cy.get('.mdn-Button')
      .click({timeout:10000})
    //Aguardando se o elemento estar visivél para selecionar o contrato
    cy.get('#app > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > div > div.mcr-select-contract-list-scroller > div:nth-child(1) > div > div > label.mdn-Radio-text.mcr-select-contract-list-items-radio-infos')
      .should('exist')
    //Selecionar o primeiro contrato da lista
    switch (contract) 
    {
        case 1:
            cy.get(':nth-child(1) > .mcr-select-contract-list-items-radio > .mdn-Radio > .mdn-Radio-label').click();
            break;
        case 2:
            cy.get(':nth-child(2) > .mcr-select-contract-list-items-radio > .mdn-Radio > .mdn-Radio-label').click();
            break;
        default:
            cy.get(':nth-child(1) > .mcr-select-contract-list-items-radio > .mdn-Radio > .mdn-Radio-label').click();
            break;
    }
    //Clicar em continuar
    cy.get('.mcr-button')
      .click({timeout:10000});
    //Validar se o texto está correto e visivel
    cy.get('#mfe-dashboard > section > div.dashboard__header > h1')
      .should('be.visible')
      .and('have.text', 'Olá, Claro!')
})