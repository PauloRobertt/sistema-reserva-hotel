import service from "../service/reservaService.js";

class reservaController {

    async findAll(req, res) {
        try {
            const result = await service.listaReserva();
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: HttpError.message });
        }
    }

    async findById(req, res) {
        try {
            const result = await service.listarReservaPorId(req.params.id);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: HttpError.message });
        }
    }

    async createReserva(req, res) {
        try {
            const result = await service.realizarReserva(req.body);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: HttpError.message });
        }
    }

    async deleteReserva(req, res) {
        try {
            const result = await service.cancelarReserva(req.params.id);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: HttpError.message });
        }
    }
}

export default new reservaController();
