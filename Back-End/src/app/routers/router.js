import express from 'express';
import usuarioController from '../controllers/usuarioController.js';
import authenticationController from '../controllers/authenticationController.js';
import TokenService from '../security/TokenService.js';
import permissios from '../permissions/permissions.js';

const router = express.Router();

//Rotas CRUD Usuario
router.get('/usuario', TokenService.checkToken, permissios.verifyAdmin, usuarioController.findAll);
router.get('/usuario/:id', TokenService.checkToken, usuarioController.findById);
router.post('/usuario', TokenService.checkToken, usuarioController.createUser);
router.put('/usuario/:id', TokenService.checkToken, usuarioController.editUser);
router.delete('/usuario/:id', TokenService.checkToken, usuarioController.deleteUser);

//Rotas de Autenticaçaõ
router.post('/auth/login', authenticationController.login);
router.post('/auth/register', authenticationController.register);

export default router;
