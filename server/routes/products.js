const express = require('express');
const router = express.Router();
const productRouter = require("../controllers/products")

router.get('/', productRouter.getALLProducts);
 

router.get('/:id', productRouter.getProductById);

router.post('/add-product', productRouter.createProduct);

router.put('/:id', productRouter.updateProduct);

router.delete('/:id', productRouter.deleteProduct);

module.exports = router;
