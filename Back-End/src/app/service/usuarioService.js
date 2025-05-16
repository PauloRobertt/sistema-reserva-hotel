import repository from "../repository/usuarioRepository.js";
import HttpError from '../Error/HttpError.js';

class usuarioService {
    async findAll() {
        try {
            return await repository.findAll();
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        if (!id) {
            throw new HttpError('O ID é obrigatorio!', 400);
        }

        try {
            const user = await repository.findById(id);
            if (!user) {
                throw new HttpError('Usuario não encontrado!', 404);
            }

            return user;
        }
        catch (error) {
            throw error;
        }
    }

    async createUser(user) {
        try {
            const { nome, email, senha } = user;

            const usuarios = await repository.findAll();

            if (!nome || !email || !senha) {
                throw new HttpError('Todos os campos são obrigatórios!', 400);
            }

            if (senha.length < 8 || senha.length > 32) {
                throw new HttpError('A senha deve ter no mínimo 8 caracteres e no maximo 32!', 400);
            }

            if (!senha.match(/[a-z]/g) || !senha.match(/[A-Z]/g) || !senha.match(/[\W|_]/g)) {
                throw new HttpError('A senha deve conter letras maiusculas, minusculas e caracteres especiais', 400);
            }

            if (email == usuarios.map((value) => { return value.email; })) {
                throw new HttpError('Email já utilizado!', 409);
            }

            return await repository.createUser(user);
        }
        catch (error) {
            throw error;
        }
    }

    async editUser(id, editUser) {
        if (!id) throw new HttpError('O ID é obrigatorio!', 400);

        try {
            const user = await repository.findById(id);
            if (!user) throw new HttpError('Usuario não encontrado!', 404);

            return await repository.editUser(id, editUser);
        }
        catch (error) {
            throw error;
        }
    }

    async deleteUser(id) {
        if (!id) {
            throw new HttpError('O ID é obrigatorio!', 400);
        }

        try {
            const user = await repository.findById(id);
            if (!user) {
                throw new HttpError('Usuario não encontrado!', 404);
            }

            return await repository.deleteUser(id);
        }
        catch (error) {
            throw error;
        }
    }

}

export default new usuarioService();
