import LoginPage from "../../../pages/LoginPage";
import InventoryPage from "../../../pages/InventoryPage";
import CartPage from "../../../pages/CartPage";

describe('Add to Cart', () => {
    it('should add products and see them in the cart', () => {
        cy.fixture('saucedemo').then((data) => {
            LoginPage.visit()
            LoginPage.login(data.username, data.password)

            InventoryPage.assertInventoryPage()
            InventoryPage.addProductsByIds(data.products)
            InventoryPage.assertCartBadge(data.products.length)
            
            InventoryPage.openCart()
            CartPage.assertLoaded()

            data.productNames.forEach((name) => {
                CartPage.assertItemVisible(name)
            })
        })
    })
})