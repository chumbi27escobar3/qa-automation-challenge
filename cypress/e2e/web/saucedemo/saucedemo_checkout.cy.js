import LoginPage from "../../../pages/LoginPage";
import InventoryPage from "../../../pages/InventoryPage";
import CartPage from "../../../pages/CartPage";
import CheckoutPage from "../../../pages/CheckoutPage";

describe('Complete Checkout Flow', () => {
    it('should complete the checkout process successfully', () => {
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

            CartPage.checkout()
            CheckoutPage.fillCheckoutForm(data.checkout)
            CheckoutPage.finishCheckout()
            CheckoutPage.assertCheckoutComplete()
        })
    })
})