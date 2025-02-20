export default {
    usuario: {
        type: 'Object',
        properties: {
            id: {
                type: 'integer',
                description: 'ID do usuario',
                example: 1,
                required: true
            },
            nome: {
                type: 'string',
                description: 'Nome do usuario',
                example: 'João',
                required: true
            },
            email: {
                type: 'string',
                description: 'E-mail do usuario',
                example: 'joao@email.com',
                required: true
            },
            senha: {
                type: 'string',
                description: 'Senha do usuario',
                example: '123456',
                required: true
            },
            role: {
                type: 'string',
                enum: ['ADMIN', 'USER'],
                description: 'Role do usuario',
                example: 'ADMIN',
                required: true
            }
        }
    },
    usuarioResponse:{
        type: 'Object',
        properties: {
            id: {
                type: 'integer',
                description: 'ID do usuario',
                example: 1,
                required: true
            },
            nome: {
                type: 'string',
                description: 'Nome do usuario',
                example: 'João',
                required: true
            },
            email: {
                type: 'string',
                description: 'E-mail do usuario',
                example: 'joao@email.com',
                required: true
            },
            senha: {
                type: 'string',
                description: 'Senha do usuario',
                example: '123456',
                required: true
            },
            create_at: {
                type: 'string',
                description: 'Data de criação do usuario',
                example: '2020-01-01T00:00:00.000Z',
                format: 'date-time'
            },
            update_at: {
                type: 'string',
                description: 'Data de alteração do usuario',
                example: '2020-01-01T00:00:00.000Z',
                format: 'date-time'
            }
        }
    },
    usuarioResponseGet: {
        type: "array",
        items: {
            $ref: "#/components/usuarioSchema/usuarioResponse",
        },
    }
}
