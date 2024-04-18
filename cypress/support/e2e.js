// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commandsLogin'
import './commandsCancelamento'
import './commandsCancelamentoClaro'
import './commandsLoginTechQuality'
import './commandsLoginCiro'
import './commandsLoginClaroBcc'
import './commandsFaturas'
import './commandsMeuPlano'
import './commandsSuporteTecnico'
import './commandsMudancaEndereco'
import './commandsConsumoFranquia'
import './commandsMeuCadastro'
import './commandsFazerElogio'
import './commandsFazerSugestao'
import './commandsAtendimento'
import './commandsFetchLogs'
import 'cypress-if'


//Require:
require('cypress-xpath')

Cypress.setMaxListeners(200)

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
// Alternatively you can use CommonJS syntax:
// require('./commands')