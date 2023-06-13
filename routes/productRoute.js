const express = require("express")

const router = express.Router()
const {getAllProducts,addProduct,addCart,getCartProducts} = require('../controllers/displayProductController')
router.get('/' ,getAllProducts)
.post('/add' ,addProduct)
.post('/addCart',addCart)
.get('/cart',getCartProducts)


module.exports = router