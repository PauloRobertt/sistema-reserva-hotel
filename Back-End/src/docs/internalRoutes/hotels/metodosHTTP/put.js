export default {
    put: {
        operationId: 'updateHotel',
        tags:['Hotel'],
        summary: 'Edição de Hotel',
        description: 'Edição de Hotel',
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
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/hotelResponse'
                    },
                    example: {
                        "nomeHotel": "HotelTeste1",
                        "endereco": "enderecoTest1",
                        "descricao": "descricaoTest1",
                        "telefone": "(99)9999999",
                        "email": "hotel@hotel.com"
                    }
                }
            }
        },
        responses: {
            '200': {
                description: 'Hotel atualizado com sucesso!',
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
        }
    }
}