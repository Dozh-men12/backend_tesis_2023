const usuariosModel = require('../database/models/usuarios.model');

const listarUsuarios = async () =>{
    const data = await usuariosModel.find();
    return data;
}

module.exports = {listarUsuarios};