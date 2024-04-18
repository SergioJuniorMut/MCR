/// <reference types="Cypress" />

import faker from 'faker/locale/pt_BR'

const numPortado = faker.phone.phoneNumber()
const numClaroResidencial = faker.phone.phoneNumber()
const endereco = faker.address.streetName()
const numRua = faker.datatype.number()
const bairro = faker.datatype.string()
const cep = faker.address.zipCode()

describe('Portabilidade',()=>{
    beforeEach(() => {
        cy.fetch();
        cy.visit("/");
        cy.loginPage(Cypress.env('user'), Cypress.env('password'));
    });

    it('Portabilidade - Linha a ser portada é o mesmo da assinatura Claro Residencial ',()=>{

        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click();
        //Clica no sub-menu Portabilidade
        cy.get('#menu-item-plano-portabilidade-fixo > a').click({force:true});
        //Assertiva página Portabilidade
        cy.get('.mcr-page-heading > .mcr-heading').should('contain', 'Portabilidade');
        //Assertiva Dados Pessoais
        cy.get(':nth-child(2) > :nth-child(1) > .mcr-heading').should('contain', 'Dados pessoais');
        //Assertiva Nome Completo
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .mcr-col').should('contain', 'Nome completo: CLARO S.A.');
        //Assertiva CPF/CNPJ
        cy.get('#app > :nth-child(2) > :nth-child(1) > :nth-child(3) > .mcr-col').should('not.be.empty');
        //Assertiva Email
        cy.get(':nth-child(4) > .mcr-col').should('not.be.empty');
        //Select Operadora
        cy.get('#slc-carrier').select('VIVO S.A.')
        .should('have.value', '76');
        //Digitar número a ser portado
        cy.get('#fromPhoneNumber').type(numPortado);
        //Selecionar check-box Uma linha Claro Residencial que você já possui
        cy.get(':nth-child(3) > :nth-child(1) > .mdn-u-marginBottom--sm > .mdn-Radio > .mdn-Radio-label').click();
        //Digitar Número Claro Residencial
        cy.get('#enterprisePhoneNumber').type(numClaroResidencial);
        //Assertiva botão Enviar Solicitação
        cy.get('.mdn-Button').should('be.visible')
        .and('be.enabled')  
    })

    it('Portabilidade - Linha a ser portada Não é o mesmo da assinatura Claro Residencial ',()=>{

        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click();
        //Clica no sub-menu Portabilidade
        cy.get('#menu-item-plano-portabilidade-fixo > a').click({force:true});
        //Assertiva página Portabilidade
        cy.get('.mcr-page-heading > .mcr-heading').should('contain', 'Portabilidade');
        //Assertiva Dados Pessoais
        cy.get(':nth-child(2) > :nth-child(1) > .mcr-heading').should('contain', 'Dados pessoais');
        //Assertiva Nome Completo
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .mcr-col').should('contain', 'Nome completo: CLARO S.A.');
        //Assertiva CPF/CNPJ
        cy.get('#app > :nth-child(2) > :nth-child(1) > :nth-child(3) > .mcr-col').should('not.be.empty');
        //Assertiva Email
        cy.get(':nth-child(4) > .mcr-col').should('not.be.empty');
         //Select Operadora
        cy.get('#slc-carrier').select('VIVO S.A.')
        .should('have.value', '76');
        //Digitar número a ser portado
        cy.get('#fromPhoneNumber').type(numPortado);
        //Assertiva check-box Uma nova linha Claro Residencial
        cy.get(':nth-child(3) > :nth-child(2) > .mdn-u-marginBottom--sm > .mdn-Radio > .mdn-Radio-text').should('be.visible');
        //Assertiva Sim - A instalação será no mesmo endereço da assinatura?*
        cy.get(':nth-child(2) > :nth-child(1) > .mdn-u-marginBottom--sm > .mdn-Radio > .mdn-Radio-text').should('be.visible');
        //Assertiva botão Enviar Solicitação
        cy.get('.mdn-Button').should('be.visible')
        .and('be.enabled')    
    })

    it('Portabilidade - Novo endereço de instalação ',()=>{

        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click();
        //Clica no sub-menu Portabilidade
        cy.get('#menu-item-plano-portabilidade-fixo > a').click({force:true});
        //Assertiva página Portabilidade
        cy.get('.mcr-page-heading > .mcr-heading').should('contain', 'Portabilidade');
        //Assertiva Dados Pessoais
        cy.get(':nth-child(2) > :nth-child(1) > .mcr-heading').should('contain', 'Dados pessoais');
        //Assertiva Nome Completo
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .mcr-col').should('contain', 'Nome completo: CLARO S.A.');
        //Assertiva CPF/CNPJ
        cy.get('#app > :nth-child(2) > :nth-child(1) > :nth-child(3) > .mcr-col').should('not.be.empty');
        //Assertiva Email
        cy.get(':nth-child(4) > .mcr-col').should('not.be.empty');
        //Select Operadora
        cy.get('#slc-carrier').select('VIVO S.A.')
        .should('have.value', '76');
        //Digitar número a ser portado
        cy.get('#fromPhoneNumber').type(numPortado);
        //Assertiva check-box Uma nova linha Claro Residencial
        cy.get(':nth-child(3) > :nth-child(2) > .mdn-u-marginBottom--sm > .mdn-Radio > .mdn-Radio-text').should('be.visible');
        //Clica no botão Não - A instalação será no mesmo endereço da assinatura?
        cy.get(':nth-child(2) > :nth-child(2) > .mdn-u-marginBottom--sm > .mdn-Radio > .mdn-Radio-label').click();
        //Assertiva nome Formulário
        cy.get('.form-new-address__title').should('contain', 'Preencha os campos com seu novo endereço')
        //Digitar Rua,avenida,travessa,etc
        cy.get('#txt-address').type(endereco);
        //Digitar número da rua
        cy.get('#txt-streetNumber').type(numRua);
        //Digitar Bairro
        cy.get('#txt-neighborhood').type(bairro)
        //Selecionar UF
        cy.get('#slc-uf').select('São Paulo')
        .should('have.value', '12');
        //Selecionar Cidade
        cy.get('#slc-city').select('São Paulo')
        .should('have.value', '1');
        //Digitar CEP
        cy.get('#txt-zipcode').type(cep);
         //Assertiva botão Enviar Solicitação
        cy.get('.mdn-Button').should('be.visible')
        .and('be.enabled')
    })
})