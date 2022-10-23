const express= require("express");
const mainControllers= require('../controllers/mainController')

const router= express.Router();

router.get('/', mainControllers.index);
router.get('/detalle/:id', mainControllers.detalle)
router.get('/detalle/', mainControllers.index)
module.exports= router