import bcrypt from 'bcrypt';
import repository from '../repository/usuarioRepository.js';
import TokenService from '../security/TokenService.js';

class authenticationService {

    async login(user) {
        try {
            const { email, senha } = user;
            const usuarioExistente = await repository.findByEmail(email);

            if (!email || !senha) {
                throw new Error('Todos os campos são obrigatórios!');
            }

            if (!usuarioExistente) {
                throw new Error('Email não existe!')
            }

            if (senha.length < 8 || senha.length > 32) {
                throw new Error('A senha deve ter no mínimo 8 caracteres e no maximo 32!');
            }

            const passwordCompare = await bcrypt.compare(senha, usuarioExistente.senha);
            if (usuarioExistente.email !== email || !passwordCompare) {
                throw new Error('Email ou senha inválidos!')
            }

            const token = TokenService.generateToken(usuarioExistente);

            return token;

        } catch (error) {
            throw new Error(error.message);
        }
    }

    async register(user) {
        try {
            const { nome, email, senha, role } = user;

            const salt = await bcrypt.genSalt(10);
            const senhaHash = await bcrypt.hash(senha, salt);

            if (!nome || !email || !senha) {
                throw new Error('Todos os campos são obrigatórios!');
            }

            const usuarioExistente = await repository.findByEmail(email);

            if (usuarioExistente !== null) {
                throw new Error('Email já esta em uso!');
            }

            if (senha.length < 8 || senha.length > 32) {
                throw new Error('A senha deve ter no mínimo 8 caracteres e no maximo 32!');
            }

            if (!senha.match(/[a-z]/g) || !senha.match(/[A-Z]/g) || !senha.match(/[\W|_]/g)) {
                throw new Error('A senha deve conter letras maiusculas, minusculas e caracteres especiais');
            }

            return await repository.createUser({
                nome: nome,
                email: email,
                senha: senhaHash,
                role: role
            });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new authenticationService();