const express = require('express');

const router = express.Router();

const {listarUsuarios , agregarUsuario ,actualizarUsuario,eliminarUsuario ,listarUsuarioporID} = require('../repository/usuarios.repository')

const Estudiante = require('../database/models/usuarios.model')

// Listar Usuarios
router.get('/usuarios', async (req, res) => {
    const data = await listarUsuarios();
    res.json(data);
})

//Listar usuario por ID

router.get('/:id_estudiante', async (req, res) => {
    try {
      const codigoEstudiante = req.params.id_estudiante;
      console.log('Recibida solicitud para obtener estudiante con código:', codigoEstudiante);
  
      const estudiante = await Estudiante.findOne({ id_estudiante: codigoEstudiante });
  
      if (!estudiante) {
        console.log('Estudiante no encontrado');
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }
  
      console.log('Estudiante encontrado:', estudiante);
      res.json(estudiante);
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });

//Insertar usuario

router.post('/usuarios' , async (req, res) => {
    try{
        const data = await agregarUsuario(req.body);
        res.json([data]);
        console.log("Usuario nuevo ingresado en la BD");
    }catch(error){
        console.error("El usuario no fue ingresado en la BD" , error);
        res.status(404)
    }
})

//Actualizar usuario
router.put('/usuarios/:id' , async (req, res) =>{
    try{
        const data = await actualizarUsuario(req.params.id, req.body);
        res.json(data);
    }catch(error){
        console.error('Error al actualizar el usuario', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

//Eliminar usuario

router.delete('/usuarios/:id' , async (req, res) => {
    try{
        const data = await eliminarUsuario(req.params.id);
        res.json(data);

    }catch(error){
        console.error('Error al borrar el usuario', error);
        res.status(500).json({ message: 'Error interno del servidor' });

    }
});



module.exports = router;