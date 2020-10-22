
context('FIRST TEST', () => {
    beforeEach(() => {
        cy.visit('https://www.trademe.co.nz')
    })
    it('click on search field and insert requested value', ()=> {
        cy.get('#searchString').type('woodworking book').should('have.value', 'woodworking book')
        cy.get('.btn.btn-trademe').click()
    })
})