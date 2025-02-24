export default {
    get: {
        tags:['Hotel'],
        description: 'Retornar Hoteis',
        operationId: 'getHoteis',
        summary: 'Retornar hoteis',
        parameters: [],
        responses: {
            '200': {
                description: 'Hoteis retornados',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/hotelResponse'
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
