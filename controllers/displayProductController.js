
const productModel = require("../models/productsModel")
const getAllProducts = async(request,response) =>{
    try{
        const products = await productModel.find()
        response.status(201).json(products)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const addProduct = async(request,response) => {
    
    const product = new productModel({
        name:request.body.name,
        price:request.body.price,
        quantity:request.body.quantity
    })

    try{
        const newProduct = await product.save()
        response.status(201).json(newProduct)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }

    
}

module.exports = {getAllProducts,addProduct}

