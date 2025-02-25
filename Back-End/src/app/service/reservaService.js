import repository from '../repository/reservaRepository.js';
import serviceQuarto from './quartoService.js';

class reservaService {
    async realizarReserva(data) {
        try {
            const { dataDeEntrada, dataDeSaida, idUsuario, idQuarto, status } = data;

            if (!dataDeEntrada || !dataDeSaida || !idUsuario || !idQuarto || !status) {
                throw new Error('Todos os campos são obrigatórios!');
            }

            const quartoEncontrado = await serviceQuarto.findById(idQuarto);

            if(!quartoEncontrado.disponibilidade){
                throw new Error('Quarto já ocupado!');
            }

            const dataEntrada = new Date(dataDeEntrada);
            const dataSaida = new Date(dataDeSaida);

            if(
                dataEntrada.getTime() >= dataSaida.getTime()
            ){
                throw new Error("A data de saída deve ser maior que a data de entrada.");
            }

            await serviceQuarto.editQuarto(idQuarto, {disponibilidade: false});

            return await repository.createReserva(data);

        } catch (error) {
            console.error('Erro ao realizar a reserva: ', error);
            throw error;
        }
    }

    async listaReserva() {
        try {
            return await repository.findAll();

        } catch (error) {
            console.error('Erro ao listar as reservas: ', error);
            throw error;
        }
    }

    async listarReservaPorId(id) {
        if (!id) {
            throw new Error('O ID é obrigatorio!');
        }

        try {
            const reservaEncontrada  = await repository.findById(id);

            if (!reservaEncontrada ) {
                throw new Error('Reserva não encontrada!');
            }

            return reservaEncontrada ;
        }
        catch (error) {
            console.error(`Erro ao realizar a busca da reserva: ${error}`);
            throw error;
        }
    }

    async cancelarReserva(id) {
        if (!id) {
            throw new Error('O ID é obrigatorio!');
        }

        try {
            const reservaEncontrada  = await repository.findById(id);

            if (!reservaEncontrada ) {
                throw new Error('Reserva não encontrada!');
            }

            await serviceQuarto.editQuarto(reservaEncontrada.idQuarto, {disponibilidade: true});

            return await repository.deleteReserva(id);

        } catch (error) {
            console.error(`Erro ao cancelar a reserva: ${error}`);
            throw error;
        }
    }
}

export default new reservaService();
