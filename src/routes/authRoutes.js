const express = require("express");
const router = express.Router();

const { register, login, getUsuarios } = require("../controllers/authController");
const { auth } = require("../middlewares/authMiddleware");

// Rutas de autenticación
router.post("/register", register);
router.post("/login", login);

// Ver usuario logueado
router.get("/me", auth(), (req, res) => {
  res.json({
    autenticado: true,
    usuario: req.user
  });
});

// Obtener usuarios (solo admin)
router.get("/usuarios", auth(["admin"]), getUsuarios);

module.exports = router;
exports = router;
