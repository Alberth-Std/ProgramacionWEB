const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Listado de cuestionarios (solo esqueleto).' });
});

module.exports = router;
