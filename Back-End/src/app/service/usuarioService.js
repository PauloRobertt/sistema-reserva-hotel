import repository from "../repository/usuarioRepository.js";

class usuarioService {
    async findAll() {
        return await repository.findAll();
    }

    async findById(id) {
        if (!id) {
            throw new Error('O ID é obrigatorio!');
        }

        try {
            const user = await repository.findById(id);
            if (!user) {
                throw new Error('Usuario não encontrado!');
            }

            return user;
        }
        catch (error) {
            throw new Error(`Erro ao realizar a busca do usuario: ${error}`);
        }
    }

    async createUser(user) {
        try {
            const { nome, email, senha } = user;

            const usuarios = await repository.findAll();

            if (!nome || !email || !senha) {
                throw new Error('Todos os campos são obrigatórios!');
            }

            if (senha.length < 8 || senha.length > 32) {
                throw new Error('A senha deve ter no mínimo 8 caracteres e no maximo 32!');
            }

            if (!senha.match(/[a-z]/g) || !senha.match(/[A-Z]/g) || !senha.match(/[\W|_]/g)) {
                throw new Error('A senha deve conter letras maiusculas, minusculas e caracteres especiais');
            }

            if(email == usuarios.map((value)=>{return value.email;})){
                throw new Error('Email já utilizado!');
            }

            return await repository.createUser(user);
        }
        catch (error) {
            throw new Error (error.message);
        }
    }

    async editUser(id, editUser) {
        try {
            return await repository.editUser(id, editUser);
        }
        catch (error) {
            throw new Error(`Erro ao editar o usuario: ${error}`);
        }
    }

    async deleteUser(id) {
        if (!id) {
            throw new Error('O ID é obrigatorio!');
        }

        try {
            const user = await repository.findById(id);
            if (!user) {
                throw new Error('Usuario não encontrado!');
            }

            return await repository.deleteUser(id);
        }
        catch (error) {
            throw new Error(`Erro ao realizar a deleção do usuario: ${error}`);
        }
    }

}

export default new usuarioService();