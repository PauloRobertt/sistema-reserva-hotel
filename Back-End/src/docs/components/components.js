import usuarios from './schemas/usuarioSchema.js';
import auth from './schemas/authSchema.js';
import hotelSchema from './schemas/hotelSchema.js';

export default {
    components: {
        securitySchemes: {
            ApiKeyAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'X-API-KEY',
                in: 'header'
            }
        },
        schemas: {
            ...usuarios,
            ...auth,
            ...hotelSchema,
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
