const reservasDisponiblesModel = require ('../database/models/reservasDisponibles.model')
const usuario = require('../database/models/usuarios.model.js')


/* const listarReservasDisponibles = async () =>{
    const data = await reservasDisponiblesModel.find();
    return data;    
} */

const reservasConUsuarios = async () =>{
    try {
        const data = await reservasDisponiblesModel.find().populate('id_estudiante', {
            nombres : 1,
            especialidad : 1 
        });
        return data;
    } catch (error) {
        console.error('Error en reservasConUsuarios:', error);
        throw error; // Propaga el error
    }
}

module.exports = { reservasConUsuarios };