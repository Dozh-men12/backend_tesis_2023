const mongoose = require ('mongoose');


const horasSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
});
  
// Define el modelo
const horas = mongoose.model('horas', horasSchema);

module.exports = horas;