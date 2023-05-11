const mongoose = require("mongoose")

const Product = new mongoose.Schema({
    name: String,
    price: Number,
})

// converts schema into model with name `product`
module.exports = mongoose.model("product", Product);