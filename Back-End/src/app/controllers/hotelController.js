import service from "../service/hotelService.js";

class hotelController {

    async findAll(req, res) {
        try {
            const result = await service.findAll();
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(500).json({ message: `${HttpError.message}` });
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

    async createHotel(req, res) {
        try {
            const result = await service.createHotel(req.body);
            return res.status(200).json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: `${HttpError.message}` });
        }
    }

    async editHotel(req, res) {
        try {
            const result = await service.editHotel(req.params.id, req.body);
            return res.json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: `${HttpError.message}` });
        }
    }

    async deleteHotel(req, res) {
        try {
            const result = await service.deleteHotel(req.params.id);
            return res.json(result);
        }
        catch (HttpError) {
            return res.status(HttpError.status).json({ message: `${HttpError.message}` });
        }
    }
}

export default new hotelController();
