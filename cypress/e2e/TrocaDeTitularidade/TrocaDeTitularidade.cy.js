/// <reference types="Cypress" />

describe('Troca de Titularidade',()=>{
    beforeEach(()=>{
    cy.fetch()
    cy.visit("/")
    cy.loginPage(Cypress.env('user'), Cypress.env('password'))
})

    it('Troca de Titularidade - Validação do primeiro step + modal de instruções',()=>{
       //clica em Meu Plano
       cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text')
         .click({force: true})
       //Clica no sub-menu Troca de titularidade
       cy.get('#menu-item-atendimento > .mdn-Menu-subMenu > .mdn-Container > .mdn-Menu-Row > .mdn-Menu-subMenu-list > #menu-item-serviços > .mdn-Menu-subSubMenu-list > #menu-item-serviços-troca-de-titularidade > .mdn-LinkList-anchor')
         .click({force: true})
       //Assertiva - Titulo Trocar Titularidade
       cy.get('.mcr-side > .mdn-Heading')
         .should('contain','Trocar titularidade')
       //Assertiva - Descrição Aqui você poderá alterar a titularidade do seu contrato Claro.
       cy.get('.mcr-side > .mdn-Text')
         .should('contain', 'Aqui você poderá alterar a titularidade do seu contrato Claro.')
       //Assertiva - Antes de começar, verifique se você está elegível ao processo de troca
       cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > main > section.header-container.mcr-unlocked-flow__title > h1')
         .should('contain' , 'Antes de começar, verifique se você está elegível ao processo de troca')
       //Assertiva - Não são elegíveis a troca de titularidade:
       cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > main > section.mcr-unlocked-flow__instructions > div.mcr-unlocked-flow__instructions--spacing-between > h2')
         .should('contain' , 'Não são elegíveis a troca de titularidade:')  
       //Assertiva - Titulares com faturas vencidas, contestadas ou com acordos em andamento
       cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > main > section.mcr-unlocked-flow__instructions > div.mcr-unlocked-flow__instructions--spacing-between > p:nth-child(2)')
         .should('contain', 'Titulares com faturas vencidas, contestadas ou com acordos em andamento')
       //Assertiva - Titulares com fatura em aberto com vencimento nos próximos 5 dias
       cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > main > section.mcr-unlocked-flow__instructions > div.mcr-unlocked-flow__instructions--spacing-between > p:nth-child(3)')
         .should('contain' , 'Titulares com fatura em aberto com vencimento nos próximos 5 dias')    
       //Assertiva - Em caso de transferência por motivo de óbito do titular, cliente incapacitado ou menor emancipado
       cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > main > section.mcr-unlocked-flow__instructions > div:nth-child(2) > h2')
         .should('contain' , 'Em caso de transferência por motivo de óbito do titular, cliente incapacitado ou menor emancipado')  
       //Assertiva - Será necessário o envio do comprovante para o seguinte e-mail:
       cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > main > section.mcr-unlocked-flow__instructions > div:nth-child(2) > p')
         .should('contain' , 'Será necessário o envio do comprovante para o seguinte e-mail:')
       //Clicar no botao -  referente ao titulo (Instruções para o envio do comprovante)
       cy.get('.mdn-Link > .mdn-Link-anchor')
         .click()
       //Assertiva - Titulo modal Instruções para envio do comprovante
       cy.get('.mdn-Modal-header > .header-container > .header-container--text')
         .should('contain', 'Instruções para envio do comprovante')
       //Assertiva - Sub-Titulo modal Confira os comprovantes aceitos para cada caso:
       //está falta ":" no final da  frase
       cy.get('.mdn-Modal-body > :nth-child(1) > :nth-child(1) > strong')
         .should('contain', 'Confira os comprovantes aceitos para cada caso')
       //Assertiva - descrição Falecimento: Atestado de óbito
       cy.get('.mdn-Modal-body > :nth-child(1) > :nth-child(2)')
         .should('contain', 'Falecimento: Atestado de óbito')
       //Assertiva - descrição Incapacidade do titular: Declaração médica
       cy.get('.mdn-Modal-body > :nth-child(1) > :nth-child(3)')
         .should('contain', 'Incapacidade do titular: Declaração médica')
       //Assertiva - descrição Desaparecimento: Boletim de ocorrência
       cy.get('.mdn-Modal-body > :nth-child(1) > :nth-child(4)')
         .should('contain', 'Desaparecimento: Boletim de ocorrência')
       //Assertiva - descrição Detido: Certidão atualizada de permanência do preso no cárcere, emitida pelo Diretor do Presídio
       cy.get('.mdn-Modal-body > :nth-child(1) > :nth-child(5)')
         .should('contain', 'Detido: Certidão atualizada de permanência do preso no cárcere, emitida pelo Diretor do Presídio')
       //Assertiva - descrição Menor emancipado: Certidão de emancipação
       cy.get('.mdn-Modal-body > :nth-child(1) > :nth-child(6)') 
         .should('contain', 'Menor emancipado: Certidão de emancipação')
       //Assertiva - Sub-Titulo Instruções para envio do e-mail:
       cy.get('.mdn-Modal-body > :nth-child(2) > :nth-child(1) > :nth-child(1)')
         .should('contain', 'Instruções para envio do e-mail:')
       //Assertiva - descrição Coloque no assunto do e-mail: ”Documentos para Transferência de Titularidade por óbito ou incapacidade do titular”
       cy.get('.mdn-Modal-body > :nth-child(2) > :nth-child(2)')
         .should('contain', 'Coloque no assunto do e-mail: "Documentos para Transferência de Titularidade por óbito ou incapacidade do titular"')
       //Assertiva - descrição No corpo do e-mail, coloque o nome do cliente e anexe o comprovante
       cy.get('.mdn-Modal-body > :nth-child(2) > :nth-child(3)')
         .should('contain', 'No corpo do e-mail, coloque o nome do cliente e anexe o comprovante')
       //Assertiva - descrição Envie para: documentos.claro@claro.com.br 
       cy.get('.mdn-Modal-body > :nth-child(2) > :nth-child(4)')
         .should('contain', 'Envie para: documentos.claro@claro.com.br')
        //Clicar no X para fechar o modal
        cy.get('.modal__content > .mdn-Modal-header > .mdn-Button-header-close > .mdn-Icon-fechar')
          .click()            
    })

    it('Troca de Titularidade - Validação dos campos obrigatorios - PF',()=>{
        //clica em Meu Plano
        cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text')
          .click({force: true})
        //Clica no sub-menu Troca de titularidade
        cy.get('#menu-item-atendimento > .mdn-Menu-subMenu > .mdn-Container > .mdn-Menu-Row > .mdn-Menu-subMenu-list > #menu-item-serviços > .mdn-Menu-subSubMenu-list > #menu-item-serviços-troca-de-titularidade > .mdn-LinkList-anchor')
          .click({force: true})
        //Assertiva - Titulo Trocar Titularidade
        cy.get('.mcr-side > .mdn-Heading')
          .should('contain','Trocar titularidade')
        //Assertiva - Descrição Aqui você poderá alterar a titularidade do seu contrato Claro.
        cy.get('.mcr-side > .mdn-Text')
          .should('contain', 'Aqui você poderá alterar a titularidade do seu contrato Claro.')
        //Clicar no check-box estou ciente
        cy.get('.mdn-Checkbox > .mdn-Checkbox-input')
          .click()
        //Assertiva + click do botão
        cy.get('.person-type-form > .mdn-Button')
          .should('contain', 'Iniciar a solicitação')
          .click()
        //Assertiva - Titulo Informe os dados pessoais
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.header-container > h1')
          .should('contain', 'Informe os dados pessoais do novo titular')
        //Assertiva - Subtitulo
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > p')
          .should('contain', 'Os campos marcados com * são de preenchimento obrigatório')
        //Preencher Nome Completo
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(1) > div > span > div > input')
          .type('T')
          .type('{backspace}')
          .type('{enter}')
        //Assertiva - Campo Nome Completo Obrigatório
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(1) > div > span > div > span')
          .should('contain', 'Por favor, preencha esse campo!')
        //Preencher Campo CPF
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(2) > div:nth-child(1) > span > div > input')
          .type('9')
          .type('{backspace}')
          .type('{enter}')
        //Assertiva - Campo CPF Obrigatório
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(2) > div:nth-child(1) > span > div > span')
          .should('contain', 'Por favor, informe um número de CPF válido!')
        //Preencher Nascimento
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(2) > div:nth-child(2) > span > div > input')
          .type('0',{force:true})
          .type('{backspace}')
          .type('{enter}')
        //Assertiva Campo Nascimento Obrigatório
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(2) > div:nth-child(2) > span > div > span')
          .should('contain', 'Por favor, informe a data de nascimento!')
        //Preencher RG
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(3) > div:nth-child(1) > span > div > input')
          .type('1')
          .type('{backspace}')
          .type('{enter}')
        //Assertiva - Campo RG Obrigatório
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(3) > div:nth-child(1) > span > div > span')
          .should('contain', 'Por favor, preencha esse campo!')
        //Preencher Órgão Expedidor
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(3) > div:nth-child(2) > span > div > input')
          .type("S")
          .type('{backspace}')
          .type('{enter}')
        //Assertiva - Campo Órgão Expedidor Obrigatório
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(3) > div:nth-child(2) > span > div > span')
          .should('contain', 'Por favor, preencha esse campo!')
        //Clicar em estado civil
        cy.xpath('//*[@id="Estado civil*"]')
          .focus()
        //Clicar em Profissão
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(5) > div:nth-child(1) > span > div > input')
          .click()
        //Assertiva - Campo Estado Civil Obrigatório.
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(4) > div:nth-child(1) > span > div > small')
          .should('contain', 'Por favor, selecione uma opção!')
        //Clicar em Genero
        cy.xpath('//*[@id="Gênero*"]')
          .focus()
        //Clicar em Profissão
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(5) > div:nth-child(1) > span > div > input')
          .click()
        //Assertiva - Campo Genero obrigatório
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(4) > div:nth-child(2) > span > div > small')
          .should('contain', 'Por favor, selecione uma opção!')
        //Preencher profissao
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(5) > div:nth-child(1) > span > div > input')
          .type("T")
          .type('{backspace}')
          .type('{enter}')
        //Assertiva - Campo profissao obrigatório
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(5) > div:nth-child(1) > span > div > span')
          .should('contain', 'Por favor, preencha esse campo!')
        //Preencher Escolaridade
        cy.xpath('//*[@id="Escolaridade*"]')
          .focus()
        //Assertiva - Campo escolaridade obrigatório
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(5) > div:nth-child(2) > span > div > small')
          .should('contain', 'Por favor, selecione uma opção!')
        //Preencher Nome da Mae
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(6) > div > span > div > input')
          .type("M")
          .type('{backspace}')
          .type('{enter}')
        //Assertiva - Campo Nome da Mae obrigatório
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(6) > div > span > div > span')
          .should('contain', 'Por favor, preencha esse campo!')
        //Preencher Nome do Pai
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(7) > div > span > div > input').type("J")
          .type('{backspace}')
          .type('{enter}')
        //Assertiva - Nome do pai obrigatório
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(7) > div > span > div > span')
          .should('contain', 'Por favor, preencha esse campo!')
        //Preencher E-mail
        cy.get('.mdn-Col-md-5 > .mdn-Input > .mdn-Input-field')
          .type("A")
          .type('{backspace}')
          .type('{enter}')
        //Assertiva - Campo E-mail obrigatório
        cy.get('.mdn-Col-md-5 > .mdn-Input > .mdn-Input-errorFeedback')
          .should('contain', 'Por favor, preencha esse campo!')
        //Preencher Telefone
        cy.get('.mdn-Col-md-7 > .mdn-Input > .mdn-Input-field')
          .type("1")
          .type('{backspace}')
          .type('{backspace}')
        //Assertiva - Telefone obrigatório
        cy.get('.mdn-Col-md-7 > .mdn-Input > .mdn-Input-errorFeedback')
          .should('contain', 'Por favor, preencha esse campo!')
    })

    it('Troca de Titularidade - Pessoa Fisica',()=>{
        //clica em Meu Plano
        cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text')
          .click({force: true})
        //Clica no sub-menu Troca de Titularidade
        cy.get('#menu-item-atendimento > .mdn-Menu-subMenu > .mdn-Container > .mdn-Menu-Row > .mdn-Menu-subMenu-list > #menu-item-serviços > .mdn-Menu-subSubMenu-list > #menu-item-serviços-troca-de-titularidade > .mdn-LinkList-anchor')
          .click({force: true})
        //Assertiva - Titulo Trocar Titularidade
        cy.get('.mcr-side > .mdn-Heading')
          .should('contain','Trocar titularidade')
        //Assertiva - Descrição Aqui você poderá alterar a titularidade do seu contrato Claro.
        cy.get('.mcr-side > .mdn-Text')
          .should('contain', 'Aqui você poderá alterar a titularidade do seu contrato Claro.')
        //Assertiva - Titulo Antes de começar, verifique se você está elegível ao processo de troca
        cy.get('.mcr-unlocked-flow__title > .header-container--text')
          .should('contain', 'Antes de começar, verifique se você está elegível ao processo de troca')
        //Assertiva - Sub-Titulo Não são elegíveis a troca de titularidade
        cy.get('.mcr-unlocked-flow__instructions--spacing-between > .mdn-Subtitle')
          .should('contain', 'Não são elegíveis a troca de titularidade:')
        //Assertiva - Descrição Titulares com faturas vencidas, contestadas ou com acordos em andamento
        cy.get('.mcr-unlocked-flow__instructions--spacing-between > :nth-child(2)')
          .should('contain', 'Titulares com faturas vencidas, contestadas ou com acordos em andamento')
        //Assertiva - Descrição Titulares com fatura em aberto com vencimento nos próximos 5 dias
        cy.get('.mcr-unlocked-flow__instructions--spacing-between > :nth-child(3)')
          .should('contain', 'Titulares com fatura em aberto com vencimento nos próximos 5 dias')
        //Assertiva - Sub-Titulo Em caso de transferência por motivo de óbito do titular, cliente incapacitado ou menor emancipado'
        cy.get(':nth-child(2) > .mdn-Subtitle')
          .should('contain', 'Em caso de transferência por motivo de óbito do titular, cliente incapacitado ou menor emancipado')
        //Assertiva - Descrição Será necessário o envio do comprovante para o seguinte e-mail: documentos.residencia@claroatendimento.com.br para que a sua solicitação seja iniciada. Confira mais informações a seguir.
        cy.get('.mcr-unlocked-flow__instructions > :nth-child(2) > .mdn-Text')
          .should('contain', 'Será necessário o envio do comprovante para o seguinte e-mail: documentos.claro@claro.com.br para que a sua solicitação seja iniciada. Confira mais informações a seguir.')
        //Assertiva - Sub-Titulo Instruções para o envio do comprovante
        cy.get('.mdn-Link > .mdn-Link-anchor')
          .should('contain', 'Instruções para o envio do comprovante')
        //Assertiva - Alerta Se você se enquadra em um dos casos descritos anteriormente, sua solicitação não será aprovada.
        cy.get('.text-alert-container--text')
          .should('contain', 'Se você se enquadra em um dos casos descritos anteriormente, sua solicitação não será aprovada.')
        //Assertiva - Titulo Informe se seu novo titular seria pessoa física ou jurídica
        cy.get('.person-type-form > .header-container > .header-container--text')
          .should('contain', 'Informe se o novo titular seria pessoa física ou jurídica')
        //Assertiva - RadioButton Pessoa Física
        cy.get(':nth-child(2) > .mdn-Radio-text')
          .should('contain', 'Pessoa física')
        //Assertiva - botao Pessoa Física está selecionado
        cy.get(':nth-child(2) > .mdn-Radio-input')
          .should('be.checked')
        //Assertiva - RadioButton Pessoa Jurídica
        cy.get(':nth-child(3) > .mdn-Radio-text')
          .should('contain', 'Pessoa jurídica')
        //Clicar no botao Pessoa Juridica
        cy.get(':nth-child(3) > .mdn-Radio-label')
          .click()
        //Assertiva - botao Pessoa Jurídica está selecionado
        cy.get(':nth-child(3) > .mdn-Radio-input')
          .should('be.checked')
        //Selecionar Pessoa Fisica
        cy.get(':nth-child(2) > .mdn-Radio-label')
          .click()
        //Assertiva - Declaro que estou ciente dos critérios e sou elegível a troca de titularidade.
        cy.get('.mdn-Checkbox > .mdn-Checkbox-text')
          .should('contain', 'Declaro que estou ciente dos critérios e sou elegível a troca de titularidade.')
        //Clicar no check-box estou ciente
        cy.get('.mdn-Checkbox > .mdn-Checkbox-input')
          .click()
        //Assertiva - Botão está com o texto correto
        cy.get('.person-type-form > .mdn-Button')
          .should('contain', 'Iniciar a solicitação')
        //Clicar no Botão "Iniciar a solicitação"
        cy.get('.person-type-form > .mdn-Button')
          .click()
        //PESSOA FISICA
        //Assertiva - Titulo Informe os dados pessoais
        cy.get('[data-v-649a11de=""][data-v-acc90276=""] > .header-container--text')
          .should('contain', 'Informe os dados pessoais do novo titular')
        //Assertiva - Subtitulo
        cy.get('.mcr-main-form__subTitle')
          .should('contain', 'Os campos marcados com * são de preenchimento obrigatório')
        //Preenche Nome Completo
        cy.get(':nth-child(1) > .mdn-Col-xs-12 > :nth-child(1) > .mdn-Input > .mdn-Input-field')
          .type('Teste Qualidade Teste')
        //Preencher Campo CPF
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .mdn-Input > .mdn-Input-field')
          .type('98765432100')
        //Preenche nascimento
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .mdn-Input > .mdn-Input-field')
          .type('01011970',{force:true})
        //Preenche RG
        cy.get('.mcr-person-form > :nth-child(3) > :nth-child(1) > :nth-child(1) > .mdn-Input > .mdn-Input-field')
          .type('12345678901')
        //Preenche Órgão Expedidor
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .mdn-Input > .mdn-Input-field')
          .type('SSP')
        //Preenche estado civil
        cy.xpath('//*[@id="Estado civil*"]')
          .select("Casado")
        //Preenche Genero
        cy.xpath('//*[@id="Gênero*"]')
          .select('Masculino')
        //Preenche profissao
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mcr-main-form__mcr-personal-data > span > div > div:nth-child(5) > div:nth-child(1) > span > div > input')
          .type("Teste Qualidade")
        //Preenche Escolaridade
        cy.xpath('//*[@id="Escolaridade*"]')
          .select("Mestrado")
        //Preenche Nome da Mae
        cy.get(':nth-child(6) > .mdn-Col-xs-12 > :nth-child(1) > .mdn-Input > .mdn-Input-field')
          .type("Maria Lurdes Aquino Lopes")
        //Clicar na Checkbox Documento não consta o nome do pai
        cy.get('.mdn-Col-xs-12 > .mdn-Checkbox > .mdn-Checkbox-input')
          .click()
        //Verificar se campo nome do pai desabilitou
        cy.get(':nth-child(7) > .mdn-Col-xs-12 > :nth-child(1) > .mdn-Input > .mdn-Input-field')
          .should('be.disabled')       
        //Clicar na Checkbox Documento não consta o nome do pai
        cy.get('.mdn-Col-xs-12 > .mdn-Checkbox > .mdn-Checkbox-input').click()
        //Preencher Nome do Pai
        cy.get(':nth-child(7) > .mdn-Col-xs-12 > :nth-child(1) > .mdn-Input > .mdn-Input-field')
          .type("José Antonio Mendes")
        //Assertiva - Titulo Informe os dados de contato
        cy.get('.mcr-contact-container > .header-container > .header-container--text') 
          .should('contain', 'Informe os dados de contato do novo titular')
        //Assertiva - Os campos marcados com * são de preenchimento obrigatório
        cy.get('.mcr-contact-container > .mdn-Text')
          .should('contain', 'Os campos marcados com * são de preenchimento obrigatório')
        //Preencher email
        cy.get('.mdn-Col-md-5 > .mdn-Input > .mdn-Input-field')
          .type("teste@qualidade.com")
        //Preencher telefone
        cy.get('.mdn-Col-md-7 > .mdn-Input > .mdn-Input-field')
          .type("11123456789")
        //Assertiva - texto de atenção
        cy.get('.text-alert-container--text')
          .should('contain', 'Atenção! A troca só será efetivada se for possível falar com o novo titular. Caso contrário, a solicitação será cancelada.')
        //Assertiva - texto contrato multi
        cy.get('.mcr-warning > .mdn-u-marginTop--xxs')
          .should('contain', 'Para contratos combo multi é necessário ir até uma loja Claro, após a ligação de nosso atendente, para efetuar a troca dos produtos Claro móvel.')
        //Assertiva - texto aceite do prazo
        cy.get('.mcr-warning > .mdn-Checkbox > .mdn-Checkbox-text')
          .should('contain', 'Estou ciente do prazo de 24 horas corridas para resolução da troca de titularidade e meu contrato permanecerá com a forma de pagamento no boleto.')
        //clico na caixa estou ciente
        cy.get('.mcr-warning > .mdn-Checkbox > .mdn-Checkbox-input')
          .click()
        //clico no botao continuar
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mdn-Row.mcr-navigation > button.mdn-Col-xs-12.mdn-Col-sm-12.mdn-Col-md-2.mcr-navigation--btn-continue.mdn-Button.mdn-Button--primary')
          .should('be.visible' , 'contain', 'Continuar')
    })

    it('Troca de Titularidade - Validação dos campos obrigatorios - PJ',()=>{
        //clica em Meu Plano
        cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text')
          .click({force: true})
        //Clica no sub-menu Troca de Tutularidade
        cy.get('#menu-item-atendimento > .mdn-Menu-subMenu > .mdn-Container > .mdn-Menu-Row > .mdn-Menu-subMenu-list > #menu-item-serviços > .mdn-Menu-subSubMenu-list > #menu-item-serviços-troca-de-titularidade > .mdn-LinkList-anchor')
          .click({force: true})
        //Clicar no botao Pessoa Juridica
        cy.get(':nth-child(3) > .mdn-Radio-label')
          .click()
        //Clicar no check-box estou ciente
        cy.get('.mdn-Checkbox > .mdn-Checkbox-input')
          .click()
        //Clicar no Botão "Iniciar a solicitação"
        cy.get('.person-type-form > .mdn-Button')
          .click()
        //VALIDAR OBRIGATORIEDADE DOS CAMPOS
        //Validar frase Campo Razao - Por favor, preencha esse campo!
        cy.get('.mcr-main-form__mcr-personal-data > .mdn-Row > :nth-child(1) > .mdn-Input > .mdn-Input-field')
          .type(' ')
        cy.get('.mcr-main-form__mcr-personal-data > .mdn-Row > :nth-child(1) > .mdn-Input > .mdn-Input-errorFeedback')
          .should('contain', 'Por favor, preencha esse campo!')
        //Validar frase Campo Razao - Por favor, preencha esse campo!
        cy.get('.mcr-main-form__mcr-personal-data > .mdn-Row > :nth-child(1) > .mdn-Input > .mdn-Input-field')
          .type('a')
          .type('{backspace}')
          .type('{enter}')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > span > section > span:nth-child(1) > div > span')
          .should('contain', 'Por favor, preencha esse campo!')
        //Validar frase Campo CNPJ - Por favor, informe um número de CNPJ válido!
        cy.get('.mcr-main-form__mcr-personal-data > .mdn-Row > :nth-child(2) > .mdn-Input > .mdn-Input-field')
          .type(' ')
        cy.get('.mcr-main-form__mcr-personal-data > .mdn-Row > :nth-child(2) > .mdn-Input > .mdn-Input-errorFeedback')
          .should('contain', 'Por favor, informe um número de CNPJ válido!')
        //Validar frase Inscrição Estadual - Por favor, preencha esse campo!
        cy.get(':nth-child(3) > .mdn-Input > .mdn-Input-field')
          .type(' ')
        cy.get(':nth-child(3) > .mdn-Input > .mdn-Input-errorFeedback')
          .should('contain', 'Por favor, preencha esse campo!')
        //Validar frase Inscrição Estadual - Por favor, preencha esse campo!
        cy.get(':nth-child(3) > .mdn-Input > .mdn-Input-field')
          .type(' ')
        cy.get(':nth-child(3) > .mdn-Input > .mdn-Input-errorFeedback')
          .should('contain', 'Por favor, preencha esse campo!')
        //Validar frase Email - Por favor, preencha esse campo!
        cy.get('.mdn-Col-md-5 > .mdn-Input > .mdn-Input-field')
          .type(' ')
        cy.get('.mdn-Col-md-5 > .mdn-Input > .mdn-Input-errorFeedback')
          .should('contain', 'Por favor, preencha esse campo!')
        //Validar frase Email - Informe um e-mail válido
        cy.get('.mdn-Col-md-5 > .mdn-Input > .mdn-Input-field')
          .type('a')
        cy.get('.mdn-Col-md-5 > .mdn-Input > .mdn-Input-errorFeedback')
          .should('contain', 'Informe um e-mail válido')
        //Validar frase Telefone - Por favor, informe um telefone válido
        cy.get('.mdn-Col-md-7 > .mdn-Input > .mdn-Input-field')
          .type(' ')
        cy.get('.mdn-Col-md-7 > .mdn-Input > .mdn-Input-errorFeedback')
          .should('contain', 'Por favor, informe um telefone válido')
    })

    it('Troca de Titularidade - Pessoa Juridica',()=>{
        //clica em Meu Plano
        cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text')
          .click({force: true})
        //Clica no sub-menu Troca de Titularidade
        cy.get('#menu-item-atendimento > .mdn-Menu-subMenu > .mdn-Container > .mdn-Menu-Row > .mdn-Menu-subMenu-list > #menu-item-serviços > .mdn-Menu-subSubMenu-list > #menu-item-serviços-troca-de-titularidade > .mdn-LinkList-anchor')
          .click({force: true})
        //Clicar no botao Pessoa Juridica
        cy.get(':nth-child(3) > .mdn-Radio-label')
          .click()
        //Clicar no check-box estou ciente
        cy.get('.mdn-Checkbox > .mdn-Checkbox-input')
          .click()
        //Clicar no Botão "Iniciar a solicitação"
        cy.get('.person-type-form > .mdn-Button')
          .click()
        //Assertiva - Titulo Informe os dados pessoais
        cy.get('[data-v-649a11de=""][data-v-acc90276=""] > .header-container--text')
          .should('contain', 'Informe os dados pessoais do novo titular')
        //Assertiva - Subtitulo
        cy.get('.mcr-main-form__subTitle')
          .should('contain', 'Os campos marcados com * são de preenchimento obrigatório')
        //Preencher Razao social*
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > span > section > span:nth-child(1) > div > input')
          .type('Claro SA')
        //Preencher CNPJ*
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > span > section > span:nth-child(2) > div > input')
          .type('40.432.544/0001-47')        
        //Assertiva Inscrição Estadual*
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > span > section > span:nth-child(3) > div > input')
          .type('123456789')
        //Assertiva Informe os dados de contato do novo titular
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > div.mcr-contact-container > section > h1')
          .should('contain', 'Informe os dados de contato do novo titular')
        //Assertiva Os campos marcados com * são de preenchimento obrigatório
        cy.get('.mdn-Text.mdn-Text--body.mdn-u-marginTop--xxs.mcr-contact-container__mcr-text')
          .should('contain','Os campos marcados com * são de preenchimento obrigatório')
        //Preecnher o campo E-mail*
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > div.mcr-contact-container > span > section > span.mdn-Col-xs-12.mdn-Col-sm-12.mdn-Col-md-5.mcr-contact__mcr-text-input.mdn-u-padding--xxs > div > input')
          .type('TesteDeQualidade@claro.com.br')
        //Assertiva Telefone*
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > div.mcr-contact-container > span > section > span.mdn-Col-xs-12.mdn-Col-sm-12.mdn-Col-md-7.mdn-u-padding--xxs > div > input')
          .type('41992222222')
        //Assertiva Frase Atenção
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > div.mcr-warning > section > p')
          .should('contain','Atenção! A troca só será efetivada se for possível falar com o novo titular. Caso contrário, a solicitação será cancelada.')
        //Assertiva Frase Alerta
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > div.mcr-warning > p')
          .should('contain','Para contratos combo multi é necessário ir até uma loja Claro, após a ligação de nosso atendente, para efetuar a troca dos produtos Claro móvel.')
        //Assertiva Checkbox estou ciente
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > div.mcr-warning > div > div')
          .should('contain','Estou ciente do prazo de 120 horas corridas para resolução da troca de titularidade e meu contrato permanecerá com a forma de pagamento no boleto.')
        cy.get('body > main > section > article > div > div.mcr-contentColumn.mdn-Col-xs-12.mdn-Col-lg > section > article > form > section.mdn-Row.mcr-navigation > button.mdn-Col-xs-12.mdn-Col-sm-12.mdn-Col-md-2.mcr-navigation--btn-continue.mdn-Button.mdn-Button--primary')
          .should('be.visible')
    })
});