let data
describe('Test Login Scenario', () => {
  before(()=>{
    cy.fixture('element-mapper').then(sel=>{
      data = sel
    })
  })

  it('Use the search feature', ()=>{
    cy.get(data.searchButton).should('be.visible').click()
    cy.get(data.searchField).should('exist').type('Dynamic Naming{enter}')
    cy.get(data.searchedHeader).should('be.visible').and('contain.text', 'Dynamic Argument Syntax Constraints')
  })

  it('Pick Quick Start from the Doc list and handle a tab redirect', ()=>{
    cy.get(data.docTab).should('be.visible').trigger('mouseenter')
    cy.get(data.quickStartOption).contains('Quick Start').should('be.visible').click()
    cy.get(data.quickStartHeader).should('be.visible').and('contain.text', 'Quick Start')
    cy.get(data.playgroundLink).invoke('attr','target','_self').click()
    cy.get(data.playgroundHeader).should('be.visible').and('contain.text', 'Vue SFC Playground')
  })

  it('Pick Examples from the Doc list', () => {
    cy.get(data.docTab).should('be.visible').trigger('mouseenter')
    cy.get(data.exampleOption).should('be.visible').contains('Examples').click()
    cy.get(data.APIref).contains('API Preference').click()
  })
})