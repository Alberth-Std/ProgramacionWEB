// src/controllers/subcategoriaController.js
const Subcategoria = require('../models/subcategoria');
const Categoria = require('../models/Categoria');

// Crear subcategoría
exports.crearSubcategoria = async (req, res) => {
  try {
    const { nombre, descripcion, categoriaId } = req.body;

    // Validaciones
    if (!nombre) {
      return res.status(400).json({ error: 'El nombre de la subcategoría es requerido.' });
    }

    if (!categoriaId) {
      return res.status(400).json({ error: 'El ID de la categoría es requerido.' });
    }

    // Verificar que la categoría existe
    const categoriaExiste = await Categoria.findById(categoriaId);
    if (!categoriaExiste) {
      return res.status(404).json({ error: 'La categoría no existe.' });
    }

    // Crear subcategoría
    const subcategoria = new Subcategoria({
      nombre: nombre.trim(),
      descripcion: descripcion || "",
      categoria: categoriaId
    });

    const data = await subcategoria.save();
    
    // Popular la referencia para la respuesta
    await data.populate('categoria', 'nombre descripcion');

    res.status(201).json({
      message: "Subcategoría creada exitosamente",
      data: data
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todas las subcategorías
exports.obtenerSubcategorias = async (req, res) => {
  try {
    const subcategorias = await Subcategoria.find()
      .populate('categoria', 'nombre descripcion estado')
      .sort({ nombre: 1 });

    res.status(200).json(subcategorias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener subcategorías por categoría específica
exports.obtenerSubcategoriasPorCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;

    // Verificar que la categoría existe
    const categoria = await Categoria.findById(categoriaId);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada.' });
    }

    const subcategorias = await Subcategoria.find({ categoria: categoriaId })
      .populate('categoria', 'nombre descripcion')
      .sort({ nombre: 1 });

    res.status(200).json({
      categoria: {
        _id: categoria._id,
        nombre: categoria.nombre,
        descripcion: categoria.descripcion
      },
      subcategorias: subcategorias,
      total: subcategorias.length
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una subcategoría específica
exports.obtenerSubcategoria = async (req, res) => {
  try {
    const { id } = req.params;

    const subcategoria = await Subcategoria.findById(id)
      .populate('categoria', 'nombre descripcion estado');

    if (!subcategoria) {
      return res.status(404).json({ error: 'Subcategoría no encontrada.' });
    }

    res.status(200).json(subcategoria);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};