const usuariosModel = require('../database/models/usuarios.model');
const mongoose = require('mongoose');

//Listar usuarios
const listarUsuarios = async () =>{
    const data = await usuariosModel.find();
    return data;
}

//Listar usuario por ID
const listarUsuarioporID = async (id_estudiante) =>{
    const data = await usuariosModel.findOne(id_estudiante);
    return data;
}

//Agregar usuarios
const agregarUsuario = async (data) =>{
    await usuariosModel.create(data);
    const todosLosUsuarios = await listarUsuarios();
    return todosLosUsuarios;
}

//Actualizar usuario
const actualizarUsuario = async (id_estudiante, newData) => {
    try {
        // Utiliza el campo id_estudiante al actualizar
        const result = await usuariosModel.findOneAndUpdate(
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

const eliminarUsuario = async(usuarioID) =>{
    await usuariosModel.findByIdAndDelete(usuarioID);
    const todosLosUsuarios = await listarUsuarios();
    return todosLosUsuarios;
}

module.exports = {listarUsuarios , agregarUsuario,listarUsuarioporID,actualizarUsuario,eliminarUsuario};