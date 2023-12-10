const DiasModel = require('../database/models/dias.models');

const listarDias = async () => {
    const data =  await DiasModel.find();
    return data;
}


const crearDias = async (data) => {
    await CamposModel.create(data);
}


module.exports = {
    listarDias,
    crearDias
};

