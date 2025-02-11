import service from "../service/quartoService.js";

class quartoController {

    async findAll(req, res) {
        try {
            const result = await service.findAll();
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a busca de algum quarto`, error);
            return res.status(500).json({error: 'Erro ao buscar quarto!'});
        }
    }

    async findById(req, res) {
        try {
            const result = await service.findById(req.params.id);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a busca pelo quarto`, error);
            return res.status(500).json({error: 'Erro ao buscar quarto por id!'});
        }
    }

    async createQuarto(req, res) {
        try {
            const result = await service.createQuarto(req.body);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({message: `${error.message}`});
        }
    }

    async editQuarto(req, res) {
        try {
            const result = await service.editQuarto(req.params.id, req.body);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a atualização do quarto`, error);
            return res.status(500).json({error: 'Erro ao atualizar quarto!'});
        }
    }

    async deleteQuarto(req, res) {
        try {
            const result = await service.deleteQuarto(req.params.id);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a exclução do quarto`, error);
            return res.status(500).json({error: 'Erro ao deletar quarto!'});
        }
    }
}

export default new quartoController();
