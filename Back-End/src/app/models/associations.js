import usuario from "./usuario.js";
import quarto from "./quarto.js";
import reserva from "./reserva.js";

//Associação do Usuario com as reservas
usuario.hasMany(reserva, {foreignKey: 'idUsuario'});
reserva.belongsTo(usuario, {foreignKey: 'idUsuario'});

//Associação das reservas com os hotéis
quarto.hasMany(reserva, {foreignKey: 'idQuarto'});
reserva.belongsTo(quarto, {foreignKey: 'idQuarto'});
