describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('should be able to type', () => {
    cy.getByTestId('email').focus().type('dd')
    cy.getByTestId('password').focus().type('dddddddddddddddd')
  })
})
