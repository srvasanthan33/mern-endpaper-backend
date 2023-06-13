
const productModel = require("../models/productsModel")
const cartModel = require("../models/cartModel")

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

const addCart = async(request,response) => {
    let fetched_id = request.body.id
    try {
        const productToBeAdded = await productModel.findOne({_id:fetched_id})
        console.log(productToBeAdded)

        try {
            const totalPrice = request.body.price * request.body.quantity
            const cartProduct = new CartModel({
                name:cartProduct.name,
                price:cartProduct.price,
                quantity:cartProduct.quantity,
                total:totalPrice
            })

            const newCartProduct = await cartProduct.save()
            response.status(200).json(newCartProduct)
        }
        catch(error)
        {
            response.status(500).json({message:error.message})
        }
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}



const getCartProducts = async(request,response) =>{
    try{
        const cartProducts = await cartModel.find()
        response.status(201).json(cartProducts)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getAllProducts,addProduct,addCart,getCartProducts}

