import { Sequelize, DataTypes } from "sequelize";
import database from '../database/db.js';

const quarto = database.define('quarto', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeQuarto:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    preco:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    disponibilidade:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    imagemUrl:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
    idHotel:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default quarto;
