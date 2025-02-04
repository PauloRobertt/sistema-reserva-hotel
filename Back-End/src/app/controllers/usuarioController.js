import service from "../service/usuarioService.js";

class usuarioController {

    async findAll(req, res) {
        try {
            const result = await service.findAll();
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a busca dos usuarios`, error);
            return res.status(500).json({error: 'Erro ao buscar usuario!'});
        }
    }

    async findById(req, res) {
        try {
            const result = await service.findById(req.params.id);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a busca pelo usuario`, error);
            return res.status(500).json({error: 'Erro ao buscar usuario por id!'});
        }
    }

    async createUser(req, res) {
        try {
            const result = await service.createUser(req.body);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({message: `${error.message}`});
        }
    }

    async editUser(req, res) {
        try {
            const result = await service.editUser(req.params.id, req.body);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a atualização do usuario`, error);
            return res.status(500).json({error: 'Erro ao atualizar usuario!'});
        }
    }

    async deleteUser(req, res) {
        try {
            const result = await service.deleteUser(req.params.id);
            return res.json(result);
        }
        catch (error) {
            console.error(`Ocorreu um erro ao realizar a exclução do usuario`, error);
            return res.status(500).json({error: 'Erro ao deletar usuario!'});
        }
    }
}

export default new usuarioController();
