/// <reference types="Cypress" />

import faker from 'faker/locale/pt_BR'
const foneContato = faker.phone.phoneNumber()


describe('Mudança de Endereço',()=>{
    beforeEach(()=>{
        cy.fetch()
        cy.visit("/")
        cy.loginClaroBcc(Cypress.env('userbcc'), Cypress.env('passwordbcc'))
        cy.Cancelamento()
    })

    it.only('Cancelar Produto', () => {
        //#region STEP DE CONTRATO
        //Validação da abertura do modal  
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > div > div > div.mdn-Row.mdn-u-paddingLeft--xs > div:nth-child(2) > div > div > div > div.mdn-Modal-body > p')
          .should('exist')
        //Clicar no botão - Solicitar cancelamento  
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > div > div > div.mdn-Row.mdn-u-paddingLeft--xs > div:nth-child(2) > div > div > div > div.mdn-Modal-footer > div > div > button.mdn-Button.mdn-Button--secondary')
           .should('contain' , 'Solicitar cancelamento') 
           .click()  
        //Assertiva informaçõrs do contrato
        cy.get('.contract-confirmation__title > .mdn-Heading')
          .should('contain', 'Antes de começar, confirme as informações do seu contrato');
        //Assertiva Número do contrato
        cy.get(':nth-child(1) > .user-information-data > .mdn-Text')
          .should('contain', '052/018629127')
        //Assertiva Endereço
        cy.get(':nth-child(3) > .user-information-data > .mdn-Text')
          .should('contain', 'Rua Bernardino De Campos, 799 - Campinas/SP')
        //Assertiva Nome
        cy.get(':nth-child(5) > .user-information-data > .mdn-Text')
          .should('contain', 'CLARO S/A')
        //Assertiva CPF/CNPJ
        cy.get(':nth-child(7) > .user-information-data > .mdn-Text')
          .should('contain', '40.432.544/0552-00')
        //Assertiva botão Voltar
        cy.get('.steps__standard-space-between-components-btns--come-back')
          .should('be.visible')
        //Clicar botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next')
          .click()
        //#endregion


        //#region STEP DE SELECIONAR PRODUTOS
        //Assertiva - Qual produto você quer solicitar o cancelamento?
        cy.get('.products-list > :nth-child(1) > .mdn-Heading')
          .should('contain', 'Qual produto você quer solicitar o cancelamento?')
        //Selecionar todos os produtos
        cy.get('#field-check-list-1')
          .click()
        //Clicar no botão Continuar
        cy.get('.mdn-Col-xs-12 > .mdn-Button--primary')
          .should('be.visible')
          .click()
        //#endregion

        //#region STEP DE MOTIVO
        //Assertiva - Por que você quer solicitar esse cancelamento?
        cy.get('.reasons-list > :nth-child(1) > .mdn-Heading')
          .should('contain', 'Por que você quer solicitar esse cancelamento?')
        //Assetiva frase "Nos ajude a melhorar nossos serviços ...."
        cy.get('.reasons-list__subtitle > :nth-child(1)')
          .should('contain', 'Nos ajude a melhorar nossos serviços explicando o motivo da sua solicitação.')
        //Assertiva - Produto que será cancelado: ENGENHARIA TOTAL HD MAX
        cy.get('.reasons-list__subtitle > :nth-child(2)')
          .should('contain', 'Produto que será cancelado')
        //Assertiva Motivo - Não estou satisfeito com meu plano/recebi outra oferta
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(1) > div > label.mdn-Radio-text')
          .should('contain', 'Não estou satisfeito com meu plano/recebi outra oferta')
        //Assertiva Motivo - Minha fatura veio com um valor diferente do que costumo pagar
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(2) > div > label.mdn-Radio-text')
          .should('contain', 'Minha fatura veio com um valor diferente do que costumo pagar')
        //Assertiva Motivo - O valor está muito alto para mim
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(3) > div > label.mdn-Radio-text')
          .should('contain', 'O valor está muito alto para mim')
        //Assertiva Motivo - Tive problemas técnicos com o produto, lentidão ou falta de sinal
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(4) > div > label.mdn-Radio-text')
          .should('contain', 'Tive problemas técnicos com o produto, lentidão ou falta de sinal')
        //Assertiva Motivo - Não estou satisfeito com o atendimento
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(5) > div > label.mdn-Radio-text')
          .should('contain', 'Não estou satisfeito com o atendimento')
        //Assertiva Motivo - Mudei de endereço
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(6) > div > label.mdn-Radio-text')
          .should('contain', 'Mudei de endereço')
        //Assertiva Motivo - Outros
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(7) > div > label.mdn-Radio-text')
          .should('contain', 'Outros')
          .click()
        cy.get('#textarea') 
          .type('ISSO É UM TESTE') 
        //Assertiva botão Voltar habilitado
        cy.get('.steps__standard-space-between-components-btns--come-back')
          .should('be.visible')
        //Clicar no botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next')
          .click()
        //#endregion


        //#region STEP Forma de solicitação
        //Assertiva titulo 
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__title > h1')
          .should('contain' , 'De que forma você gostaria de seguir com seu atendimento?')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components-btns.mdn-Container > div > div > button')
          .should('contain' , 'Voltar')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__cards > div > div:nth-child(1) > div > div > p.card__content--title.mdn-Text--body')
          .should('contain' , 'Continuar neste canal')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__cards > div > div:nth-child(2) > div > div > p.card__content--title.mdn-Text--body.mdn-Text--inverse')
          .should('contain' , 'Continuar pelo WhatsApp')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__cards > div > div:nth-child(1) > div > div > div > button')
          .should('contain' , 'Escolher essa opção')
          .click()  
        //#endregion

         
        //#region STEP DE CONTATO
        //Assertiva - Botao 'Sim, desejo receber uma proposta' está como default
        cy.get('.proposal-shortcut .proposal-shortcut__yes')
          .should('not.be.disabled')
        //Assertiva - Sim, desejo receber uma proposta
        cy.get('.mdn-Shortcut--primary > .mdn-Shortcut-text')
          .should('contain','Sim, desejo receber uma proposta')
        //Assertiva - Não desejo receber uma proposta + click
        cy.get('.mdn-Shortcut--secondary > .mdn-Shortcut-text')
          .should('contain', 'Não desejo receber uma proposta')
          .click()
        //Assertiva - Nós lamentamos sua decisão
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.contact-container.steps__standard-space-between-components.mdn-Container > section.message-acceped-or-denied > div > div > div.message-acceped-or-denied__copy-container.mdn-CopyContainer > div > p')
          .should('contain' , 'Nós lamentamos sua decisão.')
        //Assertiva - Informe seu contato
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.contact-container.steps__standard-space-between-components.mdn-Container > section.message-acceped-or-denied > div > div > div.message-acceped-or-denied__phone-contact > section > span > h1')
          .should('contain' , 'Informe seu contato')  
        //Preenchimento do campo de contato  
        cy.get('#telephone')
          .type('41991998655')  
        //Assertiva - Aceito receber o contato da Claro  
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.contact-container.steps__standard-space-between-components.mdn-Container > section.message-acceped-or-denied > div > div > div.message-acceped-or-denied__phone-contact > p > strong')
          .should('contain' , 'Aceito receber o contato da Claro')
        //Clique no botão continuar  
          cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section > div > div > button.mdn-Button.mdn-Button--primary.steps__standard-space-between-components-btns--next')
          .should('contain' , 'Continuar')
          .click()
        //#endregion

        //AQUI TERÁ UM NOVO STEP ANTES DO RESUMO E CONFIRMAÇÃO (AGUARDANDO FINALIZAÇÃO DO NOVO STEP)
        //#endregion

        //#region STEP DE RESUMO E CONFIRMAÇÃO
        //#endregion
    })

    it.only('Cancelar Contrato', () => {
        //#region STEP DE CONTRATO
        //Validação da abertura do modal  
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > div > div > div.mdn-Row.mdn-u-paddingLeft--xs > div:nth-child(2) > div > div > div > div.mdn-Modal-body > p')
          .should('exist')
        //Clicar no botão - Solicitar cancelamento  
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > div > div > div.mdn-Row.mdn-u-paddingLeft--xs > div:nth-child(2) > div > div > div > div.mdn-Modal-footer > div > div > button.mdn-Button.mdn-Button--secondary')
           .should('contain' , 'Solicitar cancelamento') 
           .click()  
        //Assertiva informaçõrs do contrato
        cy.get('.contract-confirmation__title > .mdn-Heading')
          .should('contain', 'Antes de começar, confirme as informações do seu contrato');
        //Assertiva Número do contrato
        cy.get(':nth-child(1) > .user-information-data > .mdn-Text')
          .should('contain', '052/018629127')
        //Assertiva Endereço
        cy.get(':nth-child(3) > .user-information-data > .mdn-Text')
          .should('contain', 'Rua Bernardino De Campos, 799 - Campinas/SP')
        //Assertiva Nome
        cy.get(':nth-child(5) > .user-information-data > .mdn-Text')
          .should('contain', 'CLARO S/A')
        //Assertiva CPF/CNPJ
        cy.get(':nth-child(7) > .user-information-data > .mdn-Text')
          .should('contain', '40.432.544/0552-00')
        //Assertiva botão Voltar
        cy.get('.steps__standard-space-between-components-btns--come-back')
          .should('be.visible')
        //Clicar botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next')
          .click()
        //#endregion      
      
       
        //#region STEP DE SELECIONAR PRODUTOS
        //Assertiva - Qual produto você quer solicitar o cancelamento?
        cy.get('.products-list > :nth-child(1) > .mdn-Heading')
          .should('contain', 'Qual produto você quer solicitar o cancelamento?')
        //Selecionar todos os produtos
        cy.get('#field-check-list-2')
          .click()
        //Clicar no botão Continuar
        cy.get('.mdn-Col-xs-12 > .mdn-Button--primary')
          .should('be.visible')
          .click()
        //#endregion 

      
        //#region STEP DE MOTIVO
        //Assertiva - Por que você quer solicitar esse cancelamento?
        cy.get('.reasons-list > :nth-child(1) > .mdn-Heading')
          .should('contain', 'Por que você quer solicitar esse cancelamento?')
        //Assetiva frase "Nos ajude a melhorar nossos serviços ...."
        cy.get('.reasons-list__subtitle > :nth-child(1)')
          .should('contain', 'Nos ajude a melhorar nossos serviços explicando o motivo da sua solicitação.')
        //Assertiva - Produto que será cancelado: ENGENHARIA TOTAL HD MAX
        cy.get('.reasons-list__subtitle > :nth-child(2)')
          .should('contain', 'Produtos que serão cancelados')
        //Assertiva Motivo - Não estou satisfeito com meu plano/recebi outra oferta
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(1) > div > label.mdn-Radio-text')
          .should('contain', 'Não estou satisfeito com meu plano/recebi outra oferta')
        //Assertiva Motivo - Minha fatura veio com um valor diferente do que costumo pagar
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(2) > div > label.mdn-Radio-text')
          .should('contain', 'Minha fatura veio com um valor diferente do que costumo pagar')
        //Assertiva Motivo - O valor está muito alto para mim
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(3) > div > label.mdn-Radio-text')
          .should('contain', 'O valor está muito alto para mim')
        //Assertiva Motivo - Tive problemas técnicos com o produto, lentidão ou falta de sinal
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(4) > div > label.mdn-Radio-text')
          .should('contain', 'Tive problemas técnicos com o produto, lentidão ou falta de sinal')
        //Assertiva Motivo - Não estou satisfeito com o atendimento
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(5) > div > label.mdn-Radio-text')
          .should('contain', 'Não estou satisfeito com o atendimento')
        //Assertiva Motivo - Mudei de endereço
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(6) > div > label.mdn-Radio-text')
          .should('contain', 'Mudei de endereço')
        //Assertiva Motivo - Outros
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(7) > div > label.mdn-Radio-text')
          .should('contain', 'Outros')
          .click()
        cy.get('#textarea') 
          .type('ISSO É UM TESTE') 
        //Assertiva botão Voltar habilitado
        cy.get('.steps__standard-space-between-components-btns--come-back')
          .should('be.visible')
        //Clicar no botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next')
          .click()
        //#endregion  


        //#region STEP Forma de solicitação
        //Assertiva titulo 
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__title > h1')
          .should('contain' , 'De que forma você gostaria de seguir com seu atendimento?')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components-btns.mdn-Container > div > div > button')
          .should('contain' , 'Voltar')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__cards > div > div:nth-child(1) > div > div > p.card__content--title.mdn-Text--body')
          .should('contain' , 'Continuar neste canal')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__cards > div > div:nth-child(2) > div > div > p.card__content--title.mdn-Text--body.mdn-Text--inverse')
          .should('contain' , 'Continuar pelo WhatsApp')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__cards > div > div:nth-child(1) > div > div > div > button')
          .should('contain' , 'Escolher essa opção')
          .click()  
        //#endregion        


        //#region STEP DE CONTATO
        //Assertiva - Botao 'Sim, desejo receber uma proposta' está como default
        cy.get('.proposal-shortcut .proposal-shortcut__yes')
          .should('not.be.disabled')
        //Assertiva - Sim, desejo receber uma proposta
        cy.get('.mdn-Shortcut--primary > .mdn-Shortcut-text')
          .should('contain','Sim, desejo receber uma proposta')
        //Assertiva - Não desejo receber uma proposta + click
        cy.get('.mdn-Shortcut--secondary > .mdn-Shortcut-text')
          .should('contain', 'Não desejo receber uma proposta')
        //Assertiva - Nossa equipe está a sua espera
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.contact-container.steps__standard-space-between-components.mdn-Container > section.message-acceped-or-denied > div > div > div > p.mcr-banner__title.mdn-Text.mdn-Text--inverse')
          .should('contain' , 'Nossa equipe está a sua espera')
        //Preenchimento do campo de contato  
        cy.get('#telephone')
          .type('41991998655') 
        //Assertiva - Ao clicar em Continuar, você concorda em receber o contato da Claro 
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.contact-container.steps__standard-space-between-components.mdn-Container > section.message-acceped-or-denied > div > div > p')
        .should('contain' , 'Ao clicar em Continuar, você concorda em receber o contato da Claro')  
         //Assertiva - botão voltar
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section > div > div > button.steps__standard-space-between-components-btns--come-back.mdn-Button.mdn-Button--secondary')
          .should('contain' , 'Voltar')
        //Clique no botão continuar  
          cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section > div > div > button.mdn-Button.mdn-Button--primary.steps__standard-space-between-components-btns--next')
          .should('contain' , 'Continuar')
          .click()
        //#endregion  


        //#region STEP DE RESUMO E CONFIRMAÇÃO
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section:nth-child(1) > h1')
          .should('contain' , 'Confirme os itens abaixo, podemos prosseguir?')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.confirmation__resume > div:nth-child(1)')
          .should('contain' , 'Produto(s) selecionado(s)')
        //Assertiva - Motivo
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.confirmation__resume > div:nth-child(2)')
          .should('contain' , 'Outros: ISSO É UM TESTE')
         //Assertiva - Telefone de contato
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.confirmation__resume > div:nth-child(3)')
          .should('contain' , '(41) 99199-8655')
        //Assertiva - Proposta de planos Claro
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.confirmation__resume > div:nth-child(4)')
          .should('contain' , 'Sim, desejo receber uma proposta')
        //Assertiva - botão Voltar
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section > div > div > button.steps__standard-space-between-components-btns--come-back.mdn-Button.mdn-Button--secondary')
          .should('contain' , 'Voltar')
        //Assertiva - botão Confirmar solicitação
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section > div > div > button.mdn-Button.mdn-Button--primary.steps__finish-button')
          .should('contain' , 'Confirmar solicitação')  
        //#endregion

    })
    it('Cancelar Contrato - Whatsapp', () => {
        //#region STEP DE CONTRATO
        //Validação da abertura do modal  
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > div > div > div.mdn-Row.mdn-u-paddingLeft--xs > div:nth-child(2) > div > div > div > div.mdn-Modal-body > p')
          .should('exist')
        //Clicar no botão - Solicitar cancelamento  
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > div > div > div.mdn-Row.mdn-u-paddingLeft--xs > div:nth-child(2) > div > div > div > div.mdn-Modal-footer > div > div > button.mdn-Button.mdn-Button--secondary')
          .should('contain' , 'Solicitar cancelamento') 
          .click()  
        //Assertiva informaçõrs do contrato
        cy.get('.contract-confirmation__title > .mdn-Heading')
          .should('contain', 'Antes de começar, confirme as informações do seu contrato');
        //Assertiva Número do contrato
        cy.get(':nth-child(1) > .user-information-data > .mdn-Text')
          .should('contain', '052/018629127')
        //Assertiva Endereço
        cy.get(':nth-child(3) > .user-information-data > .mdn-Text')
          .should('contain', 'Rua Bernardino De Campos, 799 - Campinas/SP')
        //Assertiva Nome
        cy.get(':nth-child(5) > .user-information-data > .mdn-Text')
          .should('contain', 'CLARO S/A')
        //Assertiva CPF/CNPJ
        cy.get(':nth-child(7) > .user-information-data > .mdn-Text')
          .should('contain', '40.432.544/0552-00')
        //Assertiva botão Voltar
        cy.get('.steps__standard-space-between-components-btns--come-back')
          .should('be.visible')
        //Clicar botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next')
          .click()
        //#endregion      
    
     
        //#region STEP DE SELECIONAR PRODUTOS
        //Assertiva - Qual produto você quer solicitar o cancelamento?
        cy.get('.products-list > :nth-child(1) > .mdn-Heading')
          .should('contain', 'Qual produto você quer solicitar o cancelamento?')
        //Selecionar todos os produtos
        cy.get('#field-check-list-2')
          .click()
        //Clicar no botão Continuar
        cy.get('.mdn-Col-xs-12 > .mdn-Button--primary')
          .should('be.visible')
          .click()
        //#endregion 

    
        //#region STEP DE MOTIVO
        //Assertiva - Por que você quer solicitar esse cancelamento?
        cy.get('.reasons-list > :nth-child(1) > .mdn-Heading')
          .should('contain', 'Por que você quer solicitar esse cancelamento?')
        //Assetiva frase "Nos ajude a melhorar nossos serviços ...."
        cy.get('.reasons-list__subtitle > :nth-child(1)')
          .should('contain', 'Nos ajude a melhorar nossos serviços explicando o motivo da sua solicitação.')
        //Assertiva - Produto que será cancelado: ENGENHARIA TOTAL HD MAX
        cy.get('.reasons-list__subtitle > :nth-child(2)')
          .should('contain', 'Produtos que serão cancelados')
        //Assertiva Motivo - Não estou satisfeito com meu plano/recebi outra oferta
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(1) > div > label.mdn-Radio-text')
          .should('contain', 'Não estou satisfeito com meu plano/recebi outra oferta')
        //Assertiva Motivo - Minha fatura veio com um valor diferente do que costumo pagar
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(2) > div > label.mdn-Radio-text')
          .should('contain', 'Minha fatura veio com um valor diferente do que costumo pagar')
        //Assertiva Motivo - O valor está muito alto para mim
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(3) > div > label.mdn-Radio-text')
          .should('contain', 'O valor está muito alto para mim')
        //Assertiva Motivo - Tive problemas técnicos com o produto, lentidão ou falta de sinal
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(4) > div > label.mdn-Radio-text')
          .should('contain', 'Tive problemas técnicos com o produto, lentidão ou falta de sinal')
        //Assertiva Motivo - Não estou satisfeito com o atendimento
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(5) > div > label.mdn-Radio-text')
          .should('contain', 'Não estou satisfeito com o atendimento')
        //Assertiva Motivo - Mudei de endereço
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(6) > div > label.mdn-Radio-text')
          .should('contain', 'Mudei de endereço')
        //Assertiva Motivo - Outros
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > section.reasons-list__check-list > div:nth-child(7) > div > label.mdn-Radio-text')
          .should('contain', 'Outros')
          .click()
        cy.get('#textarea') 
          .type('ISSO É UM TESTE') 
        //Assertiva botão Voltar habilitado
        cy.get('.steps__standard-space-between-components-btns--come-back')
          .should('be.visible')
        //Clicar no botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next')
          .click()
        //#endregion  


        //#region STEP Forma de solicitação
        //Assertiva titulo 
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__title > h1')
          .should('contain' , 'De que forma você gostaria de seguir com seu atendimento?')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components-btns.mdn-Container > div > div > button')
          .should('contain' , 'Voltar')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__cards > div > div:nth-child(1) > div > div > p.card__content--title.mdn-Text--body')
          .should('contain' , 'Continuar neste canal')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__cards > div > div:nth-child(2) > div > div > p.card__content--title.mdn-Text--body.mdn-Text--inverse')
          .should('contain' , 'Continuar pelo WhatsApp')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__cards > div > div:nth-child(1) > div > div > div > button')
          .should('contain' , 'Escolher essa opção')
        cy.get('#telephone')
          .type('41991998655')  
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > section.steps__standard-space-between-components.mdn-Container > section > section.attendance-channel__cards > div > div:nth-child(2) > div > div > div > button')
          .should('contain' , 'Solicitar contato')
          .click()  
        //#endregion     


        //#region STEP Confirmação (Será necessário refaturar em breve)
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > div.mdn-Row.mdn-u-alignItems-xs-center.mdn-u-marginBottom--md > div > p')
          .should('contain' , ' Enviamos uma mensagem para você! Acesse o WhatsApp no seu celular. Continuaremos seu atendimento por lá!')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > div:nth-child(2) > div:nth-child(1) > p > span')
          .should('contain' , 'Protocolo')  
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg.wizard-container > div > div > div > div.steps__standard-space-between-components.mdn-Container > div > div:nth-child(2) > div:nth-child(3) > p')
          .should('contain' , 'Número de protocolo gerado')
        //#endregion       
  })    
})