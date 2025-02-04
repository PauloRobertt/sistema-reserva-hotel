import service from "../service/hotelService.js";

class hotelController {

    async findAll(req, res) {
        try {
            const result = await service.findAll();
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a busca de algum hotel`, error);
            return res.status(500).json({error: 'Erro ao buscar hotel!'});
        }
    }

    async findById(req, res) {
        try {
            const result = await service.findById(req.params.id);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a busca pelo hotel`, error);
            return res.status(500).json({error: 'Erro ao buscar hotel por id!'});
        }
    }

    async createHotel(req, res) {
        try {
            const result = await service.createHotel(req.body);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({message: `${error.message}`});
        }
    }

    async editHotel(req, res) {
        try {
            const result = await service.editHotel(req.params.id, req.body);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a atualização do hotel`, error);
            return res.status(500).json({error: 'Erro ao atualizar hotel!'});
        }
    }

    async deleteHotel(req, res) {
        try {
            const result = await service.deleteHotel(req.params.id);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a exclução do hotel`, error);
            return res.status(500).json({error: 'Erro ao deletar hotel!'});
        }
    }
}

export default new hotelController();
