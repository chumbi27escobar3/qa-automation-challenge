class CartPage {
    assertLoaded() {
        cy.url().should('include', '/cart.html')
    }

    assertItemVisible(itemName) {
        cy.contains('.inventory_item_name', itemName).should('be.visible')
    }   

    checkout() {
        cy.get('[data-test="checkout"]').click()
    }
}

export default new CartPage()

