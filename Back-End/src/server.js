import "dotenv/config";
import app from "./app.js";
import database from './app/database/db.js'

const port = process.env.PORT || 3001;

database.sync({ alter: true })
    .then(() => {
        console.log('Banco de dados sincronizado!')

        app.listen(port, () => {
            console.log("Servidor Iniciado na porta", port);
        });
    })
    .catch((error) => {
        console.log(error);
    });
