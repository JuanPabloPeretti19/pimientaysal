const express= require("express");
const productControllers= require('../controllers/productController')

const router= express.Router();

router.get('/', productControllers.index);
router.get('/detalle/:id', productControllers.detalle)

module.exports= router