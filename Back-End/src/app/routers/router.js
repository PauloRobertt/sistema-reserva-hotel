import express from 'express';

//Swagger
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.js';

//Usuario
import usuarioController from '../controllers/usuarioController.js';
import authenticationController from '../controllers/authenticationController.js';

//Quarto
import quartoController from '../controllers/quartoController.js';

//Security
import TokenService from '../security/TokenService.js';
import permissios from '../permissions/permissions.js';

const router = express.Router();

//Rota Swagger
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//TokenService.checkToken, permissios.verifyAdmin

//Rotas CRUD Usuario
router.get('/usuario', usuarioController.findAll);
router.get('/usuario/:id', TokenService.checkToken, usuarioController.findById);
router.post('/usuario', usuarioController.createUser);
router.put('/usuario/:id', TokenService.checkToken, usuarioController.editUser);
router.delete('/usuario/:id', TokenService.checkToken, usuarioController.deleteUser);

//Rotas CRUD Quarto
router.get('/quarto', quartoController.findAll);
router.get('/quarto/:id', quartoController.findById);
router.post('/quarto', quartoController.createQuarto);
router.put('/quarto/:id', quartoController.editQuarto);
router.delete('/quarto/:id', quartoController.deleteQuarto);

//Rotas de Autenticaçaõ
router.post('/auth/login', authenticationController.login);
router.post('/auth/register', authenticationController.register);

export default router;
