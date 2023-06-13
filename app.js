require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3500
const mongoose = require("mongoose")
const cors = require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)
db = mongoose.connection

db.on("error" , (errorMessage) =>console.log(errorMessage))
db.once("open",() => console.log("Connection established"))
app.get('/',(request,response) => {
    response.send("Server running get")
})

const displayProducts = require("./routes/productRoute")
app.use('/api/v1/products',displayProducts)



app.listen(PORT,console.log(`Server running at http://localhost:${PORT}`))