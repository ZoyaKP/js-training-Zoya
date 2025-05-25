/// <reference types="cypress" />

describe('Login tests', () => {

  before(() => {
    cy.visit('https://mcw-de.purlin.tech');
    cy.wait(2000);

    cy.origin('https://elliman.auth.purlin.tech', () => {
      cy.url().should('include', '/Account/Login');
    });
  });

  it('Empty email and password validation', () => {
    cy.origin('https://elliman.auth.purlin.tech', () => {
      cy.get('#email').should('exist').clear();
      cy.get('form').submit();

      cy.contains('Email is required.').should('be.visible');
      cy.get('input[name="password"]').should('not.exist');
    });
  });

it ('Invalid email check', () => {
  
  cy.origin('https://elliman.auth.purlin.tech', () => {
    cy.get('#email').should('exist').type('zzz');
    cy.get('form').submit();

    cy.contains('This email address is invalid. Please try again.').should('be.visible');
    cy.get('input[name="password"]').should('not.exist');
  });
});

it ('Non-existing email check', () => {
  cy.origin('https://elliman.auth.purlin.tech', () => {
    cy.get('#email').should('exist').type('zazaza@purlin.com');
    cy.get('form').submit();

    cy.contains("Account with this email doesn't exist.").should('be.visible');
    cy.get('input[name="password"]').should('not.exist');
 });
});

it ('Valid email check', () => {
  cy.origin('https://elliman.auth.purlin.tech', () => {
    cy.get('#email').should('exist').type('zoya_k+de@purlin.com');
    cy.get('form').submit();

    cy.get('#password').should('exist');
 });
});
it ('Empty password check', () => {
  cy.origin('https://elliman.auth.purlin.tech', () => {
    cy.get('#email').type('zoya_k+de@purlin.com');
    cy.get('form').submit();
    cy.get('form').submit();

    cy.contains('Password is required.').should('be.visible');
 });
});
it ('Wrong password check', () => {
  cy.origin('https://elliman.auth.purlin.tech', () => {
    cy.get('#email').type('zoya_k+de@purlin.com');
    cy.get('form').submit();
    cy.get('#password').type('123');
    cy.get('form').submit();

    cy.contains('Incorrect password. Please try again.').should('be.visible');
 });
});
it.only ('Valid password check', () => {
  cy.origin('https://elliman.auth.purlin.tech', () => {
    cy.get('#email').type('zoya_k+de@purlin.com');
    cy.get('form').submit();
    cy.get('#password').type('Hayk2023@');
    cy.get('form').submit();
 });
 cy.url().should('include', 'mcw-de.purlin.tech');
});
});





//    c. Enter the correct password and submit the form.
//       - You should now be logged in and redirected back to the original domain.
//       - Outside the `cy.origin()` block, use `cy.url()` or `cy.location()` to assert that the URL is back on the original domain.
