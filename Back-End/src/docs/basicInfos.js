export default {
    openapi: '3.0.0',
    info:{
        title: 'Sistema de Reserva de Hoteis',
        version: '1.0.0',
        description: 'API para gerenciar reservas de hotéis',
        contact:{
            name: 'Paulo Robert Lima Gomes',
            email: 'paulorobert5776@gmail.com',
        }
    },
    servers:[{
        url: 'http://localhost:3001',
        description: 'Servidor de desenvolvimento'
    }]
}
