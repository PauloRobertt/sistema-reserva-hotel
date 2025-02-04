import hotel from '../models/hotel.js';

class hotelRepository{

    async findAll(){
        const result = await hotel.findAll();
        return result;
    }

    async findById(id){
        const result = await hotel.findByPk(id)
        return result;
    }

    async createHotel(data){
        const {hotel, nome, preco, localizacao, servicosDisponiveis, quantidadeDeQuartos, disponibilidade} = data;

        return await hotel.create({nome, preco, localizacao, servicosDisponiveis, quantidadeDeQuartos, disponibilidade});
    }

    async editHotel(id, data){
        const {hotel, nome, preco, localizacao, servicosDisponiveis, quantidadeDeQuartos, disponibilidade} = data;
        const hotelEditado = await hotel.findByPk(id);

        if(!hotelEditado){
            throw new Error("Hotel não encontrado!");
        }

        return await hotelEditado.update({nome, preco, localizacao, servicosDisponiveis, quantidadeDeQuartos, disponibilidade});
    }

    async deleteHotel(id){
        const hotelDelete = await hotel.findByPk(id);

        if(!hotelDelete){
            throw new Error("Hotel não encontrado!")
        }

        return await hotelDelete.destroy();   
    }
}

export default new hotelRepository();