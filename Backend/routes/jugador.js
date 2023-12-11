const jugadorCtrl = require("./../controllers/jugador");

const express = require("express");

const router = express.Router();

router.get("/list", jugadorCtrl.getJugador);
router.get("/getJugador/:id", jugadorCtrl.getJugadorById);
router.post("/create", jugadorCtrl.createJugador);

module.exports = router;