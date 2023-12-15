const express = require('express');

const router = express.Router();
const {listarDias , listarDiasporID} = require ('../repository/dias.respository');


//Listar Días

router.get('/dias', async (req, res) => {
    const data = await listarDias();
    res.json(data);
    
});

//Listar días por ID

router.get('/dias/:id', async (req, res) => {
    try {
        const idDias = req.params.id;

        const dias = await listarDiasporID({id: idDias});

        if (!dias) {
            console.log('Dia no encontrado');
            return res.status(404).json({ error: 'Dia no encontrado' });
        }
      
        console.log('Dia encontrado:', dias);
        res.json(dias);
    }catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
});



module.exports = router;