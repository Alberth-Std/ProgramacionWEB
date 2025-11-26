// src/controllers/categoriaController.js
const Categoria = require('../models/Categoria');

exports.crearCategoria = async (req, res) => {
  try {
    // ✅ VERIFICAR PRIMERO QUE req.body EXISTA
    if (!req.body) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío' });
    }

    const { nombre, descripcion, estado } = req.body;
    
    // Verificar que el nombre es obligatorio
    if (!nombre) {
      return res.status(400).json({ error: 'El nombre de la categoría es requerido.' });
    }

    const categoria = new Categoria({ 
      nombre, 
      descripcion: descripcion || "",
      estado: estado !== undefined ? estado : true
    });
    
    const data = await categoria.save();
    
    // ✅ RESPONDER CON LA ESTRUCTURA QUE ESPERAN TUS TESTS
    res.status(201).json({
      name: data.nombre,  // Para que pase el test "A name is returned"
      ...data._doc        // Incluir todos los demás campos
    });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.status(200).json(categorias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};