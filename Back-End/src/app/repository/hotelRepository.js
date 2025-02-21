import hotel from '../models/hotel.js';

class hotelRepository{
    async findAll(){
        return await hotel.findAll();
    }

    async findById(id){
        return await hotel.findByPk(id);
    }

    async createHotel(data){
        const {nomeHotel, endereco, descricao, telefone, email} = data;

        const result = await hotel.create({nomeHotel, endereco, descricao, telefone, email});

        return result;
    }

    async editHotel(id, data){
        const {nomeHotel, endereco, descricao, telefone, email} = data;

        const hotelID = await hotel.findByPk(id);

        if(!hotelID){
            throw new Error("Hotel não encontrado!");
        }

        return await hotelID.update({nomeHotel, endereco, descricao, telefone, email});
    }

    async deleteHotel(id){
        const hotelDelete = await hotel.findByPk(id);

        if(!hotelDelete){
            throw new Error("Hotel não encontrado!");
        }

        return await hotelDelete.destroy();
    }
}

export default new hotelRepository();
