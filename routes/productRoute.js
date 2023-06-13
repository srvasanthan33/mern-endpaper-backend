const express = require("express")

const router = express.Router()
const {getAllProducts,addProduct} = require('../controllers/displayProductController')
router.get('/' ,getAllProducts)
.post('/add' ,addProduct)


module.exports = router