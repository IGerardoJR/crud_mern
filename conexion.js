// Cadena de conexion con MongoDB
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crudmernstack");

const objetodb = mongoose.connection;

// Se utiliza para saber si hubo una conexion correcta.
objetodb.on("connected", () => {
  console.log("Conexion correcta a mongodb");
});
objetodb.on("error", () => {
  console.log("Error en la conexion a MongoDB");
});

module.exports = mongoose;
