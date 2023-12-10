const express = require('express');

const router = express.Router();


//Listar campos
router.get('/campos',(req, res) => {
   res.send("listando los campos");
});

module.exports = router;