class InventoryPage {
    assertInventoryPage() {
        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="title"]').should('be.visible')
    }

    addProductsByIds(addToCartIds) {
        addToCartIds.forEach((id) => {
            cy.get(`[data-test="${id}"]`).click()
        })
    }

    assertCartBadge(expected){
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', String(expected))
    }

    openCart() {
        cy.get('[data-test="shopping-cart-link"]').click()
    }
}

export default new InventoryPage()