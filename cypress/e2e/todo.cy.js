describe('TodoList E2E', () => {
  it('can add and remove a todo', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('input[placeholder="Add todo"]').type('Learn Jenkins{enter}')
    cy.contains('Learn Jenkins')
    cy.get('button').contains('Remove').click()
    cy.contains('Learn Jenkins').should('not.exist')
  })
})
