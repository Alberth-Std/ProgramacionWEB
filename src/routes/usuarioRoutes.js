//usuarioRoutes.js
const express = require('express');
const router = express.Router();
const { obtenerUsuarios } = require('../controllers/usuarioController');
// GET /api/usuario
router.get('/', obtenerUsuarios);

module.exports = router;
