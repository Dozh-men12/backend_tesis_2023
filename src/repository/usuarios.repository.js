const usuariosModel = require('../database/models/usuarios.model');

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
const actualizarUsuario = async (usuarioID,newData) =>{
    await usuariosModel.findByIdAndUpdate(usuarioID , newData);
    const todosLosUsuarios = await listarUsuarios();
    return todosLosUsuarios;
}

//Eliminar usuario

const eliminarUsuario = async(usuarioID) =>{
    await usuariosModel.findByIdAndDelete(usuarioID);
    const todosLosUsuarios = await listarUsuarios();
    return todosLosUsuarios;
}

module.exports = {listarUsuarios , agregarUsuario,listarUsuarioporID,actualizarUsuario,eliminarUsuario};