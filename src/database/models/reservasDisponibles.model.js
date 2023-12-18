const mongoose = require('mongoose');



// TIENES QUE REALIZAR A TRAVES DE REFERENCIAS DE MONGOOSE LOS DATOS DE ID_ALUMNO, ID_DIAS, ID_CAMPO

// En esta coleccion lo que se quiere lograr es que al mostrar todas las reservas disponibles , se muestre que el alumno (nombre) con id (123123) tiene estas reservas
const reservasDisponiblesSchema = new mongoose.Schema({   
    id_estudiante: { type: mongoose.Schema.Types.ObjectId, ref:'usuarios'},
   
    estado: String,
    fecha_inicio: Date,
    fecha_fin: Date,
});


const reservasDisponiblesModel = mongoose.model('reservas_disponibles',reservasDisponiblesSchema);

module.exports = reservasDisponiblesModel;