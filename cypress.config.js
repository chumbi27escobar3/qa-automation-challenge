const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  allowCypressEnv: true,

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    env: {
      petstoreBaseUrl: "https://petstore.swagger.io/v2"
    },
    setupNodeEvents(on, config) {},
  },
});
