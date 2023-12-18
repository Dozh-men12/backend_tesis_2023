const dias = require('../database/models/dias.models');

//Listar Días
const listarDias = async () => {
    const data =  await dias.find();
    return data;
}

//Listar Días por ID
const listarDiasporID = async (id) => {
    const data =  await dias.findOne(id);
    return data;
}

//Crear días
const crearDias = async (data) => {
    await campos.create(data);
}


module.exports = {
    listarDias,
    crearDias,
    listarDiasporID
};

