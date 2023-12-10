const reservasDisponiblesModel = require ('../database/models/reservasDisponibles.model')

const listarReservasDisponibles = async () =>{
    const data = await reservasDisponiblesModel.find();
    return data;    
}

module.exports = {listarReservasDisponibles};