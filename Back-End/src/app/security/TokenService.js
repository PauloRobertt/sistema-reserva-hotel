import 'dotenv/config';
import jwt from 'jsonwebtoken';

class TokenService {
    generateTokens(user) {
        //const secret = process.env.SECRET;

        const acess_secret = process.env.ACCESS_SECRET;
        const refresh_secret = process.env.REFRESH_SECRET;

        const refreshToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            refresh_secret,
            { expiresIn: '7d' }
        );

        const acessToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            acess_secret,
            { expiresIn: '5m' }
        );

        return { refreshToken, acessToken };
    }

    checkToken(req, res, next) {
        try {
            const secret = process.env.SECRET;

            const acess_secret = process.env.ACCESS_SECRET;
            const refresh_secret = process.env.REFRESH_SECRET;

            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];

            if (!token) {
                res.status(403).json({ msg: 'Token não encontrado!' });
                return;
            }

            jwt.verify(token, acess_secret, (err, user) => {
                if (err) return res.status(403).json({ message: "Token inválido!" });
                req.user = user;
                next();
            });

        } catch (error) {
            res.status(404).json({ msg: 'Token Invalido!' });
        }
    }
};

export default new TokenService();
