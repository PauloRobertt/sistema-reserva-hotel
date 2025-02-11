import { Sequelize, DataTypes } from 'sequelize';
import database from '../database/db.js';
import usuario from './usuario.js';
import quarto from './quarto.js';

const reserva = database.define('reserva',
    {
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
        idUsuario:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: usuario,
                key: 'id'
            }
        },
        idQuarto:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: quarto,
                key: 'id'
            }
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }
);

export default reserva;

