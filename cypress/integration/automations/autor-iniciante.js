describe('Post Resource', function() {
  beforeEach(() => {
    cy.auth();
  });

  it('Creating a New Post', function() {
    cy.visit('/'); // 1.

    cy.get('input.post-title') // 2.
      .type('My First Post'); // 3.

    cy.get('input.post-body') // 4.
      .type('Hello, world!'); // 5.

    cy.contains('Submit') // 6.
      .click(); // 7.

    cy.url() // 8.
      .should('include', '/posts/my-first-post');

    cy.get('h1') // 9.
      .should('contain', 'My First Post');
  });
});
