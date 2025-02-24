const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com/',
    specPatter: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/command.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
