export default {
    delete: {
        tags: ['Quarto'],
        description: 'Deletar quarto',
        operationId: 'deleteQuarto',
        summary: 'Deletar quarto',
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
                description: 'Quarto deletado',
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
