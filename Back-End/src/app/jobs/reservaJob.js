import cron from 'node-cron';
import reservaService from '../service/reservaService.js';

cron.schedule('0 0 * * *', async () => {
    try {
        const reservas = await reservaService.listaReserva();
        const hoje = new Date();
        hoje.setHours(0,0,0,0);

        for (const reserva of reservas) {
            const dataSaida = new Date(reserva.dataDeSaida);
            dataSaida.setHours(0,0,0,0);

            if (dataSaida < hoje) {
                console.log(`Reservar de ID ${reserva.id} - Saída: ${reserva.dataDeSaida} - Expirada!`);
                await reservaService.cancelarReserva(reserva.id);
            }
        }

        console.log('Verificação de reservas concluída.');
    } catch (error) {
        console.error('Erro ao realizar o monitoramento da reserva');
        throw error;
    }
});
