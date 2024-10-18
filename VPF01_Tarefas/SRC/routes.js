const express = require('express')
const router = express.Router()

const lista = require('./controller/lista')

router.post('/lista', lista.create);
router.get('/lista', lista.read);
router.delete('/lista/:id', lista.deletar);

module.exports = router;