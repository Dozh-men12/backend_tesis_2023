const express = require('express');

const router = express.Router();
const {listarDias} = require ('../repository/dias.respository');


//Listar Días

router.get('/dias', async (req, res) => {
    const data = await listarDias();
    res.json(data);
    
});


module.exports = router;