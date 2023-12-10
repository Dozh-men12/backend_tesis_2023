const express = require('express');

const router = express.Router();
const {listarReservasDisponibles} = require ('../repository/reservasDisponibles.repository');


router.get('/reservas-disponibles', async (req, res) => {

    const data = await listarReservasDisponibles();
    res.json(data);    
});

module.exports = router;