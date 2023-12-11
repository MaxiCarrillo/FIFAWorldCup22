const Jugador = require("../models/jugador");

const jugadorCtrl = {};

jugadorCtrl.getJugador = async (req, res) => {
    let jugadores = await Jugador.find();
    res.json(jugadores);
};

jugadorCtrl.createJugador = async (req, res) => {
    let jugador = new Jugador(req.body);
    try {
        await jugador.save();
        res.json({
            status: "1",
            msg: "Jugador guardado.",
        });
    } catch (error) {
        res.status(400).json({
            status: "0",
            msg: "Error procesando operación.",
        });
    }
};

jugadorCtrl.getJugadorById = async (req, res) => {
    const jugador = await Jugador.findOne({ cuit: req.params.cuit });
    res.json(jugador ? true : false);
};

module.exports = jugadorCtrl;