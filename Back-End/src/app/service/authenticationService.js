import bcrypt from 'bcrypt';
import repository from '../repository/usuarioRepository.js';
import TokenService from '../security/TokenService.js';
import HttpError from '../Error/HttpError.js';

class authenticationService {

    async login(user) {
        try {
            const { email, senha } = user;

            if (!email || !senha) {
                throw new HttpError('Todos os campos são obrigatórios!', 400);
            }

            const usuarioExistente = await repository.findByEmail(email);

            if (!usuarioExistente) {
                throw new HttpError('Email não existe!', 404)
            }

            if (senha.length < 8 || senha.length > 32) {
                throw new HttpError('A senha deve ter no mínimo 8 caracteres e no maximo 32!', 400);
            }

            const passwordCompare = await bcrypt.compare(senha, usuarioExistente.senha);

            if (!passwordCompare) {
                throw new HttpError('Senha incorretos!', 401);
            }

            return TokenService.generateTokens(usuarioExistente);

        } catch (error) {
            throw error;
        }
    }

    async register(user) {
        try {
            const { nome, email, senha, role } = user;

            const salt = await bcrypt.genSalt(10);
            const senhaHash = await bcrypt.hash(senha, salt);

            if (!nome || !email || !senha) {
                throw new HttpError('Todos os campos são obrigatórios!', 400);
            }

            const usuarioExistente = await repository.findByEmail(email);

            if (usuarioExistente !== null) {
                throw new HttpError('Email já esta em uso!', 409);
            }

            if (senha.length < 8 || senha.length > 32) {
                throw new HttpError('A senha deve ter no mínimo 8 caracteres e no maximo 32!', 400);
            }

            if (!senha.match(/[a-z]/g) || !senha.match(/[A-Z]/g) || !senha.match(/[\W|_]/g)) {
                throw new HttpError('A senha deve conter letras maiusculas, minusculas e caracteres especiais', 400);
            }

            return await repository.createUser({
                nome: nome,
                email: email,
                senha: senhaHash,
                role: role
            });
        }
        catch (error) {
            throw error;
        }
    }
}

export default new authenticationService();