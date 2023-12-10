const mongoose = require('mongoose');

const reservasDisponiblesSchema = new mongoose.Schema({
    estado: String,
    fecha_inicio: Date,
    fecha_fin: Date,
});

const reservasDisponiblesModel = mongoose.model('reservas_disponibles',reservasDisponiblesSchema);

module.exports = reservasDisponiblesModel;