//usuarioRoutes.js
const express = require('express');
const router = express.Router();
const { obtenerUsuarios, obtenerUsuarioPorId } = require('../controllers/usuarioController');
// GET /api/usuario
router.get('/', obtenerUsuarios);
router.get("/:id", obtenerUsuarioPorId);

module.exports = router;
