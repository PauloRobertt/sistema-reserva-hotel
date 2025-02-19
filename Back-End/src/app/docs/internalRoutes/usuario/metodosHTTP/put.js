export default {
    put: {
        operationId: 'updateUser',
        tags:['Usuario'],
        summary: 'Update user',
        description: 'Update user',
        parameters: [
            {
                in: 'path',
                name: 'id',
                required: true,
                schema: {
                    type: 'integer',
                },
                description: 'Número do id do usuario'
            }
        ],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/usuarioResponse'
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
                description: 'Usuario atualizado com sucesso!',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/usuarioResponse'
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