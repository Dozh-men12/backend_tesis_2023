const express = require('express');

const router = express.Router();

const {listarUsuarios , agregarUsuarios} = require('../repository/usuarios.repository')



/* router.post('/usuarios' , async(req, res) => {
    const data =await agregarUsuarios();
    data
    .save().then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

}) */

router.get('/usuarios', async (req, res) => {
    const data = await listarUsuarios();
    res.json(data);
})

module.exports = router;