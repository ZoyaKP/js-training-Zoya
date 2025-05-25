/// <reference types="cypress" />

describe('Navigation and Collection Tests', () => {
  beforeEach(() => {
    cy.visit('https://mcw-de.purlin.tech');
    cy.wait(2000);
    cy.origin('https://elliman.auth.purlin.tech', () => {
    cy.get('#email').type('zoya_k+de@purlin.com');
    cy.get('form').submit();
    cy.get('#password').type('Hayk2023@');
    cy.get('form').submit();
    });
  });

  it('Redirection check',() => {
    cy.url().should('include', 'mcw-de.purlin.tech');
    cy.location().should((loc) => {
      expect(loc.host).to.eq('mcw-de.purlin.tech');
      expect(loc.hostname).to.eq('mcw-de.purlin.tech');
      expect(loc.origin).to.eq('https://mcw-de.purlin.tech');
      expect(loc.pathname).to.eq('/workspace/recommendations');
      expect(loc.protocol).to.eq('https:');
      expect(loc.href).to.eq('https://mcw-de.purlin.tech/workspace/recommendations')
    });
      cy.location().should((loc) => {
        const parts = loc.hostname.split('.');
        const superDomain = parts.slice(-2).join('.');
        const superDomainOrigin = `${loc.protocol}//${superDomain}`;
        expect(superDomain).to.eq('purlin.tech');
        expect(superDomainOrigin).to.eq('https://purlin.tech');
      });
      cy.title().should('eq', 'Elliman Inspirations')
    });

it('My Agents and My Workspace navigation check', () => {

  cy.visit('https://mcw-de.purlin.tech/workspace/my-agents');
  cy.location('pathname').should('eq', '/workspace/my-agents');
  cy.go('back');
  cy.location('pathname').should('eq','/workspace/recommendations');
  cy.get('p[data-tooltip-content="My Workspace"]').click();
  cy.wait(1000);

//Collections
cy.get('div.rc-dropdown:not([aria-hidden="true"])')
  .first()
  .within(() => {
    cy.contains('a', 'Collections').click();
  });
  cy.location('pathname').should('eq','/workspace/collections');
  //Inspirations
  cy.get('p[data-tooltip-content="My Workspace"]').click();
  cy.wait(1000);
  cy.get('div.rc-dropdown:not([aria-hidden="true"])')
  .first()
  .within(() => {
    cy.contains('a', 'Inspirations').click();
  });
  cy.location('pathname').should('eq','/workspace/inspirations');
  //Likes
  cy.get('p[data-tooltip-content="My Workspace"]').click();
  cy.wait(1000);
  cy.get('div.rc-dropdown:not([aria-hidden="true"])')
  .first()
  .within(() => {
    cy.contains('a', 'Likes').click();
  });
  cy.location('pathname').should('eq','/workspace/liked-homes');
  //Saved searches
  cy.get('p[data-tooltip-content="My Workspace"]').click();
  cy.wait(1000);
  cy.get('div.rc-dropdown:not([aria-hidden="true"])')
  .first()
  .within(() => {
    cy.contains('a', 'Saved searches').click();
  });
  cy.location('pathname').should('eq','/workspace/saved-searches');
});

it.only('Collection test', () => {
  cy.get('p[data-tooltip-content="My Workspace"]').click();
cy.get('div.rc-dropdown:not([aria-hidden="true"])')
  .first()
  .within(() => {
    cy.contains('a', 'Collections').click();
  });
  let collectionName = 'TestCollectionAutomation'
  cy.get('p[data-tooltip-content="Create collection"]').click();
  cy.get('input[placeholder="Type collection name"]')
  .type(`${collectionName}`);
  cy.get('p[data-tooltip-content="Create"]').click();
  cy.contains(collectionName).should('be.visible');

  // Wait a bit to allow any re-rendering (not ideal, but sometimes needed)
  cy.wait(1000); // <-- if the page visibly changes, add this
  
  // Then query fresh
  cy.xpath(`//p[text()="${collectionName}"]`)
    .parentsUntil('[class*="CollectionCard"]')
    .parent()
    .next()
    .find('button')
    .first()
    .click();
  
  cy.contains('p', 'Edit collection').click();
  cy.get('p[data-tooltip-content="Delete collection"]').click();
  cy.get('p[data-tooltip-content="Delete"]').click();
  });
});





// ✅ Third it block:
// - Go to the **My Workspace → Collections** section.
// - **Create a collection**:
//   - Verify the collection appears in the collections list with the correct name.
// - **Edit the collection name**:
//   - Verify the collection name is updated in the list.
// - **Delete the collection**:
//   - Verify the collection is removed from the DOM and no longer exists.