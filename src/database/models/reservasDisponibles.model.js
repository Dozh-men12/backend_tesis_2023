const mongoose = require('mongoose');



// TIENES QUE REALIZAR A TRAVES DE REFERENCIAS DE MONGOOSE LOS DATOS DE ID_ALUMNO, ID_DIAS, ID_CAMPO

// En esta coleccion lo que se quiere lograr es que al mostrar todas las reservas disponibles , se muestre que el alumno (nombre) con id (123123) tiene estas reservas
const reservasDisponiblesSchema = new mongoose.Schema({
    estudiante: { type: mongoose.Schema.Types.ObjectId, ref:'usuarios'},
    campo: { type: mongoose.Schema.Types.ObjectId, ref: 'campos'},
    dia: { type: mongoose.Schema.Types.ObjectId, ref: 'dias'},
    hora: { type: mongoose.Schema.Types.ObjectId, ref:'horas'},
});



const reservasDisponiblesModel = mongoose.model('reservas_disponibles',reservasDisponiblesSchema);

module.exports = reservasDisponiblesModel;