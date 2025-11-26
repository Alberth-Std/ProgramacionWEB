const RangoEdad = require('../models/rangoEdad');

exports.crearRangoEdad = async (req, res) => {
  try {
    const data = await RangoEdad.create(req.body);
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
