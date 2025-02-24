export default {
    post: {
        tags: ['Quarto'],
        operationId: 'createQuarto',
        summary: 'Criação de um novo quarto',
        description: 'Criação de um novo quarto',
        parameters: [],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/quartoSchema'
                    },
                    example: {
                        "nomeQuarto": "QuartoTeste1",
                        "preco": 1000,
                        "disponibilidade": true,
                        "imagemUrl": "URL",
                        "idHotel": 1
                    }
                }
            }
        },
        responses: {
            '200': {
                description: 'Quarto criado com sucesso!',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/quarto'
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
