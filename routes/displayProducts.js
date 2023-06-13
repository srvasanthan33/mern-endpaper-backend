const express = require("express")

const router = express.Router()

router.get('/' ,(request,response) =>{
    response.json(Data)
})

module.exports = router