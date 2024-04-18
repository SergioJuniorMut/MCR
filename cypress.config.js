const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 55000,
  pageLoadTimeout: 120000,
  viewportWidth: 1280,
  viewportHeight: 800,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://minhaclaroresidencial.claro.com.br/',
  },
})