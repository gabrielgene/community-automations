// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('auth', () => {
  return cy.setCookie(
    'user',
    'eyJwaWQiOjgwNjI2MjAsInVpZCI6ODQ0MTkzNn0=|1564283888|f6fce3110e03a3136bf20947f048d4019aa1cd4e',
  );
});
