const usuariosModel = require('../database/models/usuarios.model');

const listarUsuarios = async () =>{
    const data = await usuariosModel.find();
    return data;
}

const agregarUsuarios = async () =>{
    const data = await usuariosModel.create();
    return data;
}

module.exports = {listarUsuarios , agregarUsuarios};