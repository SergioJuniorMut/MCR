/// <reference types="Cypress" />

import faker from 'faker/locale/pt_BR'
const foneContato = faker.phone.phoneNumber()


describe('Cancelamento de Produto', () => {
    beforeEach(() => {
        //Acessar a URL
        cy.visit("/");
        //Limpar os cookies
        cy.clearCookies();
        //Fazer o login
        cy.loginPage(Cypress.env('userNetWeb'), Cypress.env('passwordNetWeb'), 1)
    })

    it('Cancelar Produto', () => {

        //Acessando Cancelamento
        cy.Cancelamento();
        
        //#region STEP DE CONTRATO
        //Assertiva informaçõrs do contrato
        cy.get('.contract-confirmation__title > .mdn-Heading').should('contain', 'Antes de começar, confirme as informações do seu contrato');
        //Assertiva Número do contrato
        cy.get(':nth-child(1) > .user-information-data > .mdn-Text').should('contain', '003/349338695');
        //Assertiva Endereço
        cy.get(':nth-child(3) > .user-information-data > .mdn-Text').should('contain', 'Rua Henri Dunant, 780 - Sao Paulo/SP');
        //Assertiva Nome
        cy.get(':nth-child(5) > .user-information-data > .mdn-Text').should('contain', 'CLARO S.A.');
        //Assertiva CPF/CNPJ
        cy.get(':nth-child(7) > .user-information-data > .mdn-Text').should('contain', '40.432.544/0860-09');
        //Assertiva botão Voltar
        cy.get('.steps__standard-space-between-components-btns--come-back').should('be.visible');
        //Clicar botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next').click();
        //#endregion

        //#region STEP DE SELECIONAR PRODUTOS
        //Assertiva - Qual produto você quer solicitar o cancelamento?
        cy.get('.products-list > :nth-child(1) > .mdn-Heading').should('contain', 'Qual produto você quer solicitar o cancelamento?');
        //Selecionar algum produto
        cy.get('#field-check-list-0').click();
        //Clicar no botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next').should('be.visible').click();
        //#endregion

        //#region STEP DE MOTIVO
        //Assertiva - Por que você quer solicitar esse cancelamento?
        cy.get('.reasons-list > :nth-child(1) > .mdn-Heading').should('contain', 'Por que você quer solicitar esse cancelamento?');
        //Assetiva frase "Nos ajude a melhorar nossos serviços ...."
        cy.get('.reasons-list__subtitle > :nth-child(1)').should('contain', 'Nos ajude a melhorar nossos serviços explicando o motivo da sua solicitação.');
        //Assertiva - Produto que será cancelado: TOP HD INDIVIDUAL CONF FID
        cy.get('.reasons-list__subtitle > :nth-child(2)').should('contain', 'Produto que será cancelado: BL 500M COMBINADO FID');
        //Assertiva Motivo - Não estou satisfeito com meu plano/recebi outra oferta
        cy.get(':nth-child(1) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Não estou satisfeito com meu plano/recebi outra oferta');
        //Assertiva Motivo - Minha fatura veio com um valor diferente do que costumo pagar
        cy.get(':nth-child(2) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Minha fatura veio com um valor diferente do que costumo pagar');
        //Assertiva Motivo - O valor está muito alto para mim
        cy.get(':nth-child(3) > .mdn-Radio > .mdn-Radio-text').should('contain', 'O valor está muito alto para mim');
        //Assertiva Motivo - Tive problemas técnicos com o produto, lentidão ou falta de sinal
        cy.get(':nth-child(4) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Tive problemas técnicos com o produto, lentidão ou falta de sinal');
        //Assertiva Motivo - Não estou satisfeito com o atendimento
        cy.get(':nth-child(5) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Não estou satisfeito com o atendimento');
        //Assertiva Motivo - Mudei de endereço
        cy.get(':nth-child(6) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Mudei de endereço');
        //Assertiva Motivo - Outros
        cy.get(':nth-child(7) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Outros');
        //Assertiva botão Voltar habilitado
        cy.get('.steps__standard-space-between-components-btns--come-back').should('be.visible');
        //Assertiva botão Continuar desabilitado
        cy.get('.steps__standard-space-between-components-btns--next').should('not.be.enabled');
        //Selecionar Motivo - Não uso mais esse produto
        cy.get(':nth-child(1) > .mdn-Radio > .mdn-Radio-label').click();
        //Clicar no botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next').click();
        //#endregion

        //#region STEP Forma de Solicitação
        //Assertiva - De que forma você gostaria de seguir com seu atendimento?
        cy.get('.attendance-channel__title > .mdn-Heading').should('contain', 'De que forma você gostaria de seguir com seu atendimento?');
        //Assertiva - Continuar neste canal
        cy.get(':nth-child(1) > .card > .card__content > .card__content--title').should('contain', 'Continuar neste canal');
        //Assertiva - Sua solicitação será processada a partir do nosso contato em até 2 dias úteis
        cy.get('.card__content--subtitle-continue').should('contain', 'Sua solicitação será processada a partir do nosso contato em até 2 dias úteis');
        //Assertiva - Botão "Escolher essa opção"
        cy.get(':nth-child(1) > .card > .card__content > .card__content--phone-section > .card__content--choose-option').should('contain', 'Escolher essa opção');
        //Assertiva - Continuar pelo WhatsApp
        cy.get(':nth-child(2) > .card > .card__content > .card__content--title').should('contain', 'Continuar pelo WhatsApp');
        //Assertiva - Para o atendimento imediato de sua solicitação, insira seu WhatsApp a seguir para falar com nossa equipe:
        cy.get('.card__content--subtitle-whatsapp').should('contain', 'Para o atendimento imediato de sua solicitação, insira seu WhatsApp a seguir para falar com nossa equipe:');
        //Assertiva - Telefone vazio
        cy.get('#telephone').should('be.empty');
        //Assertiva - Botão "Solicitar contato"
        cy.get(':nth-child(2) > .card > .card__content > .card__content--phone-section > .card__content--choose-option').should('contain', 'Solicitar contato');
        //Clicar "Escolher essa opção" no card "Continuar neste canal"
        cy.get(':nth-child(1) > .card > .card__content > .card__content--phone-section > .card__content--choose-option').click();
        //#endregion

        //#region STEP DE CONTATO
        //Assertiva - Botao 'Sim, desejo receber uma proposta' está como default
        cy.get('.proposal-shortcut .proposal-shortcut__yes').should('not.be.disabled');
        //Assertiva - Sim, desejo receber uma proposta
        cy.get('.mdn-Shortcut--primary > .mdn-Shortcut-text').should('contain','Sim, desejo receber uma proposta');
        //Assertiva - Não desejo receber uma proposta
        cy.get('.mdn-Shortcut--secondary > .mdn-Shortcut-text').should('contain', 'Não desejo receber uma proposta');
        //Clicar no botão Sim, desejo receber uma proposta
        cy.get('.mdn-Shortcut--primary > .mdn-Shortcut-text').click();
        //Assertiva - Nossa equipe está a sua espera para um atendimento exclusivo no WhatsApp
        cy.get('.mcr-banner > :nth-child(2)').should('contain', 'Nossa equipe está a sua espera para um atendimento exclusivo no WhatsApp' );
        //Assertiva - Obrigado por aceitar ouvir nossa proposta, enquanto conversamos, vamos pausar seu cancelamento.
        cy.get('.mcr-banner > .mdn-Text--body').should('contain', 'Obrigado por aceitar ouvir nossa proposta, enquanto conversamos, vamos pausar seu cancelamento.');
        //Assertiva - Insira seu WhatsApp no campo abaixo para prosseguir:
        cy.get('.mcr-banner > p[data-v-3f2357f9=""]').should('contain', 'Insira seu WhatsApp no campo abaixo para prosseguir:');
        //Assertiva Telefone de contato vazio
        cy.get('#telephone').should('be.empty');
        //Digitar Telefone de contato
        cy.get('#telephone').type(foneContato, { force: true });
        //Assertiva - Ao clicar em Continuar, você concorda em receber o contato da Claro por ligação telefônica e/ou Whatsapp.
        cy.get('.message-acceped-or-denied__banners--whatsapp > :nth-child(1) > :nth-child(2)').should('contain', 'Ao clicar em Continuar, você concorda em receber o contato da Claro por ligação telefônica e/ou Whatsapp.');
        //Clicar no botão Continuar
        cy.get('.mdn-Col-xs-12 > .mdn-Button--primary').click();
        //#endregion

        //#region STEP DE RESUMO E CONFIRMAÇÃO
        //Assertiva frase - Confirme os itens abaixo, podemos prosseguir?
        cy.get('.confirmation > :nth-child(1) > .mdn-Heading').should('contain', 'Confirme os itens abaixo, podemos prosseguir?');
        //Assertiva - Produto que será cancelado "BL 500M COMBINADO FID"
        cy.get('.confirmation__resume > :nth-child(1) > div > .mdn-Heading').should('contain', 'BL 500M COMBINADO FID');
        //Assertiva - Motivo "Não estou satisfeito com meu plano/recebi outra oferta"
        cy.get('.confirmation__resume > :nth-child(2) > div > .mdn-Heading').should('contain', 'Não estou satisfeito com meu plano/recebi outra oferta');
        //Assertiva Telefone de contato
        cy.get('.confirmation__resume > :nth-child(3) > div > .mdn-Heading').should('not.be.empty');
        //Assertiva Proposta de planos Claro
        cy.get('.confirmation__resume > :nth-child(4) > div > .mdn-Heading').should('contain', 'Sim, desejo receber uma proposta');
        //Clicar no botão Confirmar solicitação
        cy.get('.mdn-Col-xs-12 > .mdn-Button--primary').should('be.visible').click();
        //espera
        cy.wait(5000);
        //Assertiva - Enviamos uma mensagem para você! Acesse o WhatsApp no seu celular. Continuaremos seu atendimento por lá!
        cy.get('.resume__header > .mdn-Text').should('contain','Enviamos uma mensagem para você! Acesse o WhatsApp no seu celular. Continuaremos seu atendimento por lá!');
        //Assertiva Protocolo
        cy.get(':nth-child(2) > .mdn-Heading > span').should('not.be.empty');
        //Assertiva Data e hora
        cy.get('.mdn-Container > :nth-child(2) > :nth-child(3) > .mdn-Text').should('not.be.empty');
        //Deslogar do sistema
        cy.get('.mdn-Text > .mdn-Menu-list-item').click();
        //#endregion
    })

    it('Cancelar Contrato', () => {
        
        //Acessando Cancelamento
        cy.Cancelamento();

        //#region STEP DE CONTRATO
        //Assertiva informaçõrs do contrato
        cy.get('.contract-confirmation__title > .mdn-Heading').should('contain', 'Antes de começar, confirme as informações do seu contrato');
        //Assertiva Número do contrato
        cy.get(':nth-child(1) > .user-information-data > .mdn-Text').should('contain', '003/349338695');
        //Assertiva Endereço
        cy.get(':nth-child(3) > .user-information-data > .mdn-Text').should('contain', 'Rua Henri Dunant, 780 - Sao Paulo/SP');
        //Assertiva Nome
        cy.get(':nth-child(5) > .user-information-data > .mdn-Text').should('contain', 'CLARO S.A.');
        //Assertiva CPF/CNPJ
        cy.get(':nth-child(7) > .user-information-data > .mdn-Text').should('contain', '40.432.544/0860-09');
        //Assertiva botão Voltar
        cy.get('.steps__standard-space-between-components-btns--come-back').should('be.visible');
        //Clicar botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next').click();
        //#endregion

        //#region STEP DE SELECIONAR PRODUTOS
        //Assertiva - Qual produto você quer solicitar o cancelamento?
        cy.get('.products-list > :nth-child(1) > .mdn-Heading').should('contain', 'Qual produto você quer solicitar o cancelamento?');
        //Selecionar Todos os produtos (cancelar contrato)
        cy.get('#field-check-list-2').click();
        //Clicar no botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next').should('be.visible').click();
        //#endregion

        //#region STEP DE MOTIVO
        //Assertiva - Por que você quer solicitar esse cancelamento?
        cy.get('.reasons-list > :nth-child(1) > .mdn-Heading').should('contain', 'Por que você quer solicitar esse cancelamento?');
        //Assetiva frase "Nos ajude a melhorar nossos serviços ...."
        cy.get('.reasons-list__subtitle > :nth-child(1)').should('contain', 'Nos ajude a melhorar nossos serviços explicando o motivo da sua solicitação.');
        //Assertiva - Produtos que serão cancelados: BL 500M COMBINADO FID, TOP HD INDIVIDUAL CONF FID
        cy.get('.reasons-list__subtitle > :nth-child(2)').should('contain', 'Produtos que serão cancelados: BL 500M COMBINADO FID, TOP HD INDIVIDUAL CONF FID');
        //Assertiva Motivo - Não estou satisfeito com meu plano/recebi outra oferta
        cy.get(':nth-child(1) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Não estou satisfeito com meu plano/recebi outra oferta');
        //Assertiva Motivo - Minha fatura veio com um valor diferente do que costumo pagar
        cy.get(':nth-child(2) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Minha fatura veio com um valor diferente do que costumo pagar');
        //Assertiva Motivo - O valor está muito alto para mim
        cy.get(':nth-child(3) > .mdn-Radio > .mdn-Radio-text').should('contain', 'O valor está muito alto para mim');
        //Assertiva Motivo - Tive problemas técnicos com o produto, lentidão ou falta de sinal
        cy.get(':nth-child(4) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Tive problemas técnicos com o produto, lentidão ou falta de sinal');
        //Assertiva Motivo - Não estou satisfeito com o atendimento
        cy.get(':nth-child(5) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Não estou satisfeito com o atendimento');
        //Assertiva Motivo - Mudei de endereço
        cy.get(':nth-child(6) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Mudei de endereço');
        //Assertiva Motivo - Outros
        cy.get(':nth-child(7) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Outros');
        //Assertiva botão Voltar habilitado
        cy.get('.steps__standard-space-between-components-btns--come-back').should('be.visible');
        //Assertiva botão Continuar desabilitado
        cy.get('.steps__standard-space-between-components-btns--next').should('not.be.enabled');
        //Selecionar Motivo - Outros
        cy.get(':nth-child(7) > .mdn-Radio > .mdn-Radio-label').click();
        //Descreva um pouco mais do seu motivo - Mínimo de 15 caracters
        cy.get('#textarea').type('Vou assinar com o concorrente da Claro');
        //Assertiva botão Voltar habilitado
        cy.get('.steps__standard-space-between-components-btns--come-back').should('be.visible');
        //Assertiva botão Continuar Habilitado
        cy.get('.steps__standard-space-between-components-btns--next').should('be.enabled');
        //Clicar no botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next').click();
        //#endregion

        //#region STEP Forma de Solicitação
        //Assertiva - De que forma você gostaria de seguir com seu atendimento?
        cy.get('.attendance-channel__title > .mdn-Heading').should('contain', 'De que forma você gostaria de seguir com seu atendimento?');
        //Assertiva - Continuar neste canal
        cy.get(':nth-child(1) > .card > .card__content > .card__content--title').should('contain', 'Continuar neste canal');
        //Assertiva - Sua solicitação será processada a partir do nosso contato em até 2 dias úteis
        cy.get('.card__content--subtitle-continue').should('contain', 'Sua solicitação será processada a partir do nosso contato em até 2 dias úteis');
        //Assertiva - Botão "Escolher essa opção"
        cy.get(':nth-child(1) > .card > .card__content > .card__content--phone-section > .card__content--choose-option').should('contain', 'Escolher essa opção');
        //Assertiva - Continuar pelo WhatsApp
        cy.get(':nth-child(2) > .card > .card__content > .card__content--title').should('contain', 'Continuar pelo WhatsApp');
        //Assertiva - Para o atendimento imediato de sua solicitação, insira seu WhatsApp a seguir para falar com nossa equipe:
        cy.get('.card__content--subtitle-whatsapp').should('contain', 'Para o atendimento imediato de sua solicitação, insira seu WhatsApp a seguir para falar com nossa equipe:');
        //Assertiva - Telefone vazio
        cy.get('#telephone').should('be.empty');
        //Assertiva - Botão "Solicitar contato"
        cy.get(':nth-child(2) > .card > .card__content > .card__content--phone-section > .card__content--choose-option').should('contain', 'Solicitar contato');
        //Clicar "Escolher essa opção" no card "Continuar neste canal"
        cy.get(':nth-child(1) > .card > .card__content > .card__content--phone-section > .card__content--choose-option').click();
        //#endregion

        //#region STEP DE CONTATO
        //Assertiva - Botao 'Sim, desejo receber uma proposta' está como default
        cy.get('.proposal-shortcut .proposal-shortcut__yes').should('not.be.disabled');
        //Assertiva - Sim, desejo receber uma proposta
        cy.get('.mdn-Shortcut--primary > .mdn-Shortcut-text').should('contain','Sim, desejo receber uma proposta');
        //Assertiva - Não desejo receber uma proposta
        cy.get('.mdn-Shortcut--secondary > .mdn-Shortcut-text').should('contain', 'Não desejo receber uma proposta');
        //Clicar no botão Não desejo receber uma proposta
        cy.get('.mdn-Shortcut--secondary > .mdn-Shortcut-text').click();
        //Assertiva - Obrigado por confiar na gente e nos dar mais uma oportunidade, enquanto conversamos, vamos pausar o cancelamento.
        cy.get('.mdn-CopyContainer-content > .mdn-Heading').should('contain', 'Nós lamentamos sua decisão. Buscamos sempre melhorar nossos produtos e serviços para ter você como nosso cliente. Estaremos aqui e a disposição para melhor atende-lô!');
        //Assertiva - Informe seu número de telefone
        cy.get('.contact-heading__heading-for-telephone').should('contain', 'Informe seu contato');
        //Assertiva - É importante que esteja correto, atualizado, com DDD (e de preferência com WhatsApp).
        cy.get('.message-acceped-or-denied__phone-contact > .contact-heading > span > .mdn-Text').should('contain', 'A solicitação de cancelamento será processada em até 2 dias úteis e entraremos em contato para agendar a retirada do(s) equipamento(s).');
        //Assertiva Telefone de contato vazio
        cy.get('#telephone').should('be.empty');
        //Digitar Telefone de contato
        cy.get('#telephone').type(foneContato, { force: true });
        //Assertiva - Aceito receber o contato da Claro por ligação telefônica e/ou WhatsApp.
        cy.get('.contact-container__text > strong').should('contain', 'Aceito receber o contato da Claro por ligação telefônica e/ou WhatsApp.');
        //Clicar no botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next').click();
        //#endregion

        //#region STEP DE RESUMO E CONFIRMAÇÃO
        //Assertiva frase - Confirme os itens abaixo, podemos prosseguir?
        cy.get('.confirmation > :nth-child(1) > .mdn-Heading').should('contain', 'Confirme os itens abaixo, podemos prosseguir?');
        //Assertiva Produto que será cancelado
        cy.get('.confirmation__resume > :nth-child(1) > :nth-child(2) > .mdn-Heading').should('contain','BL 500M COMBINADO FID');
        //Assertiva Produto que será cancelado
        cy.get('.confirmation__resume > :nth-child(1) > :nth-child(3) > .mdn-Heading').should('contain','TOP HD INDIVIDUAL CONF FID');
        //Assertiva Motivo
        cy.get('.confirmation__resume > :nth-child(2) > div > .mdn-Heading').should('contain','Outros: Vou assinar com o concorrente da Claro');
        //Assertiva Telefone de contato
        cy.get('.confirmation__resume > :nth-child(3) > div > .mdn-Heading').should('not.be.empty');
        //Assertiva Proposta de planos Claro
        cy.get('.confirmation__resume > :nth-child(4) > div > .mdn-Heading').should('contain','Não desejo receber uma proposta');
        //Clicar no botão Confirmar solicitação
        cy.get('.mdn-Col-xs-12 > .mdn-Button--primary').should('be.visible').click();
        //espera
        cy.wait(5000);
        //Assertiva - Solicitação de cancelamento enviada
        cy.get('.resume__header > .mdn-Text').should('contain','Solicitação de cancelamento enviada');
        //Assertiva Protocolo
        cy.get(':nth-child(2) > .mdn-Heading > span').should('not.be.empty');
        //Assertiva Data e hora
        cy.get(':nth-child(5) > :nth-child(3) > .mdn-Text').should('not.be.empty');
        //Assertiva - O que eu preciso fazer agora?
        cy.get('.mcr-banner__title').should('contain', 'O que eu preciso fazer agora?');
        //Assertiva - O cancelamento acontecerá em até 2 dias úteis. Nossa equipe de especialistas entrará em contato, tirando suas possíveis dúvidas em relação a devolução de equipamentos e valores resíduais.
        cy.get('.mcr-banner > .mdn-Text--body').should('contain','O cancelamento acontecerá em até 2 dias úteis. Nossa equipe de especialistas entrará em contato, tirando suas possíveis dúvidas');
        //Deslogar do sistema
        cy.get('.mdn-Text > .mdn-Menu-list-item').click();
        //#endregion
    })

    it('Cancelar Produto - WhatsApp', () => {

        //Acessando Cancelamento
        cy.Cancelamento();
        
        //#region STEP DE CONTRATO
        //Assertiva informaçõrs do contrato
        cy.get('.contract-confirmation__title > .mdn-Heading').should('contain', 'Antes de começar, confirme as informações do seu contrato');
        //Assertiva Número do contrato
        cy.get(':nth-child(1) > .user-information-data > .mdn-Text').should('contain', '003/349338695');
        //Assertiva Endereço
        cy.get(':nth-child(3) > .user-information-data > .mdn-Text').should('contain', 'Rua Henri Dunant, 780 - Sao Paulo/SP');
        //Assertiva Nome
        cy.get(':nth-child(5) > .user-information-data > .mdn-Text').should('contain', 'CLARO S.A.');
        //Assertiva CPF/CNPJ
        cy.get(':nth-child(7) > .user-information-data > .mdn-Text').should('contain', '40.432.544/0860-09');
        //Assertiva botão Voltar
        cy.get('.steps__standard-space-between-components-btns--come-back').should('be.visible');
        //Clicar botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next').click();
        //#endregion

        //#region STEP DE SELECIONAR PRODUTOS
        //Assertiva - Qual produto você quer solicitar o cancelamento?
        cy.get('.products-list > :nth-child(1) > .mdn-Heading').should('contain', 'Qual produto você quer solicitar o cancelamento?');
        //Selecionar algum produto
        cy.get('#field-check-list-0').click();
        //Clicar no botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next').should('be.visible').click();
        //#endregion

        //#region STEP DE MOTIVO
        //Assertiva - Por que você quer solicitar esse cancelamento?
        cy.get('.reasons-list > :nth-child(1) > .mdn-Heading').should('contain', 'Por que você quer solicitar esse cancelamento?');
        //Assetiva frase "Nos ajude a melhorar nossos serviços ...."
        cy.get('.reasons-list__subtitle > :nth-child(1)').should('contain', 'Nos ajude a melhorar nossos serviços explicando o motivo da sua solicitação.');
        //Assertiva - Produto que será cancelado: BL 500M COMBINADO FID
        cy.get('.reasons-list__subtitle > :nth-child(2)').should('contain', 'Produto que será cancelado: BL 500M COMBINADO FID');
        //Assertiva Motivo - Não estou satisfeito com meu plano/recebi outra oferta
        cy.get(':nth-child(1) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Não estou satisfeito com meu plano/recebi outra oferta');
        //Assertiva Motivo - Minha fatura veio com um valor diferente do que costumo pagar
        cy.get(':nth-child(2) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Minha fatura veio com um valor diferente do que costumo pagar');
        //Assertiva Motivo - O valor está muito alto para mim
        cy.get(':nth-child(3) > .mdn-Radio > .mdn-Radio-text').should('contain', 'O valor está muito alto para mim');
        //Assertiva Motivo - Tive problemas técnicos com o produto, lentidão ou falta de sinal
        cy.get(':nth-child(4) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Tive problemas técnicos com o produto, lentidão ou falta de sinal');
        //Assertiva Motivo - Não estou satisfeito com o atendimento
        cy.get(':nth-child(5) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Não estou satisfeito com o atendimento');
        //Assertiva Motivo - Mudei de endereço
        cy.get(':nth-child(6) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Mudei de endereço');
        //Assertiva Motivo - Outros
        cy.get(':nth-child(7) > .mdn-Radio > .mdn-Radio-text').should('contain', 'Outros');
        //Assertiva botão Voltar habilitado
        cy.get('.steps__standard-space-between-components-btns--come-back').should('be.visible');
        //Assertiva botão Continuar desabilitado
        cy.get('.steps__standard-space-between-components-btns--next').should('not.be.enabled');
        //Selecionar Motivo - Minha fatura veio com um valor diferente do que costumo pagar
        cy.get(':nth-child(2) > .mdn-Radio > .mdn-Radio-label').click();
        //Clicar no botão Continuar
        cy.get('.steps__standard-space-between-components-btns--next').click();
        //#endregion

        //#region STEP Forma de Solicitação
        //Assertiva - De que forma você gostaria de seguir com seu atendimento?
        cy.get('.attendance-channel__title > .mdn-Heading').should('contain', 'De que forma você gostaria de seguir com seu atendimento?');
        //Assertiva - Continuar neste canal
        cy.get(':nth-child(1) > .card > .card__content > .card__content--title').should('contain', 'Continuar neste canal');
        //Assertiva - Sua solicitação será processada a partir do nosso contato em até 2 dias úteis
        cy.get('.card__content--subtitle-continue').should('contain', 'Sua solicitação será processada a partir do nosso contato em até 2 dias úteis');
        //Assertiva - Botão "Escolher essa opção"
        cy.get(':nth-child(1) > .card > .card__content > .card__content--phone-section > .card__content--choose-option').should('contain', 'Escolher essa opção');
        //Assertiva - Continuar pelo WhatsApp
        cy.get(':nth-child(2) > .card > .card__content > .card__content--title').should('contain', 'Continuar pelo WhatsApp');
        //Assertiva - Para o atendimento imediato de sua solicitação, insira seu WhatsApp a seguir para falar com nossa equipe:
        cy.get('.card__content--subtitle-whatsapp').should('contain', 'Para o atendimento imediato de sua solicitação, insira seu WhatsApp a seguir para falar com nossa equipe:');
        //Assertiva - Telefone vazio
        cy.get('#telephone').should('be.empty');
        //Digitar Telefone de contato
        cy.get('#telephone').type(foneContato, { force: true });
        //Assertiva - Botão "Solicitar contato"
        cy.get(':nth-child(2) > .card > .card__content > .card__content--phone-section > .card__content--choose-option').should('contain', 'Solicitar contato');
        //Clicar "Solicitar contato" no card "Continuar pelo WhatsApp"
        cy.get(':nth-child(2) > .card > .card__content > .card__content--phone-section > .card__content--choose-option').click();
        //#endregion

        //#region STEP DE RESUMO E CONFIRMAÇÃO
        //espera
        cy.wait(5000);
        //Assertiva - Enviamos uma mensagem para você! Acesse o WhatsApp no seu celular. Continuaremos seu atendimento por lá!
        cy.get('.resume__header > .mdn-Text').should('contain','Enviamos uma mensagem para você! Acesse o WhatsApp no seu celular. Continuaremos seu atendimento por lá!');
        //Assertiva Protocolo
        cy.get(':nth-child(2) > .mdn-Heading > span').should('not.be.empty');
        //Assertiva Data e hora
        cy.get('.mdn-Container > :nth-child(2) > :nth-child(3) > .mdn-Text').should('not.be.empty');
        //Deslogar do sistema
        cy.get('.mdn-Text > .mdn-Menu-list-item').click();
        //#endregion
    })
})