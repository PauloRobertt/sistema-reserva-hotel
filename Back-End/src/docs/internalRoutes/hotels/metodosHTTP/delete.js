export default {
    delete: {
        tags: ['Hotel'],
        description: 'Deletar hotel',
        operationId: 'deleteHotel',
        summary: 'Deletar hotel',
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
                description: 'Hotel deletado',
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
