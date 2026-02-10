export const loginData = {
    validUser: {
        username: '-------',
        password: '-------'
    },

    invalidUser: {
        username: 'invalid@test',
        password: 'short'
    },

    oneWordFields: {
        username: 'g',
        password: 'g'
    },

    wrongUser: {
        username: 'wronguser',
        password: 'wrongpassword'
    },

    longInputs: {
        username: 'a'.repeat(25) + '@test.com',
        password: 'b'.repeat(25)
    }
}