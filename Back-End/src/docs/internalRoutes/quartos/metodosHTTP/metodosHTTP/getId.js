export default {
    get: {
        tags: ['Quarto'],
        description: 'Retornar quarto',
        operationId: 'getQuarto',
        summary: 'Retornar quarto',
        /*
        security: [
            {
                ApiKeyAuth: []
            }
        ],
        */
        parameters: [
            {
                in: 'path',
                name: 'id',
                required: true,
                schema: {
                    type: 'integer',
                },
                description: 'Número de id do quarto'
            }
        ],
        responses: {
            '200': {
                description: 'Quarto retornado',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/quartoResponse'
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
