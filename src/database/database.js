const express = require ('express') ;
const mongoose = require ('mongoose');


//Conéctate a MongoDB usando Mongoose
mongoose.connect('mongodb://localhost:27017/Tecsup_polideportivo_DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});


const app =  express();
const port = process.env.PORT || 9000;

//ROUTES
app.get('/', (req,res) => {
    res.send("Welcome to my API");
});

app.listen(port, () => console.log('Servidor funcionando en el puerto:', port ))




/* // Importa las bibliotecas necesarias
const express = require('express');
const mongoose = require('mongoose');

// Configura la aplicación Express
const app = express();

// Configura el puerto
const PORT = process.env.PORT || 3000;

// Conéctate a MongoDB usando Mongoose
mongoose.connect('mongodb://localhost:27017/nombre-de-tu-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Maneja la conexión a MongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

// Rutas de tu aplicación
app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
}); */
