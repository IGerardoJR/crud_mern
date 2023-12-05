const express = require("express");
const app = express();

const PUERTO = 5000;
// Importando conexion con mongodb
const archivoDB = require("./conexion");

app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor backend Node.js. Corriendo...");
});

// Configurando servidor basico
app.listen(PUERTO, function () {
  console.log("El servidor node esta corriendo correctamente!");
});
