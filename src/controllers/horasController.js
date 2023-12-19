const express = require('express');

const router = express.Router();
const {listarHoras , listarHorasporID} = require ('../repository/horas.repository');


//Listar horas

router.get('/horas', async (req, res) => {
    const data = await listarHoras();
    res.json(data);
    
});

//Listar horas por ID

router.get('/horas/:id', async (req, res) => {
    try {
        const idHoras = req.params.id;

        const horas = await listarHorasporID({id: idHoras});

        if (!horas) {
            console.log('Hora no encontrado');
            return res.status(404).json({ error: 'Hora no encontrado' });
        }
      
        console.log('Hora encontrado:', Hora);
        res.json(horas);
    }catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
});



module.exports = router;