import repository from "../repository/quartoRepository.js";
import hotelRepository from "../repository/hotelRepository.js";
import HttpError from "../Error/HttpError.js";

class quartoService {
    async findAll() {
        try {
            return await repository.findAll();
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        if (!id) {
            throw new HttpError('O ID é obrigatorio!', 400);
        }

        try {
            const quarto = await repository.findById(id);
            if (!quarto) {
                throw new HttpError('Quarto não encontrado!', 404);
            }

            return quarto;
        }
        catch (error) {
            throw error;
        }
    }

    async createQuarto(data) {
        try {
            const { nomeQuarto, preco, disponibilidade, imagemUrl, idHotel } = data;

            if (!nomeQuarto || !preco || !disponibilidade || !imagemUrl || !idHotel) {
                throw new HttpError('Todos os campos são obrigatórios!', 400);
            }

            const hotel = await hotelRepository.findById(idHotel);

            if (!hotel) throw new HttpError('Hotel não encontrado!', 404);

            return await repository.createQuarto(data);
        }
        catch (error) {
            throw error;
        }
    }

    async editQuarto(id, editQuarto) {
        if (!id) throw new HttpError('O ID é obrigatorio!', 400);

        try {
            const quarto = await repository.findById(id);
            if (!quarto) throw new HttpError('Quarto não encontrado!', 404);

            const hotel = await hotelRepository.findById(editQuarto.idHotel);

            if (!hotel) throw new HttpError('Hotel não encontrado!', 404);

            return await repository.editQuarto(id, editQuarto);
        }
        catch (error) {
            throw error;
        }
    }

    async deleteQuarto(id) {
        if (!id) {
            throw new HttpError('O ID é obrigatorio!', 400);
        }

        try {
            const quarto = await repository.findById(id);

            if (!quarto) {
                throw new HttpError('Quarto não encontrado!', 404);
            }

            return await repository.deleteQuarto(id);
        }
        catch (error) {
            throw error;
        }
    }

}

export default new quartoService();
