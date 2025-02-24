import { Sequelize, DataTypes } from 'sequelize';
import database from '../database/db.js';

const reserva = database.define('reserva', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dataDeEntrada: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    dataDeSaida: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idQuarto: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

export default reserva;
