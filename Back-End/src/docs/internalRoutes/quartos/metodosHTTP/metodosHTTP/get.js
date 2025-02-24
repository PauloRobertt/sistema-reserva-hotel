export default {
    get: {
        tags:['Quarto'],
        description: 'Retornar Quartos',
        operationId: 'getQuartos',
        summary: 'Retornar quartos',
        parameters: [],
        responses: {
            '200': {
                description: 'Quartos retornados',
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
