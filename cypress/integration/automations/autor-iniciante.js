
const users = ['julianajennifer', 'gabrielgene']; 

describe('Beginner author', function() {
  beforeEach(() => {
    cy.auth();
  });

  users.forEach(username => {
    it(`Upgrade user: ${username}`, function() {
      cy.visit('/');
      cy.visit(`https://${username}.jusbrasil.com.br/gerenciar`);
  
      cy.get(':nth-child(9) > :nth-child(3) > :nth-child(1) > .btn').click();
  
      cy.get(':nth-child(5) > .selection-control > .selection-control-label').click();
  
      cy.get(':nth-child(13) > .selection-control > .selection-control-label').click();
  
      cy.get('.ProfileEdit-buttons-wrapper > .btn--green').click();
    });
  })
});

// visitar perfil pelo username 