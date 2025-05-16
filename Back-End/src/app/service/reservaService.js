import repository from '../repository/reservaRepository.js';
import serviceQuarto from './quartoService.js';
import serviceUsuario from './usuarioService.js';
import HttpError from '../Error/HttpError.js';

class reservaService {
    validarData(data) {
        const [ano, mes, dia] = data.split('-').map(Number)

        const dataVerificar = new Date(ano, mes - 1, dia);

        return dataVerificar.getFullYear() === ano &&
            dataVerificar.getMonth() === mes - 1 &&
            dataVerificar.getDate() === dia
    }

    async realizarReserva(data) {
        try {
            const { dataDeEntrada, dataDeSaida, idUsuario, idQuarto, status } = data;

            if (!dataDeEntrada || !dataDeSaida || !idUsuario || !idQuarto || !status) {
                throw new HttpError('Todos os campos são obrigatórios!', 400);
            }

            const user = await serviceUsuario.findById(idUsuario);

            const quartoEncontrado = await serviceQuarto.findById(idQuarto);

            if (!quartoEncontrado.disponibilidade) {
                throw new HttpError('Quarto já ocupado!', 409);
            }

            if (!this.validarData(dataDeEntrada)) throw new HttpError('Data de entrada invalida!', 400);
            if (!this.validarData(dataDeSaida)) throw new HttpError('Data de saida invalida!', 400);

            const dataEntrada = new Date(dataDeEntrada);
            const dataSaida = new Date(dataDeSaida);

            if (
                dataEntrada.getTime() >= dataSaida.getTime()
            ) {
                throw new HttpError("A data deve ser ápos a data de entrada.", 400);
            }

            await serviceQuarto.editQuarto(idQuarto, { disponibilidade: false, idHotel: quartoEncontrado.idHotel });

            return await repository.createReserva(data);

        } catch (error) {
            throw error;
        }
    }

    async listaReserva() {
        try {
            return await repository.findAll();

        } catch (error) {
            throw error;
        }
    }

    async listarReservaPorId(id) {
        if (!id) {
            throw new HttpError('O ID é obrigatorio!', 400);
        }

        try {
            const reservaEncontrada = await repository.findById(id);

            if (!reservaEncontrada) {
                throw new HttpError('Reserva não encontrada!', 404);
            }

            return reservaEncontrada;
        }
        catch (error) {
            throw error;
        }
    }

    async cancelarReserva(id) {
        if (!id) {
            throw new HttpError('O ID é obrigatorio!', 400);
        }

        try {
            const reservaEncontrada = await repository.findById(id);
            const quartoEncontrado = await serviceQuarto.findById(reservaEncontrada.idQuarto);

            if (!reservaEncontrada) {
                throw new HttpError('Reserva não encontrada!', 404);
            }

            await serviceQuarto.editQuarto(reservaEncontrada.idQuarto, { disponibilidade: true, idHotel: quartoEncontrado.idHotel });

            return await repository.deleteReserva(id);

        } catch (error) {
            throw error;
        }
    }
}

export default new reservaService();
