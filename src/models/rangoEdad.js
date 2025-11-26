// src/models/rangoEdad.js
const mongoose = require('mongoose');

const RangoEdadSchema = new mongoose.Schema({
  edadMinima: { type: Number, required: true },
  edadMaxima: { type: Number, required: true },
  descripcion: { type: String }
});

module.exports = mongoose.model('RangoEdad', RangoEdadSchema);
