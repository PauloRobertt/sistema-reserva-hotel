import service from "../service/authenticationService.js";

class authenticationController {
    
    async login(req, res){
        try {
            const result = await service.login(req.body);
            res.status(200).json({message: "Login Success", token: result});
        } catch (error) {
            return res.status(500).json({message: `${error.message}`});
        }
    }

    async register(req, res) {
        try {
            const result = await service.register(req.body);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({message: `${error.message}`});
        }
    }
}

export default new authenticationController();
