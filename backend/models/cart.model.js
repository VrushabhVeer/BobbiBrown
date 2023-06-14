const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    image : String,
    name : String,
    tag: String,
    price : Number,
    userID : String,
    quant : Number
}) 

const CartModel = mongoose.model("cart",cartSchema);

module.exports={
    CartModel,
}