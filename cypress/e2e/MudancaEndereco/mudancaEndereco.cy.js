/// <reference types="Cypress" />

const url = '**/installation-address-change/**'

describe('Mudança de Endereço',()=>{
    beforeEach(()=>{
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))
        cy.MudancaEndereco()
    })

    it('Mudança de endereço - Sim, Utilizar o novo endereço para instalação e recebimento de fatura',()=>{
        //Assertiva - Preencha os campos com seu novo endereço de instalação
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > h2.form-address__title.mdn-Heading.mdn-Heading--xs')
          .should('contain','Preencha os campos com seu novo endereço de instalação')
        //Assertiva - Endereço atual
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.actualAddress > div > h3')
          .should('contain','Endereço atual')
        //Assertiva - CEP e número do novo endereço
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(1) > div.mdn-Col-xs-12.mdn-Col-sm-12.mdn-u-paddingBottom--xxs > h3')
          .should('contain','CEP e número do novo endereço')
        //Preencher o campo CEP 
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(1) > div:nth-child(2) > div.mdn-Input > input')
          .type('83025-590')
        //Preencher o campo Número 
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(1) > div:nth-child(3) > div > input')
          .type('1930')
        //Assertiva -  Novo endereço completo
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(2) > div.mdn-Col-xs-12.mdn-Col-sm-12.mdn-u-paddingBottom--xxs > h3')
          .should('contain' , 'Novo endereço completo')
        //Assertiva - UF
        cy.get('#select')
          .should('contain', 'Paraná')
        //Assertiva - Cidade
        cy.get('#select > option:nth-child(943)')
          .should('contain', 'Sao Jose Dos Pinhais')
        //Assertiva - Bairro
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(1) > div.mdn-Input.mdn-Input--activatedField > input')
          .should('be.visible')
        //Assertiva - Rua, avenida, travessa, etc...
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(2) > div.mdn-Input.mdn-Input--activatedField > input')
          .should('be.visible')
        //Clique - Meu endereço possui complemento
        cy.get('#toggleButton')
          .click()
        //Selecionar o campo Outros
        cy.xpath('/html/body/main/section/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div[4]/div[2]/div/div/select')
          .select('Outro')
        //Preencher o campo OUTROS
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(4) > div.mdn-Col-xs-12.mdn-Col-sm-12.mdn-Col-md-12.mdn-Col-lg-6.mdn-u-paddingTop--xxxs.mcrAddressForm__complement > div > input')  
          .type('TESTE') 
        //Assertiva - Utilizar o mesmo endereço para recebimento de fatura?
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > h2.form-address__addressBillingTitle.mdn-Heading.mdn-Heading--xs')
          .should('contain' , 'Utilizar o mesmo endereço para recebimento de fatura?')
        //Assertiva - Sim, utilizar o novo endereço para instalação e recebimento de fatura
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.address-billing-question > div > div:nth-child(1) > div > label.mdn-Radio-text')
          .should('contain' , 'Sim, utilizar o novo endereço para instalação e recebimento de fatura')
        //Assertiva - Não, desejo utilizar outro endereço de cobrança
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.address-billing-question > div > div:nth-child(2) > div > label.mdn-Radio-text')
          .should('contain' , 'Não, desejo utilizar outro endereço de cobrança')
        //Clique - Sim, utilizar o novo endereço para instalação e recebimento de fatura
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.address-billing-question > div > div:nth-child(1) > div > label.mdn-Radio-text')
          .click()
        //Clique - Estou ciente
        cy.get('#confirm-equipment-in-new-address')
          .click()
        //Clicar no botão continuar
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-Row.mdn-u-justifyContent-xs-end > div > button')
          .click()
        //#region STEP - AGENDAMENTO
        //Assertiva - Escolha a data da instalação
        cy.get('.scheduling__title')
          .should('contain', 'Escolha a data da instalação')
        //Assertiva - Selecione o melhor dia e período para a visita técnica.
        cy.get('.scheduling__subtitle')
          .should('contain', 'Selecione o melhor dia e período para a visita técnica.')
        //Assertiva  - calendário
        cy.get('.datepicker-popup')
          .should('be.visible')
          .and('not.be.disabled')
        //Assertiva - Mora em condomínio? Fique atento aos horários permitidos para a entrada de nosso técnico.
        cy.get('.mdn-Tag > p')
          .should('contain', 'Mora em condomínio? Fique atento aos horários permitidos para a entrada de nosso técnico.')  
        //Assertiva - Horários disponíveis
        cy.get('.mdn-Col-sm-6 > .mdn-Heading')
          .should('contain', 'Horários disponíveis')
        //Assertiva - Checkbox das datas
        cy.get(':nth-child(2) > .mdn-Col-sm-6 > .mdn-Radio')
          .should('be.visible')
        //Clicar no primeiro botao de data
        cy.get(':nth-child(2) > .mdn-Col-sm-6 > .mdn-Radio > .mdn-Radio-label')
          .click()
        //Assertiva - Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.
        cy.get('.scheduling__accept > .mdn-Col-xs-12 > .mdn-Checkbox > .mdn-Checkbox-text')
          .should('contain', 'Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.')
        //Clicar no botao estou ciente
        cy.get('#confirm-schedule')
          .click()
        //Clicar no botao continuar
        cy.get(':nth-child(2) > .mdn-Button')
          .click()
        //#endregion
        //#region STEP - RESPONSAVEL
        //Assertiva - Com quem o técnico poderá falar no dia da instalação?
        cy.get('.responsible__title')
          .should('contain', 'Com quem o técnico poderá falar no dia da instalação?')
        //Assertiva - Informe o contato do titular ou de outra pessoa maior de 18 anos.
        cy.get('.responsible__subtitle')
          .should('contain', 'Informe o contato do titular ou de outra pessoa maior de 18 anos.')
        //Assertiva - Botao Titular do contrato
        cy.get('.responsible__selecting > :nth-child(1) > .mdn-Radio > .mdn-Radio-text')
         .should('contain', 'Titular do contrato')
        //Assertiva - Botao Outro
        cy.get('.responsible__selecting > :nth-child(2) > .mdn-Radio > .mdn-Radio-text')
          .should('contain', 'Outro')
        //Clicar no botao Titular do contrato
        cy.get('.responsible__selecting > :nth-child(1) > .mdn-Radio > .mdn-Radio-label')
          .click()
        //Assertiva - Nome
        cy.get('#responsible-owner > :nth-child(1) > .mdn-Col-xs-12 > .mdn-Input > .mdn-Input-label')
          .should('contain', 'Nome')
        //Assertiva - E-mail
        cy.get('#responsible-owner > :nth-child(2) > :nth-child(1) > .mdn-Input > .mdn-Input-label')
          .should('contain', 'E-mail')
        //Preencher - E-mail  
        cy.get('#txt-email')
          .clear()
          .type('sergio.faria@mutant.com.br')
        //Assertiva - Telefone residencial
        cy.get('#responsible-owner > :nth-child(2) > :nth-child(2) > .mdn-Input > .mdn-Input-label')
          .should('contain', 'Telefone residencial')
        //Preencher - Telefone residencial  
        cy.get('#txt-residentialPhone')
          .clear()
          .type('41991998655')
        //Assertiva - Telefone Celular
        cy.get(':nth-child(3) > :nth-child(1) > .mdn-Input > .mdn-Input-label')
          .should('contain', 'Telefone celular')
        //Preencher - Telefone Celular
        cy.get('#txt-cellPhone')
          .clear()
          .type('41991998655')
        //Assertiva - Ao alterar as informações acima, você também irá alterar no seu cadastro
        cy.get('.mdn-Tag > p')
          .should('contain', 'Ao alterar as informações acima, você também irá alterar no seu cadastro')
        //Assertiva - Desejo receber atualizações via WhatsApp sobre a minha solicitação de Mudança de endereço
        cy.get('#app-wrapper > div > div.responsible.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div.mdn-ToggleGroup.whatsappToggle > p')
          .should('contain' , 'Desejo receber atualizações via WhatsApp sobre a minha solicitação de Mudança de endereço')    
        //Assertiva - Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.
        cy.get('.mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
          .should('contain', 'Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.')
        //Clicar no botao estou ciente
        cy.get('#confirm-responsible-in-new-address')
          .click()
        //Clicar no botao continuar
        cy.get(':nth-child(2) > .mdn-Button')
          .click()
        //#region STEP - CONFIRMAÇÃO
        //Assertiva - Confirmação de dados
        cy.get('.responsible__title')
        .should('contain', 'Confirmação de dados')
      //Assertiva - Confirme as informações abaixo para agendar a instalação de seus produtos Claro em seu novo endereço.
      cy.get('.responsible__subtitle')
        .should('contain', 'Confirme as informações abaixo para agendar a instalação de seus produtos Claro em seu novo endereço.')
      //Assertiva - Endereço atual
      cy.get(':nth-child(1) > .address-list > :nth-child(1) > .address-list__item-main-content > .address-label > .address-label__title')
        .should('contain', 'Endereço atual')
      //Assertiva - Novo endereço
      cy.get(':nth-child(1) > .address-list > :nth-child(2) > .address-list__item-main-content > .address-label > .address-label__title')
        .should('contain', 'Novo endereço');
      //Assertiva - R Antonio Zaramella, 1930
      cy.get(':nth-child(2) > .address-list__item-main-content > .address-label > .address-label__subtitle')
        .should('contain', 'R Antonio Zaramella, 1930')
      //Assertiva - Endereço de cobrança
      cy.get('.address-label.mdn-u-padding--xs > .address-label__title')
        .should('contain', 'Endereço de cobrança')
      //Assertiva - R Antonio Zaramella, 1930
      cy.get('.address-label.mdn-u-padding--xs > .address-label__subtitle')
        .should('contain', 'R Antonio Zaramella, 1930')
      //Assertiva - Detalhes
      cy.get('.confirmation__detail > :nth-child(3)')
        .should('contain', 'Detalhes')
      //Assertiva - Dia da Visita Técnica
      cy.get(':nth-child(1) > .mcr-List > :nth-child(1) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'Dia da Visita Técnica')
      //Assertiva - Taxa de instalação
      cy.get(':nth-child(1) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'Taxa de instalação')
      //Assertiva - R$ 0,00
      cy.get(':nth-child(1) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
        .should('contain', 'R$ 0,00')
      //Assertiva - E-mail
      cy.get(':nth-child(1) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'E-mail')
      //Assertiva - lucasqualidade@teste.com.br
      cy.get(':nth-child(1) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
        .should('contain', 'sergio.faria@mutant.com.br')
      //Assertiva - Período
      cy.get(':nth-child(2) > .mcr-List > :nth-child(1) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'Período')
      //Assertiva - Responsável
      cy.get(':nth-child(2) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'Responsável')
      //Assertiva - Claro S.a.
      cy.get(':nth-child(2) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
        .should('contain', 'Claro S.a.')
      //Assertiva - Telefone residencial
      cy.get(':nth-child(2) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'Telefone residencial')
      //Assertiva - (41) 99199-8655
      cy.get(':nth-child(2) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
        .should('contain', '(41) 99199-8655')
      //Assertiva - Telefone celular
      cy.get(':nth-child(1) > ul > li:nth-child(5) > div.mcr-List-Item-Content > strong')
        .should('contain', 'Telefone celular')
      //Assertiva - (41) 99199-8655  
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div.mdn-Row.mdn-u-marginBottom--lg > div:nth-child(1) > ul > li:nth-child(5)')  
        .should('contain' , '(41) 99199-8655')
      //Assertiva - Aceites
      cy.get('.confirmation-accepts > .confirmation__detail__title')
        .should('contain', 'Aceites')
      //Assertiva - Confirmo que escolhi a data e horário que melhor me atendem.
      cy.get(':nth-child(1) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Confirmo que escolhi a data e horário que melhor me atendem.')
      //Assertiva - Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.
      cy.get(':nth-child(2) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.')
      //Assertiva - Estou ciente de que tenho que levar meus equipamentos para o meu novo endereço.
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div.confirmation-accepts > ul > li:nth-child(3) > div.mcr-List-Item-Content > div > label')
        .should('contain', 'Estou ciente de que tenho que levar meus equipamentos para o meu novo endereço.')
      //Assertiva - Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.
      cy.get(':nth-child(4) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.')
      //#endregion 
    })

    it('Mudança de endereço - Não, desejo utilizar outro endereço de cobrança',()=>{
       //Assertiva - Preencha os campos com seu novo endereço de instalação
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > h2.form-address__title.mdn-Heading.mdn-Heading--xs')
         .should('contain','Preencha os campos com seu novo endereço de instalação')
       //Assertiva - Endereço atual
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.actualAddress > div > h3')
         .should('contain','Endereço atual')
       //Assertiva - CEP e número do novo endereço
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(1) > div.mdn-Col-xs-12.mdn-Col-sm-12.mdn-u-paddingBottom--xxs > h3')
         .should('contain','CEP e número do novo endereço')
       //Preencher o campo CEP 
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(1) > div:nth-child(2) > div.mdn-Input > input')
         .type('83025-590')
       //Preencher o campo Número 
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(1) > div:nth-child(3) > div > input')
         .type('1930')
       //Assertiva -  Novo endereço completo
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(2) > div.mdn-Col-xs-12.mdn-Col-sm-12.mdn-u-paddingBottom--xxs > h3')
         .should('contain' , 'Novo endereço completo')
       //Assertiva - UF
       cy.get('#select')
         .should('contain', 'Paraná')
       //Assertiva - Cidade
       cy.get('#select > option:nth-child(943)')
         .should('contain', 'Sao Jose Dos Pinhais')
       //Assertiva - Bairro
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(1) > div.mdn-Input.mdn-Input--activatedField > input')
         .should('be.visible')
       //Assertiva - Rua, avenida, travessa, etc...
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(2) > div.mdn-Input.mdn-Input--activatedField > input')
         .should('be.visible')
       //Clique - Meu endereço possui complemento
       cy.get('#toggleButton')
         .click()
       //Selecionar o campo Outros
       cy.xpath('/html/body/main/section/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div[4]/div[2]/div/div/select')
         .select('Outro')
       //Preencher o campo OUTROS
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(4) > div.mdn-Col-xs-12.mdn-Col-sm-12.mdn-Col-md-12.mdn-Col-lg-6.mdn-u-paddingTop--xxxs.mcrAddressForm__complement > div > input')  
         .type('TESTE')
       //Assertiva - Utilizar o mesmo endereço para recebimento de fatura?
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > h2.form-address__addressBillingTitle.mdn-Heading.mdn-Heading--xs')
          .should('contain' , 'Utilizar o mesmo endereço para recebimento de fatura?')
        //Assertiva - Sim, utilizar o novo endereço para instalação e recebimento de fatura
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.address-billing-question > div > div:nth-child(1) > div > label.mdn-Radio-text')
          .should('contain' , 'Sim, utilizar o novo endereço para instalação e recebimento de fatura')
        //Assertiva - Não, desejo utilizar outro endereço de cobrança
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.address-billing-question > div > div:nth-child(2) > div > label.mdn-Radio-text')
          .should('contain' , 'Não, desejo utilizar outro endereço de cobrança')
        //Clique - Não, desejo utilizar outro endereço de cobrança
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.address-billing-question > div > div:nth-child(2) > div > label.mdn-Radio-text')
          .click()
        //Preenchimento do CEP do novo Endereço  
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(6) > div > div:nth-child(1) > div:nth-child(2) > div.mdn-Input > input')
          .clear()
          .type('81280280') 
        //Preenchimento do Número do novo Endereço    
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(6) > div > div:nth-child(1) > div:nth-child(3) > div > input')
          .clear()
          .type('10')  
        //Assertiva do campo Bairro
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(6) > div > div:nth-child(3) > div:nth-child(1) > div.mdn-Input.mdn-Input--activatedField > input')
          .should('be.visible')
        //Assertiva do campo Rua, avenida, travessa, etc...
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(6) > div > div:nth-child(3) > div:nth-child(2) > div.mdn-Input.mdn-Input--activatedField > input')
          .should('be.visible')
        //Preencher o campo complento
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(6) > div > div:nth-child(4) > div > div > input')
          .clear()
          .type('Apto 304')
        //Clique - Estou ciente
        cy.get('#confirm-equipment-in-new-address')
          .click()
        //Clicar no botão continuar
        cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-Row.mdn-u-justifyContent-xs-end > div > button')
          .click()
        //#endregion
        //#region STEP - AGENDAMENTO
        //Assertiva - Escolha a data da instalação
        cy.get('.scheduling__title')
          .should('contain', 'Escolha a data da instalação')
        //Assertiva - Selecione o melhor dia e período para a visita técnica.
        cy.get('.scheduling__subtitle')
          .should('contain', 'Selecione o melhor dia e período para a visita técnica.')
        //Assertiva  - calendário
        cy.get('.datepicker-popup')
          .should('be.visible')
          .and('not.be.disabled')
        //Assertiva - Mora em condomínio? Fique atento aos horários permitidos para a entrada de nosso técnico.
        cy.get('.mdn-Tag > p')
          .should('contain', 'Mora em condomínio? Fique atento aos horários permitidos para a entrada de nosso técnico.')  
        //Assertiva - Horários disponíveis
        cy.get('.mdn-Col-sm-6 > .mdn-Heading')
          .should('contain', 'Horários disponíveis')
        //Assertiva - Checkbox das datas
        cy.get(':nth-child(2) > .mdn-Col-sm-6 > .mdn-Radio')
          .should('be.visible')
        //Clicar no primeiro botao de data
        cy.get(':nth-child(2) > .mdn-Col-sm-6 > .mdn-Radio > .mdn-Radio-label')
          .click()
        //Assertiva - Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.
        cy.get('.scheduling__accept > .mdn-Col-xs-12 > .mdn-Checkbox > .mdn-Checkbox-text')
          .should('contain', 'Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.')
        //Clicar no botao estou ciente
        cy.get('#confirm-schedule')
          .click()
        //Clicar no botao continuar
        cy.get(':nth-child(2) > .mdn-Button')
          .click()
        //#endregion
        //#region STEP - RESPONSAVEL
        //Assertiva - Com quem o técnico poderá falar no dia da instalação?
        cy.get('.responsible__title')
          .should('contain', 'Com quem o técnico poderá falar no dia da instalação?')
        //Assertiva - Informe o contato do titular ou de outra pessoa maior de 18 anos.
        cy.get('.responsible__subtitle')
          .should('contain', 'Informe o contato do titular ou de outra pessoa maior de 18 anos.')
        //Assertiva - Botao Titular do contrato
        cy.get('.responsible__selecting > :nth-child(1) > .mdn-Radio > .mdn-Radio-text')
          .should('contain', 'Titular do contrato')
        //Assertiva - Botao Outro
        cy.get('.responsible__selecting > :nth-child(2) > .mdn-Radio > .mdn-Radio-text')
         .should('contain', 'Outro')
        //Clicar no botao Outro
        cy.get('.responsible__selecting > :nth-child(2) > .mdn-Radio > .mdn-Radio-label')
          .click()
        //Assertiva - Nome
        cy.get('#responsible-main > :nth-child(1) > :nth-child(1) > .mdn-Input > .mdn-Input-label')
          .should('contain', 'Nome')
        //Preencher o campo Nome
        cy.get('#txt-name')
          .click()
          .type('Qualidade Teste')
        //Assertiva - E-mail
        cy.get('#responsible-main > :nth-child(1) > :nth-child(2) > .mdn-Input > .mdn-Input-label')
          .should('contain', 'E-mail')
        //Preencher o campo E-mail
        cy.get('#txt-email')
          .click()
          .type('sergio.faria@mutant.com.br')
        //Assertiva - Telefone de contato
        cy.get('#responsible-main > :nth-child(2) > .mdn-Col-xs-12 > .mdn-Input > .mdn-Input-label')
          .should('contain', 'Telefone de contato')
        //Preencher o campo Telefone de contato
        cy.get('#txt-contactPhone')
          .click()
          .type('41991998655')
        //Assertiva - Ao alterar as informações acima, você também irá alterar no seu cadastro
        //cy.get('.mdn-Tag > p').should('contain', 'Ao alterar as informações acima, você também irá alterar no seu cadastro')
        //Assertiva - Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.
        cy.get('.mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
          .should('contain', 'Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.')
        //Clicar no botao estou ciente
        cy.get('#confirm-responsible-in-new-address')
          .click()
        //Clicar no botao continuar
        cy.get(':nth-child(2) > .mdn-Button')
          .click()
        //#endregion
        //#region STEP - CONFIRMAÇÃO
        //Assertiva - Confirmação de dados
        cy.get('.responsible__title')
          .should('contain', 'Confirmação de dados')
        //Assertiva - Confirme as informações abaixo para agendar a instalação de seus produtos Claro em seu novo endereço.
        cy.get('.responsible__subtitle')
          .should('contain', 'Confirme as informações abaixo para agendar a instalação de seus produtos Claro em seu novo endereço.')
        //Assertiva - Endereço atual
        cy.get(':nth-child(1) > .address-list > :nth-child(1) > .address-list__item-main-content > .address-label > .address-label__title')
          .should('contain', 'Endereço atual')
        //Assertiva - Novo endereço
        cy.get(':nth-child(1) > .address-list > :nth-child(2) > .address-list__item-main-content > .address-label > .address-label__title')
          .should('contain', 'Novo endereço');
        //Assertiva - R Antonio Zaramella, 1930
        cy.get(':nth-child(2) > .address-list__item-main-content > .address-label > .address-label__subtitle')
          .should('contain', 'R Antonio Zaramella, 1930')
        //Assertiva - Endereço de cobrança
        cy.get('.address-label.mdn-u-padding--xs > .address-label__title')
          .should('contain', 'Endereço de cobrança')
        //Assertiva - R Joao Koleski, 10 , Apto 304 -  Cidade Industrial - Curitiba - PR - CEP: 81280-280
        cy.get('.address-label.mdn-u-padding--xs > .address-label__subtitle')
          .should('contain', 'R Joao Koleski, 10 , Apto 304 -  Cidade Industrial - Curitiba - PR - CEP: 81280-280')
        //Assertiva - Detalhes
        cy.get('.confirmation__detail > :nth-child(3)')
          .should('contain', 'Detalhes')
        //Assertiva - Dia da Visita Técnica
        cy.get(':nth-child(1) > .mcr-List > :nth-child(1) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
          .should('contain', 'Dia da Visita Técnica')
        //Assertiva - Taxa de instalação
        cy.get(':nth-child(1) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
          .should('contain', 'Taxa de instalação')
        //Assertiva - R$ 0,00
        cy.get(':nth-child(1) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
          .should('contain', 'R$ 0,00')
        //Assertiva - E-mail
        cy.get(':nth-child(1) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
          .should('contain', 'E-mail')
        //Assertiva - lucasqualidade@teste.com.br
        cy.get(':nth-child(1) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
          .should('contain', 'sergio.faria@mutant.com.br')
        //Assertiva - Período
        cy.get(':nth-child(2) > .mcr-List > :nth-child(1) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
          .should('contain', 'Período')
        //Assertiva - Responsável
        cy.get(':nth-child(2) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
          .should('contain', 'Responsável')
        //Assertiva - Qualidade Teste
        cy.get(':nth-child(2) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
          .should('contain', 'Qualidade Teste')
        //Assertiva - Telefone de contato
        cy.get(':nth-child(2) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
          .should('contain', 'Telefone de contato')
        //Assertiva - (41) 99199-8655
        cy.get(':nth-child(2) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
          .should('contain', '(41) 99199-8655')
        //Assertiva - Aceites
        cy.get('.confirmation-accepts > .confirmation__detail__title')
          .should('contain', 'Aceites')
        //Assertiva - Confirmo que escolhi a data e horário que melhor me atendem.
        cy.get(':nth-child(1) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
          .should('contain', 'Confirmo que escolhi a data e horário que melhor me atendem.')
        //Assertiva - Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.
        cy.get(':nth-child(2) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
          .should('contain', 'Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.')
        //Assertiva - Estou ciente de que tenho que levar meus equipamentos para o meu novo endereço.
        cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div.confirmation-accepts > ul > li:nth-child(3) > div.mcr-List-Item-Content > div > label')
          .should('contain', 'Estou ciente de que tenho que levar meus equipamentos para o meu novo endereço.')
        //Assertiva - Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.
        cy.get(':nth-child(4) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
          .should('contain', 'Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.')
        //#endregion
    })

    it('Mudança de endereço - Validação do fluxo completo',()=>{
       //Assertiva - Preencha os campos com seu novo endereço de instalação
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > h2.form-address__title.mdn-Heading.mdn-Heading--xs')
         .should('contain','Preencha os campos com seu novo endereço de instalação')
       //Assertiva - Endereço atual
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.actualAddress > div > h3')
         .should('contain','Endereço atual')
       //Assertiva - CEP e número do novo endereço
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(1) > div.mdn-Col-xs-12.mdn-Col-sm-12.mdn-u-paddingBottom--xxs > h3')
         .should('contain','CEP e número do novo endereço')
       //Preencher o campo CEP 
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(1) > div:nth-child(2) > div.mdn-Input > input')
         .type('83025-590')
       //Preencher o campo Número 
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(1) > div:nth-child(3) > div > input')
         .type('1930')
       //Assertiva -  Novo endereço completo
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(2) > div.mdn-Col-xs-12.mdn-Col-sm-12.mdn-u-paddingBottom--xxs > h3')
         .should('contain' , 'Novo endereço completo')
       //Assertiva - UF
       cy.get('#select')
         .should('contain', 'Paraná')
       //Assertiva - Cidade
       cy.get('#select > option:nth-child(943)')
         .should('contain', 'Sao Jose Dos Pinhais')
       //Assertiva - Bairro
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(1) > div.mdn-Input.mdn-Input--activatedField > input')
         .should('be.visible')
       //Assertiva - Rua, avenida, travessa, etc...
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(2) > div.mdn-Input.mdn-Input--activatedField > input')
         .should('be.visible')
       //Clique - Meu endereço possui complemento
       cy.get('#toggleButton')
         .click()
       //Selecionar o campo Outros
       cy.xpath('/html/body/main/section/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div[4]/div[2]/div/div/select')
         .select('Outro')
       //Preencher o campo OUTROS
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div:nth-child(3) > div > div:nth-child(4) > div.mdn-Col-xs-12.mdn-Col-sm-12.mdn-Col-md-12.mdn-Col-lg-6.mdn-u-paddingTop--xxxs.mcrAddressForm__complement > div > input')  
         .type('TESTE') 
       //Assertiva - Utilizar o mesmo endereço para recebimento de fatura?
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > h2.form-address__addressBillingTitle.mdn-Heading.mdn-Heading--xs')
         .should('contain' , 'Utilizar o mesmo endereço para recebimento de fatura?')
       //Assertiva - Sim, utilizar o novo endereço para instalação e recebimento de fatura
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.address-billing-question > div > div:nth-child(1) > div > label.mdn-Radio-text')
         .should('contain' , 'Sim, utilizar o novo endereço para instalação e recebimento de fatura')
       //Assertiva - Não, desejo utilizar outro endereço de cobrança
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.address-billing-question > div > div:nth-child(2) > div > label.mdn-Radio-text')
        .should('contain' , 'Não, desejo utilizar outro endereço de cobrança')
       //Clique - Sim, utilizar o novo endereço para instalação e recebimento de fatura
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-u-padding--xs.card > div.mdn-Row.address-billing-question > div > div:nth-child(1) > div > label.mdn-Radio-text')
         .click()
       //Clique - Estou ciente
       cy.get('#confirm-equipment-in-new-address')
         .click()
       //Clicar no botão continuar
       cy.get('#app-wrapper > div > div:nth-child(2) > div > div.mdn-Row.mdn-u-justifyContent-xs-end > div > button')
         .click()
       //#region STEP - AGENDAMENTO
       //Assertiva - Escolha a data da instalação
       cy.get('.scheduling__title')
         .should('contain', 'Escolha a data da instalação')
       //Assertiva - Selecione o melhor dia e período para a visita técnica.
       cy.get('.scheduling__subtitle')
         .should('contain', 'Selecione o melhor dia e período para a visita técnica.')
       //Assertiva  - calendário
       cy.get('.datepicker-popup')
         .should('be.visible')
         .and('not.be.disabled')
       //Assertiva - Mora em condomínio? Fique atento aos horários permitidos para a entrada de nosso técnico.
       cy.get('.mdn-Tag > p')
         .should('contain', 'Mora em condomínio? Fique atento aos horários permitidos para a entrada de nosso técnico.')  
       //Assertiva - Horários disponíveis
       cy.get('.mdn-Col-sm-6 > .mdn-Heading')
         .should('contain', 'Horários disponíveis')
       //Assertiva - Checkbox das datas
       cy.get(':nth-child(2) > .mdn-Col-sm-6 > .mdn-Radio')
         .should('be.visible')
       //Clicar no primeiro botao de data
       cy.get(':nth-child(2) > .mdn-Col-sm-6 > .mdn-Radio > .mdn-Radio-label')
         .click()
       //Assertiva - Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.
       cy.get('.scheduling__accept > .mdn-Col-xs-12 > .mdn-Checkbox > .mdn-Checkbox-text')
         .should('contain', 'Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.')
       //Clicar no botao estou ciente
       cy.get('#confirm-schedule')
         .click()
       //Clicar no botao continuar
       cy.get(':nth-child(2) > .mdn-Button')
         .click()
       //#endregion
       //#region STEP - RESPONSAVEL
       //Assertiva - Com quem o técnico poderá falar no dia da instalação?
       cy.get('.responsible__title')
         .should('contain', 'Com quem o técnico poderá falar no dia da instalação?')
       //Assertiva - Informe o contato do titular ou de outra pessoa maior de 18 anos.
       cy.get('.responsible__subtitle')
         .should('contain', 'Informe o contato do titular ou de outra pessoa maior de 18 anos.')
       //Assertiva - Botao Titular do contrato
       cy.get('.responsible__selecting > :nth-child(1) > .mdn-Radio > .mdn-Radio-text')
         .should('contain', 'Titular do contrato')
       //Assertiva - Botao Outro
       cy.get('.responsible__selecting > :nth-child(2) > .mdn-Radio > .mdn-Radio-text')
         .should('contain', 'Outro')
       //Clicar no botao Titular do contrato
       cy.get('.responsible__selecting > :nth-child(1) > .mdn-Radio > .mdn-Radio-label')
         .click()
       //Assertiva - Nome
       cy.get('#responsible-owner > :nth-child(1) > .mdn-Col-xs-12 > .mdn-Input > .mdn-Input-label')
         .should('contain', 'Nome')
       //Assertiva - E-mail
       cy.get('#responsible-owner > :nth-child(2) > :nth-child(1) > .mdn-Input > .mdn-Input-label')
         .should('contain', 'E-mail')
       //Preencher - E-mail  
       cy.get('#txt-email')
         .clear()
         .type('sergio.faria@mutant.com.br')
       //Assertiva - Telefone residencial
       cy.get('#responsible-owner > :nth-child(2) > :nth-child(2) > .mdn-Input > .mdn-Input-label')
        .should('contain', 'Telefone residencial')
       //Preencher - Telefone residencial  
       cy.get('#txt-residentialPhone')
         .clear()
         .type('41991998655')
       //Assertiva - Telefone Celular
       cy.get(':nth-child(3) > :nth-child(1) > .mdn-Input > .mdn-Input-label')
         .should('contain', 'Telefone celular')
       //Preencher - Telefone Celular
       cy.get('#txt-cellPhone')
         .clear()
         .type('41991998655')
       //Assertiva - Ao alterar as informações acima, você também irá alterar no seu cadastro
       cy.get('.mdn-Tag > p')
         .should('contain', 'Ao alterar as informações acima, você também irá alterar no seu cadastro')
       //Assertiva - Desejo receber atualizações via WhatsApp sobre a minha solicitação de Mudança de endereço
       cy.get('#app-wrapper > div > div.responsible.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div.mdn-ToggleGroup.whatsappToggle > p')
         .should('contain' , 'Desejo receber atualizações via WhatsApp sobre a minha solicitação de Mudança de endereço')    
       //Assertiva - Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.
       cy.get('.mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.')
       //Clicar no botao estou ciente
       cy.get('#confirm-responsible-in-new-address')
         .click()
       //Clicar no botao continuar
       cy.get(':nth-child(2) > .mdn-Button')
         .click()
       //#region STEP - CONFIRMAÇÃO
       //Assertiva - Confirmação de dados
       cy.get('.responsible__title')
         .should('contain', 'Confirmação de dados')
       //Assertiva - Confirme as informações abaixo para agendar a instalação de seus produtos Claro em seu novo endereço.
       cy.get('.responsible__subtitle')
         .should('contain', 'Confirme as informações abaixo para agendar a instalação de seus produtos Claro em seu novo endereço.')
       //Assertiva - Endereço atual
       cy.get(':nth-child(1) > .address-list > :nth-child(1) > .address-list__item-main-content > .address-label > .address-label__title')
         .should('contain', 'Endereço atual')
       //Assertiva - Novo endereço
       cy.get(':nth-child(1) > .address-list > :nth-child(2) > .address-list__item-main-content > .address-label > .address-label__title')
         .should('contain', 'Novo endereço');
       //Assertiva - R Antonio Zaramella, 1930
       cy.get(':nth-child(2) > .address-list__item-main-content > .address-label > .address-label__subtitle')
         .should('contain', 'R Antonio Zaramella, 1930')
       //Assertiva - Endereço de cobrança
       cy.get('.address-label.mdn-u-padding--xs > .address-label__title')
         .should('contain', 'Endereço de cobrança')
       //Assertiva - R Antonio Zaramella, 1930
       cy.get('.address-label.mdn-u-padding--xs > .address-label__subtitle')
         .should('contain', 'R Antonio Zaramella, 1930')
       //Assertiva - Detalhes
      cy.get('.confirmation__detail > :nth-child(3)')
        .should('contain', 'Detalhes')
      //Assertiva - Dia da Visita Técnica
      cy.get(':nth-child(1) > .mcr-List > :nth-child(1) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'Dia da Visita Técnica')
      //Assertiva - Taxa de instalação
      cy.get(':nth-child(1) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'Taxa de instalação')
      //Assertiva - R$ 0,00
      cy.get(':nth-child(1) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
        .should('contain', 'R$ 0,00')
      //Assertiva - E-mail
      cy.get(':nth-child(1) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'E-mail')
      //Assertiva - lucasqualidade@teste.com.br
      cy.get(':nth-child(1) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
        .should('contain', 'sergio.faria@mutant.com.br')
      //Assertiva - Período
      cy.get(':nth-child(2) > .mcr-List > :nth-child(1) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'Período')
      //Assertiva - Responsável
      cy.get(':nth-child(2) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'Responsável')
      //Assertiva - Claro S.a.
      cy.get(':nth-child(2) > .mcr-List > :nth-child(2) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
        .should('contain', 'Claro S.a.')
      //Assertiva - Telefone residencial
      cy.get(':nth-child(2) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Heading')
        .should('contain', 'Telefone residencial')
      //Assertiva - (41) 99199-8655
      cy.get(':nth-child(2) > .mcr-List > :nth-child(3) > .mcr-List-Item-Content > .mcr-List-Item-Content-Text')
        .should('contain', '(41) 99199-8655')
      //Assertiva - Telefone celular
      cy.get(':nth-child(1) > ul > li:nth-child(5) > div.mcr-List-Item-Content > strong')
        .should('contain', 'Telefone celular')
      //Assertiva - (41) 99199-8655  
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div.mdn-Row.mdn-u-marginBottom--lg > div:nth-child(1) > ul > li:nth-child(5)')  
        .should('contain' , '(41) 99199-8655')
      //Assertiva - Aceites
      cy.get('.confirmation-accepts > .confirmation__detail__title')
        .should('contain', 'Aceites')
      //Assertiva - Confirmo que escolhi a data e horário que melhor me atendem.
      cy.get(':nth-child(1) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Confirmo que escolhi a data e horário que melhor me atendem.')
      //Assertiva - Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.
      cy.get(':nth-child(2) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.')
      //Assertiva - Estou ciente de que tenho que levar meus equipamentos para o meu novo endereço.
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div.confirmation-accepts > ul > li:nth-child(3) > div.mcr-List-Item-Content > div > label')
        .should('contain', 'Estou ciente de que tenho que levar meus equipamentos para o meu novo endereço.')
      //Assertiva - Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.
      cy.get(':nth-child(4) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.')
      //Clicar no botão - Agendar
      cy.get(':nth-child(2) > .mdn-Button')
        .click()
      //#endregion 
      //#region STEP - RESUMO DA CONFIRMAÇÃO
      //Assertiva - Sua solicitação de mudança de endereço foi enviada com sucesso!
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div > div.confirmation-protocol > h2')
        .should('contain', 'Sua solicitação de mudança de endereço foi enviada com sucesso!')
      //Assertiva - No dia da visita técnica, para acompanhar o trajeto do técnico pelo mapa até seu novo endereço, baixe o nosso aplicativo.
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div > div.confirmation-protocol > h3')
        .should('contain', 'No dia da visita técnica, para acompanhar o trajeto do técnico pelo mapa até seu novo endereço, baixe o nosso aplicativo.')
      //Assertiva - Protocolo de solicitação
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div > div.confirmation-protocol > div > p.confirmation-protocol__solicitation.mdn-Subtitle.mdn-Subtitle--xs.mdn-u-textCenter')
        .should('contain', 'Protocolo de solicitação')
      //Assertiva - Numero do protocolo
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div > div.confirmation-protocol > div > p.confirmation-protocol__protocol.mdn-Heading.mdn-Heading--xs.mdn-u-textCenter')
        .should('be.visible')
      //Assertiva - Mantenha seus dados cadastrais atualizados.
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div > div.mcrPhonesNumbers > div.mcrPhonesNumbers__infos.mdn-u-paddingBottom--xs > div > h3')
        .should('contain' , 'Mantenha seus dados cadastrais atualizados.')
      //Assertiva - Caso a Claro precise entrar em contato com você no dia da visita técnica, é importante que seus dados estejam atualizados. Confira abaixo se seus dados estão corretos.
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div > div.mcrPhonesNumbers > div.mcrPhonesNumbers__infos.mdn-u-paddingBottom--xs > p')
        .should('contain' , 'Caso a Claro precise entrar em contato com você no dia da visita técnica, é importante que seus dados estejam atualizados. Confira abaixo se seus dados estão corretos.')      
      //Assertiva - Editar telefone principal
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div > div.mcrPhonesNumbers > div.mcrPhonesNumbers__allPhones > div:nth-child(1) > div.mcrPhonesNumbers__phoneGap > div > a > span.mdn-Link-anchor-label')
        .should('contain' , 'Editar telefone principal')
      //Assertiva - Editar telefone secundário
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div > div.mcrPhonesNumbers > div.mcrPhonesNumbers__allPhones > div:nth-child(3) > div.mcrPhonesNumbers__phoneGap > div > a > span.mdn-Link-anchor-label')
        .should('contain' , 'Editar telefone secundário') 
      //Assertiva - Editar e-mail
      cy.get('#app-wrapper > div > div.confirmation.mdn-u-marginTop--md > div.mdn-u-padding--xs.card > div > div > div.mcrPhonesNumbers > div.mcrPhonesNumbers__allPhones > div:nth-child(5) > div.mcrPhonesNumbers__phoneGap > div > a > span.mdn-Link-anchor-label')
        .should('contain' , 'Editar e-mail')   
      //Assertiva - Aceites
      cy.get('.confirmation-accepts > .confirmation__detail__title')
        .should('contain', 'Aceites')
      //Assertiva - Confirmo que escolhi a data e horário que melhor me atendem.
      cy.get(':nth-child(1) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Confirmo que escolhi a data e horário que melhor me atendem.')
      //Assertiva - Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.
      cy.get(':nth-child(2) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Estou ciente que minha instalação, em meu novo endereço, será agendada. Se for identificado algum imprevisto, a Claro entrará em contato, preferencialmente por e-mail, ou por telefone.')
      //Assertiva - Estou ciente de que tenho que levar meus equipamentos para o meu novo endereço
      cy.get(':nth-child(3) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Estou ciente de que tenho que levar meus equipamentos para o meu novo endereço')
      //Assertiva - Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.
      cy.get(':nth-child(4) > .mcr-List-Item-Content > .mdn-Checkbox > .mdn-Checkbox-text')
        .should('contain', 'Estou ciente de que, no dia da instalação, por segurança, deve haver uma pessoa maior de 18 anos no local para acompanhar a visita.')
      //Assertiva - Botao voltar para o inicio
      cy.get('.mdn-Col-xs-12 > .mdn-Button')
        .should('be.visible')
      //#endregion
  })
})