import { Sequelize, DataTypes } from "sequelize";
import database from '../database/db.js'

const hotel = database.define('hotel',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nomeHotel:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    endereco:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    telefone:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
})

export default hotel;