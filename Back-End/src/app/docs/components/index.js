import usuarios from './usuarioSchema.js';

export default {
    components: {
        schemas: {
            ...usuarios,
            Error: {
                type: "object",
                properties: {
                    title: {
                        type: "string"
                    },
                    error: {
                        type: 'string'
                    },
                    message: {
                        type: 'string'
                    }
                }
            }
        }
    }
}
