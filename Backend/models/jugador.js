const mongoose = require("mongoose");

const { Schema } = mongoose;

const jugadorSchema = new Schema(
    {
        piernaHabil: { type: String, required: true },
        dorsal: { type: String, required: true },
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports =
    mongoose.models.Jugador || mongoose.model("Jugador", jugadorSchema);