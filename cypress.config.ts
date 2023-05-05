import { defineConfig } from 'cypress'

export default defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1280,
  viewportHeight: 720,

  trashAssetsBeforeRuns: true,
  video: false,
  screenshotOnRunFailure: false,
  
  e2e: {
    baseUrl: 'http://localhost:4200'
    // supportFile: "cypress/support/e2e.ts",
    // testIsolation: false # https://docs.cypress.io/guides/core-concepts/test-isolation
  },
  
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }
})