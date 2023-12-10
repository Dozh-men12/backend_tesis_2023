
const CamposModel = require('../database/models/campos.model');

const listarCampos = async () => {
    const data =  await CamposModel.find();
    return data;
}


const crearCampo = async (data) => {
    await CamposModel.create(data);
}


module.exports = {
    listarCampos,
    crearCampo
};

