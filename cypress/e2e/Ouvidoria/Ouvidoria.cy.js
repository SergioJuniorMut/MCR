/// <reference types="Cypress" />

import faker from 'faker';

const numTelefone  = faker.phone.phoneNumber();
const numProtocolo = "003204707856428";
const motivo = "Cancelamento";
const mensagem = "MACHADO";
const URL = `**/trouble-ticket/**`;

const STEPS = {
    MOTIVO_CONTATO: "Motivo do Contato",
    PROCESSANDO_SOLICITANDO: "Processando Solicitação",
    CONFIRMACAO: "Confirmação"
}

const MESSAGES = {
    SUCCESS : "Registro cadastrado com sucesso",
    ERROR : "Protocolo Inválido"
}

const USER = { 
    NAME: 'CLARO S.A.',
    CONTRACT: '003/349338695'
}

describe("Ouvidoria", () => {
    beforeEach(() => {
        cy.fetch()
        cy.visit("/");
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))
    });

    it('Ouvidoria - Deverá validar os nomes dos steps', () => {
        //Clica no menu atendimento
        cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no sub-menu Ouvidoria
        cy.get('#menu-item-canais-de-atendimento-ouvidoria > .mdn-LinkList-anchor').click({force:true})
        //Validará se existe um step chamado 'Motivo do contato'
        cy.get('.mdn-Steps-list-item--doing > .mdn-Steps-text').should('contain', STEPS.MOTIVO_CONTATO)
        //Validará se existe um step chamado 'Processando solicitação'
        cy.get(':nth-child(2) > .mdn-Steps-text').should('contain', STEPS.PROCESSANDO_SOLICITANDO)
        //Validará se existe um step chamado 'Processando solicitação'
        cy.get(':nth-child(3) > .mdn-Steps-text').should('contain', STEPS.CONFIRMACAO)
    })

    it('Ouvidoria - Deverá validar o nome e o contrato do cliente', () => {
        //Clica no menu atendimento
        cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no sub-menu Ouvidoria
        cy.get('#menu-item-canais-de-atendimento-ouvidoria > .mdn-LinkList-anchor').click({force:true})
        //Validará se existe campo tipo texto com valor '003/349338695'
        cy.get(':nth-child(1) > .mdn-Col-xs-12 > .mdn-Text').should('contain', USER.CONTRACT)
        //Validará se existe campo tipo texto com valor 'CLARO S.A.'
        cy.get(':nth-child(2) > .mdn-Col-xs-12 > .mdn-Text').should('contain', USER.NAME)
    })

    it('Ouvidoria - Deverá preencher os campos e envia o formulário', () => {
        cy.intercept('POST', URL).as('api')
        //Clica no menu atendimento
        cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no sub-menu Ouvidoria
        cy.get('#menu-item-canais-de-atendimento-ouvidoria > .mdn-LinkList-anchor').click({force:true})
        //Preenche o campo de telefone
        cy.get('#phone').type(numTelefone)
        //Validar a mensagem informativa do campo de telefone
        cy.get('.mdn-u-marginTop--xxs').should('contain', 'Informe um número diferente do reclamado, para que possamos ter mais um contato para falar com você e resolver sua solicitação.')
        //Preenche o campo de protocolo
        cy.get('#protocolNumber').type(numProtocolo)
        //Validar a mensagem informativa do campo de protocolo
        cy.get('.protocol-Orientation').should('contain', 'O protocolo foi gerado anteriormente via atendimento, é composto por 15 dígitos, iniciando pelos três primeiros dígitos de seu contrato, seguido pelos dois dígitos do ano.')
        //Seleciona o valor dentro do campo motivo
        cy.get('#search').select(motivo)
        //Seleciona o valor dentro do campo motivo
        cy.get('#textarea').type(mensagem)
        //Clica no botão continuar
        cy.get(".mdn-Col-xs-6 > .mdn-Button").click()
        //Validará loading da pagina depois que clicar no botão
        cy.get('#app > .mcr-isAbsolute > .mdn-Icon-claro').should('exist')
        //Validar a mensagem de sucesso após o envio do formulário
        cy.get('.feedback-success__message').should('contain', 'Olá, sua solicitação foi registrada com sucesso.')
        //Validara a mensagem de anote o número do seu protocolo
        cy.get('span.feedback-success__protocol > .feedback-success__protocol').should('contain', 'Anote o número do seu protocolo:')
        //Validar a mensagem de Entraremos em contato com você
        cy.get('.feedback-success > :nth-child(1) > :nth-child(3)').should('contain', 'Entraremos em contato com você por um número com o mesmo DDD da sua cidade.')
        //Validar a mensagem de prazo máximo de tratamento 
        cy.get(':nth-child(4) > strong').should('contain', 'O prazo máximo de tratamento é de até 10 dias.')
        //Validar a mengage: IMPORTANTE
        cy.get('.feedback-success__alert > strong').should('contain', 'IMPORTANTE:')
        //Validar a mensagem: Mantenha seus dados cadastrais atualizados no minha Claro
        cy.get('.feedback-success__alert').should('contain', 'Mantenha seus dados cadastrais atualizados no minha Claro, isso facilita nosso contato com você.')
        //Validar a label do botão Ir para a página inicial
        cy.get('.feedback-success > :nth-child(2) > .mdn-Button').should('contain', 'Ir para a página inicial').click()
        //Validar se após o clique no botão de Ir para a página inicial, o usúario é redirecionado para a dash
        cy.url().should('eq','https://minhaclaroresidencial3.claro.com.br/')
        //#region DEPRECIADO -  código de validação do retorno da API
        // //Aguarda api retornar dados para front
        // cy.wait('@api').then(resposta => {
        //     const {statusCode} = resposta.response;
        //     //Valida se a request deu sucesso
        //     if(statusCode === 200){
        //         // Valida mensagem de sucesso
        //         cy.get('h2').should('contain', MESSAGES.SUCCESS);
        //     }else {
        //         //Valida se existe um icone de alerta
        //         cy.get('.mdn-Icon-alerta').should('exist');
        //         //Valida a mensagem de erro
        //         cy.get('.mdn-Subtitle > strong').should('contain',MESSAGES.ERROR);
        //      }
        //   }); 
        //#endregion
    });

    it('Ouvidoria - Validar as mensagens de bloqueio', () => {
        cy.intercept('POST', URL).as('api')
        //Clica no menu atendimento
        cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no sub-menu Ouvidoria
        cy.get('#menu-item-canais-de-atendimento-ouvidoria > .mdn-LinkList-anchor').click({force:true})
        //Preenche o campo de telefone
        cy.get('#phone').type('123')
        //Clicar fora do campo
        cy.get('.mdn-u-marginTop--xxs').click()
        //Validar a mensagem: preencha este campo corretamente
        cy.get(':nth-child(4) > .mdn-Col-xs-12 > .mdn-Input > .mdn-Input-errorFeedback').should('contain', 'Por favor, preencha este campo corretamente.')
        //Preencher o campo com o restante do telefone válido
        cy.get('#phone').type('1998655')
        //Preenche o campo de protocolo
        cy.get('#protocolNumber').type('567')
        //Clicar no campo acima
        cy.get('.mdn-u-marginTop--xxs').click()
        //Validar a mensagem: O protocolo foi gerado anteriormente via atendimento... 
        cy.get(':nth-child(6) > .mdn-Col-xs-12 > .mdn-Input > .mdn-Input-errorFeedback').should('contain', 'O protocolo foi gerado anteriormente via atendimento, é composto por 15 dígitos, iniciando pelos três primeiros dígitos de seu contrato, seguido pelos dois dígitos do ano.')    
        //Limpar o campo de protocolo
        cy.get('#protocolNumber').clear()
        //Clicar no campo acima
        cy.get('.mdn-u-marginTop--xxs').click()
        //Validar a mensagem: Campo obrigatório.
        cy.get(':nth-child(6) > .mdn-Col-xs-12 > .mdn-Input > .mdn-Input-errorFeedback').should('contain', 'Campo obrigatório.')
        //Preencher o campo com um protocolo inválido
        cy.get('#protocolNumber').type('123456789000000')
        //Validar a mensagem: Protocolo inválido.
        cy.get(':nth-child(6) > .mdn-Col-xs-12 > .mdn-Input > .mdn-Input-errorFeedback').should('contain', 'Protocolo inválido.')
    })
})


