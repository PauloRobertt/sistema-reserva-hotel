import service from "../service/authenticationService.js";
import cookieParser from 'cookie-parser';

class authenticationController {

    async login(req, res) {
        try {
            const { acessToken, refreshToken } = await service.login(req.body);

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "Strict",
                maxAge: 30 * 24 * 60 * 60 * 1000
            });

            res.status(200).json({
                message: "Login Success", token: acessToken
            });
        } catch (error) {
            return res.status(500).json({ message: `${error.message}` });
        }
    }

    async register(req, res) {
        try {
            const result = await service.register(req.body);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ message: `${error.message}` });
        }
    }
}

export default new authenticationController();
