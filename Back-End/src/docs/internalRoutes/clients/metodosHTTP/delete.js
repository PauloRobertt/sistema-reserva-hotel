export default {
    delete: {
        tags: ['Usuario'],
        description: 'Deletar usuario',
        operationId: 'deleteUsuario',
        summary: 'Deletar usuario',
        parameters: [
            {
                in: 'path',
                name: 'id',
                required: true,
                schema: {
                    type: 'integer',
                },
                description: 'Número do id do usuario'
            }
        ],
        responses: {
            '200': {
                description: 'Usuario deletado',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/usuarioResponse'
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
