import service from "../service/usuarioService.js";

class usuarioController {

    async findAll(req, res) {
        try {
            const result = await service.findAll();
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: HttpError.message });
        }
    }

    async findById(req, res) {
        try {
            const result = await service.findById(req.params.id);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: HttpError.message });
        }
    }

    async createUser(req, res) {
        try {
            const result = await service.createUser(req.body);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: HttpError.message });
        }
    }

    async editUser(req, res) {
        try {
            const result = await service.editUser(req.params.id, req.body);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: HttpError.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const result = await service.deleteUser(req.params.id);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: HttpError.message });
        }
    }
}

export default new usuarioController();
