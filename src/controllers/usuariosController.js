const express = require('express');

const router = express.Router();

const {listarUsuarios} = require('../repository/usuarios.repository')


router.get('/usuarios', async (req, res) => {
    const data = await listarUsuarios();
    res.json(data);
})

module.exports = router;