const express = require ('express') ;
const mongoose = require ('mongoose');



const app =  express();
const port =process.env.PORT || 9000;

//routes

app.get('/', (req,res) => {
    res.send("Welcome to my API");
});
    

//Mongo DB connection 

mongoose.connect()
    

app.listen(port, () => console.log('Servidor funcionando en el puerto:', port ))