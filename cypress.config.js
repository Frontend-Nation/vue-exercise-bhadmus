const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://vuejs.org/',
    viewportHeight: 938,
    viewportWidth: 1520,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
