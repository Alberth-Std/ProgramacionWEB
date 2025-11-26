// src/controllers/rangoEdadController.js
const RangoEdad = require('../models/rangoEdad');

exports.crearRangoEdad = async (req, res) => {
  try {
    // ✅ AÑADIR ESTA VALIDACIÓN
    const { edadMinima, edadMaxima, descripcion } = req.body;
    
    // Verificar que los campos requeridos existan
    if (edadMinima === undefined || edadMaxima === undefined) {
      return res.status(400).json({ 
        error: "Los campos edadMinima y edadMaxima son requeridos" 
      });
    }

    const data = await RangoEdad.create({
      edadMinima,
      edadMaxima, 
      descripcion: descripcion || "" // valor por defecto si no viene
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.obtenerRangosEdad = async (req, res) => {
  try {
    const data = await RangoEdad.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};