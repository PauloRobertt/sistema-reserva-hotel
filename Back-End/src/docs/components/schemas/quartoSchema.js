export default {
    quarto: {
        type: 'object',
        properties: {
            id: {
                type: 'integer',
                description: 'Id do quarto',
                example: '1',
                required: true
            },
            nomeQuarto: {
                type: 'string',
                description: 'Nome do quarto',
                example: 'quarto 1',
                required: true
            },
            preco: {
                type: 'decimal',
                description: 'Preço do quarto',
                example: '1000,00',
                required: true
            },
            disponibilidade: {
                type: 'boolean',
                description: 'Disponibilidade do quarto',
                example: 'true',
                required: true
            },
            imagemUrl: {
                type: 'string',
                description: 'Url da Imagem do quarto',
                example: 'url',
                required: true
            },
            idHotel: {
                type: 'integer',
                description: 'ID do hotel na qual o quarto esta vinculado',
                example: '1',
                required: true
            }
        }
    },
    quartoResponse: {
        type: 'Object',
        properties: {
            id: {
                type: 'integer',
                description: 'Id do quarto',
                example: '1',
                required: true
            },
            nomeQuarto: {
                type: 'string',
                description: 'Nome do quarto',
                example: 'quarto 1',
                required: true
            },
            preco: {
                type: 'decimal',
                description: 'Preço do quarto',
                example: '1000,00',
                required: true
            },
            disponibilidade: {
                type: 'boolean',
                description: 'Disponibilidade do quarto',
                example: 'true',
                required: true
            },
            imagemUrl: {
                type: 'string',
                description: 'Url da Imagem do quarto',
                example: 'url',
                required: true
            },
            idHotel: {
                type: 'integer',
                description: 'ID do hotel na qual o quarto esta vinculado',
                example: '1',
                required: true
            }
        }
    },
    quartoResponseGet: {
        type: "array",
        items: {
            $ref: "#/components/quartoSchema/quartoResponse",
        },
    }
}