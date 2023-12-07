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
router.post("/agregarUsuario", async (req, res) => {
  try {
    const nuevousuario = new ModeloUsuario({
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
      idusuario: req.body.idusuario,
    });
    await nuevousuario.save();
    res.send("Usuario agregado exitosamente!");
  } catch (err) {
    console.log(err);
    res.send("Hubo un error al agregar el usuario");
  }
});

// Ruta para obtener todos los usuarios
router.get("/obtenerUsuarios", async (req, res) => {
  try {
    const usuario = await ModeloUsuario.find({});
    res.send(usuario);
  } catch (err) {
    res.send("No se pudieron obtener los usuarios");
  }
});

// Ruta para obtener un solo usuario
router.post("/obtenerdatausuario", async (req, res) => {
  try {
    const usuario = await ModeloUsuario.find({ idusuario: req.body.idusuario });
    res.send(usuario);
  } catch (err) {
    res.send("No se pudieron obtener los usuarios");
  }
});

// Actualiza usuario.

router.post("/actualizausuario", async (req, res) => {
  try {
    await ModeloUsuario.findOneAndUpdate(
      { idusuario: req.body.idusuario },
      {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
      }
    );
    res.send("Usuario actualizado!");
  } catch (error) {
    res.send(error);
  }
});
