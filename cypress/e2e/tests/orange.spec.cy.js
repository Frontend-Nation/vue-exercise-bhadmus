let data
describe('Test Login Scenario', () => {
  before(()=>{
    cy.fixture('element-mapper').then(sel=>{
      data = sel
    })
  })

  it('Positive Test', () => {
    cy.login(data.validUsername, data.validPassword)
    cy.verifyText(data.dashboard, data.successText)
  })

  it('Negative Test', () => {
    cy.login(data.validUsername, data.invalidPassword)
    cy.verifyText(data.error, data.failureText)
  })
})