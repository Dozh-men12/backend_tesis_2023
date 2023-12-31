const express = require('express');

const router = express.Router();

const {listarUsuarios , agregarUsuario ,actualizarUsuario,eliminarUsuario ,listarUsuarioporID, autenticarUsuario} = require('../repository/usuarios.repository')

// Listar Usuarios
router.get('/usuarios', async (req, res) => {
    const data = await listarUsuarios();
    res.json(data);
})

//Listar usuario por ID

router.get('/usuarios/:id_estudiante', async (req, res) => {
    try {
        const codigoUsuario = req.params.id_estudiante;

        const usuario = await listarUsuarioporID({id_estudiante: codigoUsuario});

        if (!usuario) {
            console.log('Estudiante no encontrado');
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
      
        console.log('Estudiante encontrado:', usuario);
        res.json(usuario);
    }catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//Insertar usuario
//Para crear un usuario abajo del body dentro de postman debe estar en formato JSON no en TEXT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
router.put('/usuarios/:id_estudiante' , async (req, res) => {
    try {
        const id_estudiante = req.params.id_estudiante;

        // Antes de actualizar, verifica si el usuario existe
        const usuario = await listarUsuarioporID({ id_estudiante });

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const data = await actualizarUsuario(id_estudiante, req.body);
        res.json(data);
    } catch (error) {
        console.error('Error al actualizar el usuario', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

//Eliminar usuario
router.delete('/usuarios/:id_estudiante', async (req, res) => {
    try {
        const id_estudiante = req.params.id_estudiante;

        // Antes de eliminar, verifica si el usuario existe
        const usuario = await listarUsuarioporID({ id_estudiante });

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const data = await eliminarUsuario(id_estudiante);
        res.json(data);
    } catch (error) {
        console.error('Error al eliminar el usuario', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Autenticar usuario
router.post('/usuarios/auth', async (req, res) => {
    try {
        const { id_estudiante, correoInstitucional } = req.body;
        // Verificar si el usuario existe con el id_estudiante y correoInstitucional proporcionados
        const usuario = await autenticarUsuario(id_estudiante, correoInstitucional);
        if (!usuario) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        // Puedes agregar más lógica de autenticación aquí según tus necesidades.
        // Devolver información del usuario autenticado
        res.json({ message: 'Usuario autenticado correctamente', usuario });
    } catch (error) {
        console.error('Error al autenticar el usuario', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


module.exports = router;