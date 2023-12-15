const DiasModel = require('../database/models/dias.models');

//Listar Días
const listarDias = async () => {
    const data =  await DiasModel.find();
    return data;
}

//Listar Días por ID
const listarDiasporID = async (id) => {
    const data =  await DiasModel.findOne(id);
    return data;
}

//Crear días
const crearDias = async (data) => {
    await CamposModel.create(data);
}


module.exports = {
    listarDias,
    crearDias,
    listarDiasporID
};

