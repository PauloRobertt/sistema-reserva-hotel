import express from 'express';

//Usuario
import usuarioController from '../controllers/usuarioController.js';
import authenticationController from '../controllers/authenticationController.js';

//Hotel
import hotelController from '../controllers/hotelController.js';

//Security
import TokenService from '../security/TokenService.js';
import permissios from '../permissions/permissions.js';

const router = express.Router();

//Rotas CRUD Usuario
router.get('/usuario', TokenService.checkToken, permissios.verifyAdmin, usuarioController.findAll);
router.get('/usuario/:id', TokenService.checkToken, usuarioController.findById);
router.post('/usuario', TokenService.checkToken, usuarioController.createUser);
router.put('/usuario/:id', TokenService.checkToken, usuarioController.editUser);
router.delete('/usuario/:id', TokenService.checkToken, usuarioController.deleteUser);

//Rotas CRUD Hotel
router.get('/hotel', hotelController.findAll);
router.get('/hotel/:id', hotelController.findById);
router.post('/hotel', hotelController.createHotel);
router.put('/hotel/:id', hotelController.editHotel);
router.delete('/hotel/:id', hotelController.deleteHotel);

//Rotas de Autenticaçaõ
router.post('/auth/login', authenticationController.login);
router.post('/auth/register', authenticationController.register);

export default router;
