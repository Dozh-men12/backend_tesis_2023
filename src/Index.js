require('./database/database');
const express = require('express') ;


const camposRoutes = require('./controllers/camposController') 
const diasRoutes = require('./controllers/diasController') 
const usuariosRoutes = require ('./controllers/usuariosController')
const reservasDisponiblesRoutes = require ('./controllers/reservasdispoController')
const horasRoutes = require('./controllers/horasController')

const app =  express();
const port = process.env.PORT || 9000;


//middleware

const routes = [camposRoutes , diasRoutes, usuariosRoutes ,reservasDisponiblesRoutes, horasRoutes];

app.use(express.json());
app.use('/api',routes);



//ROUTES
app.get('/', (req,res) => {
    res.send("Welcome to my API");
});

app.listen(port, () => console.log('Servidor funcionando en el puerto:', port ))