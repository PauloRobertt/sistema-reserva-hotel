import { Sequelize, DataTypes } from "sequelize";
import database from '../database/db.js';

const hotel = database.define('quartos', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    hotel:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    preço:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    localizacao:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    servicosDisponiveis:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    quantidadeDeQuartos:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    disponibilidade:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    imagemUrl:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
})

export default hotel;
