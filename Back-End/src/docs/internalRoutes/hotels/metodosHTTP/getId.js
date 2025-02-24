export default {
    get: {
        tags: ['Hotel'],
        description: 'Retornar hotel',
        operationId: 'getHotel',
        summary: 'Retornar hotel',
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
                description: 'Número de id do hotel'
            }
        ],
        responses: {
            '200': {
                description: 'Hotel retornado',
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
