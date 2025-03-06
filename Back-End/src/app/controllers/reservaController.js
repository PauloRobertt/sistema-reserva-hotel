import service from "../service/reservaService.js";

class reservaController {

    async findAll(req, res) {
        try {
            const result = await service.listaReserva();
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a busca das reservas`, error);
            return res.status(500).json({error: 'Erro ao buscar reservas!'});
        }
    }

    async findById(req, res) {
        try {
            const result = await service.listaReservaForId(req.params.id);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a busca pela reserva`, error);
            return res.status(500).json({error: 'Erro ao buscar a reserva por id!'});
        }
    }

    async createReserva(req, res) {
        try {
            const result = await service.realizarReserva(req.body);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({message: `${error.message}`});
        }
    }

    async deleteReserva(req, res) {
        try {
            const result = await service.cancelarReserva(req.params.id);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar o cancelamento da reserva`, error);
            return res.status(500).json({error: 'Erro ao cancelar a reserva!'});
        }
    }
}

export default new reservaController();
