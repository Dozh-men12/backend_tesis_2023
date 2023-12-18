const express = require('express');

const router = express.Router();
/* const {listarReservasDisponibles} = require ('../repository/reservasDisponibles.repository'); */

const { reservasConUsuarios } = require ('../repository/reservasDisponibles.repository');


router.get('/reservas-disponibles', async (req, res) => {

    const data = await reservasConUsuarios();
    res.json(data);    
});

module.exports = router;