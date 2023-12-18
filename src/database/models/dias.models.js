const mongoose = require ('mongoose');


const diasSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
});
  
// Define el modelo
const dias = mongoose.model('dias', diasSchema);

module.exports = dias;
