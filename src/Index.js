const express = require ('express') ;

const app =  express();

const port =process.env.PORT || 9000;

//routes

app.get('/', (req,res) =>
    res.send('Welcome to my api '))

app.listen(port, () => console.log('Servidor funcionando en el puerto:', port ))