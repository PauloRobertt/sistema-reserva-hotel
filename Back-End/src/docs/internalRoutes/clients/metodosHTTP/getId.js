export default {
    get: {
        tags: ['Usuario'],
        description: 'Retornar usuario',
        operationId: 'getUsuario',
        summary: 'Retornar usuario',
        security: [
            {
                ApiKeyAuth: []
            }
        ],
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
        responses: {
            '200': {
                description: 'Usuario retornado',
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
        },
    },
}
