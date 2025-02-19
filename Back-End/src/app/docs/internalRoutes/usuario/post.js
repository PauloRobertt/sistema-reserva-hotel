export default {
    post: {
        operationId: 'createUser',
        tags: ['Usuario'],
        summary: 'Criação de um novo usuario',
        description: 'Criação de um novo usuario',
        parameters: [],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/usuario'
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
                description: 'Usuario criado com sucesso!',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/usuario'
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
