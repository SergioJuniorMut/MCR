
import './commandsLogin'


Cypress.Commands.add('loginPage', (user, password, contract) => {
    //Clicar no botão de entrar na area não logada
    cy.get('.mdn-Menu-list-item-link > .mdn-Button').click({force:true});
    //Clicar no campo login
    cy.get('#mdn-MainContent').click({force:true});
    //Preencher o login
    cy.get('#mdn-MainContent').type("net.web {enter}", {log: false});
    //Preencher a senha
    cy.get('#password').type("Net.123", {log:false}, { timeout: 15000});
    //Clicar no botao acessar
    cy.get('.mdn-Button').click({timeout:10000});
    //Aguardando se o elemento estar visivél para selecionar o contrato
    cy.get(':nth-child(3) > .mcr-select-contract-list-items-radio > .mdn-Radio > .mdn-Radio-text > .address').should('exist');
    
    //Selecionar o contrato da lista
    switch (contract) 
    {
        case 1:
            cy.get(':nth-child(1) > .mcr-select-contract-list-items-radio > .mdn-Radio > .mdn-Radio-label').click();
            break;
        case 2:
            cy.get(':nth-child(2) > .mcr-select-contract-list-items-radio > .mdn-Radio > .mdn-Radio-label').click();
            break;
        default:
            cy.get(':nth-child(3) > .mcr-select-contract-list-items-radio > .mdn-Radio > .mdn-Radio-label').click();
            break;
            
    }
    //Clicar em continuar
    cy.get('.mcr-button').click()
    //Validar se o texto está correto e visivelmdn-Heading mdn-Heading--lg
    cy.get('#mfe-dashboard > section > div.dashboard__header > h1')
      .should('contain', 'Olá, Claro!')
    //Fechar banner de campanha
    //cy.get('#mfe-campaigns > div > div > div > div > div.content > button').should('exist').click();
})


   


//if (cy.get('body > main > div > section > div:nth-child(1) > dialog > div > div > button').should('exist') == true) {
//    cy.get('body > main > div > section > div:nth-child(1) > dialog > div > div > button').click();
//}
//cy.intercept('GET', '**/dynamic-contents/api/campaigns').as('getCampaigns')
//Condição
//cy.wait('@getCampaigns').then(resposta => {
//    const {statusCode } = resposta.response;
//    //Valida se a request deu sucesso
//    if(statusCode  === 200){
//        // Valida mensagem de sucesso
//        cy.get('body > main > div > section > div:nth-child(1) > dialog > div > div > button').should('exist').click();
 //   }else {     
//    }
//})