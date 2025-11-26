// src/controllers/rangoEdadController.js
const RangoEdad = require('../models/rangoEdad');

exports.crearRangoEdad = async (req, res) => {
  try {
    //  AÑADIR ESTA VALIDACIÓN
    const { edadMinima, edadMaxima, descripcion } = req.body;
    
    // Verificar que los campos requeridos existan
    if (edadMinima === undefined || edadMaxima === undefined) {
      return res.status(400).json({ 
        error: "Los campos edadMinima y edadMaxima son requeridos" 
      });
    }
 
    // Verificar que los campos requeridos no sean negativos
    if (edadMinima<0 || edadMaxima<0) {
      return res.status(400).json({ 
        error: "Las edades no pueden ser negativas" 
      });
    }
    //verificar que edadMinima no sea mayor que edadMaxima
    if (edadMinima > edadMaxima) {
      return res.status(400).json({ 
        error: "La edad mínima no puede ser mayor que la edad máxima" 
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