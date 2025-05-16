import 'dotenv/config';
import jwt from 'jsonwebtoken';
import HttpError from '../Error/HttpError.js';

class TokenService {

    refresh = (refreshToken) => {
        try {
            return new Promise((resolve, reject) => {
                if (!refreshToken) reject(new HttpError('RefreshToken não encontrado!', 404));

                jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
                    if (err) reject(new HttpError("RefreshToken inválido!", 400));

                    const acessToken = jwt.sign(
                        {
                            id: user.id,
                            email: user.email,
                            role: user.role
                        },
                        process.env.ACCESS_SECRET,
                        { expiresIn: '15m' }
                    );

                    resolve(acessToken);
                })
            })
        } catch (error) {
            throw error;
        }
    }

    generateTokens(user) {
        const refreshToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.REFRESH_SECRET,
            { expiresIn: '7d' }
        );

        const acessToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.ACCESS_SECRET,
            { expiresIn: '15m' }
        );


        return { refreshToken, acessToken };
    }

    checkToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        // const token = authHeader;

        //Codigo para teste no POSTMAN
        const token = authHeader && authHeader.split(' ')[1];        

        if (!token) return res.status(401).json({ message: 'Token não encontrado!' });
        
        jwt.verify(token, process.env.ACCESS_SECRET, async (err, user) => {
            if (err) {

                console.log(err)

                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({
                        message: 'Token Expirado!',
                    });
                }

                return res.status(403).json({ message: 'Token Invalido!' });
            }

            req.user = user;
            next();
        });

    }
};

export default new TokenService();
