const mongoose = require('mongoose');


// TIENES QUE REALIZAR A TRAVES DE REFERENCIAS DE MONGOOSE LOS DATOS DE ID_ALUMNO, ID_DIAS, ID_CAMPO
const reservasDisponiblesSchema = new mongoose.Schema({
    id_estudiante :  [{ type: mongoose.Schema.Types.ObjectId, ref: 'usuarios'}],
    estado: String,
    fecha_inicio: Date,
    fecha_fin: Date,
});

const reservasDisponiblesModel = mongoose.model('reservas_disponibles',reservasDisponiblesSchema);

module.exports = reservasDisponiblesModel;