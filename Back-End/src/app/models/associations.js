import usuario from "./usuario.js";
import quarto from "./quarto.js";
import hotel from './hotel.js';
import reserva from "./reserva.js";

//Caso usuario ou quarto forem removidos seus relacionamentos também serão removidos

//Associação do Usuario com as reservas
usuario.hasMany(reserva, {foreignKey: 'idUsuario', onDelete: 'CASCADE'});
reserva.belongsTo(usuario, {foreignKey: 'idUsuario'});

//Associação das reservas com os hotéis
quarto.hasMany(reserva, {foreignKey: 'idQuarto', onDelete: 'CASCADE'});
reserva.belongsTo(quarto, {foreignKey: 'idQuarto'});

hotel.hasMany(quarto, {foreignKey: 'idHotel', onDelete: 'CASCADE'});
quarto.belongsTo(hotel, {foreignKey: 'idHotel'});

export { usuario, quarto, reserva, hotel };
