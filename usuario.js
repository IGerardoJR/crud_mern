// /rutas/usuario.js
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
  nombre: String,
  email: String,
  telefono: String,
  idusuario: String,
});

const ModeloUsuario = mongoose.model("usuarios", eschemausuario);
module.exports = router;

// ruta de prueba
// router.get("/ejemplo", (req, res) => {
//   res.end("Saludo carga desde ruta ejemplo");
// });

// Ruta para que nos permita agregar al usuario.
router.post();
