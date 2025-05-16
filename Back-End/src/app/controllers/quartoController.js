import service from "../service/quartoService.js";

class quartoController {

    async findAll(req, res) {
        try {
            const result = await service.findAll();
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: `${HttpError.message}` });
        }
    }

    async findById(req, res) {
        try {
            const result = await service.findById(req.params.id);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: `${HttpError.message}` });
        }
    }

    async createQuarto(req, res) {
        try {
            const result = await service.createQuarto(req.body);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: `${HttpError.message}` });
        }
    }

    async editQuarto(req, res) {
        try {
            const result = await service.editQuarto(req.params.id, req.body);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: `${HttpError.message}` });
        }
    }

    async deleteQuarto(req, res) {
        try {
            const result = await service.deleteQuarto(req.params.id);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: `${HttpError.message}` });
        }
    }
}

export default new quartoController();
