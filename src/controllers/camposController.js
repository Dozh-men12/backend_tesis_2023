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
      await crearCampo(req.body)
      res.status(200)
   } catch (error) {
      console.error(error)
      res.status(404)
   }

});

module.exports = router;