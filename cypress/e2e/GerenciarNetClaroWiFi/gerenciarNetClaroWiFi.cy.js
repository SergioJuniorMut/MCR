/// <reference types="Cypress" />

describe('Gerenciar Net Claro Wifi',()=>{
    beforeEach(()=>{
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))    
    })

    it('Gerenciar Net-Claro-Wi-Fi',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event')
          .click()
        //Clica no menu Gerenciar Net-Claro-Wi-Fi
        cy.get('#menu-item-serviços-gerenciar-net-claro-wi-fi > .mdn-LinkList-anchor')
          .click({force:true})
        //Assertiva redirecionamento da URL
        cy.url().should('eq','https://auth.netcombo.com.br/web/login.html?client_id=Mobicare&redirect_uri=https%3A%2F%2Fwebportal.netcombowifi.com.br%2F&response_type=code&scope=mobicare&authMs=UP,EP')
        //Preenchimento do campo Login
        cy.xpath('//*[@id="mdn-MainContent"]')
            .type('net.web',{log:false})
       //Clique no botão continuar
        cy.xpath('//*[@id="FormLogin"]/div[3]/button')
           .click()   
       //Preenchimento do campo senha
        cy.get('#password')
          .type('Net.123',{log:false})
        //Clique no botão Acessar
        cy.get('#FormLogin > div.cred-FormActions > button')
          .click()
        //Assertiva página GERENCIAR REDE #NET-CLARO-WIFI
        cy.get('.sc-fzoyTs').should('contain','GERENCIAR REDE #NET-CLARO-WIFI')
        cy.get('.sc-fznZeY').should('contain','STATUS DA REDE #NET-CLARO-WIFI NO SEU ROTEADOR CLARO: ATIVADA')
        cy.get('[data-top="472"]').should('not.be.empty')
        cy.get('.sc-fznJRM > .sc-fzoiQi > .form-check > label').should('be.visible')
        cy.get('#btnConfirm').should('be.visible')
    })

})