export default {
    post: {
        operationId: 'registerUser',
        tags: ['Auth'],
        summary: 'Registrar novo usuario',
        description: 'Registrar novo usuario',
        parameters: [],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/auth'
                    },
                    example: {
                        "nome": "João",
                        "email": "joao.silva@exemplo.com",
                        "senha": "123456",
                        "role": "ADMIN or USER"
                    }
                }
            }
        },
        responses: {
            '200': {
                description: 'Usuario registrado com sucesso!',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/authResponse'
                        },
                    },
                },
            },
            '500': {
                description: 'Erro interno',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error'
                        },
                    },
                },
            },
        }
    }
}
