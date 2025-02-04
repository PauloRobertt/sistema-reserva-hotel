import 'dotenv/config';
import jwt from 'jsonwebtoken';

class TokenService {
    generateToken(user) {
        const secret = process.env.SECRET;
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            secret,
            { expiresIn: '1h' }
        );

        return token;
    }

    checkToken(req, res, next) {
        try {
            const secret = process.env.SECRET;

            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];

            if (!token) {
                res.status(403).json({ msg: 'Token não encontrado!' });
            }

            const decode = jwt.verify(token, secret);

            req.user = {
                id: decode.id, 
                email: decode.email, 
                role: decode.role
            };

            next();

        } catch (error) {
            res.status(404).json({ msg: 'Token Invalido!' });
        }
    }
};

export default new TokenService();
