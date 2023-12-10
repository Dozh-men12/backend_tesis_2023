const mongoose = require ('mongoose');


const diasSchema = new mongoose.Schema({
    id: String,
    nombre: String,
});
  
// Define el modelo
const DiasModel = mongoose.model('dias', diasSchema);

module.exports = DiasModel;
