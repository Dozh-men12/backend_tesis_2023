const express = require('express');

const router = express.Router();

const {listarUsuarios , agregarUsuario ,actualizarUsuario,eliminarUsuario ,listarUsuarioporID} = require('../repository/usuarios.repository')

// Listar Usuarios
router.get('/usuarios', async (req, res) => {
    const data = await listarUsuarios();
    res.json(data);
})

//Listar usuario por ID

router.get('/usuarios/:id' , async (req, res) => {
    try{
        const usuario = await listarUsuarioporID(req.params.id);
        res.json(usuario);
    }catch(error){
        console.log('Error al obtener el usuario por ID');
        res.status(500).json({ message : 'Error interno del servidor'});
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