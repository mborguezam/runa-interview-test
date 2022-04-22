
describe('validating the gmail lading page', () => {
    it('when I visit the gmail URL then I land on the page with success', () => {

        cy.visit('/')
        cy.get('.logo').should('be.visible')
        cy.get('#Email').should('be.visible')
        cy.get('#next').should('exist')
        cy.get('#link-signup > a').click()


    });

    it('when I land at the creating account page, then I see a form', () => {
        //validataing heading by its visibility cause google shows texts according to idioms
        cy.get("#headingText").should('be.visible')

        cy.createAccount()
        cy.wait(3000) // the wait is being used here to prevent errors when the app loads to fast the next step

    });

    it('when I go to confirm  phone number, then I see a field to input the phone number', () => {
        //validataing heading by its visibility cause google shows texts according to idioms
        cy.get("#headingText").should('be.visible')

        cy.confirmAccount()
    });
});