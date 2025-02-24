export default {
    put: {
        operationId: 'updateQuarto',
        tags:['Quarto'],
        summary: 'Edição de Quarto',
        description: 'Edição de Quarto',
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
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/quartoResponse'
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
                description: 'Quarto atualizado com sucesso!',
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
        }
    }
}