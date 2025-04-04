import 'dotenv/config';
import jwt from 'jsonwebtoken';

class TokenService {
    refresh(refreshToken) {
        try {
            return new Promise((resolve, reject) => {
                if (!refreshToken) throw new Error('RefreshToken não encontrado!');

                jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
                    if (err) throw new Error("RefreshToken inválido!");

                    const acessToken = jwt.sign(
                        {
                            id: user.id,
                            email: user.email,
                            role: user.role
                        },
                        process.env.ACCESS_SECRET,
                        { expiresIn: '1m' }
                    );

                    resolve(acessToken);
                })
            })
        } catch (error) {
            throw new Error(error)
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
            { expiresIn: '1m' }
        );

        return { refreshToken, acessToken };
    }

    teste(teste){
        console.log(teste);
    }

    checkToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(403).json({ msg: 'Token não encontrado!' });

        jwt.verify(token, process.env.ACCESS_SECRET, async (err, user) => {
            if (err) {
                
                this.teste('Function Teste');
        
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
