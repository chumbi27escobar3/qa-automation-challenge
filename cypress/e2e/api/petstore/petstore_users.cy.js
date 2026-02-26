describe('Petstore Users API', () => {
    const apiBaseUrl = Cypress.env('petstoreBaseUrl')
    const ts = Date.now()
    const username = `camilo_${ts}`
    const id = ts

    const user= {
        id,
        username,
        firstName: 'Camilo',
        lastName: 'Escobar',
        email: `camilo_${id}@mail.com`,
        password: 'TestPass123',
        phone: '45344534224',
        userStatus: 1
    }   

    it('should create, get, update and delete a user', () => {
        // Create user
        cy.request('POST', `${apiBaseUrl}/user`, user).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message');
        });

        // Get user
        cy.request('GET', `${apiBaseUrl}/user/${username}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.username).to.eq(username);
            expect(response.body.email).to.eq(user.email);
        });

        // Update user
        const updatedUser = { ...user, firstName: 'Pedro', email: `pedro_${id}@mail.com` };
        cy.request('PUT', `${apiBaseUrl}/user/${username}`, updatedUser).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('message');
        });

        // Get updated user 
        cy.request('GET', `${apiBaseUrl}/user/${username}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.firstName).to.eq(updatedUser.firstName);
            expect(response.body.email).to.eq(updatedUser.email);
        });

        // Delete user
        cy.request('DELETE', `${apiBaseUrl}/user/${username}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('message');
        });

        // Verify user deletion
        cy.request({ method: 'GET', url: `${apiBaseUrl}/user/${username}`, failOnStatusCode: false }).then((response) => {
            expect(response.status).to.eq(404);
        })
    })
})




