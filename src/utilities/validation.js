

export default validation = {
    email: {
        email: {
            message: 'Does not look like a valid email.'
        }
    },
    password: {
        length: {
            minimum: 6,
            message: 'Must be at least 6 characters.'
        }
    }
}