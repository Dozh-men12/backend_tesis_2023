require('./database/database');
const express = require('express') ;


const camposRoutes = require('./controllers/camposController') 
const diasRoutes = require('./controllers/diasController') 

const app =  express();
const port = process.env.PORT || 9000;


//middleware

const routes = [camposRoutes , diasRoutes]

app.use('/api',routes);



//ROUTES
app.get('/', (req,res) => {
    res.send("Welcome to my API");
});

app.listen(port, () => console.log('Servidor funcionando en el puerto:', port ))