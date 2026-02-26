import LoginPage from "../../../pages/LoginPage";

describe('Login Saucedemo', () => {
    it('should login successfully', () => {
        cy.fixture('saucedemo').then((data) => {
            LoginPage.visit(data.baseUrl)
            LoginPage.login(data.username, data.password)

            cy.url().should('include', '/inventory.html')
            cy.contains('Products').should('be.visible')
        })
    })
})

