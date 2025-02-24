import repository from '../repository/reservaRepository.js';
import serviceQuarto from './quartoService.js';

class reservaService {
    async realizarReserva(data) {
        try {
            const { dataDeEntrada, dataDeSaida, idUsuario, idQuarto, status } = data;

            if (!dataDeEntrada || !dataDeSaida || !idUsuario || !idQuarto || !status) {
                throw new Error('Todos os campos são obrigatórios!');
            }

            await serviceQuarto.editQuarto(idQuarto, {disponibilidade: false});

            return await repository.createReserva(data);

        } catch (error) {
            throw new Error(error.message);
        }
    }

    async listaReserva() {
        try {
            return await repository.findAll();

        } catch (error) {
            throw new Error(error.message);
        }
    }

    async listaReservaForId(id) {
        if (!id) {
            throw new Error('O ID é obrigatorio!');
        }

        try {
            const returnReserva = await repository.findById(id);

            if (!returnReserva) {
                throw new Error('Reserva não encontrado!');
            }

            return returnReserva;
        }
        catch (error) {
            throw new Error(`Erro ao realizar a busca da reserva: ${error}`);
        }
    }

    async cancelarReserva(id) {
        if (!id) {
            throw new Error('O ID é obrigatorio!');
        }

        try {
            const returnReserva = await repository.findById(id);

            if (!returnReserva) {
                throw new Error('Reserva não encontrada!');
            }

            return await repository.deleteReserva(id);

        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new reservaService();
