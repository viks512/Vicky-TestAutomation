export const registrationData = {

    successfulRegistration: {
        email: `-----------`,
        password: '---------',
        userName: `-----------`,
        firstName: 'Test',
        lastName: 'User',
        dobMM: '01',
        dobDD: '01',
        dobYYYY: '1990'
    },

    wrongDetails: {
        email: 'invalid@test',
        password: 'short',
        userName: 'V',
        firstName: '',
        lastName: '',
        dobMM: '13',
        dobDD: '30',
        dobYYYY: '1890'
    },

    existingUser: {
        email: '-------',
        password: '---------',
    },

    withoutTerms: {
        email: '3123213@test.com',
        password: 'Abcd1234!',
        userName: 'Vtest',
        firstName: 'addsas',
        lastName: 'adasd',
        dobMM: '01',
        dobDD: '01',
        dobYYYY: '1990'
    },

    invalidEmail: {
        email: 'invalidemail',
        password: 'Abcd1234!',
        userName: 'sdfdf',
        firstName: 'Test',
        lastName: 'User'
    },

    weakPassword: {
        email: 'v@test.com',
        password: '123',
        userName: 'hnngf',
        firstName: 'Test',
        lastName: 'User'
    }
};
