
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


module.exports = {
    listarCampos,
    crearCampo
};

