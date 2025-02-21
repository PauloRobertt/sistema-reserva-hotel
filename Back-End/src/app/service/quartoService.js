import repository from "../repository/quartoRepository.js";

class quartoService {
    async findAll() {
        return await repository.findAll();
    }

    async findById(id) {
        if (!id) {
            throw new Error('O ID é obrigatorio!');
        }

        try {
            const quarto = await repository.findById(id);
            if (!quarto) {
                throw new Error('Quarto não encontrado!');
            }

            return quarto;
        }
        catch (error) {
            throw new Error(`Erro ao realizar a busca do quarto: ${error}`);
        }
    }

    async createQuarto(data) {
        try {
            const {nomeQuarto, preco, disponibilidade, imagemUrl, idHotel} = data;

            if (!nomeQuarto || !preco || !disponibilidade || !imagemUrl || !idHotel) {
                throw new Error('Todos os campos são obrigatórios!');
            }

            return await repository.createQuarto(data);
        }
        catch (error) {
            throw new Error (error.message);
        }
    }

    async editQuarto(id, editQuarto) {
        try {
            return await repository.editQuarto(id, editQuarto);
        }
        catch (error) {
            throw new Error(`Erro ao editar o quarto: ${error}`);
        }
    }

    async deleteQuarto(id) {
        if (!id) {
            throw new Error('O ID é obrigatorio!');
        }

        try {
            const quarto = await repository.findById(id);

            if (!quarto) {
                throw new Error('Quarto não encontrado!');
            }

            return await repository.deleteQuarto(id);
        }
        catch (error) {
            throw new Error(`Erro ao realizar a deleção do quarto: ${error}`);
        }
    }

}

export default new quartoService();
