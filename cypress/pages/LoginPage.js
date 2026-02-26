class LoginPage {

    visit() {
        cy.visit('/');
    }

    login(username, password) {
        cy.login(username, password);
    }

}

export default new LoginPage()