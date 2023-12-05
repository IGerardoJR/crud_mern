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
// agregarUsuario
router.post("/agregarUsuario", (req, res) => {
  const nuevousuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idusuario: req.body.idusuario,
  });
  // nuevousuario.save(function (err) {
  //   if (!err) {
  //     res.send("Usuario agregado correctamente.");
  //   } else {
  //     res.send("Hubo un error al agregar el usuario!");
  //   }
  nuevousuario.save(res.send("Usuario agregado!"));
});

// Ruta para obtener todos los usuarios
router.get("/obtenerUsuarios", (req, res) => {
  ModeloUsuario.find({}, res.send());
});
