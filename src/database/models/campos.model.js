const mongoose = require ('mongoose');


const camposSchema = new mongoose.Schema({
    id:  Number,
    nombre: String,
   
});
  
// Define el modelo
const campos = mongoose.model('campos', camposSchema);

module.exports = campos;
