
const CamposModel = require('../database/models/campos.model');

const listarCampos = async () => {
    const data =  await CamposModel.find();
    return data;
}


const crearCampo = async (data) => {
    await CamposModel.create(data);
    const todosLosCampos = await listarCampos();
    return todosLosCampos;
}

const obtenerCampoPorId = async (campoId) => {
    const campo = await CamposModel.findById(campoId);
    return campo;
}

const actualizarCampo = async (campoId, newData) => {
    await CamposModel.findByIdAndUpdate(campoId, newData);
    const todosLosCampos = await listarCampos();
    return todosLosCampos;
}

const borrarCampo = async (campoId) => {
    await CamposModel.findByIdAndDelete(campoId);
    const todosLosCampos = await listarCampos();
    return todosLosCampos;
}
module.exports = {
    listarCampos,
    crearCampo,
    obtenerCampoPorId,
    actualizarCampo,
    borrarCampo
};

