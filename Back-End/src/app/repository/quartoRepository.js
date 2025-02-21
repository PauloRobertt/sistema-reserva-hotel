import quarto from '../models/quarto.js';

class quartoRepository {

    async findAll() {
        const result = await quarto.findAll();
        return result;
    }

    async findById(id) {
        const result = await quarto.findByPk(id)
        return result;
    }

    async createQuarto(data) {
        const { nomeQuarto, preco, disponibilidade, imagemUrl, idHotel } = data;

        return await quarto.create({ nomeQuarto, preco, disponibilidade, imagemUrl, idHotel });
    }

    async editQuarto(id, data) {
        const { nomeQuarto, preco, disponibilidade, imagemUrl, idHotel } = data;

        const quartoEditado = await quarto.findByPk(id);

        if (!quartoEditado) {
            throw new Error("Quarto não encontrado!");
        }

        return await quartoEditado.update({ nomeQuarto, preco, disponibilidade, imagemUrl, idHotel });
    }

    async deleteQuarto(id) {
        const quartoDelete = await quarto.findByPk(id);

        if (!quartoDelete) {
            throw new Error("Quarto não encontrado!")
        }

        return await quartoDelete.destroy();
    }
}

export default new quartoRepository();
