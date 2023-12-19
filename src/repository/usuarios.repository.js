const usuario = require('../database/models/usuarios.model');
const mongoose = require('mongoose');
 
//Listar usuarios
const listarUsuarios = async () =>{
    const data = await usuario.find();
    return data;
}

//Listar usuario por ID
const listarUsuarioporID = async (id_estudiante) =>{
    const data = await usuario.findOne(id_estudiante);
    return data;
}

//Agregar usuarios
const agregarUsuario = async (data) =>{
    await usuario.create(data);
    const todosLosUsuarios = await listarUsuarios();
    return todosLosUsuarios;
}

//Actualizar usuario
const actualizarUsuario = async (id_estudiante, newData) => {
    try {
        // Utiliza el campo id_estudiante al actualizar
        const result = await usuario.findOneAndUpdate(
            { id_estudiante: id_estudiante },
            newData,
            { new: true } // Para devolver el documento actualizado
        );

        // Si deseas obtener todos los usuarios después de la actualización,
        // puedes realizar la operación de listarUsuarios aquí.
        const todosLosUsuarios = await listarUsuarios();
        
        return { result, todosLosUsuarios };
    } catch (error) {
        console.error('Error al actualizar el usuario', error);
        throw error;
    }
};

//Eliminar usuario
const eliminarUsuario = async (id_estudiante) => {
    try {
        // Utiliza el campo id_estudiante para eliminar el usuario
        await usuario.findOneAndDelete({ id_estudiante });

        // Obtén todos los usuarios después de la eliminación
        const todosLosUsuarios = await listarUsuarios();
        return todosLosUsuarios;
    } catch (error) {
        console.error('Error al eliminar el usuario', error);
        throw error;
    }
};

//authentication del usuario
const autenticarUsuario = async (id_estudiante, correoInstitucional) => {
    try {
        // Buscar un usuario con el id_estudiante y correoInstitucional proporcionados
        const Usuario = await usuario.findOne({
            id_estudiante,
            correoInstitucional,
        });

        // Devolver el usuario encontrado o null si no se encuentra
        return Usuario;
    } catch (error) {
        console.error('Error al autenticar el usuario', error);
        throw error;
    }
};


module.exports = {listarUsuarios , agregarUsuario,listarUsuarioporID,actualizarUsuario,eliminarUsuario, autenticarUsuario};