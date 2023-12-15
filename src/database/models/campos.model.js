const mongoose = require ('mongoose');


const camposSchema = new mongoose.Schema({
    id:  Number,
    nombre: String,
});
  
// Define el modelo
const CamposModel = mongoose.model('campos', camposSchema);

module.exports = CamposModel;
