const express = require("express");
const app = express();

const PUERTO = 5000;

app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor backend Node.js. Corriendo...");
});

// Configurando servidor basico
app.listen(PUERTO, function () {
  console.log("El servidor esta corriendo correctamente!");
});
