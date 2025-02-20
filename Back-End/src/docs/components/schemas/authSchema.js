export default {
    auth: {
        type: 'object',
        properties: {
            email: {
                type: 'string',
                format: 'email',
                description: 'E-mail do usuario',
                example: 'exemplo@exemplo.com',
                required: true
            },
            senha: {
                type: 'string',
                description: 'Senha do usuario',
                example: '123456',
                required: true
            }
        }
    },
    authResponse: {
        type: 'Object',
        properties: {
            token: {
                type: 'string',
                description: 'Token de autenticação',
                example: '1234567890',
            },
        }
    },
}