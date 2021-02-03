describe('Input form', () => {
  const typedText = 'Get better!!';
  const typedDescription = 'LETS LEARN FULL STACK JAVASCRIPT!';

  beforeEach(() => {
    cy.visit('/');
  });
  it('Focuses input on load', () => {
    cy.get('.btn-create-task').click();
    cy.get('.input-title').type(typedText).should('have.value', typedText);
    cy.get('.input-description')
      .type(typedDescription)
      .should('have.value', typedDescription);
    cy.get('.btn-confirm-create-task').click();
  });
  it('Delete task created', () => {
    cy.get('.btn-delete-task').click({ multiple: true });
  });
  it('Cancel creation of task', () => {
    cy.get('.btn-create-task').click();
    cy.get('.cancel-task').click();
  });
});
