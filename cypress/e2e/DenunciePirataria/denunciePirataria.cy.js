/// <reference types="Cypress" />

import faker from 'faker/locale/pt_BR'

const suspeita = faker.name.title()
const conexao = faker.name.title()
const identificou = faker.name.title()
const cep = faker.address.zipCode()
const endereco = faker.address.streetName()
const numero = faker.datatype.number()
const bairro = faker.address.streetSuffix()
const complemento = faker.address.secondaryAddress()

describe('Denuncie e Pirataria',()=>{
    beforeEach(()=>{
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password')) 
    })

    it('Denuncie e Pirataria - Enviar Formulário',()=>{
    
        //Clicar no menu Atendimento
        cy.get('#menu-item-atendimento > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click();
        //Clicar no menu Denuncie e Pirataria
        cy.get('#menu-item-canais-de-atendimento-denuncie-pirataria > .mdn-LinkList-anchor').click({force:true});
        //Assertiva nome da página - Denuncie Pirataria
        cy.get('.mcr-heading').should('contain','Denuncie Pirataria');
        //Assertiva frase - A Claro atua para inibir a pirataria, por meio de vistoria periódicas e de campanhas que inibem esta ação. Colabore no combate a pirataria.
       //cy.get('p.mcr-text.mdn-Text.mdn-Text--body').should('contain','A Claro atua para inibir a pirataria, por meio de vistoria periódicas e de campanhas que inibem esta ação. Colabore no combate a pirataria.');
        //Assertiva frase - Não é necessário se identificar
        cy.get('.mdn-Tag > p').should('contain','Não é necessário se identificar');
        //Assertiva - campos obrigatórios
        cy.get('.mcr-text > i').should('contain','campos obrigatórios');
        //Assertiva - Porque o(a) Sr(a). suspeita que haja uma conexão pirata?*
        cy.get(':nth-child(1) > .mcr-col > .mdn-Input > .mdn-Input-label > strong').should('contain','Porque o(a) Sr(a). suspeita que haja uma conexão pirata?*');
        //Digitar texto Porque o(a) Sr(a). suspeita que haja uma conexão pirata?*
        cy.get('#txt-suspicious').type(suspeita);
        //Assertiva É uma conexão pirata ou outro tipo de fraude contra a Claro e seus assinantes?*
        cy.get(':nth-child(2) > .mcr-col > .mdn-Input > .mdn-Input-label > strong').should('contain','É uma conexão pirata ou outro tipo de fraude contra a Claro e seus assinantes?*');
        //Digitar texto É uma conexão pirata ou outro tipo de fraude contra a Claro e seus assinantes?*
        cy.get('#txt-fraud').type(conexao);
        //Assertiva O(A) Sr(a). identificou algum veículo ou pessoa?*
        cy.get(':nth-child(3) > .mcr-col > .mdn-Input > .mdn-Input-label > strong').should('contain','O(A) Sr(a). identificou algum veículo ou pessoa?*');
        //Digitar frase O(A) Sr(a). identificou algum veículo ou pessoa?*
        cy.get('#txt-identification').type(identificou);
        //Assertiva nome do Formulário Endereço da Fraude
        cy.get('.mdn-Subtitle').should('contain','Endereço da Fraude');
        //Digitar CEP
        cy.get('#txt-zipcode').type(cep);
        //Digitar endereço
        cy.get('#txt-address').type(endereco);
        //Digitar numero
        cy.get('#txt-streetNumber').type(numero);
        //Digitar bairro
        cy.get('#txt-neighborhood').type(bairro);
        //Digitar complemento
        cy.get('#txt-complement').type(complemento);
        //Selecionar Estado
        cy.get('#slc-uf').select('São Paulo')
        //Selecionar Cidade
        cy.get('#slc-city').select('São Paulo')
        //Clicar no botão Enviar
        cy.get('.mcr-button').should('be.visible')
        .click()
        //Assertiva mensagem de sucesso.
        cy.get('.net__modal__title').should('contain','Recebemos sua solicitação com sucesso.')
    })

})