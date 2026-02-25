class LoginPage {

    visit(baseUrl = 'http://wwww.saucedemo.com') {
        cy.visit(baseUrl);
    }

    login(username, password) {
        cy.login(username, password);
    }

}

export default new LoginPage()