const express = require('express');

const router = express.Router();
const {listarCampos, crearCampo, obtenerCampoPorId,actualizarCampo,borrarCampo} = require('../repository/campos.repository');

//Listar campos
router.get('/campos', async (req, res) => {
   const data = await listarCampos();
   res.json(data);
});


//Crear campo
router.post('/campos', async (req, res) => {       
   try {
      const data = await crearCampo(req.body);
      res.json([data]);
      console.log("Campo nuevo insertado en la BD ");
      } catch (error) {
      console.error("El dato no fue insertado en la BD :(" , error);
      res.status(404)
   }
});

//Obtener campo por ID

router.get('/campos/:id', async (req, res) => {
   try {
       const campo = await obtenerCampoPorId(req.params.id);
       res.json(campo);
   } catch (error) {
       console.error('Error al obtener campo por ID', error);
       res.status(500).json({ message: 'Error interno del servidor' });
   }
});

// Actualizar campo
router.put('/campos/:id', async (req, res) => {
   try {
       const data = await actualizarCampo(req.params.id, req.body);
       res.json(data);
   } catch (error) {
       console.error('Error al actualizar campo y obtener todos los datos', error);
       res.status(500).json({ message: 'Error interno del servidor' });
   }
});

// Borrar campo
router.delete('/campos/:id', async (req, res) => {
   try {
       const data = await borrarCampo(req.params.id);
       res.json(data);
   } catch (error) {
       console.error('Error al borrar campo ', error);
       res.status(500).json({ message: 'Error interno del servidor' });
   }
});



module.exports = router;