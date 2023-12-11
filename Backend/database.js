const mongoose = require("mongoose");
const URI = process.env.URI;

mongoose
    .connect(URI)
    .then((db) => console.log(`La base de datos está conectada: ${db.connection.host}`))
    .catch((err) => console.error(err));

module.exports = mongoose;