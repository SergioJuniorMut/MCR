/// <reference types="Cypress" />

const url = '**/installation-address-change/**'

describe("Consumo de Franquia", () => {
    beforeEach(() => {
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))
    });

    it('Consumo de franquia',()=>{
        //Acessando Consumo de Franquia
        cy.ConsumoFranquia()

        //#region Validar Consumo de Franquia
        //Assertiva - Seu plano
        cy.wait(10000);
        cy.get('.cable-modem__information__paragraph > strong').contains('Seu plano') // Yield el in .nav containing 'About'
        //Assertiva - BL 125M COMBINADO ATQ EXC RET FID
        cy.get('.cable-modem__information--your-plan').should('be.visible').and('not.be.empty')
        //Assertiva - Número do Cable Modem
        cy.get('.cable-modem__information__cable-number').contains('Número do Cable Modem')
        //Assertiva - A8F5DDE47C92
        cy.get('.cable-modem__information--mac-address').should('be.visible').and('not.be.empty')
        //Assertiva - Mês/Ano Atual
        cy.get('.card-graphic__month-and-year').should('be.visible').and('not.be.empty')
        //Assertiva - Grafico de pizza referente ao consumo
        cy.get('#doughnut-chart').should('be.visible')
        //Assertiva - Consumida - Legenda
        cy.get('.legends > :nth-child(2)').contains('Consumida')
        //Assertiva - Restante - Legenda
        cy.get('.legends > :nth-child(4)').contains('Restante')
        //Assertiva - Franquia mensal contratada
        cy.get('.summaries > :nth-child(1) > .mdn-Text').contains('Franquia mensal contratada')
        //Assertiva - Valor mensal da franquia contratada
        cy.get(':nth-child(1) > .summaries__labels--gig-amount').should('be.visible').and('not.be.empty')
        //Assertiva - Franquia mensal consumida
        cy.get('.summaries > :nth-child(2) > .mdn-Text').contains('Franquia mensal consumida')
        //Assertiva - Valor mensal da franquia consumida
        cy.get(':nth-child(2) > .summaries__labels--gig-amount').should('be.visible').and('not.be.empty')
        //Assertiva - Saldo mensal restante
        cy.get('.summaries > :nth-child(3) > .mdn-Text').contains('Saldo mensal restante')
        //Assertiva - Valor mensal restante
        cy.get(':nth-child(3) > .mdn-Heading').should('be.visible').and('not.be.empty')
        //#endregion

        //#region Validar Modal do Cable Modem
        //Clicar no botao (?) do cable modem
        cy.get('.cable-modem__information__cable-number--icon-question').click()
        //Assertiva - Número de cable modem
        cy.wait(3000)
        cy.get('.modal__content__header > .mdn-Heading').contains('Número de cable modem')
        //Assertiva - O número de Cable Modem / MAC Address do seu cable modem é um identificador único do equipamento. Ele é composto por 12 dígitos e pode ser encontrado na etiqueta do seu cable modem com as seguintes identificações: CM MAC, HFC ID, HFC MAC, CM ID ou RF ID.
        cy.get('.modal__content__body > :nth-child(1)').contains('O número de Cable Modem / MAC Address do seu cable modem é um')
        
        //Assertiva - Exemplo
        cy.get('.modal__content__body--example').contains('Exemplo')
        //Assertiva - Código de barras
        cy.get('#img-codigo-barras').should('be.visible')
        //Clicar no botao fechar modal
        cy.get('.mdn-Button-header-close > .mdn-Icon-fechar').click()
        //#endregion

        //#region Validar botao Mudar Plano
        //Assertiva - Botão Mudar Plano
        cy.get('.cable-modem__change-plan').should('be.visible')
        //Clicar no botao mudar plano
        cy.get('.cable-modem__change-plan').click()
        //Validar URL
        cy.url().should('contain','https://minhaclaroresidencial3.claro.com.br/mude-seu-plano/monte-sua-combinacao')
        //Validar Titulo da tela
        cy.get('#plano-heading').should('contain', 'Meu plano atual')
        //#endregion
    }) 
})

// Comando predeterminado para que não ocorra erros de exceptions:
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})