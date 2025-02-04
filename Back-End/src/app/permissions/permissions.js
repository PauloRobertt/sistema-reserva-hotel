class permissios {
    verifyAdmin(req, res, next) {
        try {
            const user = req.user;
            
            if (!user) {
                res.status(404).json({msg: 'Usuario não existe!'});
            }

            if (user.role !== 'ADMIN') {
                res.status(403).json({msg: 'Acesso negado!'});
            }

           next();
        } catch (error) {
            return authHeader;
            res.status(403).json({msg: 'Permissão Negada para o usuario!'})
        }
    };
}

export default new permissios();
