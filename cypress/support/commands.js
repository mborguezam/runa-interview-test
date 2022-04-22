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
Cypress.Commands.add('createAccount', () => {

    cy.get('#firstName').type(Cypress.env('first_name'))
    cy.get('#lastName').type(Cypress.env('last_name'))
    cy.get('#username').type(Cypress.env('user_name'))
    cy.get('[name=Passwd]').type(Cypress.env('passwd'), { log: false }) // log:false its being used here to security reasons
    cy.get('[name=ConfirmPasswd]').type(Cypress.env('confirmPasswd'), { log: false })
    cy.get('#accountDetailsNext').click()
})

Cypress.Commands.add('confirmAccount', () => {
    cy.get('[type=tel]').type(Cypress.env('phone_number'), { log: false })
    cy.get('span [jsname=V67aGc]').click({force:true}) // I used the 'force:true' here because google throws an error when interacting with the element
})

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
