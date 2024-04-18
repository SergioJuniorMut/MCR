/// <reference types="Cypress" />

describe('Wifi na Cidade',()=>{
    beforeEach(()=>{
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))       
    })

    it('Wifi na Cidade - Validação layout',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event')
          .click()
        //Clica no menu wifi na cidade
        cy.get('#menu-item-serviços-wi-fi-na-cidade > a')
          .click({force:true})
        //Assertiva Título da Página - Wi-fi na cidade
        cy.get('#app > div.mcr-page-heading.mdn-u-paddingBottom--lg > h1')
          .should('contain','Wi-fi na cidade')
        //Assertiva Título da Página - Nome do dispositivo
        cy.get('#app > div:nth-child(2) > div > table > thead > tr > th:nth-child(1)')
          .should('contain','Nome do dispositivo')
        //Assertiva Título da Página - Data do cadastro
        cy.get('#app > div:nth-child(2) > div > table > thead > tr > th:nth-child(2)')
          .should('contain','Data do cadastro')
        //Assertiva Título da Página - Validade do cadastro
        cy.get('#app > div:nth-child(2) > div > table > thead > tr > th:nth-child(3)')
          .should('contain','Validade do cadastro')
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(1)')  
          .should('contain','Editar')
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(2)')  
          .should('contain','Excluir')  
    })

    it('Wifi na Cidade - Edição do campo c/ Caracter Especial',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event')
          .click()
        //Clica no menu wifi na cidade
        cy.get('#menu-item-serviços-wi-fi-na-cidade > a')
          .click({force:true})
        //Assertiva Título da Página - Wi-fi na cidade
        cy.get('#app > div.mcr-page-heading.mdn-u-paddingBottom--lg > h1')
          .should('contain','Wi-fi na cidade')
        //Clique no botão de Editar
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(1)')
          .click()
        //Clique limpeza do campo + Adição do novo nome
        cy.xpath('//*[@id="device-input-MDY6Mzg6MGI6N2I6ODQ6OGQ%3D"]')
          .clear()
          .type('Novo Automação')
        //Clique no botão de salvar 
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(1)')
          .click()  
        //Assertiva do texto da modal  
        cy.get('#app > div.modal.modal__default.net__modal > div > div > p')
          .should('contain','O nome do dispositivo não deve ter caracteres especiais.') 
        //Clique no botão ok dentro da modal
        cy.get('#app > div.modal.modal__default.net__modal > div > div > div.d-flex.justify-content-center.mt-16 > button')
          .should('contain','OK') 
          .click()  
    })

    it('Wifi na Cidade - Edição do campo s/ Caracter Especial',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event')
          .click()
        //Clica no menu wifi na cidade
        cy.get('#menu-item-serviços-wi-fi-na-cidade > a')
          .click({force:true})
        //Assertiva Título da Página - Wi-fi na cidade
        cy.get('#app > div.mcr-page-heading.mdn-u-paddingBottom--lg > h1')
          .should('contain','Wi-fi na cidade')
        //Clique no botão de Editar
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(1)')
          .click()
        //Clique limpeza do campo + Adição do novo nome
        cy.xpath('//*[@id="device-input-MDY6Mzg6MGI6N2I6ODQ6OGQ%3D"]')
          .clear()
          .type('Novo Automacao')
        //Clique no botão de salvar 
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(1)')
          .click()
        //Assertiva do texto da modal    
        cy.get('#app > div.modal.modal__default.net__modal > div > div > p')
          .should('contain','Nome do dispositivo alterado com sucesso.') 
        //Clique no botão ok dentro da modal   
        cy.get('#app > div.modal.modal__default.net__modal > div > div > div.d-flex.justify-content-center.mt-16 > button')
          .should('contain','OK')   
          .click()
    })
    
    it('Wifi na Cidade - Cancelamento da edição do campo',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event')
          .click()
        //Clica no menu wifi na cidade
        cy.get('#menu-item-serviços-wi-fi-na-cidade > a')
          .click({force:true})
        //Assertiva Título da Página - Wi-fi na cidade
        cy.get('#app > div.mcr-page-heading.mdn-u-paddingBottom--lg > h1')
          .should('contain','Wi-fi na cidade')
        //Clique no botão de Editar
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(1)')
          .click()
        //Clique limpeza do campo + Adição do novo nome
        cy.xpath('//*[@id="device-input-MDY6Mzg6MGI6N2I6ODQ6OGQ%3D"]')
          .clear()
          .type('Novo Automacao')
        //Clique no botão Cancelar 
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(2)')  
          .click()
        //Assertiva Nome do dispositivo
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(1)')  
          .should('contain','Novo Automacao')
    })

    it('Wifi na Cidade - Exclusão do dispositivo',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event')
          .click()
        //Clica no menu wifi na cidade
        cy.get('#menu-item-serviços-wi-fi-na-cidade > a')
          .click({force:true})
        //Assertiva Título da Página - Wi-fi na cidade
        cy.get('#app > div.mcr-page-heading.mdn-u-paddingBottom--lg > h1')
          .should('contain','Wi-fi na cidade') 
        //Clique no botão Excluir 
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(2)')
          .click()
        //Assertiva do texto da modal      
        cy.get('#app > div.modal.modal__default.net__modal > div > div > p')
          .should('contain','Deseja excluir o dispositivo Novo Automacao?') 
        //Assertiva do botão dentro da modal    
        cy.get('#app > div.modal.modal__default.net__modal > div > div > div.d-flex.justify-content-center.mt-16 > button')
          .should('contain','Sim')   
    })

    it('Wifi na Cidade - Edição do campo para o nome anterior',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event')
          .click()
        //Clica no menu wifi na cidade
        cy.get('#menu-item-serviços-wi-fi-na-cidade > a')
          .click({force:true})
        //Assertiva Título da Página - Wi-fi na cidade
        cy.get('#app > div.mcr-page-heading.mdn-u-paddingBottom--lg > h1')
          .should('contain','Wi-fi na cidade')
        //Clique no botão de Editar
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(1)')
          .click()
        //Clique limpeza do campo + Adição do novo nome
        cy.xpath('//*[@id="device-input-MDY6Mzg6MGI6N2I6ODQ6OGQ%3D"]')
          .clear()
          .type('Novo')
        //Clique no botão de salvar 
        cy.get('#app > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.action-buttons > button:nth-child(1)')
          .click()
        //Clique no botão ok dentro da modal   
        cy.get('#app > div.modal.modal__default.net__modal > div > div > div.d-flex.justify-content-center.mt-16 > button')
          .click()
    })
})