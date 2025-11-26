// Aquí irá los datos del Usuario (edad, nombre, etc.)
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  rol: {
    type: String,
    enum: ['admin', 'estudiante'],
    default: 'estudiante'
  }
}, { timestamps: true });

module.exports = mongoose.model('Usuario', UsuarioSchema);
