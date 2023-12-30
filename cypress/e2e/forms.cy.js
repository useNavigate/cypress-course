describe('forms test', () => {
    beforeEach(()=>{
        cy.visit("/forms")
    })
    it('Test subscribe from',()=>{
        cy.contains(/Testing Forms/i).should('be.visible')
        cy.getDataTest('subscribe-form').find('input').type('ryan@coderyan.com')
        cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('not.exist')
        cy.getDataTest("subscribe-button").click()
        cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('exist')
    })
})
