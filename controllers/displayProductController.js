
const productModel = require("../models/productsModel")
const cartModel = require("../models/cartModel")
const productsModel = require("../models/productsModel")

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
        // const productToBeAdded = await productModel.findOne({_id:fetched_id})
        const productToBeAdded = await productModel.findById(fetched_id)

        

        try {
            const totalPrice = productToBeAdded.price * productToBeAdded.quantity
            const cartProduct = new cartModel({
                name:productToBeAdded.name,
                price:productToBeAdded.price,
                quantity:1,
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
        response.status(500).json({message:error.message}).redirect("http://www.google.com")
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

