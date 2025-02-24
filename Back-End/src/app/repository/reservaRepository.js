import reserva from '../models/reserva.js';

class reservaRepository{
    async findAll(){
        const result = await reserva.findAll();
        return result;
    }

    async findById(id){
        return await reserva.findByPk(id);
    }

    async createReserva(data){
        const {dataDeEntrada, dataDeSaida, idUsuario, idQuarto, status} = data;

        const result = await reserva.create({dataDeEntrada, dataDeSaida, idUsuario, idQuarto, status});

        return result;
    }

    async deleteReserva(id){
        const returnReserva = await reserva.findByPk(id);

        if (!returnReserva) {
            throw new Error("Reserva não encontrada!");
        }

        return returnReserva.destroy();
    }
}

export default new reservaRepository();
