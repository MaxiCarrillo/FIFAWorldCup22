const usuarioCtrl = require("./../controllers/usuario");

const express = require("express");

const router = express.Router();

router.get("/list", usuarioCtrl.getUsuarios);
router.get("/getJugador/:id", usuarioCtrl.getUsuarioById);
router.post("/create", usuarioCtrl.createUsuario);

module.exports = router;