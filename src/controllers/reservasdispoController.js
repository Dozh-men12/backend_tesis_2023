const express = require('express');

const router = express.Router();

const { listarReservasDisponibles,listarRDporId,agregarRD,eliminarRD} = require ('../repository/reservasDisponibles.repository');


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

})

// Agregando reservas con verificación de disponibilidad
router.post('/reservas-disponibles', async (req, res) => {
    try {
      const data = await agregarRD(req.body);
      res.json(data);
      console.log('Reserva nueva ingresada en la BD');
    } catch (error) {
      console.error('Error al agregar reserva:', error.message);
      res.status(400).json({ message: error.message });
    }
})

//Eliminar reserva
router.delete('/reservas-disponibles/:id', async (req, res) =>{
    try{
        const data = await eliminarRD(req.params.id);
        res.json(data);

    }catch(error){
        console.error("No se pudo eliminar la reserva" , error);
        res.status(404)
    }

})



module.exports = router;
