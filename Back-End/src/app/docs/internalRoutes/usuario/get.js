export default {
    get: {
        description: 'Retornar Usuarios',
        operationId: 'getUsuarios',
        summary: 'Retornar usuarios',
        parameters: [],
        responses: {
            '200': {
                description: 'Usuarios retornados',
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
