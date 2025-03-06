export default {
    hotel: {
        type: 'object',
        properties: {
            id: {
                type: 'integer',
                description: 'ID do Hotel',
                example: '1',
                required: true
            },
            nomeHotel: {
                type: 'string',
                description: 'Nome do hotel',
                example: 'Hotelexample',
                required: true
            },
            endereco: {
                type: 'string',
                description: 'Endereço do hotel',
                example: 'RuaXX, XXX',
                required: true
            },
            descricao: {
                type: 'string',
                description: 'Descrição do hotel',
                example: 'Descrição sobre o hotel',
                required: true
            },
            telefone: {
                type: 'string',
                description: 'Telefone para contato',
                example: '(xx)xxxxxxx',
                required: true
            },
            email: {
                type: 'string',
                description: 'E-mail para contato',
                example: 'Hotelexample@email.com',
                required: true
            },
        }
    },
    hotelResponse: {
        type: 'object',
        properties: {
            id: {
                type: 'integer',
                description: 'ID do Hotel',
                example: '1',
            },
            nomeHotel: {
                type: 'string',
                description: 'Nome do hotel',
                example: 'Hotelexample',
            },
            endereco: {
                type: 'string',
                description: 'Endereço do hotel',
                example: 'RuaXX, XXX',
            },
            descricao: {
                type: 'string',
                description: 'Descrição do hotel',
                example: 'Descrição sobre o hotel',
            },
            telefone: {
                type: 'string',
                description: 'Telefone para contato',
                example: '(xx)xxxxxxx',
            },
            email: {
                type: 'string',
                description: 'E-mail para contato',
                example: 'Hotelexample@email.com'
            },
        }
    },
    hotelResponseGet: {
        type: "array",
        items: {
            $ref: "#/components/schemas/hotelResponse",
        },
    }
}
