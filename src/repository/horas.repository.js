const horas = require('../database/models/horas.model');

//Listar Horas
const listarHoras = async () => {
    const data =  await horas.find();
    return data;
}

//Listar Horas por ID
const listarHorasporID = async (id) => {
    const data =  await horas.findOne(id);
    return data;
}

//Crear Horas
const crearHoras = async (data) => {
    await campos.create(data);
}


module.exports = {
    listarHoras,
    crearHoras,
    listarHorasporID
};

