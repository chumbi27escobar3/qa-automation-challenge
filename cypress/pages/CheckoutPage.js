class CheckoutPage {
    fillCheckoutForm(checkout) {
        cy.url().should('include', '/checkout-step-one.html')

        cy.get('[data-test="firstName"]').type(checkout.firstName)
        cy.get('[data-test="lastName"]').type(checkout.lastName)
        cy.get('[data-test="postalCode"]').type(checkout.postalCode)

        cy.get('[data-test="continue"]').click()
    }

    finishCheckout() {
        cy.url().should('include', '/checkout-step-two.html')
        cy.get('[data-test="finish"]').click()
    }

    assertCheckoutComplete() {
        cy.url().should('include', '/checkout-complete.html')
        cy.get('[data-test="complete-header"]').should('contain.text', 'Thank you for your order!')
    }  
}

export default new CheckoutPage()
        