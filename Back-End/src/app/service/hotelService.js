import repository from "../repository/hotelRepository.js";
import HttpError from "../Error/HttpError.js";

class hotelService {
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
            const hotel = await repository.findById(id);

            if (!hotel) {
                throw new HttpError('Hotel não encontrado!', 404);
            }

            return hotel;
        }
        catch (error) {
            throw error;
        }
    }

    async createHotel(data) {
        try {
            const { nomeHotel, endereco, descricao, telefone, email } = data;

            if (!nomeHotel || !endereco || !descricao || !telefone || !email) {
                throw new HttpError('Todos os campos são obrigatórios!', 400);
            }

            return await repository.createHotel(data);
        }
        catch (error) {
            throw error;
        }
    }

    async editHotel(id, editHotel) {
        if (!id) {
            throw new HttpError('O ID é obrigatorio!', 400);
        }

        try {
            return await repository.editHotel(id, editHotel)
        }
        catch (error) {
            throw error;
        }
    }

    async deleteHotel(id) {
        if (!id) {
            throw new HttpError('O ID é obrigatorio!', 400);
        }

        try {
            const hotel = await repository.findById(id)

            if (!hotel) {
                throw new HttpError('Hotel não encontrado!', 404);
            }

            return await repository.deleteHotel(id);
        }
        catch (error) {
            throw error;
        }
    }

}

export default new hotelService();
