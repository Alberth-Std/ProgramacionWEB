const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Listado de preguntas (solo esqueleto).' });
});

module.exports = router;
