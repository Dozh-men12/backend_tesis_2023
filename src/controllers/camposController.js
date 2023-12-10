const express = require('express');

const router = express.Router();
const {listarCampos, crearCampo} = require('../repository/campos.repository');

//Listar campos
router.get('/campos', async (req, res) => {
   const data = await listarCampos();
   res.json(data);
});

router.post('/campos', async (req, res) => {       

   try {
      const data = await crearCampo(req.body);
      res.json([data]);
      console.log("Dato nuevo insertado satisfactoriamente");
      } catch (error) {
      console.error("Oh no! Something went wrong" , error);
      res.status(404)
   }

});

module.exports = router;