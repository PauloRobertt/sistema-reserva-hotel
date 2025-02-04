import { Sequelize, DataTypes } from "sequelize";
import database from '../database/db.js';

const usuario = database.define('usuario', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    role:{
        type: DataTypes.STRING(10),
        allowNull: false
    }
})

export default usuario;
