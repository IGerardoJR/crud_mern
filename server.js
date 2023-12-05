// /backend/server.js

const express = require("express");
const app = express();

const PUERTO = 5000;
// Importando conexion con mongodb
const archivoDB = require("./conexion");
// importancion del archivo de las rutas
const rutausuario = require("./usuario");
// imporamos la extesion de body-parser para obtener la informacion de los campos.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: "true" }));

app.use("/api/usuario", rutausuario);

app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor backend Node.js. Corriendo...");
});

// Configurando servidor basico
app.listen(PUERTO, function () {
  console.log("El servidor node esta corriendo correctamente!");
});
