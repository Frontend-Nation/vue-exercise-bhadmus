let data
describe('Test Login Scenario', () => {
  before(()=>{
    cy.fixture('element-mapper').then(sel=>{
      data = sel
    })
  })

  it('Use the search feature', ()=>{
    cy.get('button').contains('dummy text')
  })

  it('Pick Quick Start from the Doc list and handle a tab redirect', ()=>{
    cy.get('button').contains('dummy text')
  })

  it('Pick Quick Start from the Doc list', () => {
    cy.get('button').contains('dummy text')
  })
})