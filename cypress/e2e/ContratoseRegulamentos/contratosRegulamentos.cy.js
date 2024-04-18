/// <reference types="Cypress" />

describe('Contratos e Regulamentos',()=>{
    beforeEach(()=>{
        cy.fetch()
        cy.visit("/")
        cy.loginPage(Cypress.env('user'), Cypress.env('password'))       
    })

    it('Contratos e Regulamentos - Planos de serviços Claro net virtua',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no menu Contratos e Regulamentos
          .get('#menu-item-responsabilidade-contratos-e-regulamentos > .mdn-LinkList-anchor').click({force:true})
        //Assertiva Título da Página - Planos de serviços Claro net virtua
          .get('#cms-MainContent > section:nth-child(2) > div > div.cms-Title.cms-spacing-bottom--sm > h2')
          .should('contain','Planos de serviços Claro net virtua')
        //Assertiva Termo de adesão
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(1) > div > a > div.cms-Document-texts > h3')
          .should('contain','Termo de adesão')
        //Assertiva Contrato de prestação de serviço
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(2) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato de prestação de serviço')
        //Assertiva Contrato de permanência mínima
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(3) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato de permanência mínima')
        //Assertiva Claro Net Vírtua - Promoção Dezembro 2022
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(4) > div > a > div.cms-Document-texts > h3')
          .should('contain','Claro Net Vírtua - Promoção Dezembro 2022')
        //Assertiva Claro Net Virtua Residencial - Claro NXT
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(5) > div > a > div.cms-Document-texts > h3')
          .should('contain',' Claro Net Virtua  Residencial - Claro NXT')
        //Assertiva Plano de serviço do serviço de comunicação multimídia
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(6) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano de serviço do serviço de comunicação multimídia')
        //Assertiva Claro Net Virtua Residencial 2021 - Claro NXT
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(7) > div > a > div.cms-Document-texts > h3')
          .should('contain','Claro Net Virtua Residencial 2021 - Claro NXT')
        //Assertiva Claro música play
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(8) > div > a > div.cms-Document-texts > h3')
          .should('contain','Claro música play')
        //Assertiva Claro Net Vírtua - Promoção julho 2022
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(9) > div > a > div.cms-Document-texts > h3')
          .should('contain','Claro Net Vírtua - Promoção julho 2022')
        //Assertiva Promoção semana do cliente
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(10) > div > a > div.cms-Document-texts > h3')
          .should('contain','Promoção semana do cliente')
        //Assertiva Plano nº 101 - Sumário Claro Net Virtua Residencial - Claro NXT
          .get('#cms-MainContent > section:nth-child(2) > div > ul > li:nth-child(11) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano nº 101 - Sumário Claro Net Virtua Residencial - Claro NXT')
    })
 
    it('Contratos e Regulamentos - Planos de serviços Claro net tv / Claro tv+',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no menu Contratos e Regulamentos
        cy.get('#menu-item-responsabilidade-contratos-e-regulamentos > .mdn-LinkList-anchor').click({force:true})
        //Assertiva Título da Página - Contratos e regulamentos residenciais
        cy.get('#cms-MainContent > section:nth-child(3) > div > div.cms-Title.cms-spacing-bottom--sm > h2')
          .should('contain','Planos de serviços Claro net tv / Claro tv+')
        //Assertiva texto - Termo de adesão
        cy.get('#cms-MainContent > section:nth-child(3) > div > ul > li:nth-child(1) > div > a > div.cms-Document-texts > h3')
          .should('contain','Termo de adesão')
        //Assertiva texto - Contrato de prestação de serviços
        cy.get('#cms-MainContent > section:nth-child(3) > div > ul > li:nth-child(2) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato de prestação de serviços')
        //Assertiva texto - Contrato de permanência mínima
        cy.get('#cms-MainContent > section:nth-child(3) > div > ul > li:nth-child(3) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato de permanência mínima')
        //Assertiva texto - Fácil HD 01-07-2021
        cy.get('#cms-MainContent > section:nth-child(3) > div > ul > li:nth-child(4) > div > a > div.cms-Document-texts > h3')
          .should('contain','Fácil HD 01-07-2021')
        //Assertiva texto - Mix HD 01-07-2021
        cy.get('#cms-MainContent > section:nth-child(3) > div > ul > li:nth-child(5) > div > a > div.cms-Document-texts > h3')
          .should('contain','Mix HD 01-07-2021')
        //Assertiva - Claro TV Mais HD 4K
        cy.get('#cms-MainContent > section:nth-child(3) > div > ul > li:nth-child(6) > div > a > div.cms-Document-texts > h3')
          .should('contain','Claro TV Mais HD 4K')
          //Assertiva - Inicial HD 01-07-2021
        cy.get('#cms-MainContent > section:nth-child(3) > div > ul > li:nth-child(7) > div > a > div.cms-Document-texts > h3')
          .should('contain','Inicial HD 01-07-2021')
          //Assertiva - Sumário Planos 100 110 e 115 -Claro TV+
        cy.get('#cms-MainContent > section:nth-child(3) > div > ul > li:nth-child(8) > div > a > div.cms-Document-texts > h3')
          .should('contain','Sumário Planos 100 110 e 115 -Claro TV+')
          //Assertiva - Claro TV+ Pas 115 - Regulamento promoção Março 23
        cy.get('#cms-MainContent > section:nth-child(3) > div > ul > li:nth-child(9) > div > a > div.cms-Document-texts > h3')
          .should('contain','Claro TV+ Pas 115 - Regulamento promoção Março 23')
    })

    it('Contratos e Regulamentos - Claro TV',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no menu Contratos e Regulamentos
        cy.get('#menu-item-responsabilidade-contratos-e-regulamentos > .mdn-LinkList-anchor').click({force:true})
        //Assertiva Título da Página - Claro tv
        cy.get('#cms-MainContent > section:nth-child(4) > div > div.cms-Title.cms-spacing-bottom--sm > h2')
          .should('contain','Claro tv')
        //Assertiva texto - Termo de Adesão - Pré Pago 2020
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(1) > div > a > div.cms-Document-texts > h3')
          .should('contain','Termo de Adesão - Pré Pago 2020')
        //Assertiva texto - Sumário Claro TV Pré-Pago 2022
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(2) > div > a > div.cms-Document-texts > h3')
          .should('contain','Sumário Claro TV Pré-Pago 2022')
        //Assertiva texto - Contrato de permanência mínima 
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(3) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato de permanência mínima')
        //Assertiva texto - Sumário, termos e condições de Uso Pós pago
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(4) > div > a > div.cms-Document-texts > h3')
          .should('contain','Sumário, termos e condições de Uso Pós pago')
        //Assertiva texto -  Termo de adesão
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(5) > div > button > div.cms-Document-texts > h3')
          .should('contain','Termo de adesão')
        //Assertiva texto - Contrato Pré pago
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(6) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato Pré pago')
        //Assertiva texto - Contrato Pós pago
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(7) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato Pós pago')
        //Assertiva texto - Plano de serviço 260 - Inicial HD
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(8) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano de serviço 260 - Inicial HD')
        //Assertiva texto - Plano de serviço 524 - Inicial digital 2020
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(9) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano de serviço 524 - Inicial digital 2020')
        //Assertiva texto - Plano de serviço 525 - Ligth digital 2020
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(10) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano de serviço 525 - Ligth digital 2020')
        //Assertiva texto - Plano de serviço 526 - Ligth digital 2020
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(11) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano de serviço 526 - Ligth digital 2020')
        //Assertiva texto - Plano de servico 527 - Mix digital 2020
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(12) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano de servico 527 - Mix digital 2020')
        //Assertiva texto - Plano de servico 528 - Mix HD 2020
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(13) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano de servico 528 - Mix HD 2020')
        //Assertiva texto - Plano de serviço 529 - Top hd 2020
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(14) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano de serviço 529 - Top hd 2020')
        //Assertiva texto - Plano de serviço 530 - Top hd max 2020 
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(15) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano de serviço 530 - Top hd max 2020')
        //Assertiva texto - Sumario Claro TV Pré-Pago - Maio 2022
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(16) > div > a > div.cms-Document-texts > h3')
          .should('contain','Sumario Claro TV Pré-Pago - Maio 2022')
        //Assertiva texto - Prepara pra Copa
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(17) > div > a > div.cms-Document-texts > h3')
          .should('contain','Prepara pra Copa')
        //Assertiva texto - Cupom de Desconto TVS Samsung
        cy.get('#cms-MainContent > section:nth-child(4) > div > ul > li:nth-child(18) > div > a > div.cms-Document-texts > h3')
          .should('contain','Cupom de Desconto TVS Samsung')         
    })

    it('Contratos e Regulamentos - Claro Box TV+',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no menu Contratos e Regulamentos
        cy.get('#menu-item-responsabilidade-contratos-e-regulamentos > .mdn-LinkList-anchor').click({force:true})
        //Assertiva Título da Página - Claro Box TV+
        cy.get('#cms-MainContent > section:nth-child(5) > div > div.cms-Title.cms-spacing-bottom--sm > h2')
          .should('contain','Claro Box TV+')
        //Assertiva Título da Página - Claro TV+BOX 
        cy.get('#cms-MainContent > section:nth-child(5) > div > ul > li:nth-child(1) > div > a > div.cms-Document-texts > h3')
          .should('contain','Claro TV+BOX')
        //Assertiva Título da Página - Claro TV+BOX -Promoção Março
        cy.get('#cms-MainContent > section:nth-child(5) > div > ul > li:nth-child(2) > div > a > div.cms-Document-texts > h3')
          .should('contain','Claro TV+BOX -Promoção Março')
    })

    it('Contratos e Regulamentos - Planos de serviços Claro net fone',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no menu Contratos e Regulamentos
        cy.get('#menu-item-responsabilidade-contratos-e-regulamentos > .mdn-LinkList-anchor').click({force:true})
        //Assertiva Título da Página - Contratos e regulamentos residenciais
        cy.get('#cms-MainContent > section:nth-child(6) > div > div.cms-Title.cms-spacing-bottom--sm > h2')
          .should('contain','Planos de serviços Claro net fone')
        //Assertiva texto - Contrato de permanência mínima
        cy.get('#cms-MainContent > section:nth-child(6) > div > ul > li:nth-child(1) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato de permanência mínima')
        //Assertiva texto - Contrato Claro fone 
        cy.get('#cms-MainContent > section:nth-child(6) > div > ul > li:nth-child(2) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato Claro fone')
        //Assertiva texto - Sumário,Termo e condições de uso - Planos de serviços claro fone  
        cy.get('#cms-MainContent > section:nth-child(6) > div > ul > li:nth-child(3) > div > a > div.cms-Document-texts > h3')
          .should('contain','Sumário,Termo e condições de uso - Planos de serviços claro fone')
        //Assertiva texto - Termo de adesão  
        cy.get('#cms-MainContent > section:nth-child(6) > div > ul > li:nth-child(4) > div > a > div.cms-Document-texts > h3')
          .should('contain','Termo de adesão')
        //Assertiva texto - Contrato Claro net fone   
        cy.get('#cms-MainContent > section:nth-child(6) > div > ul > li:nth-child(5) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato Claro net fone')
        //Assertiva texto - Sumário, termos e condições de Uso (Fone via cabo)   
        cy.get('#cms-MainContent > section:nth-child(6) > div > ul > li:nth-child(6) > div > a > div.cms-Document-texts > h3')
          .should('contain','Sumário, termos e condições de Uso (Fone via cabo)')
        //Assertiva texto - Sumário, termos e condições de Uso (Fone Fibra)
        cy.get('#cms-MainContent > section:nth-child(6) > div > ul > li:nth-child(7) > div > a > div.cms-Document-texts > h3')
          .should('contain','Sumário, termos e condições de Uso (Fone Fibra)')
        //Assertiva texto - Net fone Ilimitado Brasil Total   
        cy.get('#cms-MainContent > section:nth-child(6) > div > ul > li:nth-child(8) > div > a > div.cms-Document-texts > h3')
          .should('contain','Net fone Ilimitado Brasil Total')
        //Assertiva texto - Sumário, termos e condições de uso
        cy.get('#cms-MainContent > section:nth-child(6) > div > ul > li:nth-child(9) > div > a > div.cms-Document-texts > h3')
          .should('contain','Sumário, termos e condições de uso')  
        //Assertiva texto - Regulamento - oferta Combo multi   
        cy.get('#cms-MainContent > section:nth-child(6) > div > ul > li:nth-child(10) > div > a > div.cms-Document-texts > h3')
          .should('contain','Regulamento - oferta Combo multi')    
    })

    it('Contratos e Regulamentos - Combos',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no menu Contratos e Regulamentos
        cy.get('#menu-item-responsabilidade-contratos-e-regulamentos > .mdn-LinkList-anchor').click({force:true})
        //Assertiva Título da Página - Combos
        cy.get('#cms-MainContent > section:nth-child(7) > div > div.cms-Title.cms-spacing-bottom--sm > h2').should('contain','Combos')
        //Assertiva texto - Regulamento Oferta Claro Net Combo
        cy.get('#cms-MainContent > section:nth-child(7) > div > ul > li:nth-child(1) > div > a > div.cms-Document-texts > h3')
          .should('contain','Regulamento Oferta Claro Net Combo')
        //Assertiva texto - Plano Controle Plus Combo Multi NATAL
        cy.get('#cms-MainContent > section:nth-child(7) > div > ul > li:nth-child(2) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano Controle Plus Combo Multi NATAL')
        //Assertiva texto - Plano Bônus Internet - Claro Pós Combo Multi Natal
        cy.get('#cms-MainContent > section:nth-child(7) > div > ul > li:nth-child(3) > div > a > div.cms-Document-texts > h3')
          .should('contain','Plano Bônus Internet -Claro  Pós Combo Multi Natal')
        //Assertiva texto - Regulamento da oferta combo multi 03-05-23
        cy.get('#cms-MainContent > section:nth-child(7) > div > ul > li:nth-child(4) > div > a > div.cms-Document-texts > h3')
          .should('contain','Regulamento da oferta combo multi  03-05-23')
    })

    it('Contratos e Regulamentos - Claro Rural',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no menu Contratos e Regulamentos
        cy.get('#menu-item-responsabilidade-contratos-e-regulamentos > .mdn-LinkList-anchor').click({force:true})
        //Assertiva texto - Claro Rural
        cy.get('#cms-MainContent > section:nth-child(8) > div > div.cms-Title.cms-spacing-bottom--sm > h2')
          .should('contain','Claro Rural')
        //Assertiva texto - Plano Claro Fone Rural – via Terrestre
        cy.get('#cms-MainContent > section:nth-child(8) > div > ul > li:nth-child(1) > div > a > div.cms-Document-texts > h3')
        .should('contain','Plano Claro Fone Rural – via Terrestre')
        //Assertiva texto - Plano Claro Fone Rural – via Satélite
        cy.get('#cms-MainContent > section:nth-child(8) > div > ul > li:nth-child(2) > div > a > div.cms-Document-texts > h3')
        .should('contain','Plano Claro Fone Rural – via Satélite')
        //Assertiva texto - Plano Banda Larga Móvel Pós-Pago Rural 1
        cy.get('#cms-MainContent > section:nth-child(8) > div > ul > li:nth-child(3) > div > a > div.cms-Document-texts > h3')
        .should('contain','Plano Banda Larga Móvel Pós-Pago Rural 1')
        //Assertiva texto - Plano Banda Larga Móvel Pós-Pago Rural 2
        cy.get('#cms-MainContent > section:nth-child(8) > div > ul > li:nth-child(4) > div > a > div.cms-Document-texts > h3')
        .should('contain','Plano Banda Larga Móvel Pós-Pago Rural 2')
        //Assertiva texto - Plano Banda Larga Fixa Pós-Pago Rural - S
        cy.get('#cms-MainContent > section:nth-child(8) > div > ul > li:nth-child(5) > div > a > div.cms-Document-texts > h3')
        .should('contain','Plano Banda Larga Fixa Pós-Pago Rural - S')
    })

    it('Contratos e Regulamentos - Comparativo de planos',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no menu Contratos e Regulamentos
        cy.get('#menu-item-responsabilidade-contratos-e-regulamentos > .mdn-LinkList-anchor').click({force:true})
        //Assertiva Título da Página - Comparativo de planos
        cy.get('#cms-MainContent > section:nth-child(9) > div > div.cms-Title.cms-spacing-bottom--sm > h2')
           .should('contain','Comparativo de planos')
        //Assertiva texto - Regulamento RGC XML
        cy.get('#cms-MainContent > section:nth-child(9) > div > ul > li:nth-child(1) > div > a > div.cms-Document-texts > h3')
           .should('contain','Regulamento RGC XML')
        //Assertiva texto - Cidades da Região Sul
        cy.get('#cms-MainContent > section:nth-child(9) > div > ul > li:nth-child(2) > div > a > div.cms-Document-texts > h3')
           .should('contain','Cidades da Região Sul')
        //Assertiva texto - Cidade da região Sudeste 
        cy.get('#cms-MainContent > section:nth-child(9) > div > ul > li:nth-child(3) > div > a > div.cms-Document-texts > h3')
           .should('contain','Cidade da região Sudeste')
        //Assertiva texto - Cidade da região Norte
        cy.get('#cms-MainContent > section:nth-child(9) > div > ul > li:nth-child(4) > div > a > div.cms-Document-texts > h3')
           .should('contain','Cidade da região Norte')
        //Assertiva texto - Cidade da Região Nordeste
        cy.get('#cms-MainContent > section:nth-child(9) > div > ul > li:nth-child(5) > div > a > div.cms-Document-texts > h3')
           .should('contain','Cidade da Região Nordeste')
        //Assertiva texto - Cidade da Região Centro Oeste
        cy.get('#cms-MainContent > section:nth-child(9) > div > ul > li:nth-child(6) > div > a > div.cms-Document-texts > h3')
           .should('contain','Cidade da Região Centro Oeste')
    })

    it('Contratos e Regulamentos - Outros documentos',()=>{
        //Clica no menu Meu Plano
        cy.get('#menu-item-meu-plano > .mdn-Menu-list-item-link > .mdn-Text > .gtm-element-event').click()
        //Clica no menu Contratos e Regulamentos
        cy.get('#menu-item-responsabilidade-contratos-e-regulamentos > .mdn-LinkList-anchor').click({force:true})
        //Assertiva Título da Página - Outros documentos
        cy.get('#cms-MainContent > section:nth-child(10) > div > div.cms-Title.cms-spacing-bottom--sm > h2')
          .should('contain','Outros documentos')
        //Assertiva texto - Contrato proteção digital
        cy.get('#cms-MainContent > section:nth-child(10) > div > ul > li:nth-child(1) > div > a > div.cms-Document-texts > h3')
          .should('contain','Contrato proteção digital')
        //Assertiva texto - Prestação do Serviço Móvel Pós Regional RS
        cy.get('#cms-MainContent > section:nth-child(10) > div > ul > li:nth-child(2) > div > a > div.cms-Document-texts > h3')
          .should('contain','Prestação do Serviço Móvel Pós Regional RS')
        //Assertiva texto - Net assist 
        cy.get('#cms-MainContent > section:nth-child(10) > div > ul > li:nth-child(3) > div > a > div.cms-Document-texts > h3')
          .should('contain','Net assist')
        //Assertiva texto - Manual de Atendimento Ouvidoria
        cy.get('#cms-MainContent > section:nth-child(10) > div > ul > li:nth-child(4) > div > a > div.cms-Document-texts > h3')
          .should('contain','Manual de Atendimento Ouvidoria')
        //Assertiva texto - Manual de Atendimento Anatel
        cy.get('#cms-MainContent > section:nth-child(10) > div > ul > li:nth-child(5) > div > a > div.cms-Document-texts > h3')
          .should('contain','Anatel')
        //Assertiva texto - Anatel - Pesquisa de qualidade
        cy.get('#cms-MainContent > section:nth-child(10) > div > ul > li:nth-child(6) > div > a > div.cms-Document-texts > h3')
          .should('contain','Anatel - Pesquisa de qualidade')
        //Assertiva texto - Acesse e ganhe NOW ON LINE
        cy.get('#cms-MainContent > section:nth-child(10) > div > ul > li:nth-child(7) > div > a > div.cms-Document-texts > h3')
          .should('contain','Acesse e ganhe NOW ON LINE')
        //Assertiva texto - Termos e Condições - Claro Wi-Fi Mesh
        cy.get('#cms-MainContent > section:nth-child(10) > div > ul > li:nth-child(8) > div > a > div.cms-Document-texts > h3')
          .should('contain','Termos e Condições - Claro Wi-Fi Mesh') 
        //Assertiva texto - APP CLARO TV+
        cy.get('#cms-MainContent > section:nth-child(10) > div > ul > li:nth-child(9) > div > a > div.cms-Document-texts > h3')
          .should('contain','APP CLARO TV+')
    })  
})