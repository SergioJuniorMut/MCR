import './commandsLoginCiro'


Cypress.Commands.add('loginCiro', (user, password, contract) => {
    //Clicar no campo login
    cy.get('#labelLogin').click({force:true});
    //Preencher o login
    cy.get('#login').type("ciro.juversino", {log: false});
    //Preencher a senha
    cy.get('#password').type("Ciro150973", {log:false}, { timeout: 15000});
    //Clicar no botao acessar
    cy.get('.loginForm__form-control > .mdn-Button--primary').click({timeout:10000});
    //Selecionar o primeiro contrato da lista
    cy.get(':nth-child(1) > .mcr-select-contract-list-items-radio > .mdn-Radio > .mdn-Radio-label').click();
    //Clicar em continuar
    cy.get('.mcr-button').click({timeout:10000});
    //Validar se o texto está correto e visivel
    cy.get('.mdn-u-paddingTop--lg > .mdn-Heading').should('be.visible').and('have.text', 'Olá, Ciro');
    
})
