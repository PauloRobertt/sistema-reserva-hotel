import repository from "../repository/hotelRepository.js";

class hotelService {
    async findAll() {
        return await repository.findAll();
    }

    async findById(id) {
        if (!id) {
            throw new Error('O ID é obrigatorio!');
        }

        try {
            const hotel = await repository.findById(id);
            if (!hotel) {
                throw new Error('Hotel não encontrado!');
            }

            return hotel;
        }
        catch (error) {
            throw new Error(`Erro ao realizar a busca do hotel: ${error}`);
        }
    }

    async createHotel(data) {
        try {
            const {hotel, nome, preco, localizacao, servicosDisponiveis, quantidadeDeQuartos, disponibilidade} = data;

            if (!nome || !preco || !localizacao || !servicosDisponiveis || !quantidadeDeQuartos || !disponibilidade) {
                throw new Error('Todos os campos são obrigatórios!');
            }

            return await repository.createHotel(data);
        }
        catch (error) {
            throw new Error (error.message);
        }
    }

    async editHotel(id, editHotel) {
        try {
            return await repository.editHotel(id, editHotel);
        }
        catch (error) {
            throw new Error(`Erro ao editar o usuario: ${error}`);
        }
    }

    async deleteHotel(id) {
        if (!id) {
            throw new Error('O ID é obrigatorio!');
        }

        try {
            const hotel = await repository.findById(id);
            if (!hotel) {
                throw new Error('Usuario não encontrado!');
            }

            return await repository.deleteHotel(id);
        }
        catch (error) {
            throw new Error(`Erro ao realizar a deleção do usuario: ${error}`);
        }
    }

}

export default new hotelService();