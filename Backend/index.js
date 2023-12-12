require("dotenv").config();
const express = require("express");
const cors = require('cors');
const { mongoose } = require("./database");

let app = express();

app.use(cors());
app.use(express.json());
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/jugador', require('./routes/jugador'));
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log(`Servidor iniciado en el puerto: ${app.get("port")}`);
});