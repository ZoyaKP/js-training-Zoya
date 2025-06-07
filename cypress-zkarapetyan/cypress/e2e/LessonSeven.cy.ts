/// <reference types="cypress" />

describe("Profile Page View and Update", () => {

  beforeEach(() => {
    cy.visit('https://mcw-de.purlin.tech');
    cy.origin('https://elliman.auth.purlin.tech', () => {
    cy.get('#email').type('zoya_k+de@purlin.com');
    cy.get('form').submit();
    cy.get('#password').type('Hayk2023@');
    cy.get('form').submit();
});
  });
  it("Verifying and updating profile fields", () => {

    // 1. Login (assuming already authenticated or session handled)
    cy.visit("https://mcw-de.purlin.tech/account?tab=profile");

    // 2. Verify initial values
    cy.get('input[placeholder="First name"]').should('be.visible').then(($firstName) => {
      expect($firstName).to.have.attr("value", "Zoya");
    });

    cy.get('input[placeholder="Last name"]').then(($lastName) => {
      expect($lastName).to.have.attr("value", "Karapetyank");
    });

    cy.get('input[placeholder="example@test.com"]').then(($email) => {
      expect($email).to.have.attr("value", "zoya_k+de@purlin.com");
    });

    cy.get('input[placeholder="(xxx) xxx-xxxx"]').then(($phone) => {
      expect($phone).to.have.attr("value", "(009) 887-7665");
    });

    //UPDATE
    cy.get('input[placeholder="First name"]').should("be.visible")
      .clear()
      .type("UpdatedZoya")
      .then(($input) => {
        expect($input).to.have.attr("value", "UpdatedZoya");
      });

    cy.get('input[placeholder="Last name"]')
      .clear()
      .type("UpdatedKarapetyan")
      .then(($input) => {
        expect($input).to.have.attr("value", "UpdatedKarapetyan");
      });

    cy.get('input[placeholder="(xxx) xxx-xxxx"]')
      .clear()
      .type("(094) 887-7665")
      .then(($input) => {
        expect($input).to.have.attr("value", "(094) 887-7665");
      });

    // SAVE
    cy.contains("Save changes").click();
    cy.contains("Changes saved successfully");

    cy.reload();

    // RECHECK
    cy.get('input[placeholder="First name"]').then(($firstName) => {
      expect($firstName).to.have.attr("value", "UpdatedZoya");
    });

    cy.get('input[placeholder="Last name"]').then(($lastName) => {
      expect($lastName).to.have.attr("value", "UpdatedKarapetyan");
    });

    cy.get('input[placeholder="(xxx) xxx-xxxx"]').then(($phone) => {
      expect($phone).to.have.attr("value", "(094) 887-7665");
    });
  });
});
