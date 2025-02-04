import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize('Sistema_de_Reserva', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

export default sequelize;
