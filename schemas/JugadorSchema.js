const mongoose = require("mongoose");

const jugadorSchema = new mongoose.Schema({
  nombre: String,
  acumulado: Number,
});

module.exports = mongoose.model("Jugadores", jugadorSchema);
