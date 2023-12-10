const mongoose = require ('mongoose');


//Conéctate a MongoDB usando Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/Tecsup_polideportivo_DB')


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});


module.exports = mongoose;





