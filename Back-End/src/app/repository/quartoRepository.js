import quarto from '../models/quarto.js';

class quartoRepository{

    async findAll(){
        const result = await quarto.findAll();
        return result;
    }

    async findById(id){
        const result = await quarto.findByPk(id)
        return result;
    }

    async createQuarto(data){
        const {quarto, nome, preco, localizacao, servicosDisponiveis, quantidadeDeQuartos, disponibilidade} = data;

        return await quarto.create({nome, preco, localizacao, servicosDisponiveis, quantidadeDeQuartos, disponibilidade});
    }

    async editQuarto(id, data){
        const {quarto, nome, preco, localizacao, servicosDisponiveis, quantidadeDeQuartos, disponibilidade} = data;
        const quartoEditado = await quarto.findByPk(id);

        if(!quartoEditado){
            throw new Error("Quarto não encontrado!");
        }

        return await quartoEditado.update({nome, preco, localizacao, servicosDisponiveis, quantidadeDeQuartos, disponibilidade});
    }

    async deleteQuarto(id){
        const quartoDelete = await quarto.findByPk(id);

        if(!quartoDelete){
            throw new Error("Quarto não encontrado!")
        }

        return await quartoDelete.destroy();   
    }
}

export default new quartoRepository();