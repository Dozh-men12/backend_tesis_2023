const express = require('express');

const router = express.Router();
/* const {listarReservasDisponibles} = require ('../repository/reservasDisponibles.repository'); */

const { listarReservasDisponibles,listarRDporId } = require ('../repository/reservasDisponibles.repository');


//Listando todas las reservas
router.get('/reservas-disponibles', async (req, res) => {

    const data = await listarReservasDisponibles();
    res.json(data);    
});

//Listando las reservas por ID_usaurio
router.get('/reservas-disponibles/:id', async(req,res) =>{

    try {
        const data = await listarRDporId(req.params.id);
        res.json(data)   
    } catch (error) {
        console.error('Error al obtener campo por ID', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
    
   

   /*  try {



       
        const idUsuario = req.params.id_estudiante

        const usuario = await listarRDporId(idUsuario)

        if (!usuario) {
            console.log('Dia no encontrado');
            return res.status(404).json({ error: 'Dia no encontrado' });
        }
      
        console.log('Reserva encontrada', usuario);
        res.json(usuario);
    }catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } */
})



module.exports = router;