const Usuario = require("../models/usuario");

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (res) => {
    let jugadores = await Usuario.find();
    res.json(jugadores);
};

usuarioCtrl.createUsuario = async (req, res) => {
    let usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.json({
            status: "1",
            msg: "Usuario registrado.",
        });
    } catch (error) {
        res.status(400).json({
            status: "0",
            msg: "Error procesando operación.",
        });
    }
};

usuarioCtrl.getUsuarioById = async (req, res) => {
    const usuario = await Usuario.findOne({ cuit: req.params.cuit });
    res.json(usuario ? true : false);
};

module.exports = usuarioCtrl;