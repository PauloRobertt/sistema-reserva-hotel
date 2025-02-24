export default {
    post: {
        tags: ['Hotel'],
        operationId: 'createHotel',
        summary: 'Criação de um novo hotel',
        description: 'Criação de um novo hotel',
        parameters: [],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/hotel'
                    },
                    example: {
                        "nomeHotel": "Hotel1",
                        "endereco": "endereco1",
                        "descricao": "descricao1",
                        "telefone": "(99)9999999",
                        "email": "hotel@hotel.com"
                    }
                }
            }
        },
        responses: {
            '200': {
                description: 'Hotel criado com sucesso!',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/hotel'
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
