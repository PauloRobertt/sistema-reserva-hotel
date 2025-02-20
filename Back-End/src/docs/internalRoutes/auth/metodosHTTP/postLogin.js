export default {
    post: {
        operationId: 'login',
        tags: ['Auth'],
        summary: 'Realização do login',
        description: 'Realização do login',
        parameters: [],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/authSchema'
                    },
                    example: {
                        "email": "joao.silva@exemplo.com",
                        "senha": "123456"
                    }
                }
            }
        },
        responses: {
            '201': {
                description: 'Authenticação bem sucedida!',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/authResponse'
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
