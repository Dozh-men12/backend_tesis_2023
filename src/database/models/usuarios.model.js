const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema({
    id: Number,
    id_estudiante: Number,
    nombres : String,
    apellidos: String,
    DNI: Number,
    fecNacimiento: Date,
    sexo : String,
    domicilio: String,
    telfCelular : Number,
    correoInstitucional: String,
    correoPersonal: String,
    especialidad: String,
    condicion: String,
    ciclo: Number,
});

const usuario = mongoose.model('usuarios', usuariosSchema);

module.exports = usuario;