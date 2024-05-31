const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    viewportHeight: 938,
    viewportWidth: 1560,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
