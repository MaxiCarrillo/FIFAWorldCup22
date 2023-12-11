const mongoose = require("mongoose");

const { Schema } = mongoose;

const UsuarioSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        usuario: { type: String, required: true },
        apellido: { type: String, required: true },
        rol: {type: String, required: true}
    },
    {
        timestamps: true,
    }
);

module.exports =
    mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);