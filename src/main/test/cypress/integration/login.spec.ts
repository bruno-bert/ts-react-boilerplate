describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('should be able to type', () => {
    cy.getByTestId('email').focus().type('test')
    cy.getByTestId('password').focus().type('test')
  })
})
