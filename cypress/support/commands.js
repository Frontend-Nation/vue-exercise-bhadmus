// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password)=>{
    cy.fixture('element-mapper').then(emp=>{
        cy.get(emp.loginField).should('be.visible').type(username)
        cy.get(emp.passwordField).should('be.visible').type(password)
        cy.get(emp.loginButton).should('be.visible').click()
    })
})

Cypress.Commands.add('verifyText', (element, text)=>{
    cy.get(element).should('exist').and('have.text', text)
})