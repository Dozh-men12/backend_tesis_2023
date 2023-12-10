require('./database/database')

const express = require('express') ;

const camposRoutes = require('./controllers/camposController') 

const app =  express();
const port = process.env.PORT || 9000;


//middleware

app.use('/api',camposRoutes);


//ROUTES
app.get('/', (req,res) => {
    res.send("Welcome to my API");
});

app.listen(port, () => console.log('Servidor funcionando en el puerto:', port ))