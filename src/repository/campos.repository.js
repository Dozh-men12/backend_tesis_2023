
const campos = require('../database/models/campos.model');

//Listar Campo
const listarCampos = async () => {
    const data =  await campos.find();
    return data;
}

// Crear campo
const crearCampo = async (data) => {
    await campos.create(data);
    const todosLosCampos = await listarCampos();
    return todosLosCampos;
}

//Listar Campo por ID
const obtenerCampoPorId = async (id) => {
    const campo = await campos.findOne(id);
    return campo;
}

//Actualizar campo
const actualizarCampo = async (id, newData) => {
    try{
        const result = await campos.findOneAndUpdate(
            {id: id},
            newData,
            {new: true}
        );

        const todosLosCampos = await listarCampos();
        return {result, todosLosCampos};
    }catch(error){
        console.error('Error al actualizar el campo', error);
        throw error;

    }
    /* await campos.findOneAndUpdate(id, newData);
    const todosLosCampos = await listarCampos();
    return todosLosCampos; */
}

//Elimar campo
const borrarCampo = async (id) => {
    await campos.findOneAndDelete(id);
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

